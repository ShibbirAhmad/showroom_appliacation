<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\GeneralSetting;
use Illuminate\Support\Facades\session;
use App\Models\ShowroomManager;
use App\Models\ShowroomSale ;
use App\Models\ShowroomSaleItem ;
use Carbon\Carbon;
use App\Models\Product ;
use App\Models\Order ;


class HomeController extends Controller
{


      public function  get_manager(){

            if (session::has('manager')) {
                 $manager = session()->get('manager') ;
                 return response()->json([
                       'status' => 'OK',
                       'manager' => $manager ,
                 ]);
            }
      }


      public function  manager_update(Request $request){

            $validatedData = $request->validate([
                  'name'  => 'required',
                  'email'  => 'required|unique:showroom_managers,email,'.session()->get('manager')['id'],
                  'phone'  => 'required|digits:11,unique:showroom_managers,phone,'.session()->get('manager')['id'],
                  'address'  => 'required',
              ]);

               $manager= session()->get('manager');
               $manager->name=$request->name ;
               $manager->phone=$request->phone ;
               $manager->email=$request->email ;
               $manager->address=$request->address ;
               if ($request->hasFile('image')) {
                   $file_path=$request->file('image')->store('images/manager','public');
                   $manager->image=$file_path ;
               }

               if ($manager->save()) {
                   return response()->json([
                       'success' => 'OK',
                        'message' => 'Information updated successfully '
                   ]);
               }

      }


      public  function generalSetting()
      {
            $general_settig=GeneralSetting::latest()->first();
            return response()->json([
                  'general_setting' => $general_settig
            ]);
      }


}
