<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShowroomSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('showroom_sales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('showroom_id');
            $table->integer('sale_type');
            $table->integer('invoice_no');
            $table->string('customer_name');
            $table->string('customer_phone');
            $table->string('customer_address');
            $table->integer('paid');
            $table->string('paid_by');
            $table->integer('discount');
            $table->integer('total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('showroom_sales');
    }
}
