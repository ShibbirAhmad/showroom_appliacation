<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom_debit' }" class="btn btn-primary"
            ><i class="fa fa-arrow-right"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Debit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-1">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Debit</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="updateDebit"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                  <div class="form-group">
                    <label>Date</label>

                    <date-picker
                      autocomplete="off"
                      v-model="form.date"
                      :config="options"
                      :class="{ 'is-invalid': form.errors.has('date') }"
                    ></date-picker>

                    <has-error :form="form" field="date"></has-error>
                  </div>

                          <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount</label>
                        <input
                          type="text"
                          name="amount"
                          v-model="form.amount"
                          required
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('amount') }"
                          autocomplete="off"
                        />
                        <has-error :form="form" field="amount"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Debit From</label>
                        <select
                          name="debit_from"
                          required
                          class="form-control"
                          v-model="form.debit_from"
                          :class="{
                            'is-invalid': form.errors.has('debit_from'),
                          }"
                        >
                          <option value="Cash">Cash</option>
                          <option value="Bkash(personal)">
                            Bkash(personal)
                          </option>
                          <option value="Bkash(merchant)">
                            Bkash(merchant)
                          </option>
                          <option value="Bank">Bank</option>
                        </select>
                        <has-error :form="form" field="debit_from"></has-error>
                      </div>
                    </div>
                  </div>


                  <div class="form-group">
                    <label>Purpose</label>
                    <input
                      type="text"
                      name="purpose"
                      v-model="form.purpose"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('purpose') }"
                      required
                    />
                    <has-error :form="form" field="purpose"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Comment</label>
                    <input
                      type="text"
                      name="comment"
                      class="form-control"
                      v-model="form.comment"
                      :class="{ 'is-invalid': form.errors.has('comment') }"
                      autocomplete="off"
                    />
                    <has-error :form="form" field="comment"></has-error>
                  </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Save
                    </button>
                  </div>
                </form>
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
import { Form, HasError, AlertError } from "vform";
import navbar from "../Navbar.vue";
Vue.component(HasError.name, HasError, navbar);

export default {
  created() {
    this.getDebitItems();
  },
  data() {
    return {
      form: new Form({
        purpose: "",
        amount: "",
        date: "",
        comment: "",
        employee_id: "",
        debit_from: "Cash",
        supplier_id: "",
        signature: null,
        signature_write: false,
        loaner_id: "",
      }),
      error: "",
      purposes: "",

      //for date picker
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },

      //signature pad.......
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "yellow",
      },
      disabled: false,
    };

  },

  methods: {
    getDebitItems(){
      axios.get('/api/showroom/debit/edit/'+this.$route.params.id)
      .then(resp => {
        this.form.date=resp.data.debit.date;
        this.form.purpose=resp.data.debit.purpose;
        this.form.amount=resp.data.debit.amount;
        this.form.debit_from=resp.data.debit.debit_from;
        this.form.comment=resp.data.debit.comment?resp.data.debit.comment:'';
      });
    },
    updateDebit() {
      // this.save();
      this.form
        .post("/api/showroom/debit/update/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "showroom_debit" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })

    },

    //method initial for  get current date
    pDate() {
      //current date
      let d = new Date();

      //current mount
      //current day
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let output =
        d.getFullYear() +
        "-" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "-" +
        (("" + day).length < 2 ? "0" : "") +
        day;
      this.form.date = output;
    },

  },
  mounted() {
    this.pDate();
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
#signatur-pad {
  height: 300px;
}
</style>
