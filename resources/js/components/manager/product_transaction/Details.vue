<template>
  <div>
     <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">product transfer</li>
        </ol>
      </section>
         <br>
      <section class="content">
        <div class="container">
          <div class="row  ">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-body">
                      <table class="table table-bordered table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Purchase Price</th>
                            <th>Sale Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in transaction_items " :key="index">
                            <td>{{index+1}}

                            </td>
                            <td>
                              {{ item.product.name}} - {{ item.product.product_code }}
                            </td>
                            <td>
                              <img v-if="item.product.product_image.length>0" :src="base_url+item.product.product_image[0].product_image" style="width:60px;height:50px;">
                            </td>

                            <td>{{item.quantity}}</td>
                            <td> &#2547; {{item.purchase_price}}</td>
                            <td> &#2547; {{item.sale_price}}</td>
                            <td> &#2547;  {{item.total}}</td>

                          </tr>

                        </tbody>
                      </table>


                  <div class="row bottomBtn">
                    <router-link  class="btn btn-warning back" :to="{name:'product_transaction'}">
                      <i class="fa fa-arrow-circle-left" ></i>
                    </router-link>
                    <button v-show="transaction.status==0" @click="approvedTransaction" class="btn btn-success"> Received <i class="fa fa-check"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>

import Vue from "vue";
import { Form, HasError } from "vform";
import navbar from "../Navbar";
Vue.component(HasError.name, HasError);

export default {
  created() {
    this.getTransactionDetails();

  },
  data() {
    return {
      transaction: "",
      transaction_items: "",
      base_url: this.$store.state.image_base_link,

    };
  },

  methods: {
    getTransactionDetails() {
      axios
        .get("/api/get/product/transaction/details/"+this.$route.params.id)
        .then((resp) => {
         console.log(resp);
          if (resp.data.status == "OK") {
            this.transaction = resp.data.transaction;
            this.transaction_items = resp.data.transaction_items;
          }
        })
    },


     approvedTransaction() {
      axios.get("/api/approved/product/transaction/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$toasted.show(resp.data.message, {
                        type: "success",
                        position: 'top-right',
                        duration: 4000
                    });
             this.$router.push({name:'product_transaction'});
          }
        })
    },

  },
  components:{
    navbar
  }

};
</script>

<style scoped>

.mb-2 {
  margin-bottom: 5px !important;
}
.bottomBtn {
  margin-top: 15px;
  margin-left: 20px;
}
.head_title{
    margin-left: 27px;
    margin-top: -12px;
}
.address_line{
  line-height: 15px;
}
p {
  line-height: 10px;
  font-size:14px;
}
.m_logo{
    margin-left: -11px;
    margin-top: -21px;
    height: 80px;
}
.m_title{
  margin-top:-15px;
  font-size: 11px;
}
table {
  margin-top:20px;
}
@media print {

  *{
    margin: 0;
    padding: 0;
  }

  table {
  margin-top:20px !important;
}

 .m_title{
    margin-top:-15px;
   font-size: 10px;
 }
  .navbar {
    display: none;
  }
  .m_logo{
    height: 80px;
   }
  .print_info_container{
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding: 10px 10px  !important;
    margin-top: 20px;
  }
  .col-sm-1{
    display: none;
  }
  .address_line{
  line-height: 15px;
  }
  p{
    line-height: 16px;
    font-size: 14px;
  }
.logo{
      width: 40% !important;

  }

 .description{
   width: 40%  !important;
 }
  .col-lg-2 {
    width: 20% !important;
    margin-top: 20px !important;
  }
  .invoice-header {
    display: block;
  }
  .box {
    border-top: none;
  }
  footer {
    border-top: none !important;
  }
  .bottomBtn {
    display: none;
  }
}
small.badge.badge-danger {
    display: flex;
    background: red;
    width: 63px;
    flex-direction: row;
}
small.badge.badge-success {
    display: flex;
    background: green;
    width: 63px;
}
</style>
