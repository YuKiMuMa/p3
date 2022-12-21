exports.ids = [5];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      username: '',
      katakana: '',
      useremail: '',
      message: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: ''
    };
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit
      };
    }
  },
  methods: {
    onSubmit() {
      if (this.isSending) {
        return;
      }
      this.isSending = true;
      this.completeMessage = '送信処理中…';
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      params.append('username', this.username);
      params.append('katakana', this.katakana);
      params.append('useremail', this.useremail);
      params.append('message', this.message);
      if (this.botField) {
        params.append('bot-field', this.botField);
      }
      this.$axios.$post('/', params).then(() => {
        this.completeMessage = 'お問い合わせを送信しました！';
        this.resetForm();
        this.isSubmit = true;
      }).catch(err => {
        this.completeMessage = 'お問い合わせの送信が失敗しました';
        this.isError = true;
      }).finally(() => {
        this.isSending = false;
      });
    },
    resetForm() {
      this.username = '';
      this.katakana = '';
      this.useremail = '';
      this.message = '';
      this.isError = false;
      this.$refs.observer.reset();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)["URLSearchParams"]))

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e89d6d4", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a8ca838_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a8ca838_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a8ca838_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a8ca838_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a8ca838_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{padding-top:100px;padding-bottom:100px;margin:0 auto;min-height:100vh;display:flex;flex-flow:column;justify-content:center;align-items:center;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=template&id=3a8ca838&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"title\"><h1>CONTACT2</h1></div> "), _c('validation-observer', {
    ref: "observer",
    staticClass: "p-contact__form",
    class: _vm.sendingClass,
    attrs: {
      "tag": "form",
      "name": "contact",
      "method": "POST",
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field"
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        invalid,
        validated
      }) {
        return [_c('div', {
          staticClass: "p-contact__item"
        }, [_c('label', {
          attrs: {
            "for": "username"
          }
        }, [_vm._v("お名前")]), _vm._v(" "), _c('validation-provider', {
          attrs: {
            "rules": "required|max:100",
            "name": "お名前"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.username,
                  expression: "username"
                }],
                attrs: {
                  "type": "text",
                  "id": "username",
                  "name": "username",
                  "autocomplete": "name"
                },
                domProps: {
                  "value": _vm.username
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.username = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('p', {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: errors.length,
                  expression: "errors.length"
                }],
                staticClass: "p-contact__error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "p-contact__item"
        }, [_c('label', {
          attrs: {
            "for": "katakana"
          }
        }, [_vm._v("フリガナ")]), _vm._v(" "), _c('validation-provider', {
          attrs: {
            "rules": "required|katakana",
            "name": "フリガナ"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.katakana,
                  expression: "katakana"
                }],
                attrs: {
                  "type": "text",
                  "id": "katakana",
                  "name": "katakana"
                },
                domProps: {
                  "value": _vm.katakana
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.katakana = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('p', {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: errors.length,
                  expression: "errors.length"
                }],
                staticClass: "p-contact__error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "p-contact__item"
        }, [_c('label', {
          attrs: {
            "for": "useremail"
          }
        }, [_vm._v("メールアドレス")]), _vm._v(" "), _c('validation-provider', {
          attrs: {
            "rules": "required|email|max:256",
            "name": "メールアドレス"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.useremail,
                  expression: "useremail"
                }],
                attrs: {
                  "type": "text",
                  "id": "useremail",
                  "name": "useremail",
                  "autocomplete": "email"
                },
                domProps: {
                  "value": _vm.useremail
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.useremail = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('p', {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: errors.length,
                  expression: "errors.length"
                }],
                staticClass: "p-contact__error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          staticClass: "p-contact__item"
        }, [_c('label', {
          attrs: {
            "for": "message"
          }
        }, [_vm._v("お問い合わせ内容")]), _vm._v(" "), _c('validation-provider', {
          attrs: {
            "rules": "required|max:1000",
            "name": "お問い合わせ内容"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('textarea', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.message,
                  expression: "message"
                }],
                attrs: {
                  "id": "message",
                  "name": "message"
                },
                domProps: {
                  "value": _vm.message
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.message = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('p', {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: errors.length,
                  expression: "errors.length"
                }],
                staticClass: "p-contact__error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('div', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: false,
            expression: "false"
          }],
          staticClass: "p-contact__item"
        }, [_c('label', {
          attrs: {
            "for": "message"
          }
        }, [_vm._v("スパムでない場合は空欄")]), _vm._v(" "), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.botField,
            expression: "botField"
          }],
          attrs: {
            "type": "text",
            "name": "bot-field"
          },
          domProps: {
            "value": _vm.botField
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.botField = $event.target.value;
            }
          }
        })]), _vm._v(" "), _c('div', {
          staticClass: "p-contact__submit"
        }, [_c('button', {
          attrs: {
            "type": "submit",
            "disabled": invalid || !validated
          }
        }, [_vm._v("送信")])])];
      }
    }])
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=template&id=3a8ca838&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=script&lang=js&
var contactvue_type_script_lang_js_ = __webpack_require__(41);

// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d5d02db"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map