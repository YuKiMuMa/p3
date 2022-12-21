exports.ids = [3];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56f164d6", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_79b34634_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_79b34634_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_79b34634_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_79b34634_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_79b34634_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "hr{border:solid #000;border-width:2px 0 0;height:1px;padding-bottom:30px}img{width:100%;animation:fadeIn .7s cubic-bezier(.33,1,.68,1) 1 forwards}.youtube{display:block;margin:0 auto;max-width:100%}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.bb{padding:100px;display:flex;width:100%}.bb,.main{background-color:#fff}.main{width:70%;flex-direction:column;align-items:center}.content{padding:2%}.side{width:30%}.sin{position:sticky;top:100px;width:300px;height:auto;background-color:#fff;margin-left:30px;text-decoration:none;background-color:#f2f4f7}.toc{padding:20px}.toc .toclnk{-webkit-text-decoration-line:none;text-decoration-line:none;color:#000}@media screen and (max-width:768px){.bb{display:block;padding:100px;background-color:#fff}.bb,.main{width:100%}.side{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_slug.vue?vue&type=template&id=79b34634&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bb"
  }, [_vm._ssrNode("<div class=\"main\">", "</div>", [_vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<article>", "</article>", [_vm._ssrNode("<h1>" + _vm._ssrEscape(_vm._s(_vm.blogs.title)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(_vm.blogs.date)) + "</p> <hr> "), _c('nuxt-content', {
    attrs: {
      "document": _vm.blogs
    }
  })], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"side\">", "</div>", [_vm._ssrNode("<div class=\"sin\">", "</div>", [_vm._ssrNode("<div class=\"toc\">", "</div>", [_vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.blogs.toc, function (link) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, {
      'toc2': link.depth === 2,
      'toc3': link.depth === 3
    }) + ">", "</li>", [_c('NuxtLink', {
      staticClass: "toclnk",
      attrs: {
        "to": `#${link.id}`
      }
    }, [_vm._v(_vm._s(link.text))])], 1);
  }), 0)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blogs/_slug.vue?vue&type=template&id=79b34634&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  async asyncData({
    $content,
    params
  }) {
    const blogs = await $content('blogs', params.slug || 'index').fetch();
    return {
      blogs
    };
  }
});
// CONCATENATED MODULE: ./pages/blogs/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blogs/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f82b084"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map