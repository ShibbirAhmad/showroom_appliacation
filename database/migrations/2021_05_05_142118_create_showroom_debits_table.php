<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShowroomDebitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('showroom_debits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('showroom_id');
            $table->date('date');
            $table->string('purpose');
            $table->integer('amount');
            $table->string('debit_from');
            $table->string('comment')->nullable();
            $table->integer('insert_manager_id');
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
        Schema::dropIfExists('showroom_debits');
    }
}
