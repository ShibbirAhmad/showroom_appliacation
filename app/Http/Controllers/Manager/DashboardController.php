<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProductTransfer;
use App\Models\ShowroomCredit;
use App\Models\ShowroomManager;
use App\Models\ShowroomSale ;
use App\Models\ShowroomSaleItem ;
use App\Models\ShowroomProduct ;
use Carbon\Carbon;

class DashboardController extends Controller
{

      public function  dashboardData(){

              $showroom_id = session()->get('manager')['showroom_id'];
              $products=array();
              $products['product_total']=ShowroomProduct::where('showroom_id',$showroom_id)->count() ;
              $products['product_stock_qty']=ShowroomProduct::where('showroom_id',$showroom_id)->where('stock','>',0)->sum('stock') ;
              $products['product_stock_amount']=ShowroomProduct::where('showroom_id',$showroom_id)->where('stock','>',0)->sum('purchase_price') * $products['product_stock_qty'] ;
              $products['pending_transaction']=ProductTransfer::where('showroom_id',$showroom_id)->where('status',0)->count() ;

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
