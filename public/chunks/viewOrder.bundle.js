(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewOrder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getDetails();
  },
  data: function data() {
    return {
      order: "",
      items: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
      isLoading: true,
      fullPage: true
    };
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      axios.get("/order/view/" + this.$route.params.id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this.order = resp.data.order;
          _this.items = resp.data.items;
          _this.isLoading = false;
        } else {
          _this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);

        _this.$toasted.show("some thing want to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    print: function print(order_id) {
      window.open('/order/invoice/print/' + order_id, '_SELF');
    },
    back: function back() {
      //   console.log(window.history);
      window.history.back();
    },
    formateDate: function formateDate(date) {
      var d = new Date(date);
      var month = d.getMonth();
      var day = d.getDate();
      var year = d.getFullYear();
      var output = (("" + day).length < 2 ? "0" : "") + day + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + year;
      return output;
    },
    updateResellerCommision: function updateResellerCommision() {
      var _this2 = this;

      var commission = document.getElementById('reseller_order_commision').value;

      if (parseInt(commission) <= 0) {
        console.log(commission);
        alert('Commison can not be equal or smaller 0');
        return;
      }

      axios.get('/update/commision/reseller/order/' + this.order.id, {
        params: {
          commission: commission
        }
      }).then(function (resp) {
        if (resp.data) {
          _this2.$toasted.show(resp.data, {
            type: "info",
            position: "top-center",
            duration: 5000
          });
        }
      });
    },
    itemReturn: function itemReturn(item_id) {
      var _this3 = this;

      if (confirm("are you confirm")) {
        this.isLoading = true;
        axios.get('/order/return/item/' + item_id).then(function (resp) {
          console.log(resp);

          if (resp.data.success == "OK") {
            _this3.$toasted.show(resp.data.message, {
              type: "info",
              position: "top-center",
              duration: 5000
            });

            _this3.getDetails();
          } else {
            _this3.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 5000
            });
          }
        })["catch"](function (e) {
          _this3.isLoading = false;
        });
      }
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-95102a1e] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-95102a1e] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-95102a1e]{\r\n    margin-left: 27px;\r\n    margin-top: -12px;\n}\n.address_line[data-v-95102a1e]{\r\n  line-height: 15px;\n}\np[data-v-95102a1e] { \r\n  line-height: 10px;\r\n  font-size:14px;\n}\n.m_logo[data-v-95102a1e]{\r\n    margin-left: -11px;\r\n    margin-top: -21px;\r\n    height: 80px;\n}\n.m_title[data-v-95102a1e]{\r\n  margin-top:-15px;\r\n  font-size: 11px;\n}\ntable[data-v-95102a1e] {\r\n  margin-top:20px;\n}\n@media print {\n*[data-v-95102a1e]{\r\n    margin: 0;\r\n    padding: 0;\n}\ntable[data-v-95102a1e] {\r\n  margin-top:20px !important;\n}\n.m_title[data-v-95102a1e]{\r\n    margin-top:-15px;\r\n   font-size: 10px;\n}\n.navbar[data-v-95102a1e] {\r\n    display: none;\n}\n.m_logo[data-v-95102a1e]{\r\n    height: 80px;\n}\n.print_info_container[data-v-95102a1e]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px  !important;\r\n    margin-top: 20px;\n}\n.col-sm-1[data-v-95102a1e]{\r\n    display: none;\n}\n.address_line[data-v-95102a1e]{\r\n  line-height: 15px;\n}\np[data-v-95102a1e]{ \r\n    line-height: 16px;\r\n    font-size: 14px;\n}\n.logo[data-v-95102a1e]{\r\n      width: 40% !important;\n}\n.description[data-v-95102a1e]{\r\n   width: 40%  !important;\n}\n.col-lg-2[data-v-95102a1e] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-95102a1e] {\r\n    display: block;\n}\n.box[data-v-95102a1e] {\r\n    border-top: none;\n}\nfooter[data-v-95102a1e] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-95102a1e] {\r\n    display: none;\n}\n}\nsmall.badge.badge-danger[data-v-95102a1e] {\r\n    display: flex;\r\n    background: red;\r\n    width: 63px;\r\n    flex-direction: row;\n}\nsmall.badge.badge-success[data-v-95102a1e] {\r\n    display: flex;\r\n    background: green;\r\n    width: 63px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true& ***!
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
      _c("admin-main"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-wrapper" },
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
          _c("section", { staticClass: "content-header" }),
          _vm._v(" "),
          _c("section", { staticClass: "content" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-11" }, [
                  _c("div", { staticClass: "box box-primary" }, [
                    _c("div", { staticClass: "box-header" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "row print_info_container" }, [
                        _c("div", { staticClass: "col-md-1 col-sm-1" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-3 col-sm-3 description" },
                          [
                            _c("div", [
                              _c("p", [
                                _vm._v(
                                  "Name: " +
                                    _vm._s(_vm.order.customer.name) +
                                    "  "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(" \n                      Mobile No: "),
                                _c("strong", [
                                  _vm._v(
                                    " " + _vm._s(_vm.order.cutomer_phone) + " "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "address_line" }, [
                                _vm._v(
                                  "\n                      Address: \n                      \n                      "
                                ),
                                _c("span", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.order.customer.address) +
                                      "\n                      "
                                  )
                                ]),
                                _vm._v(" "),
                                _vm.order.sub_city
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s("," + _vm.order.sub_city.name)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("strong", [
                                  _vm._v(
                                    "\n                         " +
                                      _vm._s("," + _vm.order.city.name) +
                                      "\n                       "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v("Invoice No: "),
                                _c("strong", [
                                  _vm._v(
                                    " " + _vm._s(_vm.order.invoice_no) + " "
                                  )
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-4 col-sm-4 address",
                            staticStyle: { "margin-left": "27px" }
                          },
                          [
                            _vm.order.order_type == 4 &&
                            Object.keys(_vm.order.reseller_order_details).length
                              ? _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Reseller Commision")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticStyle: { display: "flex" } },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "reseller_order_commision"
                                        },
                                        domProps: {
                                          value:
                                            _vm.order.reseller_order_details
                                              .total_amount
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary text-uppercase",
                                          on: {
                                            click: _vm.updateResellerCommision
                                          }
                                        },
                                        [_vm._v("update")]
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-1 col-sm-1" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-1" }),
                        _vm._v(" "),
                        _vm.isLoading
                          ? _c("h1", [
                              _c("i", { staticClass: "fa fa-spin fa-spinner" })
                            ])
                          : _c("div", { staticClass: "col-lg-10" }, [
                              _c("table", { staticClass: "table" }, [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [_vm._v("#")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Product")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Image")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Size")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("P_code")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Qty")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Price")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Total")]),
                                    _vm._v(" "),
                                    _vm.order.status == 4 ? _c("th") : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.items, function(item, index) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(index + 1) +
                                              "\n                           \n                          "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(item.product.name) +
                                              "\n                             "
                                          ),
                                          _vm.order.status == 4 ||
                                          _vm.order.status == 5
                                            ? _c("div", [
                                                item.status == 2
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "badge badge-danger"
                                                      },
                                                      [_vm._v("Returned")]
                                                    )
                                                  : _vm._e()
                                              ])
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          item.product.product_image.length > 0
                                            ? _c("img", {
                                                staticStyle: {
                                                  width: "60px",
                                                  height: "50px"
                                                },
                                                attrs: {
                                                  src:
                                                    _vm.base_url +
                                                    item.product
                                                      .product_image[0]
                                                      .product_image
                                                }
                                              })
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            item.variant
                                              ? _c("b", [
                                                  _vm._v(
                                                    "[" +
                                                      _vm._s(
                                                        item.variant.name
                                                      ) +
                                                      "]"
                                                  )
                                                ])
                                              : _c("b", [_vm._v("-")])
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(item.product.product_code)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.quantity))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.price))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(item.quantity * item.price)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.order.status == 4 &&
                                        item.status == 1
                                          ? _c("td", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-danger",
                                                  staticStyle: {
                                                    cursor: "pointer"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.itemReturn(
                                                        item.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Return")]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    }),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(0),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.total))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.discount))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.paid))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(_vm.order.shipping_cost)
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.order.total) -
                                                (parseInt(_vm.order.discount) +
                                                  parseInt(_vm.order.paid)) +
                                                parseInt(
                                                  _vm.order.shipping_cost
                                                )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ],
                                  2
                                )
                              ])
                            ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-2",
                            staticStyle: {
                              "margin-left": "27px",
                              "text-align": "center"
                            }
                          },
                          [
                            _vm.order.approved_by != null
                              ? _c(
                                  "h6",
                                  { staticStyle: { "margin-bottom": "0" } },
                                  [_vm._v(_vm._s(_vm.order.approved_by.name))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row bottomBtn" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success print",
                              on: {
                                click: function($event) {
                                  return _vm.print(_vm.order.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-print" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning back",
                              on: { click: _vm.back }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.order.status != 5 && _vm.order.status != 4
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-success back",
                                  attrs: {
                                    to: {
                                      name: "orderEdit",
                                      params: { id: _vm.order.id }
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit" })]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Sub Total")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Discount")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Paid")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Shiiping_cost")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Amount Due")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      { staticStyle: { "border-top": "2px dotted #000", "margin-top": "25" } },
      [_c("strong", [_vm._v("Approved By")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,n,a),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),l=Object.assign({},i,r);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};i(0);u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,i);t.$loading=n,t.prototype.$loading=n};e.default=u}]).default}));

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=95102a1e&scoped=true& */ "./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95102a1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=95102a1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);