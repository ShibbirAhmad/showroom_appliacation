<template>

<div>
  <navbar> </navbar>

   <div class="content-wrapper">
       <section class="content-header">
        <h1>Summary overview</h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i> Home</a>
          </li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
        <section class="content">
          <!-- Small boxes (Stat box) -->
          <div  class="row">
            <!-- ./col delivered -->
            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ sales.today_sales }} </h3>
                  <p> Today Sales</p>
                </div>
                <router-link :to="{name:'showroom_sale'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

             <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ sales.yesterday_sales }} </h3>
                  <p> Yesteday Sales</p>
                </div>
                <router-link :to="{name:'showroom_sale'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

              <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ sales.retail_sales }} </h3>
                  <p> Retail Sales</p>
                </div>
                <router-link :to="{name:'showroom_sale'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

              <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ sales.whole_sales }} </h3>
                  <p> Whole Sales</p>
                </div>
                <router-link :to="{name:'showroom_sale'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ sales.total_sales }} </h3>
                  <p> Total Sales</p>
                </div>
                <router-link :to="{name:'showroom_sale'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>


             <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ products.product_total}} </h3>
                  <p>Total products</p>
                </div>
                <router-link :to="{name:'showroom_product'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

             <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> {{ products.pending_transaction}} </h3>
                  <p>Pending Transaction </p>
                </div>
                <router-link :to="{name:'product_transaction'}" class="small-box-footer" > More info <i class="fa fa-arrow-circle-right"></i> </router-link>
              </div>
            </div>

          </div>

           <div class="row">
          <h1 style="margin-left: 15px" >Accounts Analysis </h1>

          <div class="col-lg-4">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_credit_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{ parseInt(balance.today_credit_bkash_personal) }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{ parseInt(balance.today_credit_bkash_merchant) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_credit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_credit) }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">today credit</h3>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash: <strong>{{ parseInt(balance.today_debitt_cash) }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{ parseInt(balance.today_debit_bkash_personal) }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{ parseInt(balance.today_debit_bkash_merchant) }}</strong>
                </h4>
                <h4>
                  In Bank: <strong>{{ parseInt(balance.today_debit_bank) }}</strong>
                </h4>

                <h4>
                  Total: <strong>{{ parseInt(balance.today_debit) }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">today debit</h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="custom-box">
              <div class="custom-box-body">
                <h4>
                  In Cash:
                  <strong>{{
                    parseInt(balance.total_credit_cash) -
                    parseInt(balance.total_debitt_cash)
                  }}</strong>
                </h4>
                <h4>
                  In Bkash(personal):
                  <strong>{{
                    parseInt(balance.total_credit_bkash_personal) -
                    parseInt(balance.total_debit_bkash_personal)
                  }}</strong>
                </h4>
                <h4>
                  In Bkash(merchant):
                  <strong>{{
                    parseInt(balance.total_credit_bkash_merchant) -
                    parseInt(balance.total_debit_bkash_merchant)
                  }}</strong>
                </h4>
                <h4>
                  In Bank:
                  <strong>{{
                    parseInt(balance.total_credit_bank) -
                    parseInt(balance.total_debit_bank)
                  }}</strong>
                </h4>

                <h4>
                  Total:
                  <strong>{{
                    parseInt(balance.total_credit) - parseInt(balance.total_debit)
                  }}</strong>
                </h4>
              </div>

              <div class="custom-box-footer">
                <h3 class="text-center text-uppercase">total balance</h3>
              </div>
            </div>
          </div>
        </div>


        <div class="row" >
          <h1 style="margin-left: 15px">Stock</h1>

          <div class="col-lg-4 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 class="">{{ products.product_stock_qty }}</h3>

                <h4>Total Stock Quantity</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xs-6">
            <div class="small-box bg-green">
              <div class="inner">
                <h3 class="">{{ products.product_stock_amount }}</h3>
                <h4>Total Stock Amount</h4>
              </div>
            </div>
          </div>
        </div>

        </section>
   </div>
  <!-- Main content -->

</div>


</template>




<script >

import Vue from 'vue' ;
import navbar from './Navbar' ;
export default ({

    mounted(){
        console.log("manager dashboard mounted");
        this.DashboardData();
    },
    data() {
      return {
        products:"",
        sales:"",
        balance:"",

      }
    },
    methods: {
      DashboardData(){
          axios.get('/api/get/dashboard/data')
          .then(resp => {
            console.log(resp);
            this.products=resp.data.products ;
            this.sales=resp.data.sales ;
            this.balance=resp.data.balance ;
          })

      }
    },
    components:{

        navbar
    }



})
</script>

<style scoped>
.small-box{
  height: 80px;
}
.small-box>.small-box-footer {
  padding:0px;
  margin-top: -93px;
}

.small-box>.inner {
    padding: 5px 15px;
}

.custom-box {
  background: #fff;
  padding: 13px;
  height: 215px;
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 6px;
  margin-bottom: 10px;

}
.custom-box-body strong {
  position: absolute;
  right: 10%;
  color: blue;
}
.custom-box-footer {
  background: #00a65a;
  color: #fff;
}

</style>