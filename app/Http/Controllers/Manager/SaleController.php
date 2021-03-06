<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Models\Customer;
use App\Models\ShowroomCustomerDue;
use App\Models\Showroom;
use App\Models\ShowroomSale;
use App\Models\ShowroomSaleItem;
use App\Models\ShowroomProduct;
use App\Models\ShowroomCredit;
use App\Models\ShowroomDebit;
use App\Models\GeneralSetting;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade as PDF;



class SaleController extends Controller
{
      public  function searchCustomer($mobile_no){

             $customer=Customer::where('phone',$mobile_no)->first();
             if ($customer) {
                 return response()->json([
                 'status' => 'OK',
                 'message' => 'welcome',
                 'customer' => $customer,
                 ]);
             }else{
                return response()->json([
                  'message' => 'new customer',
                 ]);
             }
      }


    public function sales(Request $request ){
           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];
           $sales=ShowroomSale::where('showroom_id',$showroom_id)->orderBy('id','desc')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);
    }



    public function retailSales(Request $request ){
           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];
           $sales=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',1)->orderBy('id','desc')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);
    }


    public function wholeSales(Request $request ){
           $item=$request->item?? 20;
           $showroom_id=session()->get('manager')['showroom_id'];
           $sales=ShowroomSale::where('showroom_id',$showroom_id)->where('sale_type',2)->orderBy('id','desc')->paginate($item);
            return response()->json([
                'status' => 'SUCCESS',
                'sales' => $sales
            ]);
    }


    public function saleDetails($id){

           $showroom_id=session()->get('manager')['showroom_id'];
           $sale=ShowroomSale::where('showroom_id',$showroom_id)->where('id',$id)->first();
           $sale_items=ShowroomSaleItem::where('showroom_sale_id',$sale->id)->with('product.productImage','variant')->get();
           $showroom=Showroom::where('id',$showroom_id)->first();
           return response()->json([
                'status' => 'SUCCESS',
                'sale' => $sale,
                'sale_items' => $sale_items,
                'showroom' => $showroom,
            ]);


    }


    public function storeSale(Request $request)
    {
         //  return $request->all();
        $validatedData = $request->validate([
                'customer_name' => 'required',
                'customer_phone' => 'required',
                'total' => 'required',
                'paid_by' => 'required',
                'sale_type' => 'required',
            ]);
        DB::transaction(function() use($request) {

            $showroom_id=session()->get('manager')['showroom_id'];
            $showroom=Showroom::findOrFail($showroom_id);
            $max_id=showroomSale::max('id') ?? 0  ;
            $invoice_no=$max_id + 433 ;

            //firstly check customer and if not exist then save customr data
            $customer=Customer::where('phone',$request->customer_phone)->first();
            if($customer){
                $customer->name=$request->customer_name ;
                $customer->address=$request->customer_address ?? null ;
                $customer->save();
            }else{
                $customer=new Customer();
                $customer->name=$request->customer_name;
                $customer->phone=$request->customer_phone;
                $customer->address=$request->customer_address ?? 'Dhaka';
                $customer->city_id= 2;
                $customer->customer_type= 1;
                $customer->save();
            }
            //inserting sale
            $sale=new ShowroomSale();
            $sale->showroom_id=$showroom_id;
            $sale->sale_type=$request->sale_type;
            $sale->invoice_no=$invoice_no;
            $sale->customer_name=$request->customer_name ;
            $sale->customer_phone=$request->customer_phone ;
            $sale->customer_address=$request->customer_address ?? null ;
            $sale->paid=$request->paid ?? 0;
            $sale->paid_by=$request->paid_by;
            $sale->discount=$request->discount ;
            $sale->discount_type=$request->discount_type ;
            $sale->due_amount=$request->due ?? 0 ;
            $sale->total=$request->total ;
            $sale->save();
            ShowroomSale::sendMessageToCustomer($showroom->name,$customer,$sale);
            //save the sale item
           foreach ($request->products as $item) {
            //manage product stock
            $product = ShowroomProduct::where('product_id', $item['id'])->first();
            $product->stock = $product->stock - $item['quantity'];
            $product->save();
            //save sale items
            $sale_item = new ShowroomSaleItem();
            $sale_item->showroom_sale_id = $sale->id;
            $sale_item->product_id = $item['id'];
            $sale_item->attribute_id = $item['attribute_id'] ?? null;
            $sale_item->variant_id = $item['variant_id'] ?? null ;
            $sale_item->price = $item['price'];
            $sale_item->quantity = $item['quantity'];
            $sale_item->total=$item['price'] * $item['quantity'];
            $sale_item->save();

         }

            //if customer not paid total amount,then create a customer dues
             if($sale->paid < $sale->total ){
                $due= new ShowroomCustomerDue();
                $due->showroom_id=$showroom_id;
                $due->showroom_sale_id= $sale->id;
                $due->amount=$sale->due_amount;
                $due->save();
            }

            //create a credit.......
           if ($sale->paid > 0) {
                $credit = new ShowroomCredit();
                $credit->showroom_id = $showroom_id;
                $credit->purpose = "showroom sale";
                $credit->amount = $sale->paid;
                $credit->credit_in=$sale->paid_by;
                $credit->comment ='sale invoice no. s-'.$sale->id;
                $credit->date = date('Y-m-d');
                $credit->insert_manager_id=session()->get('manager')['id'];
                $credit->save();
           }


    });

        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'new sale  added'
        ]);

    }


    public function invoicePrint($id){
        $showroom_id=session()->get('manager')['showroom_id'];
        $sale=ShowroomSale::where('showroom_id',$showroom_id)->where('id',$id)->first();
        $sale_items=ShowroomSaleItem::where('showroom_sale_id',$sale->id)->with('product.productImage','variant')->get();
        $showroom=Showroom::where('id',$showroom_id)->first();
      return view('manager.pdf.print.invoicePrint', compact(['sale','sale_items','showroom'] ));
    }




    public function invoicePrintSmall($id){
        $showroom_id=session()->get('manager')['showroom_id'];
        $sale=ShowroomSale::where('showroom_id',$showroom_id)->where('id',$id)->first();
        $sale_items=ShowroomSaleItem::where('showroom_sale_id',$sale->id)->with('product.productImage','variant')->get();
        $showroom=Showroom::where('id',$showroom_id)->first();
      return view('manager.pdf.print.smallPrint', compact(['sale','sale_items','showroom'] ));
    }








}
