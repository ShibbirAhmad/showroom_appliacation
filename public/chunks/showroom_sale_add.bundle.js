(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showroom_sale_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch("manager");
  },
  data: function data() {
    return {
      manager: {},
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get('/api/manager/logout').then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          localStorage.removeItem('manager_token');

          _this.$store.commit('manager', null);

          _this.$router.push({
            name: 'manager_login'
          });

          _this.$toasted.show("Logout successfully ! login again to come back .", {
            type: "error",
            position: "top-center",
            duration: 10000
          });
        }
      })["catch"]();
    }
  },
  computed: {
    getManager: function getManager() {
      return this.$store.getters.manager;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navbar */ "./resources/js/components/manager/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {},
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        customer_phone: "",
        customer_name: "",
        customer_address: "",
        sale_type: 1,
        products: [],
        status: 2,
        total: 0,
        discount: 0,
        discount_type: 'discount type',
        due: 0,
        paid: 0,
        order_type: 2,
        paid_by: "Bkash(merchant)"
      }),
      search_product_code: "",
      attribute_id: "",
      variant_id: "",
      product_code: "",
      products: [],
      product_attributes: null,
      product_variants: null,
      product_quantity: 1,
      errors: [],
      product_per_page: 10,
      base_link: this.$store.state.image_base_link
    };
  },
  //method initial for submit data
  methods: {
    addSale: function addSale() {
      var _this = this;

      //start progress bar when submit fomr
      this.$Progress.start();
      this.form.post("/api/showroom/sale/add").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          //end progress bar when success resp
          _this.$Progress.finish();

          _this.$router.push({
            name: "showroom_sale"
          });

          _this.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          }); //other wise success, show a error

        } else {
          _this.$toasted.show(resp.data, {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this.errors = [];

        _this.errors.push(error.response.data.errors);

        _this.$Progress.finish();
      });
    },
    //method initial for search product
    searchProduct: function searchProduct() {
      var _this2 = this;

      var length = this.product_code.length;

      if (length == 4) {
        this.$Progress.start();
        axios.get("/api/search/product/with/" + this.product_code).then(function (resp) {
          console.log(resp);

          if (resp.data.status == "SUCCESS") {
            _this2.product_code = "";
            var product = {
              id: "",
              price: "",
              quantity: 1,
              attribute_id: "",
              variant_id: "",
              total: "",
              stock: ""
            };

            for (var _i = 0; _i < resp.data.product.length; _i++) {
              // check the product stcok availity
              if (resp.data.product[_i].s_stock <= 0) {
                return Swal.fire({
                  type: "warning",
                  title: "Wopps....",
                  html: "".concat(resp.data.product[_i].name, " - <strong> ").concat(resp.data.product[_i].product_code, " </strong> in <b>stcok not available</b>.")
                });
              }

              _this2.products.push(resp.data.product[_i]);

              product.id = resp.data.product[_i].id;
              product.price = resp.data.product[_i].s_sale_price;
              product.total = resp.data.product[_i].s_sale_price;
              product.stock = resp.data.product[_i].s_stock; //  console.log(resp.data.product)
            }

            _this2.form.products.push(product);

            _this2.totalCalculation();
          } //when not resp success
          else {
              _this2.$toasted.show("Product not found with " + _this2.product_code, {
                position: "top-center",
                type: "danger",
                duration: 2000
              });
            }

          _this2.$Progress.finish();
        })["catch"](function (error) {
          console.log(error);

          _this2.$Progress.finish();
        });
      }
    },
    //method initial search customer
    searchCustomer: function searchCustomer() {
      var _this3 = this;

      if (this.form.customer_phone.length == 11) {
        axios.get("/api/search/customer/" + this.form.customer_phone).then(function (resp) {
          console.log(resp);

          if (resp.data.status == "OK") {
            _this3.form.customer_name = resp.data.customer.name;
            _this3.form.customer_address = resp.data.customer.address;

            _this3.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000
            });
          } else {
            _this3.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000
            });
          }
        });
      }
    },
    //set product attribute
    attribute: function attribute(index) {
      this.form.products[index].attribute_id = this.attribute_id;
    },
    //set product variant
    // variant(index) {
    //   this.form.products[index].variant_id = this.variant_id;
    // },
    //when chage qauntity
    quantity: function quantity(index) {
      if (parseInt(this.products[index].s_stock) < parseInt(this.form.products[index].quantity)) {
        alert("max quantity ".concat(this.form.products[index].s_stock));
        this.form.products[index].quantity = this.form.products[index].stock;
        return;
      }

      this.form.products[index].total = parseInt(this.form.products[index].price) * parseInt(this.form.products[index].quantity);
      this.totalCalculation();
    },
    //total amount calculation
    totalCalculation: function totalCalculation() {
      var products = this.form.products;
      var total = 0;

      for (var _i2 = 0; _i2 < products.length; _i2++) {
        total += parseInt(products[_i2].price) * parseInt(products[_i2].quantity);
      }

      if (parseInt(this.form.discount) > parseInt(total) + parseInt(this.form.discount)) {
        Swal.fire({
          type: "warning",
          text: "why discount amount ".concat(this.form.discount, " bigger this total amount ").concat(total, " ?")
        });
        this.form.discount = total;
        return;
      }

      this.form.total = parseInt(total);
      this.form.due = this.form.total - (parseInt(this.form.discount) + parseInt(this.form.paid));
      total += parseInt(products[i].price) * parseInt(products[i].quantity);
    },
    remove: function remove(index) {
      // console.log(index);
      console.log(this.form.products[index]);
      this.form.products.splice(index, 1);
      this.products.splice(index, 1);
      this.totalCalculation();
    }
  },
  components: {
    navbar: _Navbar__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
}); //Date picker

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-071e80b4] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-071e80b4] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.fa-search[data-v-071e80b4] {\r\n  height: 33px;\r\n  width: 60px;\r\n  margin-left: -25px;\n}\n.autocomplete li[data-v-071e80b4]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\n.suggest-product img[data-v-071e80b4] {\r\n  width: 120px;\r\n  height: 120px;\n}\n.suggest-product[data-v-071e80b4] {\r\n  background: #ecf0f5;\r\n  text-align: center;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 1px 2px #ddd;\n}\n.add-item.text-center[data-v-071e80b4] {\r\n  background: #fff;\r\n  width: block;\r\n  padding: 6px 5px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  margin-bottom: 18px;\n}\n.form-group.product-search[data-v-071e80b4] {\r\n  width: 80%;\r\n  left: 10%;\r\n  position: relative;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "main-header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("nav", { staticClass: "navbar navbar-static-top" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-custom-menu" }, [
          _c("ul", { staticClass: "nav navbar-nav" }, [
            _c("li", { staticClass: "dropdown user user-menu" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: { href: "#", "data-toggle": "dropdown" }
                },
                [
                  _c("img", {
                    staticClass: "user-image",
                    attrs: { src: _vm.base_url + _vm.getManager.image }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v(_vm._s(_vm.getManager.name))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", { staticClass: "user-header" }, [
                  _c("img", {
                    staticClass: "img-circle",
                    attrs: {
                      src: _vm.base_url + _vm.getManager.image,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.getManager.name) +
                        " - manager\n                "
                    ),
                    _c("small", [
                      _vm._v(
                        "Member since " + _vm._s(_vm.getManager.created_at)
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "user-footer" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "manager_profile" } }
                          },
                          [_vm._v(" profile ")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "manager_password_edit" } }
                          },
                          [_vm._v("change password")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger ",
                          on: { click: _vm.logout }
                        },
                        [_vm._v(" logout ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "logo", attrs: { href: "#" } }, [
      _c("span", { staticClass: "logo-mini" }, [
        _c("b", [_vm._v("A")]),
        _vm._v("LT")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "logo-lg" }, [_c("b", [_vm._v("showroom")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "sidebar-toggle",
        attrs: { href: "#", "data-toggle": "push-menu", role: "button" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { to: { name: "showroom_sale" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("form", {
            attrs: { id: "searchProductform" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.searchProduct($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addSale($event)
                },
                keydown: function($event) {
                  return _vm.form.onKeydown($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row justify-content-center" }, [
                _vm.errors.length
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-danger alert-dismissible",
                        attrs: { role: "alert" }
                      },
                      [
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function(error) {
                            return _c("div", [
                              _c("li", [_vm._v(_vm._s(error))]),
                              _vm._v(" "),
                              _c("br")
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "box box-primary" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.customer_phone,
                                expression: "form.customer_phone"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "customer_phone"
                              )
                            },
                            attrs: {
                              type: "text",
                              name: "customer_phone",
                              autocomplete: "off",
                              placeholder: "01xxxxxxxxx",
                              maxlength: "11"
                            },
                            domProps: { value: _vm.form.customer_phone },
                            on: {
                              keyup: _vm.searchCustomer,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "customer_phone",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "customer_phone" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.customer_name,
                                expression: "form.customer_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("customer_name")
                            },
                            attrs: {
                              type: "text",
                              name: "name",
                              autocomplete: "off",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.form.customer_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "customer_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "customer_name" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Address")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.customer_address,
                                expression: "form.customer_address"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "customer_address"
                              )
                            },
                            attrs: {
                              name: "address",
                              autocomplete: "off",
                              placeholder: "address",
                              rows: "3"
                            },
                            domProps: { value: _vm.form.customer_address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "customer_address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "customer_address" }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-8" }, [
                  _c("div", { staticClass: "box box-success" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Scan Barcode || prodcut code")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_code,
                              expression: "product_code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            autofocus: "",
                            maxlength: "4",
                            autocomplete: "off",
                            placeholder: "Enter Product Code",
                            form: "searchProductform"
                          },
                          domProps: { value: _vm.product_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.product_code = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "table",
                            { staticClass: "table table-striped table-hover" },
                            [
                              _vm._m(5),
                              _vm._v(" "),
                              _vm.products.length > 0
                                ? _c(
                                    "tbody",
                                    [
                                      _vm._l(_vm.products, function(
                                        product,
                                        index
                                      ) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [_vm._v(_vm._s(index))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(
                                                  product.name +
                                                    "-" +
                                                    product.product_code
                                                ) +
                                                "\n                            "
                                            ),
                                            _c("input", {
                                              attrs: { type: "hidden" },
                                              domProps: { value: product.id }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.products[index]
                                                        .variant_id,
                                                    expression:
                                                      "form.products[index].variant_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                staticStyle: { width: "70px" },
                                                on: {
                                                  change: function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.$set(
                                                      _vm.form.products[index],
                                                      "variant_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [_vm._v("select variant")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  product.variants,
                                                  function(
                                                    product_variant,
                                                    index
                                                  ) {
                                                    return product.variants
                                                      ? _c(
                                                          "option",
                                                          {
                                                            key: index,
                                                            domProps: {
                                                              value:
                                                                product_variant
                                                                  .variant.id
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                " +
                                                                _vm._s(
                                                                  product_variant
                                                                    .variant
                                                                    .name
                                                                ) +
                                                                "\n                              "
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  }
                                                )
                                              ],
                                              2
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form.products[index]
                                                      .quantity,
                                                  expression:
                                                    "form.products[index].quantity"
                                                }
                                              ],
                                              staticStyle: { width: "40px" },
                                              attrs: { type: "number" },
                                              domProps: {
                                                value:
                                                  _vm.form.products[index]
                                                    .quantity
                                              },
                                              on: {
                                                keyup: function($event) {
                                                  return _vm.quantity(index)
                                                },
                                                change: function($event) {
                                                  return _vm.quantity(index)
                                                },
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form.products[index],
                                                    "quantity",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [_vm._v(_vm._s(product.s_stock))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(product.s_sale_price)
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.form.products[index].total
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-danger btn-sm",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.remove(index)
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-trash"
                                                })
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _vm.products.length > 0
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              { attrs: { colspan: "3" } },
                                              [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.sale_type,
                                                        expression:
                                                          "form.sale_type"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      name: "sale_type"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          _vm.form,
                                                          "sale_type",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      { attrs: { value: "1" } },
                                                      [_vm._v("Retail Sale")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      { attrs: { value: "2" } },
                                                      [_vm._v("Whole Sale")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Total Amount")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v(_vm._s(_vm.form.total))]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.products.length > 0
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              { attrs: { colspan: "3" } },
                                              [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form
                                                            .discount_type,
                                                        expression:
                                                          "form.discount_type"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      name: "discount_type"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          _vm.form,
                                                          "discount_type",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { disabled: "" }
                                                      },
                                                      [_vm._v("discount type")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "percentage"
                                                        }
                                                      },
                                                      [_vm._v("percentage")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "flat" }
                                                      },
                                                      [_vm._v("flat")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Discount")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.form.discount,
                                                      expression:
                                                        "form.discount"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { placeholder: "0" },
                                                  domProps: {
                                                    value: _vm.form.discount
                                                  },
                                                  on: {
                                                    keyup: _vm.totalCalculation,
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.form,
                                                        "discount",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.products.length > 0
                                        ? _c("tr", [
                                            _c("td", {
                                              attrs: { colspan: "3" }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Paid")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.form.paid,
                                                      expression: "form.paid"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { placeholder: "0" },
                                                  domProps: {
                                                    value: _vm.form.paid
                                                  },
                                                  on: {
                                                    keyup: _vm.totalCalculation,
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.form,
                                                        "paid",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "3" } }),
                                        _vm._v(" "),
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _vm._v("Paid By")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.form.paid_by,
                                                      expression: "form.paid_by"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "paid_by"
                                                    )
                                                  },
                                                  attrs: {
                                                    name: "debit_from",
                                                    id: ""
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$selectedVal = Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function(o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function(o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                      _vm.$set(
                                                        _vm.form,
                                                        "paid_by",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: { value: "Cash" }
                                                    },
                                                    [_vm._v("Cash")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "Bkash(personal)"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                  Bkash(personal)\n                                "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "Bkash(merchant)"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                  Bkash(merchant)\n                                "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: { value: "Bank" }
                                                    },
                                                    [_vm._v("Bank")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "paid_by"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm.products.length > 0
                                        ? _c("tr", [
                                            _c("td", {
                                              attrs: { colspan: "3" }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Amoutn due")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v(_vm._s(_vm.form.due))]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success",
                                          staticStyle: { "margin-top": "12px" },
                                          attrs: {
                                            type: "submit",
                                            disabled: _vm.form.busy
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                          Submit\n                        "
                                          )
                                        ]
                                      )
                                    ],
                                    2
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Sale")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Customer information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Mobile Number"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Name "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Product information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Variant")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Remove")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/manager/Navbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/manager/Navbar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=1b5e42dd& */ "./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/manager/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=1b5e42dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Navbar.vue?vue&type=template&id=1b5e42dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1b5e42dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/manager/sale/Add.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/manager/sale/Add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=071e80b4&scoped=true& */ "./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& */ "./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "071e80b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/manager/sale/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=style&index=0&id=071e80b4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_071e80b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=071e80b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/sale/Add.vue?vue&type=template&id=071e80b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_071e80b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);