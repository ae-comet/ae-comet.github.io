!function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],f=0,m=[];f<o.length;f++)s=o[f],i[s]&&m.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);m.length;)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={1:0,3:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([60,0]),a()}([,,,,,function(t,e,a){"use strict";a.r(e);var r=a(6),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=i.a},function(t,e,a){"use strict";var r=this&&this.__decorate||function(t,e,a,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(n<3?i(s):n>3?i(e,a,s):i(e,a))||s);return n>3&&s&&Object.defineProperty(e,a,s),s},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let n=null;const s=i(a(2)),o=i(a(1)),l=i(a(30));let c=class extends s.default{constructor(){super(...arguments),this.drawer=!1,this.tab=null,this.theme=!0}created(){void 0!==(n=this).$ls.get("theme")?n.theme=n.$ls.get("theme"):n.$ls.set("theme",n.theme),n.$ls.get("lang")?n.$i18n.locale=n.$ls.get("lang"):n.$ls.set("lang",n.$i18n.locale)}mounted(){}onChangeDrawer(){n.drawer=!n.drawer}onChangeLanguage(t){n.$i18n.locale!==t&&(n.$i18n.locale=t,n.$ls.set("lang",n.$i18n.locale))}onChangeTheme(){n.theme=!n.theme,n.$ls.set("theme",n.theme)}};r([a(53).Prop()],c.prototype,"created",null),c=r([o.default({components:l.default})],c),e.default=c},function(t,e,a){"use strict";a.r(e);var r=a(8),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=i.a},function(t,e,a){"use strict";var r=this&&this.__decorate||function(t,e,a,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(n<3?i(s):n>3?i(e,a,s):i(e,a))||s);return n>3&&s&&Object.defineProperty(e,a,s),s},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(2));let s=class extends n.default{constructor(){super(...arguments),this.opts={zoom:17,scrollWheel:!1},this.placeIdx=0,this.panels=[!0,!0,!0,!0,!0,!0]}created(){}mounted(){this.placeIdx=0}changePlace(){1===this.placeIdx?this.placeIdx=0:this.placeIdx++}get placeState(){return`profile.places.${this.placeIdx}`}};s=r([i(a(1)).default],s),e.default=s},function(t,e,a){"use strict";a.r(e);var r=a(10),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=i.a},function(t,e,a){"use strict";var r=this&&this.__decorate||function(t,e,a,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(n<3?i(s):n>3?i(e,a,s):i(e,a))||s);return n>3&&s&&Object.defineProperty(e,a,s),s},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(2));let s=class extends n.default{created(){}mounted(){}};s=r([i(a(1)).default],s),e.default=s},function(t,e,a){"use strict";a.r(e);var r=a(12),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=i.a},function(t,e,a){"use strict";var r=this&&this.__decorate||function(t,e,a,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(n<3?i(s):n>3?i(e,a,s):i(e,a))||s);return n>3&&s&&Object.defineProperty(e,a,s),s},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(2)),s=i(a(54)),o=i(a(38));let l=class extends n.default{constructor(){super(...arguments),this.repos=[],this.articles=[]}created(){this.articles.length>0||s.default.get("https://qiita.com/api/v2/authenticated_user/items",{headers:{Authorization:`Bearer ${o.default.Qiita.appId}`}}).then(t=>{this.articles=t.data}).catch(t=>{}),this.repos.length>0||s.default.get("https://api.github.com/users/hiyoko3/repos").then(t=>{this.repos=t.data}).catch(t=>{})}mounted(){}};l=r([i(a(1)).default({components:{}})],l),e.default=l},function(t,e,a){"use strict";a.r(e);var r=a(14),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e.default=i.a},function(t,e,a){"use strict";var r=this&&this.__decorate||function(t,e,a,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(n<3?i(s):n>3?i(e,a,s):i(e,a))||s);return n>3&&s&&Object.defineProperty(e,a,s),s},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(a(2));let s=class extends n.default{created(){}mounted(){}};s=r([i(a(1)).default],s),e.default=s},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","justify-center":"",id:"resume"}},[a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","github"]}}),t._v("Github Repos")],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.repos,function(e,r){return t.repos.length>0?a("v-flex",{key:"github-repo-"+r,attrs:{xs12:""}},[e.private?t._e():a("v-card",{attrs:{color:"transparent",flat:"",tile:""}},[a("v-card-text",{staticClass:"pa-1"},[a("a",{staticClass:"grey--text subheading",attrs:{href:e.html_url,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","github"]}}),t._v(t._s(e.full_name))],1)])],1)],1):a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)}))],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["far","newspaper"]}}),t._v("Qiita Articles")],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.articles,function(e,r){return t.articles.length>0?a("v-flex",{key:"qiita-article-"+r,attrs:{xs12:""}},[e.private?t._e():a("v-card",{attrs:{color:"transparent",flat:"",tile:""}},[a("v-card-text",{staticClass:"pa-1"},[a("a",{staticClass:"teal--text subheading",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["far","newspaper"]}}),t._v(t._s(e.title))],1)])],1)],1):a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)}))],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","book-open"]}}),t._v(t._s(t.$t("resume.paperTitle")))],1),t._l(t.$t("resume.paper"),function(e,r){return a("v-card",{key:"paper-"+r,staticClass:"pa-3",attrs:{flat:"",tile:""}},[a("div",{staticClass:"title mb-1"},[t._v(t._s(e.title)),a("v-chip",{attrs:{color:"red",label:"",outline:""}},[t._v(t._s(e.tag))])],1),a("div",{staticClass:"subheading grey--text"},[t._v(t._s(e.subtitle))]),a("div",{staticClass:"subheading grey--text"},[t._v(t._s(e.member))])])})],2),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","book-open"]}}),t._v(t._s(t.$t("resume.otherTitle")))],1),t._l(t.$t("resume.other"),function(e,r){return a("v-card",{key:"other-"+r,staticClass:"pa-3",attrs:{flat:"",tile:""}},[a("div",{staticClass:"title mb-1"},[t._v(t._s(e.title)),a("v-chip",{attrs:{color:"red",label:"",outline:""}},[t._v(t._s(e.tag))])],1),a("div",{staticClass:"subheading grey--text"},[t._v(t._s(e.subtitle))]),a("div",{staticClass:"subheading grey--text"},[t._v(t._s(e.member))])])})],2),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","chalkboard-teacher"]}}),t._v(t._s(t.$t("resume.researchTitle")))],1),t._l(t.$t("resume.research"),function(e,r){return a("v-card",{key:"research-"+r,staticClass:"my-3 pa-3",attrs:{hover:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("span",{staticClass:"title"},[t._v(t._s(e.title))])]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(e.images,function(t,e){return a("v-flex",{key:"img-"+e,attrs:{md6:"",xs12:""}},[a("div",{staticClass:"text-xs-center"},[a("img",{attrs:{src:t.src,alt:t.alt,width:"100%",height:"auto"}})])])})),a("div",{staticClass:"body-1 mt-2"},[t._v(t._s(e.abstract))])],1)],1)})],2)],1)},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"","justify-center":"",id:"not-found"}},[e("v-flex",{staticClass:"my-3",attrs:{md8:"",xs12:""}},[e("v-card",{attrs:{height:"300px",hover:"",tile:""}},[e("v-card-title",{attrs:{"primary-title":""}},[e("h3",{staticClass:"headline"},[this._v(this._s(this.$t("base.not_found")))])])],1)],1)],1)},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:t.theme,dark:!t.theme,app:""}},[a("v-toolbar",{attrs:{"scroll-threshold":300,light:t.theme,dark:!t.theme,extended:"",app:"","scroll-off-screen":""}},[a("v-toolbar-title",[t._v(t._s(t.$t("base.title")))]),a("v-spacer"),"ja"!==t.$i18n.locale?a("v-btn",{attrs:{icon:""},on:{click:function(e){t.onChangeLanguage("ja")}}},[a("v-icon",[t._v("g_translate")])],1):a("v-btn",{attrs:{icon:""},on:{click:function(e){t.onChangeLanguage("en")}}},[a("v-icon",[t._v("g_translate")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.onChangeTheme}},[a("v-icon",[t._v("brightness_4")])],1),a("v-tabs",{attrs:{slot:"extension",color:"transparent",light:t.theme,dark:!t.theme,height:"63px",grow:"",centered:"","icons-and-text":""},slot:"extension",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"blue"}}),t._l(t.$t("base.content"),function(e,r){return a("v-tab",{key:"header-"+r,attrs:{to:e.href,href:"#tab-"+r}},[a("span",{staticClass:"caption"},[t._v(t._s(e.name))]),a("v-icon",[t._v(t._s(e.icon))])],1)})],2)],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("router-view")],1)],1)],1),a("v-footer",{attrs:{height:"auto",light:t.theme,dark:!t.theme,app:"",absolute:""}},[a("v-card",{staticClass:"text-xs-center",attrs:{width:"100%",flat:"",tile:""}},[a("v-card-text",t._l(t.$t("base.footer"),function(t,e){return a("v-btn",{key:"link-"+e,staticClass:"mx-2",attrs:{color:"grey",href:t.href,target:"_blank",rel:"noopener noreferrer",icon:"",flat:"",large:""}},[a("font-awesome-icon",{attrs:{size:"lg",icon:["fab",t.icon]}})],1)})),a("v-divider"),a("v-card-text",{staticClass:"pa-2"},[a("span",{staticClass:"mr-3 subheading"},[t._v("© "+t._s((new Date).getFullYear())+" "+t._s(t.$t("base.attribute")))])])],1)],1)],1)},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","justify-center":"",id:"skill"}},[a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[t._v(t._s(t.$t("skill.certificationTitle")))]),a("v-card",{attrs:{tile:"",flat:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.$t("skill.certificationHeader"),items:t.$t("skill.certification"),"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[a("div",{staticClass:"text-xs-center title"},[t._v(t._s(e.header.text))])]}},{key:"items",fn:function(e){return[a("td",[a("div",{staticClass:"text-xs-center subheading"},[t._v(t._s(e.item.date))])]),a("td",[a("div",{staticClass:"text-xs-center subheading"},[t._v(t._s(e.item.name))])])]}}])})],1)],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[t._v(t._s(t.$t("skill.programingTitle")))]),a("v-card",{staticClass:"py-1",attrs:{tile:"",flat:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-start":""}},t._l(t.$t("skill.programing"),function(e,r){return a("v-flex",{key:"programing-"+r,staticClass:"pa-2",attrs:{md3:"",xs6:""}},[a("div",{staticClass:"text-xs-center"},[a("div",{staticClass:"title my-3"}),a("v-progress-circular",{attrs:{color:"blue",size:100,width:15,rotate:360,value:100}},[t._v(t._s(e.name))])],1),a("div",{staticClass:"text-xs-left mt-2"},t._l(e.remark,function(e,r){return a("span",{key:"chip-"+r},[a("v-chip",{attrs:{color:"blue",label:"",outline:""}},[t._v(t._s(e))])],1)}))])}))],1)],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"headline mb-4 text-xs-left"},[t._v(t._s(t.$t("skill.developTitle")))]),t._l(t.$t("skill.develops"),function(e,r){return a("v-card",{key:"develop-"+r,staticClass:"py-1",attrs:{tile:"",flat:""}},[a("div",{staticClass:"text-xs-left pa-2 blue--text"},[t._v(t._s(e.name))])])})],2)],1)},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","justify-center":"",id:"profile"}},[a("v-flex",{attrs:{md10:"",xs12:""}},[a("img",{staticClass:"top-img",attrs:{src:t.$t("profile.top"),alt:"top-img"}})]),a("v-flex",{staticClass:"mb-3",attrs:{md10:"",xs12:""}},[a("v-card",{attrs:{hover:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md5:"",xs12:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("span",{staticClass:"headline"},[t._v(t._s(t.$t("profile.profileTitle")))])]),a("v-card-text",[a("div",{staticClass:"text-xs-center display-4"},[a("font-awesome-icon",{attrs:{icon:["fas","user-circle"]}})],1)]),a("v-card-text",{staticClass:"pa-3"},[a("div",{staticClass:"my-2 headline"},[t._v(t._s(t.$t("profile.name")))]),a("div",{staticClass:"my-4 subheading"},[a("v-icon",{staticClass:"mr-2"},[t._v("cake")]),t._v(t._s(t.$t("profile.birthday")))],1),a("div",{staticClass:"my-4 subheading"},[a("v-icon",{staticClass:"mr-2"},[t._v("work")]),t._v(t._s(t.$t("profile.status")))],1)])],1),a("v-flex",{attrs:{md7:"",xs12:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("span",{staticClass:"headline"},[t._v(t._s(t.$t("profile.hobbyTitle")))])]),a("v-data-table",{staticClass:"elevation-1 ma-1",attrs:{items:t.$t("profile.hobby"),"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("span",{staticClass:"subheading"},[t._v(t._s(e.item))])])]}}])})],1),a("v-flex",{staticClass:"my-3",attrs:{xs12:""}},[a("div",{staticClass:"subheading my-2 text-xs-center"},[t._v(t._s(t.$t("profile.wordTitle")))]),a("v-card",{staticClass:"pa-2",attrs:{tile:"",flat:""}},[a("div",{staticClass:"text-xs-center vertical-text headline"},[t._v(t._s(t.$t("profile.word")))])])],1)],1)],1)],1),a("v-flex",{staticClass:"my-3",attrs:{md7:"",xs8:""}},[a("v-card",{attrs:{color:"transparent",height:"300",flat:"",tile:""}},[a("gmap-map",{staticStyle:{height:"300px",width:"100%"},attrs:{center:t.$t(t.placeState+".center"),zoom:t.opts.zoom}},[a("gmap-marker",{attrs:{position:t.$t(t.placeState+".center"),clickable:!0,draggable:!0},on:{click:function(t){}}})],1)],1)],1),a("v-flex",{staticClass:"my-3",attrs:{md3:"",xs4:""}},[a("v-card",{attrs:{color:"transparent",height:"300",flat:"",tile:""}},[a("v-card-text",{staticClass:"text-xs-center py-0"},[a("v-btn",{attrs:{color:"orange",outline:"",icon:"",small:""},on:{click:t.changePlace}},[a("v-icon",[t._v("loop")])],1)],1),a("v-card-text",[a("span",{staticClass:"headline"},[t._v(t._s(t.$t(t.placeState+".title")))]),a("v-divider",{staticClass:"my-3"}),a("span",{staticClass:"subheading d-block mb-3"},[t._v(t._s(t.$t(t.placeState+".name")))]),a("v-btn",{staticClass:"orange--text",attrs:{href:t.$t(t.placeState+".web_page"),target:"_blank",rel:"noopener noreferrer",outline:"",round:""}},[a("v-icon",[t._v("open_in_new")]),t._v("Link")],1)],1)],1)],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"title my-2 text-xs-left"},[t._v(t._s(t.$t("profile.favoriteTitle")))]),a("v-expansion-panel",{attrs:{expand:""},model:{value:t.panels,callback:function(e){t.panels=e},expression:"panels"}},t._l(t.$t("profile.favorites"),function(e,r){return a("v-expansion-panel-content",{key:"favorite-"+r},[a("span",{attrs:{slot:"header"},slot:"header"},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas",""+e.icon]}}),t._v(t._s(e.title))],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(e.items,function(r,i){return a("v-flex",{key:"f-item-"+i,attrs:{md2:"",xs4:""}},[a("v-card",{attrs:{flat:"",tile:"",hover:""}},[a("v-card-text",[a("div",{staticClass:"text-xs-center display-1"},[a("font-awesome-icon",{attrs:{icon:["fas",""+e.icon]}})],1)]),a("v-card-text",[a("div",{staticClass:"text-xs-center"},[a("span",{staticClass:"subheding"},[t._v(t._s(r.name))])]),""!==r.href?a("v-btn",{attrs:{color:"orange",href:r.href,target:"_blank",rel:"noopener noreferrer",flat:"",outline:"",block:"",round:"",small:""}},[t._v("Link")]):t._e()],1)],1)],1)}))],1)}))],1),a("v-flex",{staticClass:"my-3",attrs:{md10:"",xs12:""}},[a("div",{staticClass:"title my-2 text-xs-left"},[t._v(t._s(t.$t("link.laboratoryTitle")))]),a("v-card",{staticClass:"pa-3",attrs:{href:t.$t("link.laboratory.href"),target:"_blank",rel:"noopener noreferrer",color:"transparent",flat:"",tile:""}},[a("div",{staticClass:"text-xs-left body-2 mb-1 orange--text"},[t._v(t._s(t.$t("link.laboratory.name")))])])],1)],1)},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},,,,,,,,,function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(a(29));e.App=i.default;const n=r(a(32));e.Profile=n.default;const s=r(a(34));e.Skill=s.default;const o=r(a(36));e.Product=o.default;const l=r(a(40));e.NotFound=l.default},function(t,e,a){"use strict";a.r(e);var r=a(17),i=a(5);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a(31);var s=a(0),o=Object(s.a)(i.default,r.a,r.b,!1,null,"d1a541d2",null);o.options.__file="App.vue",e.default=o.exports},,function(t,e,a){"use strict";var r=a(115);a.n(r).a},function(t,e,a){"use strict";a.r(e);var r=a(19),i=a(7);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a(33);var s=a(0),o=Object(s.a)(i.default,r.a,r.b,!1,null,"afe14106",null);o.options.__file="Profile.vue",e.default=o.exports},function(t,e,a){"use strict";var r=a(117);a.n(r).a},function(t,e,a){"use strict";a.r(e);var r=a(18),i=a(9);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a(35);var s=a(0),o=Object(s.a)(i.default,r.a,r.b,!1,null,"a3c6f2fa",null);o.options.__file="Skill.vue",e.default=o.exports},function(t,e,a){"use strict";var r=a(119);a.n(r).a},function(t,e,a){"use strict";a.r(e);var r=a(15),i=a(11);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a(39);var s=a(0),o=Object(s.a)(i.default,r.a,r.b,!1,null,"8e40e5b6",null);o.options.__file="Product.vue",e.default=o.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={Qiita:{appId:"575162d6f8135b01a5836715e04ba27271841cdb"},Github:{accessToken:"fedf0cc6d2c48502803e51c371f8654588130d48"}}},function(t,e,a){"use strict";var r=a(121);a.n(r).a},function(t,e,a){"use strict";a.r(e);var r=a(16),i=a(13);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a(41);var s=a(0),o=Object(s.a)(i.default,r.a,r.b,!1,null,"01a1110c",null);o.options.__file="NotFound.vue",e.default=o.exports},function(t,e,a){"use strict";var r=a(123);a.n(r).a},function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(a(43));e.BaseJSON=i.default;const n=r(a(44));e.ProfileJSON=n.default;const s=r(a(45));e.ProductJSON=s.default;const o=r(a(46));e.SkillJSON=o.default;const l=r(a(47));e.LinkJSON=l.default},function(t){t.exports={ja:{title:"ポートフォリオ",content:[{name:"プロフィール",href:"/",icon:"person"},{name:"成果物",href:"/product",icon:"web_asset"},{name:"スキル",href:"/skill",icon:"fitness_center"}],attribute:"大柳 達哉",not_found:"お探しのページは存在しません．",footer:[{name:"Github",href:"https://github.com/hiyoko3",icon:"github"},{name:"Facebook",href:"https://www.facebook.com/",icon:"facebook"},{name:"Instagram",href:"https://www.instagram.com/",icon:"instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/in/%E9%81%94%E5%93%89-%E5%A4%A7%E6%9F%B3-a5ab72143/",icon:"linkedin-in"},{name:"Google+",href:"https://plus.google.com/111810448005561033865/",icon:"google-plus"}]},en:{title:"Portfolio",content:[{name:"Profile",href:"/",icon:"person"},{name:"Products",href:"/product",icon:"web_asset"},{name:"Skills",href:"/skill",icon:"fitness_center"}],attribute:"Tatsuya Oyanagi",not_found:"The page doesn't exist.",footer:[{name:"Github",href:"https://github.com/hiyoko3",icon:"github"},{name:"Facebook",href:"https://www.facebook.com/",icon:"facebook"},{name:"Instagram",href:"https://www.instagram.com/",icon:"instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/in/%E9%81%94%E5%93%89-%E5%A4%A7%E6%9F%B3-a5ab72143/",icon:"linkedin-in"}]}}},function(t){t.exports={ja:{top:"public/static/images/top.svg",introduction:"こんにちは，世界！",profileTitle:"プロフィール",name:"大柳達哉（ｵｵﾔﾅｷﾞﾀﾂﾔ）",birthday:"1994/08/23",status:"大学院生",univ:[{name:"茨城大学",href:"http://www.ibaraki.ac.jp/index.html"},{name:"茨城大学院理工学研究科",href:"http://www.gse.ibaraki.ac.jp/"},{name:"情報工学専攻",href:"http://www.cis.ibaraki.ac.jp/"}],places:[{title:"出身地",name:"福島県郡山市",web_page:"https://www.city.koriyama.fukushima.jp/",center:{lat:37.398021,lng:140.387946}},{title:"在住",name:"茨城県日立市",web_page:"http://www.city.hitachi.lg.jp/",center:{lat:36.590654,lng:140.662153}}],wordTitle:"好きな言葉",word:"「果報は寝て待て」",hobbyTitle:"趣味",hobby:["映画鑑賞","読書","ランニング","ドライブ","アニメ / 漫画 / ゲーム","プログラミング"],favoriteTitle:"好きなもの/人",favorites:[{title:"食べ物",icon:"utensils",items:[{name:"寿司",href:""},{name:"天ぷら",href:""},{name:"蕎麦",href:""},{name:"パスタ",href:""},{name:"コーヒー",href:""}]},{title:"芸能人",icon:"user-circle",items:[{name:"明石家さんま",href:"https://profile.yoshimoto.co.jp/talent/detail?id=873"}]},{title:"アーティスト",icon:"headphones-alt",items:[{name:"L'arc〜en〜Ciel",href:"https://www.larc-en-ciel.com/index.php"},{name:"SCANDAL",href:"http://www.scandal-4.com/"},{name:"福山雅治",href:"https://fmsp.amob.jp/mob/index.php?site=F&ima=0207"},{name:"東方神起(TVXQ)",href:"https://toho-jp.net/"},{name:"やなぎなぎ",href:"http://yanaginagi.net/"},{name:"柴咲コウ",href:"https://koshibasaki.com/"},{name:"久石譲",href:"http://joehisaishi.com/index.php"}]},{title:"漫画",icon:"book-open",items:[{name:"ONE PIECE",href:"https://one-piece.com/"}]},{title:"アニメ",icon:"tv",items:[{name:"機動戦士ガンダムシリーズ",href:"https://www.gundam.info/"},{name:"スタジオジブリ作品",href:"http://www.ghibli.jp/"}]},{title:"ゲーム",icon:"gamepad",items:[{name:"ポケットモンスター シリーズ",href:"https://www.pokemon.co.jp/"},{name:"Minecraft",href:"https://minecraft.net/ja-jp/"},{name:"三國無双シリーズ",href:"https://www.gamecity.ne.jp/index.html#top"}]}]},en:{top:"public/static/images/top.svg",introduction:"Hello, World!",profileTitle:"My Profile",name:"Tatsuya Oyanagi",birthday:"1994/08/23",status:"A graduate school student",univ:[{name:"Ibaraki University",href:"http://www.ibaraki.ac.jp/en/index.html"},{name:"Graduate School of Science and Engineering",href:"http://www.gse.ibaraki.ac.jp/en/index.html"},{name:"Major in Computer and Information Sciences",href:"http://www.cis.ibaraki.ac.jp/en/"}],places:[{title:"From",name:"Koriyama city, Fukushima Prefecture",web_page:"https://honyaku.j-server.com/LUCKORIYAM/ns/tl.cgi/http%3a//www.city.koriyama.fukushima.jp/foreign/index.html?SLANG=ja&TLANG=en&XMODE=0&XPARAM=q,&XCHARSET=utf-8&XPORG=,&XJSID=0",center:{lat:37.398021,lng:140.387946}},{title:"Stay",name:"Hitachi city, Ibaraki Prefecture",web_page:"https://honyaku.j-server.com/LUCHITACHI/ns/tl.cgi/http%3a//www.city.hitachi.lg.jp/index.html?SLANG=ja&TLANG=en&XMODE=0&XCHARSET=utf-8&XJSID=0",center:{lat:36.590654,lng:140.662153}}],wordTitle:"Favorite Quotes",word:"「Everything comes to those who wait」",hobbyTitle:"Hobby",hobby:["Watching movies","Reading books","Running","Driving","Anime / Managa / Game","Programing"],favoriteTitle:"Favorites",favorites:[{title:"Foods",icon:"utensils",items:[{name:"Sushi",href:""},{name:"Tenpura",href:""},{name:"Soba",href:""},{name:"Pasta",href:""},{name:"Coffee",href:""}]},{title:"Entertainer",icon:"user-circle",items:[{name:"Sanma Akashiya",href:"https://profile.yoshimoto.co.jp/talent/detail?id=873"}]},{title:"Artists",icon:"headphones-alt",items:[{name:"L'arc〜en〜Ciel",href:"https://www.larc-en-ciel.com/en/index.php"},{name:"SCANDAL",href:"http://www.scandal-4.com/"},{name:"Masaharu Fukuyama",href:"https://fmsp.amob.jp/mob/index.php?site=F&ima=0207"},{name:"TOHOSHINKI(TVXQ)",href:"https://toho-jp.net/e/"},{name:"Yanaginagi",href:"http://yanaginagi.net/"},{name:"Koh Shibasaki",href:"https://koshibasaki.com/"},{name:"Joh Hisaishi",href:"http://joehisaishi.com/index.php"}]},{title:"Manga",icon:"book-open",items:[{name:"ONE PIECE",href:"https://one-piece.com/"}]},{title:"Anime",icon:"tv",items:[{name:"Gundam Series",href:"https://na.gundam.info/"},{name:"STUDIO GHIBLE",href:"http://www.ghibli.jp/"}]},{title:"Games",icon:"gamepad",items:[{name:"Pocket Monster Series",href:"https://www.pokemon.com/us/"},{name:"Minecraft",href:"https://minecraft.net/en-us/"},{name:"Warriors Series",href:"http://www.koeitecmoamerica.com/"}]}]}}},function(t){t.exports={ja:{schoolTitle:"学歴",school:[{name:"福島県立郡山東高等学校",start:"2010年4月",end:"2013年3月",href:"http://www.koriyamahigashi-h.fks.ed.jp/",remark:"",hollow:!1},{name:"茨城大学工学部情報工学科",start:"2013年4月",end:"2017年3月",href:"https://www.cis.ibaraki.ac.jp/",remark:"学士（工学）取得",hollow:!1},{name:"茨城大学大学院理工学研究科情報工学専攻",start:"2017年4月",end:"2019年3月",href:"https://www.cis.ibaraki.ac.jp/",remark:"修了予定",hollow:!0}],paperTitle:"投稿論文",paper:[{year:2017,title:"Proposal of an Integrated Common Platform for Zoo Operation Support",subtitle:"23rd International Symposium on Artificial Life and Robotics, 3rd International Symposium on BioComplexity, January.2018",member:"Tatsuya Ohyanagi, Hayato Ito, Misaki Iyobe, Tomoyuki Ishida",tag:"国際会議（査読付き）"},{year:2016,title:"Construction of an Electronic Health Record System for supporting a Zoo Veterinarian",subtitle:"Proc. of the 11th International Conference on P2P, Parallel, Grid, Cloud and Internet Computing, pp667-676",member:"Tatsuya Ooyanagi, Misaki Iyobe, Tomoyuki Ishida, Noriki Uchida, Kaoru Sugita, Yoshitaka Shibata",tag:"国際会議（査読付き）"},{year:2016,title:"獣医師のための動物電子カルテシステムの提案",subtitle:"可視化情報学会全国講演会（日立2016）講演論文集，Vol.36, No.2, B107，Oct.2016",member:"大柳達哉, 石田智行",tag:"研究会・全国大会（査読なし）"}],otherTitle:"その他",other:[{year:2017,title:"蓄積された経験データを用いた災害支援エキスパートシステムの提案",subtitle:"第34回テレイマージョン技術研究会研究会, pp.3-4, Mar.2018",member:"大柳達哉, 石田智行, 内田法彦, 柴田義孝",tag:"その他"},{year:2017,title:"蓄積された経験データを利用した災害支援エキスパートシステムの構築",subtitle:"第11回学生サステナビリティフォーラム（ポスター発表）, Feb.2018",member:"大柳達哉, 石田智行",tag:"その他"}],researchTitle:"研究テーマ",research:[{class:"卒業研究",title:"動物園業務エンリッチメントを目的とした動物園業務統合型共通プラットフォームの構築",abstract:"動物園内部の業務はアナログ管理が多数存在しており，これは円滑かつ効率的な業務の妨げや，動物園内部における各種情報の連携を困難としている．そこで本研究は，動物園業務統合型共通プラットフォームを構築した．本プラットフォームは動物園業務全般の円滑かつ効率的な業務を支援することによる，動物園業務エンリッチメントを目的とする.これにより，動物園業務の各種情報を一元化による連携と円滑な業務支援を可能とする．",images:[{src:"public/static/images/image_1.png",alt:"research-img-1"},{src:"public/static/images/image_2.png",alt:"research-img-2"}]},{class:"修士研究",title:"自治体対策本部用災害エキスパートシステムの研究開発",abstract:"災害時には立ち上がる災害対策本部では現場の状況や職員の経験によって対応速度が大きく左右される．そのような中，災害対策本部では紙媒体を用いた情報管理が行われている．そこで，本研究では自治体災害対策本部のための災害支援エキスパートシステムを開発する．これは過去の災害事例とその対応情報を蓄積しておき，被災時には規模が類似した事例を表示することで情報が整理しきれていない状況においても迅速に意思決定を行う．",images:[{src:"public/static/images/image_3.png",alt:"research-img-3"},{src:"public/static/images/image_4.png",alt:"research-img-4"}]}]},en:{schoolTitle:"Education",school:[{name:"Koriyama Higashi High School",start:"2010-4",end:"2013-3",href:"http://www.koriyamahigashi-h.fks.ed.jp/",remark:""},{name:"Department of Computer and Information Sciences, College of Engineering, Ibaraki Univ",start:"2013-4",end:"2017-3",href:"https://www.cis.ibaraki.ac.jp/",remark:"Bachelor（Engineering）"},{name:"Major in Computer and Information Sciences, Graduate School of Science and Engineering, Ibaraki Univ",start:"2017-4",end:"2019-3",href:"https://www.cis.ibaraki.ac.jp/",remark:"Expected completion"}],paperTitle:"Papers",paper:[{year:2017,title:"Proposal of an Integrated Common Platform for Zoo Operation Support",subtitle:"23rd International Symposium on Artificial Life and Robotics, 3rd International Symposium on BioComplexity, January.2018",member:"Tatsuya Ohyanagi, Hayato Ito, Misaki Iyobe, Tomoyuki Ishida",tag:"International Conference (peer-reviewed)"},{year:2016,title:"Construction of an Electronic Health Record System for supporting a Zoo Veterinarian",subtitle:"Proc. of the 11th International Conference on P2P, Parallel, Grid, Cloud and Internet Computing, pp667-676",member:"Tatsuya Ooyanagi, Misaki Iyobe, Tomoyuki Ishida, Noriki Uchida, Kaoru Sugita, Yoshitaka Shibata",tag:"International Conference (peer-reviewed)"},{year:2016,title:"Proposal of an animal medical chart system for veterinarians",subtitle:"Visualization Information Society National Lecture (Hitachi 2016) lecture paper，Vol.36, No.2, B107，Oct.2016",member:"Tatsuya Oyanagi, Tomoyuki Ishida",tag:"Japan Conference（no-reviewed）"}],otherTitle:"Others",other:[{year:2017,title:"Proposal of disaster support expert system using accumulated experience data",subtitle:"The 34th Tele-Immersion Technology Committee, Virtual Reality Society of Japan, pp.3-4, Mar.2018",member:"Tatsuya Oyanagi, Tomoyuki Ishida, Noriki Uchida, Yoshitaka Shibata",tag:"Other"},{year:2017,title:"Construction of disaster support expert system using accumulated experience data",subtitle:"The 11th Student Sustainability Forum (Poster presentation), Ami Town, Ibaraki , Feb.2018",member:"Tatsuya Oyanagi, Tomoyuki Ishida",tag:"Other"}],researchTitle:"Research Title",research:[{class:"卒業研究",title:"Implementation of a Zoo Operation Integrated Common Platform for Zoo Operation Enrichment",abstract:"In this research, we constructed a Zoo Operations Integrated Common Platform. This platform realize unified management of various kinds of information in zoo operations by constructing the common platform. And, we realized the ”Education (Environmental Education / Conservation Education)” and the ”Research / Study” by utilizing the data accumulated in the database. Moreover, we secured time spent to improve environmental enrichment by improving the efficiency of zoo operations.",images:[{src:"public/static/images/image_1.png",alt:"research-img-1"},{src:"public/static/images/image_2.png",alt:"research-img-2"}]},{class:"修士研究",title:"Implementation of a Disaster Support Expert System",abstract:"In this paper, we implemented a Disaster Support Expert System for emergency response headquarters. This system visualizes past disaster information and correspondence records accumulated in the disaster information storage system. By using this system, the emergency response headquarters can promptly and appropriately disaster response through accumulated past disaster cases and disaster response records.",images:[{src:"public/static/images/image_3.png",alt:"research-img-3"},{src:"public/static/images/image_4.png",alt:"research-img-4"}]}]}}},function(t){t.exports={ja:{certificationTitle:"資格",certificationHeader:[{text:"取得年月日",value:"date",sortable:!1},{text:"資格名",value:"name",sortable:!1}],certification:[{date:"2013年9月17日",name:"普通自動車第一種運転免許"},{date:"2015年5月18日",name:"基本情報技術者"},{date:"2015年12月18日",name:"応用情報技術者"}],programingTitle:"プログラミング経験",programing:[{name:"PHP",experience:50,remark:["Laravel","Slim3"]},{name:"HTML/CSS",experience:50,remark:["Bootstrap 3, 4","Materialize","Bulma"]},{name:"JavaScript",experience:55,remark:["jQuery","AngularJS","Vue.js","Node.js","React.js"]},{name:"Ruby",experience:25,remark:["Ruby On Rails"]},{name:"Go lang",experience:20,remark:["Gin"]},{name:"C / C++",experience:15,remark:[]},{name:"Java",experience:30,remark:["Android(with Kotlin)"]},{name:"Python",experience:35,remark:["Django","Django Rest Framework"]},{name:"Database",experience:40,remark:["MySQL","SQLite","Mongo DB"]}],developTitle:"開発経験",develops:[{name:"Web アプリケーション"},{name:"Android アプリケーション"}]},en:{certificationTitle:"Certification",certificationHeader:[{text:"Date",value:"date",sortable:!1},{text:"Name",value:"name",sortable:!1}],certification:[{date:"2013-9-17",name:"First-class drivers for normal vehicles"},{date:"2015-5-18",name:"Fundamental Information Technology Engineer Examination"},{date:"2015-12-18",name:"Applied Information Technology Engineer Examination"}],programingTitle:"Programing Skill",programing:[{name:"PHP",experience:50,remark:["Laravel","Slim3"]},{name:"HTML/CSS",experience:50,remark:["Bootstrap 3, 4","Materialize","Bulma"]},{name:"JavaScript",experience:55,remark:["jQuery","AngularJS","Vue.js","Node.js","React.js"]},{name:"Ruby",experience:25,remark:["Ruby On Rails"]},{name:"Go lang",experience:20,remark:["Gin"]},{name:"C / C++",experience:15,remark:[]},{name:"Java",experience:30,remark:["Android(with Kotlin)"]},{name:"Python",experience:35,remark:["Django","Django Rest Framework"]},{name:"Database",experience:40,remark:["MySQL","SQLite","Mongo DB"]}],developTitle:"Development Experience",develops:[{name:"Web Application"},{name:"Android Application"}]}}},function(t){t.exports={ja:{laboratoryTitle:"研究室",laboratory:{name:"石田研究室",href:"https://glocalvision.net/ishilab/"}},en:{laboratoryTitle:"Laboratory",laboratory:{name:"Ishilda Laboratory",href:"https://glocalvision.net/ishilab/"}}}},,,,,,,,,,,,,function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(2)),s=r(a(63)),o=r(a(64)),l=r(a(65)),c=i(a(66)),u=r(a(79)),f=r(a(80)),m=a(28),d=a(42),p={ja:{base:d.BaseJSON.ja,profile:d.ProfileJSON.ja,resume:d.ProductJSON.ja,skill:d.SkillJSON.ja,link:d.LinkJSON.ja},en:{base:d.BaseJSON.en,profile:d.ProfileJSON.en,resume:d.ProductJSON.en,skill:d.SkillJSON.en,link:d.LinkJSON.en}},h="ポートフォリオ - Portfolio ",v=[{path:"/",name:"Profile",component:m.Profile,meta:{title:`${h} | プロフィール/Profile`}},{path:"/product",name:"Products",component:m.Product,meta:{title:`${h} | 成果物/Products`}},{path:"/skill",name:"Skills",component:m.Skill,meta:{title:`${h} | スキル/Skills`}},{path:"*",name:"NotFound",component:m.NotFound,meta:{title:`${h} | 404 Not found`}}];a(125),a(127);const g=a(100),b=a(101),y=a(102),_=a(103),x=a(30);g.library.add(y.faCoffee),g.library.add(y.fas),g.library.add(b.far),g.library.add(_.fab),n.default.component("font-awesome-icon",x.FontAwesomeIcon),n.default.use(s.default),n.default.use(o.default),n.default.use(l.default),n.default.use(f.default,{namespace:"portfolio__",name:"ls",storage:"local"}),n.default.use(c,{load:{key:"AIzaSyC-9WiQjFhxE5DWsG_tJUArjc17lItzoxA"}});const w=new l.default({routes:v,mode:"history",linkActiveClass:"active"});w.beforeResolve((t,e,a)=>{setTimeout(()=>{window.scrollTo(0,0)},100),a()}),w.afterEach((t,e)=>{t.meta&&t.meta.title&&(document.title=t.meta.title)});const k=new o.default({locale:"ja",messages:p});if(n.default.config.productionTip=!1,new n.default({el:"#app",router:w,i18n:k,template:"<App/>",components:{App:m.App}}),"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname)){u.default.register()}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){}]);