(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{335:function(t,o,e){var content=e(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("0e375287",content,!0,{sourceMap:!1})},346:function(t,o,e){"use strict";e(335)},347:function(t,o,e){var n=e(53)(!1);n.push([t.i,'.container{padding-top:100px;padding-bottom:100px}#posts{padding-left:10%;padding-right:10%;text-align:center;font-size:0;animation:appear 1s}#posts .post{position:relative;height:200px;margin:0;border:3px solid #fff;display:inline-block;background-size:cover;background-position:50%;overflow:hidden}#posts .post,#posts .post img{width:100%;transition:all .3s ease-out}#posts .post img{padding:0;height:100%;-o-object-fit:cover;object-fit:cover}#posts .post:hover img{transform:scale(1.1);transition:all .8s}#posts .post h2{color:#fff;position:absolute;bottom:50px;margin:0;font-size:1.5vw;line-height:.8;font-family:"MuseoSansRounded-900","Arial Black",sans-serif;padding:0 30px;text-transform:uppercase;text-align:left;z-index:1000;opacity:0}#posts .post:hover h2{opacity:1;transition:all .8s}#posts .post p{color:#fff;position:absolute;bottom:25px;margin:0;font-size:.8vw;line-height:.8;padding:0 30px;text-transform:capitalize;text-align:left;z-index:1000;opacity:0}#posts .post:hover p{opacity:1;transition:all .8s}@media (min-width:34em){#posts .post{width:50%}}@media (min-width:48em){#posts .post{width:25%}}@media (min-width:62em){#posts .post{width:33.33333333%}}@media (min-width:75em){#posts .post{width:25%}}',""]),t.exports=n},370:function(t,o,e){"use strict";e.r(o);var n=e(11),r=(e(55),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function o(){var e,n,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$content,t.params,o.next=3,e("works").sortBy("date","desc");case 3:return n=o.sent,o.next=6,n.fetch();case 6:return r=o.sent,o.abrupt("return",{works:r});case 8:case"end":return o.stop()}}),o)})))()}}),l=r,c=(e(346),e(26)),component=Object(c.a)(l,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"container"},[o("section",{attrs:{id:"posts"}},t._l(t.works,(function(e){return o("div",{key:e.slug,staticClass:"post"},[o("nuxt-link",{attrs:{to:"/works/"+e.slug}},[o("img",{staticClass:"item__img",attrs:{src:e.img,alt:e.title+" サムネイル"}}),t._v(" "),o("h2",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"lead"},[t._v(t._s(e.date))])])],1)})),0)])}),[],!1,null,null,null);o.default=component.exports}}]);