<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ShowroomManager;
use Illuminate\Support\Facades\Auth ;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash ;
use Illuminate\support\Facades\session;


class LoginController extends Controller
{

    //function for login manager
    public  function check_login(Request $request){

           $validateData = $request->validate([
                    'email' => 'required' ,
                    'password' => 'required' ,
           ]);

           $credential = [ 'email' => $request->email , 'password' => $request->password] ;

           if (Auth::guard('manager')->attempt($credential)) {
               Session::put('manager', Auth::guard('manager')->user() );
               return response()->json([
                   'status' => 'SUCCESS',
                   'manager'   => Auth::guard('manager')->user(),
                   'manager_token'  => Hash::make($request->password),
                   'message' => 'Login successfully ',
               ]);
           }else{

              return response()->json([
                  'status' => 'Fail',
                  'message' => 'Sorry :) in-valid login information'
              ]);
           }
    }


    public function manager_password_update(Request $request){

        $validatedData = $request->validate([
            'old_password' => 'required ',
            'new_password' => 'required',
        ]);

        $manager= session()->get('manager');
        $manager_current_password=$manager->password;

        if (Hash::check($request->old_password,$manager_current_password)) {
            if($request->new_password==$request->old_password){
                return response()->json([
                    "message" => "current password and new password can't be same ",
                ]);
            }else{
                $manager->password=Hash::make($request->new_password);
                    if ($manager->save()) {
                        return response()->json([ "success" => "OK", "message" => "password changed successfully" ]);
                    }
            }
         }else{
             return response()->json([
                "message" => "current password is incorrect! ",
              ]);
         }

    }


    public function manager(){

         $manager= Session()->get('manager');

         return response()->json([
             "success" => "OK",
             "manager" => $manager ,
         ]);

    }


    public function check_session(){

          if (Session::has('manager')) {

                return response()->json([
                    "session" => "running",
                    "manager" => session()->get('manager') ,
                ]);

          } else {
                return response()->json([
                    "session" => "expired",
                ]);
          }

    }



    public  function logout(){

          Auth::guard('manager')->logout();
          session()->forget('manager');
          return response()->json([
            'status' => 'OK',
            'message' => 'Logout successfully'
        ]);
    }


    public function send_reset_code(Request $request){

        $validatedData = $request->validate([
            'phone' => 'required|digits:11',
            ]);

          $manager=ShowroomManager::where('phone',$request->phone)->first();
        if(empty($manager)){
            return response()->json([
                'status'=>"ERROR",
                'message'=>"The mobile number does not match our records"
            ]);
       }else{
            $code=rand(0000,9999);
            DB::table('password_resets')->insert([
                'mobile_no'=>$request->phone,
                'token'=>Hash::make($code)
            ]);
            ShowroomManager::SendmanagerPasswordResetCode($request->phone,$code);

            return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Sent verification code on your mobile"
            ]);
          }
        }




        public function manager_reset_code_verified(Request $request, $phone){


            $phone=DB::table('password_resets')->where('mobile_no',$phone)->orderBy('id','DESC')->first();
            if(!empty($phone)){
               if (Hash::check($request->code, $phone->token)) {
                  return response()->json([
                       'status'=>"SUCCESS",
                       'message'=>"Code Match"
                   ]);
               }else{
                    return response()->json([
                       'status'=>"ERROR",
                       'message'=>"Code Matching Error"
                   ]);
               }
            }else{
                 return response()->json([
                       'status'=>"ERROR",
                       'message'=>"Code Matching Error"
                    ]);
              }

           }




    public function manager_set_new_password(Request $request,$phone){

        $manager=ShowroomManager::where('phone',$phone)->first();
        if(!empty($manager)){
            $manager->password=Hash::make($request->password);
            if($manager->save()){
                return response()->json([
                    'status'=>"SUCCESS",
                    'message'=>"Passwrod update successfully"
                ]);
            }else{
                 return response()->json([
                    'status'=>"ERROR",
                    'message'=>"Error establish"
                ]);
            }
        }
        else{
            return response()->json([
                'status'=>"ERROR",
                'message'=>"Error estblish"
            ]);
        }

    }




}
