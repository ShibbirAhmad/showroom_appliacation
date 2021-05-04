(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      base_url: this.$store.state.image_base_link,
      popup: false
    };
  },
  methods: {
    displaye_image_from_box: function displaye_image_from_box(e) {
      var target_element = e.target;
      var active_images = document.getElementsByClassName('__p_active');

      if (active_images.length > 0) {
        for (var i = 0; i < active_images.length; i++) {
          active_images[i].classList.remove('__p_active');
        }
      }

      target_element.classList.add('__p_active');
      document.getElementById('big_image').setAttribute('src', target_element.src);
    },
    show_pop_up_img: function show_pop_up_img() {
      this.popup = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductImageView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductImageView.vue */ "./resources/js/components/public/ProductImageView.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    this.validation();
    window.scrollTo(0, 0);
    this.productImage(); //   console.log(this.$route.params.slug);

    setTimeout(function () {
      _this.validation();
    }, 200);
  },
  data: function data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1
      },
      base_url: this.$store.state.image_base_link,
      related_products: [],
      page: 1,
      tab_content: 1
    };
  },
  methods: {
    productImage: function productImage() {
      var _this2 = this;

      axios.get("/_public/product/" + this.$route.params.slug).then(function (resp) {
        _this2.cart.product_id = resp.data.product.id; // this.images.normal_size.push(...resp.data.product_images);
        // this.images.thumbs.push(...resp.data.product_images);
      });
    },
    CartToAdd: function CartToAdd() {
      var _this3 = this;

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this3.$toasted.show(resp.data.message, {
            position: "bottom-center",
            type: "success",
            duration: 2000
          });

          _this3.$store.dispatch("getCartContent");
        } else if (resp.data.status == "error") {
          _this3.$toasted.show(resp.data.message, {
            position: "bottom-center",
            type: "error",
            duration: 20000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    },
    validation: function validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }

      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint: function SelectVaraint() {
      var index = this.variant_index;
      var variant_id = this.product.product_variant[index].variant_id;
      var attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },
    getRelatedProducts: function getRelatedProducts($state) {
      var _this4 = this;

      axios.get("/_public/related/products/?page=" + this.page, {
        params: {
          product_slug: this.$route.params.slug
        }
      }).then(function (resp) {
        if (resp.data.data.length) {
          var _this4$related_produc;

          _this4.page += 1;

          (_this4$related_produc = _this4.related_products).push.apply(_this4$related_produc, _toConsumableArray(resp.data.data));

          $state.loaded();
        } else {
          $state.complete();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    buyNow: function buyNow() {
      var _this5 = this;

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this5.$store.dispatch("getCartContent");

          _this5.$toasted.show(resp.data.message, {
            position: "bottom-left",
            type: "success",
            duration: 2000
          });

          var user = _this5.user;
          console.log(user);

          if (user.mobile_no) {
            _this5.$router.push({
              name: "Chekout"
            });
          } else {
            _this5.$router.push({
              name: "UserLogin"
            });
          }
        } else if (resp.data.status == "error") {
          _this5.$toasted.show(resp.data.message, {
            position: "bottom-center",
            type: "error",
            duration: 4000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getRelatedProducts();
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("user");
  },
  computed: {
    product: function product() {
      return this.$store.getters.single_product;
    },
    product_images: function product_images() {
      return this.$store.getters.product_images;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    ProductImage: _ProductImageView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  watch: {
    product_images: function product_images(value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    }
  }
}); //show sub  menu in mobile menu

document.addEventListener("DOMContentLoaded", function () {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(function () {
    //find the click element
    var sub_menu = document.getElementsByClassName("show-sub");

    var _loop = function _loop(i) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        var show_sub_menu = sub_menu[i].parentElement.querySelector(".left-sub-menu"); //set active class

        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    };

    for (var i = 0; i < sub_menu.length; i++) {
      _loop(i);
    }
  }, 2000);
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-active[data-v-6e453e8c] {\r\n  display: block !important;\n}\n.nav_items[data-v-6e453e8c]{\r\n  display:none ;\n}\n@media  screen and (max-width:768px) {\n.nav_items[data-v-6e453e8c]{\r\n  display:block ;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "__image_box" }, [
      _c("img", {
        staticClass: "__image_box_img",
        attrs: {
          src: _vm.base_url + _vm.images[0].product_image,
          id: "big_image"
        },
        on: { click: _vm.show_pop_up_img }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "__preview_image_box" },
      _vm._l(_vm.images, function(image, index) {
        return _c("img", {
          key: index,
          staticClass: "__preview_img",
          class: { __p_active: index == 0 },
          attrs: { src: _vm.base_url + image.product_image },
          on: { click: _vm.displaye_image_from_box }
        })
      }),
      0
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm.popup
      ? _c("div", { staticClass: "__lightbox" }, [
          _c("div", { staticClass: "__light_box_content" }, [
            _c("img", {
              staticClass: "__image_ligitbox_img",
              attrs: { src: _vm.base_url + _vm.images[0].product_image }
            })
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrapper-wide" },
    [
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": true,
          "is-full-page": _vm.fullPage
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("frontend-header"),
      _vm._v(" "),
      _c("nav-item"),
      _vm._v(" "),
      _c("div", { attrs: { id: "container" } }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c("div", [
                _c("div", { staticClass: "row product-info" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-lg-6 col-md-6 product-image-viewer",
                      staticStyle: { "margin-bottom": "20px" }
                    },
                    [
                      _c("ProductImage", {
                        attrs: { images: _vm.product_images }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("ul", { staticClass: "list-unstyled description" }, [
                _c("li", [
                  _c(
                    "h2",
                    { staticClass: "title", attrs: { itemprop: "name" } },
                    [_vm._v(_vm._s(_vm.product.name))]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("h4", [
                    _c("b", [_vm._v("Product Code:")]),
                    _vm._v(" "),
                    _c("span", { attrs: { itemprop: "mpn" } }, [
                      _vm._v(_vm._s(_vm.product.product_code))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("h4", [
                    _c("b", [_vm._v("Availability:")]),
                    _vm._v(" "),
                    _vm.product.stock > 0
                      ? _c("span", { staticClass: "instock" }, [
                          _c("strong", [
                            _vm._v("(" + _vm._s(_vm.product.stock) + ")")
                          ])
                        ])
                      : _c("span", { staticClass: "outstcok" }, [
                          _vm._v("Stock Out")
                        ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "price-box" }, [
                _c("li", { staticClass: "price" }, [
                  _c("h3", [
                    _vm.product.discount
                      ? _c("span", { staticClass: "price-old" }, [
                          _vm._v("৳ " + _vm._s(_vm.product.sale_price))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "price-new" }, [
                      _vm._v("৳ " + _vm._s(_vm.product.price))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "product" } }, [
                _c("div", { staticClass: "row" }, [
                  _vm.product.product_variant.length > 0 &&
                  _vm.product.product_attribute
                    ? _c("div", { staticClass: "col-lg-6" }, [
                        _c("div", [
                          _c("div", { staticClass: "form-group required" }, [
                            _c("h4", { staticClass: "control-label" }, [
                              _c("b", [
                                _vm._v(
                                  _vm._s(
                                    _vm.product.product_attribute.attribute.name
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.variant_index,
                                    expression: "variant_index"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "option[200]" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.variant_index = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    _vm.SelectVaraint
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "", disabled: "" } },
                                  [_vm._v("--- Please Select ---")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.product.product_variant, function(
                                  variant,
                                  v
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      key: v,
                                      attrs: { value: "" },
                                      domProps: { value: v }
                                    },
                                    [_vm._v(_vm._s(variant.variant.name))]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", {}, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cart.quantity,
                            expression: "cart.quantity"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          name: "quantity",
                          size: "2",
                          value: "1"
                        },
                        domProps: { value: _vm.cart.quantity },
                        on: {
                          change: _vm.validation,
                          keyup: _vm.validation,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.cart, "quantity", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "clear" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg btn-block",
                        staticStyle: { "margin-top": "38px" },
                        attrs: { type: "button", id: "button-cart" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.CartToAdd($event)
                          }
                        }
                      },
                      [_vm._v("Add to Cart")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg btn-block",
                        staticStyle: {
                          "margin-top": "38px",
                          background: "#000"
                        },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.buyNow($event)
                          }
                        }
                      },
                      [_vm._v("Buy Now")]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-details-tabe" }, [
            _c("ul", { staticClass: "details-tab-menu-list" }, [
              _c(
                "li",
                {
                  staticClass: "details-tab-menu-item",
                  class: { "tab-menu-item-active": _vm.tab_content == 1 },
                  on: {
                    click: function($event) {
                      _vm.tab_content = 1
                    }
                  }
                },
                [_vm._v("Description")]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "details-tab-menu-item",
                  class: { "tab-menu-item-active": _vm.tab_content == 2 },
                  on: {
                    click: function($event) {
                      _vm.tab_content = 2
                    }
                  }
                },
                [_vm._v("How To Buy")]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "details-tab-menu-item",
                  class: { "tab-menu-item-active": _vm.tab_content == 3 },
                  on: {
                    click: function($event) {
                      _vm.tab_content = 3
                    }
                  }
                },
                [_vm._v("Return Policy")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-tab-content" }, [
              _c("div", {
                staticClass: "product-details",
                class: { block: _vm.tab_content == 1 },
                domProps: { innerHTML: _vm._s(_vm.product.details) }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "how-to-buy",
                  class: { block: _vm.tab_content == 2 }
                },
                [_vm._m(2)]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "how-to-buy",
                  class: { block: _vm.tab_content == 3 }
                },
                [_vm._m(3)]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row related_products product-content" },
            [
              _c("h3", { staticClass: "sub-title" }, [
                _vm._v("Related Products")
              ]),
              _vm._v(" "),
              _vm._l(_vm.related_products, function(related_product, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "col-lg-3 col-md-3 col-xs-6 product_container_column "
                  },
                  [
                    _c("div", { staticClass: "product-thumb" }, [
                      _c(
                        "div",
                        { staticClass: "image" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "single",
                                  params: { slug: related_product.slug }
                                }
                              }
                            },
                            [
                              _c("v-lazy-image", {
                                staticClass: "img-responsive",
                                attrs: {
                                  src:
                                    _vm.base_url +
                                    related_product.product_image[0]
                                      .product_image,
                                  alt: related_product.name,
                                  title: related_product.name,
                                  "src-placeholder":
                                    _vm.base_url + "images/static/d3.jpg"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c("div", { staticClass: "caption" }, [
                          _c(
                            "h4",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "single",
                                      params: { slug: related_product.slug }
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.product.name))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "price" }, [
                            _c("span", { staticClass: "price-new" }, [
                              _vm._v(_vm._s(related_product.price))
                            ]),
                            _vm._v(" "),
                            related_product.discount
                              ? _c("span", { staticClass: "price-old" }, [
                                  _vm._v(_vm._s(related_product.sale_price))
                                ])
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "infinite-loading",
                { on: { infinite: _vm.getRelatedProducts } },
                [_c("div", { attrs: { slot: "no-more" }, slot: "no-more" })]
              )
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("frontend-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(" More Inforamtion About This Product, Just Call Now "),
      _c("a", { attrs: { href: "tel:01715900066" } }, [_vm._v("01715 900066")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h4",
      { staticClass: "control-label", attrs: { for: "input-quantity" } },
      [_c("b", [_vm._v("Quantity")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Select the number of products you want to buy")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Click "),
        _c("strong", [_vm._v("Add To Cart")]),
        _vm._v(" Button")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Then go to the checkout page")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "If you are a new user, please click on Sign Up.provide us your valid information."
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Complete your checkout, we received your order, and for order confirmation or customer service contact with you"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "\n                    If your product is damaged, defective, incorrect, or incomplete at the time of delivery, please file a return request on call to the customer care support number within 3 days of the delivery date                      "
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Change of mind is not applicable as a Return Reason for this product"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/ProductImageView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/public/ProductImageView.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductImageView.vue?vue&type=template&id=5376697c& */ "./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c&");
/* harmony import */ var _ProductImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImageView.vue?vue&type=script&lang=js& */ "./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/ProductImageView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImageView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/ProductImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImageView.vue?vue&type=template&id=5376697c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/ProductImageView.vue?vue&type=template&id=5376697c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImageView_vue_vue_type_template_id_5376697c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e453e8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);