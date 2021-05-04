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
use DB;
use Illuminate\Validation\Rule;
use Picqer;
use Barryvdh\DomPDF\Facade as PDF;
use App\Models\Order;
use App\Models\ShowroomProduct;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        $paginate = $request->item ?? 20;
        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom_products_id=ShowroomProduct::where('showroom_id',$showroom_id)->select('product_id')->get();
        $products = Product::whereIn('id',$showroom_products_id)->orderBy('id', 'DESC')->with(['productImage', 'productBarcode'])->paginate($paginate);
        return response()->json([
            'status' => 'SUCCESS',
            'products' => $products
        ]);
    }



    public function search_products($search)
    {
        $showroom_id=session()->get('manager')['showroom_id'];
        $showroom_products_id=ShowroomProduct::where('showroom_id',$showroom_id)->select('product_id')->get();
        $products = Product::whereIn('id',$showroom_products_id)->Where('product_code',$search)->with(['productImage', 'productBarcode'])->paginate(20);
            return response()->json([
                'status' => 'SUCCESS',
                'products' => $products
            ]);

    }





}
