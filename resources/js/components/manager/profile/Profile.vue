<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>manager</a>
          </li>
          <li class="active">Profile</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center">
                   <img class="manager_profile" :src="form.image?base_url+form.image:base_url+'images/noimage.png'" alt="">
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <ul class="list-group" v-if="errors">
                    <li
                      class="list-group-item"
                      v-for="(error, index) in errors"
                      :key="index"
                    >
                      {{ error.name }}
                    </li>
                  </ul>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>

                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          disabled
                        />

                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          v-model="form.email"
                          type="email"
                           class="form-control"
                          disabled
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      disabled
                      class="form-control"
                      autofocus
                      v-model="form.phone"
                    />
                    <has-error :form="form" field="phone"> </has-error>
                  </div>

                    </div>
                    <div class="col-sm-6">
                            <div class="form-group">
                    <label for="address">Address</label>

                    <textarea style="overflow-y:scroll"
                      disabled
                      v-model="form.address"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      rows="1"
                    ></textarea>

                  </div>
                    </div>
                  </div>

                  <div class="form-group text-center">
                    <router-link
                      class="btn btn-primary"
                      :to="{ name: 'manager_dashboard' }"
                      >Go Back</router-link
                    >
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
import navbar from "../Navbar";
Vue.component(HasError.name, HasError);

export default {
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);

    this.getmanager();
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        phone: "",
        address: "",
        image: "",
      }),
      base_url: this.$store.state.image_base_link,
      loading: true,
      errors: [],
    };
  },

  methods: {
    getmanager() {
      axios.get("/api/get/manager")
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.name = resp.data.manager.name;
          this.form.email = resp.data.manager.email;
          this.form.phone = resp.data.manager.phone;
          this.form.address = resp.data.manager.address;
          this.form.image = resp.data.manager.image;
        }
      });
    },


  },
  computed: {},
  components: {
    navbar,
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
.manager_profile {
  width:100px;
  height: 100px;
  border-radius: 50%;
}
</style>
