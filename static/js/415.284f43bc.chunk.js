"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{9055:function(n,t,e){e.d(t,{x:function(){return u}});var r,a=e(168),c=e(6444),i=e(407),u=c.ZP.div(r||(r=(0,a.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),i.Dh,i.bK,i.cp,i.$_,i.AF,i.Cg,i.GQ)},8641:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,c,i=e(7689),u=e(168),o=e(6444),s=e(1087),p=(0,o.ZP)(s.rU)(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),f=o.ZP.img(a||(a=(0,u.Z)(["\n  width: 50px;\n  margin-right: 10px;\n"]))),d=e(1302),l=e(184),h=function(n){var t=n.movie,e=(0,i.TH)(),r=t.id,a=t.poster_path,c=t.title,u="https://image.tmdb.org/t/p/w200/".concat(a),o="poster ".concat(c);return(0,l.jsx)("li",{children:(0,l.jsxs)(p,{to:"/movies/".concat(r),state:{from:e},children:[a?(0,l.jsx)(f,{src:u,alt:o}):(0,l.jsx)(f,{src:d,alt:"placeholder"}),c]})},r)},v=o.ZP.ul(c||(c=(0,u.Z)(["\n  padding: 10px 16px;\n"]))),g=function(n){var t=n.movies;return(0,l.jsx)(v,{children:t.map((function(n){return(0,l.jsx)(h,{movie:n},n.id)}))})}},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),u=e(4635),o=e(2791),s=e(8641),p=e(927),f=e(6368),d=e(9055),l=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],h=(0,o.useState)(!1),v=(0,a.Z)(h,2),g=v[0],x=v[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,u.wr)();case 4:t=n.sent,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,f.N)();case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)(d.x,{paddingLeft:"16px",paddingRight:"16px",paddingTop:"10px",children:[(0,l.jsx)("h2",{children:"Trending today"}),e.length>0&&(0,l.jsx)(s.O,{movies:e}),g&&(0,l.jsx)(p.a,{})]})}},4635:function(n,t,e){e.d(t,{Ai:function(){return g},EI:function(){return d},Mc:function(){return p},wH:function(){return h},wr:function(){return o}});var r=e(5861),a=e(7757),c=e.n(a),i=e(3263);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3820fb012ec124360c2ca0b092d22f88";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:u,language:"en-US"}},n.next=3,i.Z.get("search/movie?query=".concat(t),e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6368:function(n,t,e){e.d(t,{N:function(){return a}});var r=e(8174),a=function(){return r.Am.error("Something went wrong. Please try again",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},1302:function(n,t,e){n.exports=e.p+"static/media/coverPlaceholder.8e5381c10fbbbb6956b4.jpg"}}]);
//# sourceMappingURL=415.284f43bc.chunk.js.map