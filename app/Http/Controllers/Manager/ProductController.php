<?php

namespace App\Http\Controllers\Manager;

use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductBarcode;
use App\Models\ProductImage;
use App\Models\ProductVariant;
use App\Models\Variant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Purchaseitem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Picqer;
use Barryvdh\DomPDF\Facade as PDF;
use App\Models\Order;
use App\Models\ReturnShowroomProduct;
use App\Models\ShowroomProduct;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        $paginate = $request->item ?? 20;
        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom_products_id=ShowroomProduct::where('showroom_id',$showroom_id)->select('product_id')->get();
        $products = Product::join('showroom_products','products.id','=','showroom_products.product_id')
        ->whereIn('products.id',$showroom_products_id)
        ->select('products.*','showroom_products.purchase_price as s_purchase_price','showroom_products.sale_price as s_sale_price','showroom_products.stock as s_stock')
        ->with(['productImage','productBarcode'])
        ->paginate($paginate);
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }



    public function search_products($search)
    {
        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom_products_id=ShowroomProduct::where('showroom_id',$showroom_id)->select('product_id')->get();
        $products = Product::join('showroom_products','products.id','=','showroom_products.product_id')
        ->whereIn('products.id',$showroom_products_id)
        ->where('products.name', 'like', '%'.$search.'%')
        ->orWhere('products.product_code','like','%'.$search.'%')
        ->select('products.*','showroom_products.purchase_price as s_purchase_price','showroom_products.sale_price as s_sale_price','showroom_products.stock as s_stock')
        ->with(['productImage','productBarcode'])
        ->paginate(20);
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);

    }


    public function searchWithCode($code){

        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom_products_id=ShowroomProduct::where('showroom_id',$showroom_id)->select('product_id')->get();
        $product = Product::join('showroom_products','products.id','=','showroom_products.product_id')
        ->whereIn('products.id',$showroom_products_id)
        ->where('products.product_code',$code)
        ->select('products.*','showroom_products.sale_price as s_sale_price','showroom_products.stock as s_stock')
        ->first();

        if (!empty($product)) {

            $product_attributes=ProductAttribute::where('product_id',$product->id)->with('attribute')->get();
            $product_variants=ProductVariant::where('product_id',$product->id)->with('variant')->get();
            $data[] = array_merge($product->toArray(),['attributes' => $product_attributes, 'variants' =>$product_variants]);

            return response()->json([
                'status'=>'SUCCESS',
                'product'=>$data
                ]);
        }


    }



      public function putBackProduct($id,$put_back_item){

             $product=ShowroomProduct::where('product_id',$id)->first();
             $r_pending_qty=ReturnShowroomProduct::where('product_id',$id)->where('status',0)->sum('quantity');

             if ($r_pending_qty > 0) {
                 return response()->json([
                     'status' => 'previous_pending',
                     'message' => "you cant't pick back now. Because, previous pick back is pending",
                 ]);
             }else{
                 $retun_s_p = new ReturnShowroomProduct();
                 $retun_s_p->showroom_id= session()->get('manager')['showroom_id'];
                 $retun_s_p->product_id= $product->id;
                 $retun_s_p->quantity= $put_back_item;
                 $retun_s_p->status = 0 ;
                 $retun_s_p->save();
                 return response()->json([
                      'status' => 'OK',
                      'message' => 'successfully, pick backed. wait until approved '
                  ]);
             }



      }




}
