"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[24],{9055:function(n,t,e){e.d(t,{x:function(){return u}});var r,a=e(168),i=e(6444),o=e(407),u=i.ZP.div(r||(r=(0,a.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),o.Dh,o.bK,o.cp,o.$_,o.AF,o.Cg,o.GQ)},5024:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,a,i,o,u,c,s,p,f=e(5861),l=e(9439),d=e(7757),h=e.n(d),x=e(2791),v=e(1087),g=e(168),m=e(6444),b=e(9e3),Z=m.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=m.ZP.button(a||(a=(0,g.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),y=m.ZP.span(i||(i=(0,g.Z)(["\n  ::after {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"]))),k=(0,m.ZP)(b.Vph)(o||(o=(0,g.Z)(["\n  width: 35px;\n  height: 35px;\n"]))),j=m.ZP.input(u||(u=(0,g.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding: 0 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),S=e(9055),P=e(184),_=function(n){n.valueQuery;var t=n.onSubmit,e=(0,x.useState)(""),r=(0,l.Z)(e,2),a=r[0],i=r[1];return(0,P.jsx)(S.x,{backgroundColor:"#3f51b5",padding:"0px 16px 12px",margin:"0 auto",width:"100%",children:(0,P.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),t(a),i("")},children:[(0,P.jsx)(w,{type:"submit",children:(0,P.jsx)(y,{children:(0,P.jsx)(k,{})})}),(0,P.jsx)(j,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"query",value:a,onChange:function(n){var t=n.target.value;i(t)}})]})})},C=e(4635),U=e(6368),q=e(927),A=e(7689),z=(0,m.ZP)(v.rU)(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  margin-bottom: 5px;\n"]))),H=m.ZP.img(s||(s=(0,g.Z)(["\n  width: 50px;\n  margin-right: 10px;\n"]))),D=e(1302),E=function(n){var t=n.movie,e=(0,A.TH)(),r=t.id,a=t.poster_path,i=t.title;return(0,P.jsx)("li",{state:{from:e},children:(0,P.jsxs)(z,{to:"".concat(r),state:{from:e},children:[a?(0,P.jsx)(H,{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:"poster ".concat(i)}):(0,P.jsx)(H,{src:D,alt:"placeholder"}),i]})},r)},F=m.ZP.ul(p||(p=(0,g.Z)(["\n  padding: 10px 16px;\n"]))),N=function(n){var t=n.movies;return(0,P.jsx)(F,{children:t.map((function(n){return(0,P.jsx)(E,{movie:n},n.id)}))})},O=function(){var n=(0,x.useState)([]),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)(!1),i=(0,l.Z)(a,2),o=i[0],u=i[1],c=(0,v.lr)(),s=(0,l.Z)(c,2),p=s[0],d=s[1],g=(0,x.useState)((function(){return p.get("query")})),m=(0,l.Z)(g,2),b=m[0],Z=m[1];(0,x.useEffect)((function(){if(b){var n=function(){var n=(0,f.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,(0,C.Ai)(b);case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,U.N)();case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);return(0,P.jsxs)(S.x,{children:[(0,P.jsx)(_,{onSubmit:function(n){Z(n),d(""!==n?{query:n}:{})}}),(0,P.jsx)(N,{movies:e}),o&&(0,P.jsx)(q.a,{})]})}},4635:function(n,t,e){e.d(t,{Ai:function(){return v},EI:function(){return l},Mc:function(){return p},wH:function(){return h},wr:function(){return c}});var r=e(5861),a=e(7757),i=e.n(a),o=e(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="3820fb012ec124360c2ca0b092d22f88";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{api_key:u,language:"en-US"}},n.next=3,o.Z.get("search/movie?query=".concat(t),e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6368:function(n,t,e){e.d(t,{N:function(){return a}});var r=e(8174),a=function(){return r.Am.error("Something went wrong. Please try again",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},1302:function(n,t,e){n.exports=e.p+"static/media/coverPlaceholder.8e5381c10fbbbb6956b4.jpg"}}]);
//# sourceMappingURL=24.58d90b7e.chunk.js.map