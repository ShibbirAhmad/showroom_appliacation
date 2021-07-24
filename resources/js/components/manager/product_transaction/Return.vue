<template>
  <div>
    <navbar></navbar>
     <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">product put back</li>
        </ol>
      </section>
         <br>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-8 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Product Put Back Tables</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped text-center ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product </th>
                        <th scope="col">Quantity </th>
                        <th scope="col">Status</th>

                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(transaction, index) in transactions.data"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ transaction.product.name  }} - {{ transaction.product.product_code  }} </td>
                        <td> {{ transaction.quantity }} </td>
                        <td>
                          <span v-if="transaction.status==0" class="badge badge-warning"> Pending </span>
                          <span v-else class="badge badge-success"> Approved </span>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                 <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="transactions"
                        @pagination-change-page="transactionsList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ transactions.from }}</strong> to
                        <strong>{{ transactions.to }}</strong> of total
                        <strong>{{ transactions.total }}</strong> entries
                      </p>
                    </div>
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
    this.transactionsList();
  },
  data() {
    return {
      transactions:{},
      loading: true,
      showrooms:"",
    };
  },
  methods: {
    transactionsList(page =1) {
      axios.get("/api/product/put/back/list?page="+page)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.transactions = resp.data.transactions;
          this.loading = false;
        }
      });
    },

  },

  components: {
    navbar,
  },

};
</script>

<style scoped>
</style>
