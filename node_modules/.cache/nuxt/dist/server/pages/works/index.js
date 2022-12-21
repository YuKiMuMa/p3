exports.ids = [8];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0e375287", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13711c91_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13711c91_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13711c91_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13711c91_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13711c91_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{padding-top:100px;padding-bottom:100px}#posts{padding-left:10%;padding-right:10%;text-align:center;font-size:0;animation:appear 1s}#posts .post{position:relative;height:200px;margin:0;border:3px solid #fff;display:inline-block;background-size:cover;background-position:50%;overflow:hidden}#posts .post,#posts .post img{width:100%;transition:all .3s ease-out}#posts .post img{padding:0;height:100%;-o-object-fit:cover;object-fit:cover}#posts .post:hover img{transform:scale(1.1);transition:all .8s}#posts .post h2{color:#fff;position:absolute;bottom:50px;margin:0;font-size:1.5vw;line-height:.8;font-family:\"MuseoSansRounded-900\",\"Arial Black\",sans-serif;padding:0 30px;text-transform:uppercase;text-align:left;z-index:1000;opacity:0}#posts .post:hover h2{opacity:1;transition:all .8s}#posts .post p{color:#fff;position:absolute;bottom:25px;margin:0;font-size:.8vw;line-height:.8;padding:0 30px;text-transform:capitalize;text-align:left;z-index:1000;opacity:0}#posts .post:hover p{opacity:1;transition:all .8s}@media (min-width:34em){#posts .post{width:50%}}@media (min-width:48em){#posts .post{width:25%}}@media (min-width:62em){#posts .post{width:33.33333333%}}@media (min-width:75em){#posts .post{width:25%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works/index.vue?vue&type=template&id=13711c91&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<section id=\"posts\">", "</section>", _vm._l(_vm.works, function (w) {
    return _vm._ssrNode("<div class=\"post\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/works/' + w.slug
      }
    }, [_c('img', {
      staticClass: "item__img",
      attrs: {
        "src": w.img,
        "alt": w.title + ' サムネイル'
      }
    }), _vm._v(" "), _c('h2', [_vm._v(_vm._s(w.title))]), _vm._v(" "), _c('p', {
      staticClass: "lead"
    }, [_vm._v(_vm._s(w.date))])])], 1);
  }), 0)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/works/index.vue?vue&type=template&id=13711c91&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works/index.vue?vue&type=script&lang=js&
/* harmony default export */ var worksvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const query = await $content('works' || false).sortBy('date', 'desc');
    const works = await query.fetch();
    return {
      works
    };
  }
});
// CONCATENATED MODULE: ./pages/works/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_worksvue_type_script_lang_js_ = (worksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/works/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_worksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10220efd"
  
)

/* harmony default export */ var works = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map