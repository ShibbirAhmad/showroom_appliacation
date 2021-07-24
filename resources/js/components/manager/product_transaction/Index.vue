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
          <div class="row justify-content-center">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Product Trasformatin Tables</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped text-center ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Total Amount </th>
                        <th scope="col">Status</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Details</th>
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
                        <td>{{ transaction.invoice_no }}</td>
                        <td> &#2547; {{ transaction.total }} </td>
                        <td>
                          <span v-if="transaction.status==0" class="badge badge-warning"> Pending </span>
                          <span v-else class="badge badge-success"> Recieved </span>
                        </td>
                        <td>{{ transaction.comment ? transaction.comment : 'no comment' }}</td>
                        <td>

                           <router-link class="btn btn-sm btn-success"
                            :to="{
                              name: 'product_transaction_details',
                              params: { id: transaction.id },
                            }"
                          > <i class="fa fa-eye"></i> </router-link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      axios.get("/api/product/transaction/list?page="+page)
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
