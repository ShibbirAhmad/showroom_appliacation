<?php

//route for manager login and registration and authorizatoin
Route::post('api/manager/login','Manager\LoginController@check_login') ;
Route::get('api/manager/login/session/check','Manager\LoginController@check_session') ;
Route::post('api/manager/register','Manager\LoginController@register_manager')->name('manager.register');

Route::post('api/manager/password/reset/send/code','Manager\LoginController@send_reset_code');
Route::post('api/manager/verify/reset/code/{phone}','Manager\LoginController@manager_reset_code_verified');
Route::post('api/manager/new/password/set/{phone}','Manager\LoginController@manager_set_new_password');


Route::group([
             'middleware' => 'manager',
             'namespace' => 'Manager'
            ],function(){

        Route::get('api/product/transaction/list','TransactionController@productTransactions');
        Route::get('api/get/product/transaction/details/{id}','TransactionController@transactionDetails');
        Route::get('api/approved/product/transaction/{transfer_id}','TransactionController@approvedTransaction');
;
         //route for search product
        Route::get('api/showroom/products','ProductController@index');
        Route::get('api/search/showroom/product/{search}','ProductController@search_products');
        Route::get('api/search/product/with/{code}','ProductController@searchWithCode');

        // route for dashboard data
         Route::get('api/get/manager/dashboard/data','HomeController@get_dashboard_highlight_info');
        //start the others  route . to load other data of products
        Route::get('api/product/others', 'OthersController@others');

       //depended route
        Route::get('api/category/wise/subCategory/{id}', 'CategoryController@categoryWiseSubCategory');
        Route::get('api/subCategory/wise/subSubCategory/{id}', 'SubCategoryController@subCategoryWiseSubCategory');
        Route::get('api/attribute/wise/variant/{id}', 'AttributeAndVariantController@attributeWiseVariant');

        //route for manager order
        Route::get('api/search/customer/{mobile_no}','SaleController@searchCustomer');
        Route::post('api/showroom/sale/add','SaleController@storeSale');
        Route::get('api/showroom/sales/list','SaleController@sales');
        Route::get('api/sale/details/{id}','SaleController@saleDetails');
        Route::get('api/manager/order/view/{id}','SaleController@manager_order_details');

        Route::get('api/manager/logout','LoginController@logout') ;
        //manager profile route
        Route::get('api/get/manager','HomeController@get_manager') ;
        Route::post('api/manager/info/update','HomeController@manager_update') ;
        Route::post('api/manager/password/update','LoginController@manager_password_update') ;

});


Route::get('/{any}', function () {

    return view('manager.app');

})->where('any', '^(?!api\/)[\/\w\.\,-]*');















?>