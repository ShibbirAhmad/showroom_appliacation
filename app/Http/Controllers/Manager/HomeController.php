<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\session;
use App\Models\ShowroomManager;
use App\Models\OrderItem ;
use App\Models\Product ;
use App\Models\Order ;
use Carbon\Carbon;

class HomeController extends Controller
{

      public  function index(){

           return view ('manager.index');
      }




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



      public function  get_dashboard_highlight_info(){

              $manager_id = session()->get('manager')['id'];
              $products=array();
              $products['product_total']=Product::where('manager_id',$manager_id)->count() ;
              $products['product_approved']=Product::where('manager_id',$manager_id)->where('status',1)->count() ;
              $products['product_pending']=Product::where('manager_id',$manager_id)->where('status',2)->count() ;

              $orders=array();
              $product_id=Product::where('manager_id',session()->get('manager')['id'])->select('id')->pluck('id');
              $order_id=OrderItem::whereIn('product_id',$product_id)->select('order_id')->pluck('order_id');
              //total order items counter
              $orders['total_order_items']=$order_id->count();
              $order = Order::whereIn('id',$order_id)->with(['customer'])->get();
              //total order counter
              $orders['total_order']=$order->count();
              //today order counter
              $orders['today_order']=$order->where('created_at', '>=', Carbon::today()->startOfDay())
                                            ->where('created_at', '<=', Carbon::today()->endOfDay())->count();
              //cancel order counter
              $orders['cancel_order']=$order->where('status',6)->count();
              $orders['total_delivered_order']=$order->where('status',5)->count();



              return response()->json([
                     "status" => "OK",
                     'products' => $products ,
                     'orders' => $orders ,
              ]);

      }



}
