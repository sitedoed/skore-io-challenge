(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{214:function(t,e,n){"use strict";n.r(e);var o={name:"Header",data:function(){return{menuActive:!1}},methods:{openMenu:function(){this.menuActive=!0},closeMenu:function(){this.menuActive=!1}}},r=(n(217),n(39)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("header",[e("nav",{staticClass:"container"},[t._m(0),t._v(" "),e("img",{attrs:{alt:"Expandir Menu",id:"menu-button",src:n(216)},on:{click:t.openMenu}}),t._v(" "),t.menuActive?e("div",{attrs:{id:"menu-overlay"},on:{click:t.closeMenu}}):t._e(),t._v(" "),e("div",{class:{active:t.menuActive},attrs:{id:"menu-items"}},[t._m(1)])])])}),[function(){var t=this._self._c;return t("a",{attrs:{href:"/"}},[t("img",{attrs:{id:"logo",src:"",alt:"logo"}})])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/challenge"}},[t._v("Challenge Rules")])])])}],!1,null,"5a8ba655",null);e.default=component.exports;installComponents(component,{Header:n(214).default})},215:function(t,e,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("5f86643b",content,!0,{sourceMap:!1})},216:function(t,e,n){t.exports=n.p+"img/toogle-btn.59498ec.png"},217:function(t,e,n){"use strict";n(215)},218:function(t,e,n){var o=n(108)(!1);o.push([t.i,"header[data-v-5a8ba655]{background-color:var(--color-background-nav);width:100%;justify-content:center}header[data-v-5a8ba655],nav[data-v-5a8ba655]{height:60px;display:flex;align-items:center}nav[data-v-5a8ba655]{justify-content:space-between}#logo[data-v-5a8ba655]{width:120px}#menu-button[data-v-5a8ba655]{width:30px}#menu-overlay[data-v-5a8ba655]{position:fixed;top:0;left:0;width:40%;height:100vh;background-color:rgba(0,0,153,.6);opacity:.8}#menu-logo[data-v-5a8ba655]{width:110px;margin-top:30px}#menu-items[data-v-5a8ba655]{position:fixed;top:0;right:0;background-color:var(--color-background-nav);width:60%;height:100vh;display:none;flex-direction:column;justify-content:flex-start;align-items:center}#menu-items.active[data-v-5a8ba655]{display:flex}ul[data-v-5a8ba655]{list-style:none;text-align:center}ul li[data-v-5a8ba655]{margin:20px 0}ul li a[data-v-5a8ba655]{color:var(--color-text-light)}@media (min-width:700px){#menu-button[data-v-5a8ba655],#menu-logo[data-v-5a8ba655],#menu-overlay[data-v-5a8ba655]{display:none}#menu-items[data-v-5a8ba655]{display:flex;position:static;height:50px;width:auto}ul[data-v-5a8ba655]{display:flex;height:60px;align-items:center}ul li[data-v-5a8ba655]{margin:0 0 0 20px}}",""]),t.exports=o},219:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("f52d43e0",content,!0,{sourceMap:!1})},220:function(t,e,n){var o=n(108)(!1);o.push([t.i,":root{--color-background:#f3f3f3;--color-background-nav:#0c0;--color-background-home:#e6ffe6;--color-text-light:#ededed;--color-text-title:#f55;--color-text-dark:#3d3d3d}*{padding:0;margin:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}body,html{background-color:#f3f3f3}a{text-decoration:none;transition:opacity .2s}a:hover{opacity:.7}.container{width:90%}main{width:100%;height:-20vh;display:flex}p{padding:10px}article{margin-bottom:40px}",""]),t.exports=o},221:function(t,e,n){"use strict";function o(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return o}))},230:function(t,e,n){"use strict";n.r(e);var o,r=n(221),l=n(62),d=n(214),c=(n(219),{data:function(){return{contentId:"627150a0-c0dc-45d5-8d4c-f8a69e38b3cf"}},apollo:{getContent:{query:Object(l.a)(o||(o=Object(r.a)(["\n          query ($id: String!){\n            getContent (id: $id) {\n              id\n              title\n              description\n              type\n              url\n              embeddable\n              allow_download\n              created_at\n              updated_at\n              __typename\n            }\n          }\n        "]))),variables:function(){return{id:this.$route.params.id}}}},components:{Header:d.default}}),v=n(39),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),e("section",[t.getContent?e("article",[e("h1",[t._v("Título: "+t._s(t.getContent.title)+" ")]),t._v(" "),e("p",[e("strong",[t._v("Descrição: ")]),t._v(t._s(t.getContent.description))]),t._v(" "),"image"===t.getContent.type?e("img",{attrs:{src:t.getContent.url,alt:t.getContent.type,width:"50%"}}):t._e(),t._v(" "),"iframe"===t.getContent.type?e("iframe",{attrs:{width:"560",height:"315",src:t.getContent.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e(),t._v(" "),"link"===t.getContent.type||"document"===t.getContent.type?e("a",{attrs:{href:t.getContent.url,target:"_blank",rel:"noopener"}},[t._v("Link Externo")]):t._e(),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Tipo de conteúdo: ")]),t._v(" "+t._s(t.getContent.type))]),t._v(" "),e("li",[e("strong",[t._v("Url:")]),t._v(" "+t._s(t.getContent.url))]),t._v(" "),e("li",[e("strong",[t._v("Embeddable:")]),t._v(" "+t._s(t.getContent.embeddable))]),t._v(" "),e("li",[e("strong",[t._v("Download?")]),t._v(" "+t._s(t.getContent.allow_download))]),t._v(" "),e("li",[e("strong",[t._v("Criado em:")]),t._v(" "+t._s(t.getContent.created_at))]),t._v(" "),e("li",[e("strong",[t._v("Atualizado em:")]),t._v(" "+t._s(t.getContent.updated_at))]),t._v(" "),e("li",[e("strong",[t._v("Typename")]),t._v(" "+t._s(t.getContent.__typename))])])]):t._e()]),t._v(" "),e("nuxt-child")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(214).default})}}]);