<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProductTransfer;
use App\Models\ShowroomCredit;
use App\Models\ShowroomManager;
use Illuminate\Support\Facades\Session;
use App\Models\ShowroomSale ;
use App\Models\ShowroomSaleItem ;
use App\Models\ShowroomProduct ;
use Carbon\Carbon;

class DashboardController extends Controller
{

      public function  dashboardData(){

              $showroom_id = session()->get('manager')['showroom_id'];
              $products=array();
              $products['product_total']=ShowroomProduct::where('showroom_id',$showroom_id)->sum('stock') ;
              $products['product_stock_qty']=ShowroomProduct::where('showroom_id',$showroom_id)->where('stock','>',0)->sum('stock') ;
              $products['pending_transaction']=ProductTransfer::where('showroom_id',$showroom_id)->where('status',0)->count() ;

              $s_products=ShowroomProduct::where('showroom_id',$showroom_id)->where('stock','>',0)->get();
              $total_s_amount=0;
              foreach ($s_products as  $porduct) {
                    $total_s_amount += $porduct->stock * $porduct->sale_price ;
              }
              $products['product_stock_amount']=$total_s_amount;
              //sale analysis
              $sales=array();
              $sales['total_sales']=ShowroomSale::where('showroom_id',$showroom_id)->count();
              $sales['retail_sales']=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',1)->count();
              $sales['whole_sales']=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',2)->count();
              //today sale counter
              $sales['today_sales']=ShowroomSale::where('showroom_id',$showroom_id)->where('created_at', '>=', Carbon::today()->startOfDay())
                                            ->where('created_at', '<=', Carbon::today()->endOfDay())->count();
              //yesterday sales
              $sales['yesterday_sales']=ShowroomSale::where('showroom_id',$showroom_id)->where('created_at', '>=', Carbon::yesterday()->startOfDay())
                                            ->where('created_at', '<=', Carbon::yesterday()->endOfDay())->count();

              $balance=ShowroomCredit::Balance();

              return response()->json([
                     "status" => "OK",
                     'products' => $products ,
                     'sales' => $sales ,
                     'balance' => $balance ,
              ]);

      }

}
