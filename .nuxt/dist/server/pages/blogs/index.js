exports.ids = [4];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("05485d60", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4a23d18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4a23d18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4a23d18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4a23d18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4a23d18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{padding-top:100px;padding-bottom:100px}.card-image>img{height:10rem;width:100%;-o-object-fit:cover;object-fit:cover}.card-image{display:block;padding:.5em}.card-image.is-loaded{filter:none;transition:filter 1s}.card-list{display:flex;flex-direction:column}.card,.card-list{align-items:center}.card{display:block;width:60%;height:30%;margin:1rem;font-size:1rem;text-decoration:none;background-color:#fff}.card,.card:hover{transition:all .5s ease}.card:hover{transform:translateY(-.5rem) scale(1.0125);box-shadow:0 .5em 3rem -1rem rgba(0,0,0,.5)}.card-description{display:block;padding:1em .5em}.card-description>h2{margin:0 0 .5em}.card-description>p{margin:0}a.card-description{text-decoration:none;color:#4b4b4b}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/index.vue?vue&type=template&id=a4a23d18&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, _vm._l(_vm.blogs, function (b) {
    return _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<ul class=\"card-list\">", "</ul>", [_vm._ssrNode("<li class=\"card\">", "</li>", [_c('nuxt-link', {
      staticClass: "card-image",
      attrs: {
        "to": '/blogs/' + b.slug
      }
    }, [_c('img', {
      staticClass: "p-article-item__img",
      attrs: {
        "src": b.img,
        "alt": b.title + ' サムネイル'
      }
    })]), _vm._ssrNode(" "), _c('nuxt-link', {
      staticClass: "card-description",
      attrs: {
        "to": '/blogs/' + b.slug
      }
    }, [_c('h2', [_vm._v(_vm._s(b.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(b.date))])])], 2)])]);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blogs/index.vue?vue&type=template&id=a4a23d18&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/index.vue?vue&type=script&lang=js&
/* harmony default export */ var blogsvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const query = await $content('blogs' || false).sortBy('date', 'desc');
    const blogs = await query.fetch();
    return {
      blogs
    };
  }
});
// CONCATENATED MODULE: ./pages/blogs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogsvue_type_script_lang_js_ = (blogsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blogs/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "213951cc"
  
)

/* harmony default export */ var blogs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map