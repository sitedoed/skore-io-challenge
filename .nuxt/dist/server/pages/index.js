exports.ids = [1];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=baab0722&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "p-8"
  }, [_vm._ssrNode("<h1>Skore-io Challenge</h1> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<section>", "</section>", _vm._l(_vm.contents, function (item) {
    return _vm._ssrNode("<article>", "</article>", [_vm._ssrNode("<h2 class=\"font-bold\">" + _vm._ssrEscape(_vm._s(item.title)) + "</h2> <div><p>" + _vm._ssrEscape(_vm._s(item.description)) + "</p> <p><strong>Tipo: </strong>" + _vm._ssrEscape(" " + _vm._s(item.type)) + "</p> <p>" + _vm._ssrEscape("Link: " + _vm._s(item.link)) + "</p> <p>" + _vm._ssrEscape("Embeddable: " + _vm._s(item.embeddable)) + "</p> <p>" + _vm._ssrEscape("Download: " + _vm._s(item.allow_download)) + "</p> <p>" + _vm._ssrEscape("Data de criação: " + _vm._s(item.created_at)) + "</p> <p>" + _vm._ssrEscape("Última atualização: " + _vm._s(item.updated_at)) + "</p></div> "), _c('NuxtLink', {
      attrs: {
        "to": `/item/${item.id}`
      }
    }, [_vm._v("\n            Read more\n          ")])], 2);
  }), 0)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=baab0722&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(33);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  apollo: {
    contents: external_graphql_tag_default.a`
      query contents {
        contents {
          id
          title
          description
          type
          url
          embeddable
          allow_download
          created_at
          updated_at
        }
      }
    `
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "50cf305e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map