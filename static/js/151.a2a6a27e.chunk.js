"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{8830:function(n,e,t){t.d(e,{Ai:function(){return v},EI:function(){return d},Mc:function(){return p},wH:function(){return x},wr:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="3820fb012ec124360c2ca0b092d22f88";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:c,language:"en-US"}},n.next=3,o.Z.get("search/movie?query=".concat(e),t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9055:function(n,e,t){t.d(e,{x:function(){return c}});var r,a=t(168),i=t(6444),o=t(407),c=i.ZP.div(r||(r=(0,a.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),o.Dh,o.bK,o.cp,o.$_,o.AF,o.Cg,o.GQ)},6727:function(n,e,t){t.d(e,{N:function(){return a}});var r=t(8174),a=function(){return r.Am.error("Something went wrong. Please try again",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},3151:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,o,c,s,u,p=t(5861),l=t(9439),d=t(7757),f=t.n(d),x=t(7689),h=t(2791),v=t(8830),g=t(9055),m=t(927),b=t(6727),Z=t(168),j=t(6444),w=t(1087),k=(0,j.ZP)(w.rU)(r||(r=(0,Z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #efb343;\n  }\n"]))),y=t(184),_=function(n){var e=n.to,t=n.children;return(0,y.jsx)(k,{to:e,children:t})},P=t(1413),S=j.ZP.ul(a||(a=(0,Z.Z)(["\n  margin-bottom: 10px;\n"]))),U=(0,j.ZP)(w.rU)(i||(i=(0,Z.Z)(["\n  text-decoration: none;\n\n  &::before {\n    content: '\ud83d\udc49';\n    margin-inline-end: 5px;\n  }\n"]))),C=function(){var n=(0,x.TH)();return(0,y.jsxs)(g.x,{borderBottom:"1px solid #3f51b5",marginBottom:"10px",children:[(0,y.jsx)("p",{children:"Additional information"}),(0,y.jsxs)(S,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(U,{to:"cast",state:(0,P.Z)({},n.state),children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(U,{to:"reviews",state:(0,P.Z)({},n.state),children:"Reviews"})})]})]})},B=j.ZP.img(o||(o=(0,Z.Z)(["\n  margin-bottom: 10px;\n  max-width: 200px;\n  height: auto;\n"]))),A=t(1302),H=j.ZP.h2(c||(c=(0,Z.Z)(["\n  color: #3f51b5;\n"]))),O=j.ZP.h3(s||(s=(0,Z.Z)(["\n  margin-top: 10px;\n"]))),T=j.ZP.h4(u||(u=(0,Z.Z)(["\n  margin-top: 10px;\n"]))),G=function(n){var e=n.movie,t=e.title,r=e.release_date,a=e.vote_average,i=e.overview,o=e.genres.map((function(n){return n.name}));return(0,y.jsxs)(g.x,{marginLeft:"10px",children:[(0,y.jsx)(H,{children:"".concat(t," (").concat(new Date(r).getFullYear(),")")}),(0,y.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,y.jsx)(O,{children:"Overview"}),(0,y.jsx)("p",{children:i}),(0,y.jsx)(T,{children:"Genres"}),(0,y.jsx)("p",{children:o.join(" ")})]})},L=function(){var n,e,t=(0,h.useState)(null),r=(0,l.Z)(t,2),a=r[0],i=r[1],o=(0,h.useState)(!1),c=(0,l.Z)(o,2),s=c[0],u=c[1],d=(0,x.UO)().moviesId,Z=null!==(n=null===(e=(0,x.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(e){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==e){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,u(!0),n.next=6,(0,v.Mc)(e);case 6:t=n.sent,i(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),(0,b.N)();case 13:return n.prev=13,u(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(e){return n.apply(this,arguments)}}();n(d)}),[d]),null!==a){var j=a.poster_path,w=a.title;return(0,y.jsxs)(g.x,{paddingLeft:"16px",paddingRight:"16px",paddingTop:"10px",children:[(0,y.jsx)(_,{to:Z,children:"Go back"}),(0,y.jsxs)(g.x,{display:"flex",marginTop:"10px",borderBottom:"1px solid #3f51b5",marginBottom:"10px",height:"auto",children:[(0,y.jsx)(g.x,{display:"block",children:j?(0,y.jsx)(B,{src:"https://image.tmdb.org/t/p/w200/".concat(j),alt:"poster ".concat(w)}):(0,y.jsx)(B,{src:A,alt:"placeholder"})}),(0,y.jsx)(G,{movie:a})]}),(0,y.jsx)(C,{}),(0,y.jsx)(h.Suspense,{fallback:(0,y.jsx)(m.a,{}),children:(0,y.jsx)(x.j3,{})}),s&&(0,y.jsx)(m.a,{})]})}}},1302:function(n,e,t){n.exports=t.p+"static/media/coverPlaceholder.8e5381c10fbbbb6956b4.jpg"}}]);
//# sourceMappingURL=151.a2a6a27e.chunk.js.map