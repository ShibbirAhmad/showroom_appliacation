<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{name:'slider'}" class="btn btn-primary">
            <i class="fa fa-arrow-right"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <i class="fa fa-dashboard"></i>Dashboard
            </a>
          </li>
          <li class="active">Sub Category</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">
                  Add slider
                  <small>({{ image_size_text }})</small>
                </h3>
              </div>
              <div class="box-body">
                <div class="alert-danger alert" v-if="error">{{error}}</div>

                <h1 v-if="loading">
                  <i class="fa fa-spin fa-spinner"></i>
                </h1>

                <form
                  @submit.prevent="add"
                  v-else
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Url</label>
                        <input class="form-control" type="text" name="url" v-model="form.url" />
                      </div>
                      <div class="form-group">
                        <label>Postion</label>
                        <select
                          name="postion"
                          class="form-control"
                          @change="selectPosition"
                          v-model="form.position"
                          :class="{ 'is-invalid': form.errors.has('postion') }"
                        >
                          <option value="1">Slider</option>
                          <option value="2">Slider Banner</option>
                        </select>
                        <has-error :form="form" field="image"></has-error>
                      </div>

                      <div class="preview-image">
                        <img class="img-responsive" :src="form.file" alt="slider" />
                      </div>
                      <div class="form-group">
                        <label for="file" class="selectFile">select a file</label>
                        <input
                          style="display: none;"
                          class="form-control"
                          id="file"
                          :class="{ 'is-invalid': form.errors.has('image') }"
                          type="file"
                          @change="uploadImage"
                          name="image"
                        />
                        <has-error :form="form" field="image"></has-error>
                      </div>
                    </div>
                  </div>

                  <!--                                    <img :src="image" style="width: 500px;">-->
                  <br />
                  <button
                    :disabled="form.busy || disabled"
                    type="submit"
                    class="btn btn-primary btn-block"
                  >
                    <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Submit
                  </button>
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

Vue.component(HasError.name, HasError);
export default {
  name: "subCategory",
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        image: "",
        file: "/../public/storage/images/slider-preview.jpg",
        position: 1,
        url: "#",
      }),
      error: "",
      loading: true,
      image: "",
      disabled: true,
      image_width: 750,
      image_height: 400,
      image_size_text: "Image size must be 750*400px",
    };
  },

  methods: {
    add() {
      this.form
        .post("/slider/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "slider" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
        .catch((error) => {
          this.error = error.response.data.errors;
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000,
          });
        });
    },
    uploadImage(e) {
      const file = e.target.files[0];

      ///let image file size check
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(img.width, img.height);
          if (
            img.width == this.image_width &&
            img.height == this.image_height
          ) {
            this.setImage(file, evt);
            return;
          } else {
            this.disabled = true;
            alert(
              "Image size need" +
                this.image_width +
                "*" +
                this.image_height +
                "px . But Upload imaze size" +
                img.width +
                "*" +
                img.height +
                "px"
            );
            return;
          }
        };
        img.src = evt.target.result;
      };
    },
    setImage(file, evt) {
      this.disabled = false;
      this.form.image = file;
      this.form.file = evt.target.result;
    },

    selectPosition() {
      if (this.form.position == 1) {
        this.form.file = "/../public/storage/images/slider-preview.jpg";
        this.image_width = 750;
        this.image_height = 400;
        this.image_size_text = "Image size must be 750*400px";
      } else {
        this.form.file = "/../public/storage/images/slide-banner.jpg";
        this.image_size_text = "Image size must be 360*185px";
        this.image_width = 360;
        this.image_height = 185;
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
label.selectFile {
  width: 150px;
  background: #fff;
  color: #222d32;
  padding: 10px 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 1px solid #222d32;
}
</style>
