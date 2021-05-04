(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Loan"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getLoans();
  },
  data: function data() {
    return {
      loan: {},
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: ""
    };
  },
  methods: {
    getLoans: function getLoans() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/loan?page=" + page).then(function (resp) {
        console.log(resp);

        if (resp.data.success == "OK") {
          _this.loan = resp.data.loan;
          _this.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    totalAmount: function totalAmount(loan) {
      //  console.log(typeof loan)
      var total = 0; // loan.forEach(ele => {
      //     total +=parseFloat(ele.amount);
      // });

      Object.keys(loan).forEach(function (key) {
        console.log(key);
      });
      return total;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "loanAdd" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-8 col-lg-offset-1" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.loading
                            ? _c("h1", { staticClass: "text-center" }, [
                                _c("i", {
                                  staticClass: "fa fa-spin fa-spinner"
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.loan.data, function(items, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "LoanerDetails",
                                          params: { id: items.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(items.name) +
                                          "\n                        \n                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(items.mobile_no))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(items.address))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(items.taken_amount))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(items.paid_amount))])
                            ])
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.loan },
                            on: { "pagination-change-page": _vm.getLoans }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-6 mt-1",
                          staticStyle: {
                            "margin-top": "25px",
                            "text-align": "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v("\n                      Showing "),
                            _c("strong", [_vm._v(_vm._s(_vm.loan.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.loan.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.loan.total))]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
                  ])
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Loaner")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Loan table")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Mobile Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Taken Amount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Paid Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/loan/Loan.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/loan/Loan.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loan.vue?vue&type=template&id=0ef03114&scoped=true& */ "./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true&");
/* harmony import */ var _Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loan.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ef03114",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/loan/Loan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/loan/Loan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loan.vue?vue&type=template&id=0ef03114&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/loan/Loan.vue?vue&type=template&id=0ef03114&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loan_vue_vue_type_template_id_0ef03114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);