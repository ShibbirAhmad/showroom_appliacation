<?php

namespace App\Http\Controllers\Manager;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\ProductTransfer;
use App\Models\ProductTransferItem;
use App\Models\ShowroomProduct;


class TransactionController extends Controller
{


    public function productTransactions(){
           $transactions = ProductTransfer::orderBy('id','desc')->where('showroom_id',session()->get('manager')['showroom_id'])->with('transaction_items')->paginate(20);
           return response()->json([
               'status' => 'OK',
               'transactions' => $transactions ,
           ]);
    }


   public function transactionDetails($id){

           $transaction = ProductTransfer::with('showroom')->findOrFail($id);
           $transaction_items=ProductTransferItem::where('product_transfer_id',$transaction->id)->with('product.productImage')->get();
           return response()->json([
               'status' => 'OK',
               'transaction' => $transaction,
               'transaction_items' => $transaction_items,
           ]);
    }



   public function approvedTransaction($transfer_id){
        DB::transaction(function ()  use($transfer_id) {
           $transaction = ProductTransfer::with('showroom')->findOrFail($transfer_id);
           $transaction->status=1 ;
           $transaction->save();
           //collecting products to add into showroom_products
           $transaction_items=ProductTransferItem::where('product_transfer_id',$transaction->id)->with('product.productImage')->get();
           foreach ($transaction_items as $item) {
               $isExistProduct=ShowroomProduct::where('showroom_id',$transaction->showroom->id)->where('product_id',$item->product_id)->first();
               if ($isExistProduct) {
                  //if stock has more than 0 then current purcahse will be those average purchase price ??
                  $number_of_p=ProductTransferItem::where('product_id',$isExistProduct->product_id)->count();
                  $total_p_price=ProductTransferItem::where('product_id',$isExistProduct->product_id)->sum('purchase_price');
                  $avarage_p_price=$total_p_price / $number_of_p ;
                  $isExistProduct->purchase_price=$avarage_p_price ;
                  $isExistProduct->sale_price=$item->sale_price ;
                  $isExistProduct->stock=$isExistProduct->stock + $item->quantity ;
                  $isExistProduct->save();
               } else {
                  $s_product=new ShowroomProduct();
                  $s_product->showroom_id=$transaction->showroom->id;
                  $s_product->product_id=$item->product_id;
                  $s_product->stock=$item->quantity;
                  $s_product->purchase_price=$item->purchase_price;
                  $s_product->sale_price=$item->sale_price;
                  $s_product->save();
               }
           }
        });
           return response()->json([
               'status' => 'OK',
               'message' => "Transaction has been approved",
           ]);
    }


}
