exports.ids = [2];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("43c79d6a", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4662eca8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4662eca8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4662eca8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4662eca8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4662eca8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".artwork__content[data-v-4662eca8]{width:80%;margin:0 auto}.artwork__content h2[data-v-4662eca8]{font-size:50px;font-weight:700;text-align:center;margin:120px 0 50px;position:relative;z-index:0;color:#7c7c7c}@media screen and (max-width:576px){.artwork__content h2[data-v-4662eca8]{font-size:36px}}.artwork__content h2[data-v-4662eca8]:before{content:\"artworks\";position:absolute;top:30%;left:50%;transform:translate(-50%,-70%);z-index:-1;font-size:130px;font-weight:700;color:rgba(253,229,229,.8)}@media screen and (max-width:576px){.artwork__content h2[data-v-4662eca8]:before{font-size:80px}}.artwork__content-box[data-v-4662eca8]{display:flex;justify-content:space-between;flex-wrap:wrap}@media screen and (max-width:680px){.artwork__content-box[data-v-4662eca8]{justify-content:center}}.artwork__content-box p[data-v-4662eca8]{margin:0 0 30px}.artwork .footer[data-v-4662eca8]{height:250px;background:rgba(235,136,228,.6)}.artwork .footer .flex[data-v-4662eca8]{display:flex;justify-content:space-between;flex-wrap:wrap}.artwork .footer .flex li a i[data-v-4662eca8]{color:#7c7c7c;transition:.5s}.artwork .footer .flex li a .fa-twitter[data-v-4662eca8]:hover{color:#1da1f2}.artwork .footer .flex li a .fa-instagram[data-v-4662eca8]:hover{color:#d93177}.artwork .footer .flex li a .fa-facebook[data-v-4662eca8]:hover{color:#3b5998}.artwork .footer .sns[data-v-4662eca8]{width:200px;padding-top:30px;margin:auto;color:#7c7c7c}.artwork .footer .footer-text[data-v-4662eca8]{margin:30px 0;text-align:center;font-size:20px;color:#fff;line-height:1.6}.artwork .footer .footer-sub-text[data-v-4662eca8]{text-align:center;font-size:25px;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/artwork/index.vue?vue&type=template&id=4662eca8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"artwork"},[_vm._ssrNode("<section class=\"artwork__mv\" data-v-4662eca8><p data-v-4662eca8><img src=\"/artwork/mv.png\" alt width=\"100%\" height=\"300\" data-v-4662eca8></p></section> <section class=\"artwork__content\" data-v-4662eca8><h2 data-v-4662eca8>作品一覧</h2> <div class=\"artwork__content-box\" data-v-4662eca8><p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p> <p data-v-4662eca8><img src=\"/artwork/test.png\" alt width=\"300\" height=\"200\" data-v-4662eca8></p></div></section> <footer class=\"footer\" data-v-4662eca8><ul class=\"flex sns\" data-v-4662eca8><li class=\"sns-item\" data-v-4662eca8><a href=\"https://twitter.com/yuko78568701\" data-v-4662eca8><i class=\"fab fa-twitter fa-3x\" data-v-4662eca8></i></a></li> <li class=\"sns-item\" data-v-4662eca8><a href=\"https://www.instagram.com/yuko.ogawa.5891/?hl=ja\" data-v-4662eca8><i class=\"fab fa-instagram fa-3x\" data-v-4662eca8></i></a></li> <li class=\"sns-item\" data-v-4662eca8><a href data-v-4662eca8><i class=\"fab fa-facebook fa-3x\" data-v-4662eca8></i></a></li></ul> <p class=\"footer-text\" data-v-4662eca8>お問い合わせは各種SNSのDMでも承っております。</p> <p class=\"footer-sub-text\" data-v-4662eca8>©️Yuu Sasara office</p></footer>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/artwork/index.vue?vue&type=template&id=4662eca8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/artwork/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var artworkvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "ささら優 / 挿絵作品一覧",
      titleTemplate: "",
      meta: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        hid: "description",
        name: "description",
        content: "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
      }, {
        hid: "keywords",
        name: "keywords",
        content: "ささらゆう, ささら優, パステル画, パステル, イラストレーター, イラスト, 絵"
      }, {
        hid: "og:image",
        name: "og:image",
        content: "/images/mv.png"
      }, {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/images/fv.jpg"
      }, {
        hid: "og:title",
        name: "og:title",
        content: "ささら優 ポートフォリオサイト"
      }, {
        hid: "twitter:title",
        name: "twitter:title",
        content: "ささら優 ポートフォリオサイト"
      }, {
        hid: "og:description",
        name: "og:description",
        content: "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: "ささら優(ゆう)のポートフォリオサイトです。パステル教室を開催しつつイラスト販売などアーティスト活動をしています。"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/artwork/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_artworkvue_type_script_lang_js_ = (artworkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/artwork/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_artworkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4662eca8",
  "641d8388"
  
)

/* harmony default export */ var artwork = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map