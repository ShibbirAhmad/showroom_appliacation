(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./resources/js/components/manager/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    console.log("manager dashboard mounted");
    this.DashboardData();
  },
  data: function data() {
    return {
      products: "",
      sales: "",
      balance: ""
    };
  },
  methods: {
    DashboardData: function DashboardData() {
      var _this = this;

      axios.get('/api/get/dashboard/data').then(function (resp) {
        console.log(resp);
        _this.products = resp.data.products;
        _this.sales = resp.data.sales;
        _this.balance = resp.data.balance;
      });
    }
  },
  components: {
    navbar: _Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.small-box[data-v-66d7ced7]{\r\n  height: 80px;\n}\n.small-box>.small-box-footer[data-v-66d7ced7] {\r\n  padding:0px;\r\n  margin-top: -93px;\n}\n.small-box>.inner[data-v-66d7ced7] {\r\n    padding: 5px 15px;\n}\n.custom-box[data-v-66d7ced7] {\r\n  background: #fff;\r\n  padding: 13px;\r\n  height: 215px;\r\n  box-shadow: 3px 3px 3px #ddd;\r\n  border-radius: 6px;\r\n  margin-bottom: 10px;\n}\n.custom-box-body strong[data-v-66d7ced7] {\r\n  position: absolute;\r\n  right: 10%;\r\n  color: blue;\n}\n.custom-box-footer[data-v-66d7ced7] {\r\n  background: #00a65a;\r\n  color: #fff;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.sales.today_sales) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Today Sales")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_sale" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.sales.yesterday_sales) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Yesteday Sales")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_sale" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.sales.retail_sales) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Retail Sales")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_sale" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.sales.whole_sales) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Whole Sales")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_sale" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.sales.total_sales) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(" Total Sales")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_sale" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(" " + _vm._s(_vm.products.product_total) + " ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Total products")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "showroom_product" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h3", [
                      _vm._v(
                        " " + _vm._s(_vm.products.pending_transaction) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Pending Transaction ")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: { name: "product_transaction" } }
                    },
                    [
                      _vm._v(" More info "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("h1", { staticStyle: { "margin-left": "15px" } }, [
              _vm._v("Accounts Analysis ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "custom-box" }, [
                _c("div", { staticClass: "custom-box-body" }, [
                  _c("h4", [
                    _vm._v("\r\n                  In Cash: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_credit_cash)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(personal):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.today_credit_bkash_personal)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(merchant):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.today_credit_bkash_merchant)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\r\n                  In Bank: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_credit_bank)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\r\n                  Total: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_credit)))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "custom-box" }, [
                _c("div", { staticClass: "custom-box-body" }, [
                  _c("h4", [
                    _vm._v("\r\n                  In Cash: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_debitt_cash)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(personal):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(parseInt(_vm.balance.today_debit_bkash_personal))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(merchant):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(parseInt(_vm.balance.today_debit_bkash_merchant))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\r\n                  In Bank: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_debit_bank)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v("\r\n                  Total: "),
                    _c("strong", [
                      _vm._v(_vm._s(parseInt(_vm.balance.today_debit)))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "custom-box" }, [
                _c("div", { staticClass: "custom-box-body" }, [
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Cash:\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.total_credit_cash) -
                            parseInt(_vm.balance.total_debitt_cash)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(personal):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.total_credit_bkash_personal) -
                            parseInt(_vm.balance.total_debit_bkash_personal)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bkash(merchant):\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.total_credit_bkash_merchant) -
                            parseInt(_vm.balance.total_debit_bkash_merchant)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  In Bank:\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.total_credit_bank) -
                            parseInt(_vm.balance.total_debit_bank)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "\r\n                  Total:\r\n                  "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          parseInt(_vm.balance.total_credit) -
                            parseInt(_vm.balance.total_debit)
                        )
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("h1", { staticStyle: { "margin-left": "15px" } }, [
              _vm._v("Stock")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-xs-6" }, [
              _c("div", { staticClass: "small-box bg-green" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", {}, [
                    _vm._v(_vm._s(_vm.products.product_stock_qty))
                  ]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Total Stock Quantity")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-xs-6" }, [
              _c("div", { staticClass: "small-box bg-green" }, [
                _c("div", { staticClass: "inner" }, [
                  _c("h3", {}, [
                    _vm._v(_vm._s(_vm.products.product_stock_amount))
                  ]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Total Stock Amount")])
                ])
              ])
            ])
          ])
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
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Summary overview")]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v(" Home")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today credit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today debit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("total balance")
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/components/manager/Dashboard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/manager/Dashboard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true& */ "./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& */ "./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66d7ced7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/manager/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=style&index=0&id=66d7ced7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_66d7ced7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/manager/Dashboard.vue?vue&type=template&id=66d7ced7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_66d7ced7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);