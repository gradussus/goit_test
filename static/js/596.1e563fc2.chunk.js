"use strict";(self.webpackChunkgoit_test=self.webpackChunkgoit_test||[]).push([[596],{596:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(861),o=t(439),a=t(757),s=t.n(a),i=t(791),l=t(243);l.Z.defaults.baseURL="https://643d5c746afd66da6af4dd4d.mockapi.io/users";var p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l.Z.get("/?&limit=8&page=".concat(n))};var c,u,d,f,x,g,v,h,b,w,m=t.p+"static/media/goit.26856ac396a2f565d14a9794a2530580.svg",z=t(168),V=t(444),A=t(275),j=V.ZP.li(c||(c=(0,z.Z)(["\n  position: relative;\n  margin: 15px;\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  ::before {\n    content: ' ';\n    top: 214px;\n    left: 0;\n    position: absolute;\n    height: 8px;\n    width: 100%;\n    background: #EBD8FF;\n    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),y=V.ZP.div(u||(u=(0,z.Z)(["\n  margin-top: 28px;\n  margin-left: 36px;\n  margin-right: 36px;\n  height: 168px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n"])),A),C=V.ZP.div(d||(d=(0,z.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 178px;\n  left: 150px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #ebd8ff;\n  z-index: 1;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),Z=V.ZP.img(f||(f=(0,z.Z)(["\n  background: #5736a3;\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),U=V.ZP.div(x||(x=(0,z.Z)(["\n  position: absolute;\n  width: 100%;\n  text-transform: uppercase;\n  top: 284px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),S=V.ZP.ul(g||(g=(0,z.Z)(["\n  display: block;\n  padding-left: 0px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 20px;\n  color: #ebd8ff;\n"]))),F=V.ZP.button(v||(v=(0,z.Z)(["\n  margin-top: 26px;\n  margin-left: auto;\n  margin-right: auto;\n  height: 42px;\n  width: 196px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  color: #373737;\n  border-radius: 10.3108px;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n"]))),P=(0,V.ZP)(F)(h||(h=(0,z.Z)(["\n  background: #5cd3a8;\n"]))),Y=(0,V.ZP)(F)(b||(b=(0,z.Z)(["\n  background: #ebd8ff;\n"]))),N=t(839),k=t(184),I=function(n){var e=JSON.parse(localStorage.getItem("follows"))||[];e.push(n),localStorage.setItem("follows",JSON.stringify(e))},R=function(n){var e=JSON.parse(localStorage.getItem("follows"));e=e.filter((function(e){return e!==n})),localStorage.setItem("follows",JSON.stringify(e))},O=function(n){var e,t=n.id,a=(n.name,n.tweets),p=n.avatar,c=n.followers,u=(0,i.useState)(c),d=(0,o.Z)(u,2),f=d[0],x=d[1],g=(0,i.useState)((e=t,JSON.parse(localStorage.getItem("follows")).includes(e))),v=(0,o.Z)(g,2),h=v[0],b=v[1],w=(0,i.useState)(!1),z=(0,o.Z)(w,2),V=z[0],A=z[1],F=function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,A(!0),n.next=4,l.Z.put("/".concat(t),{followers:c+1});case 4:I(t),b(!0),x((function(n){return n+1})),A(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,A(!0),n.next=4,l.Z.put("/".concat(t),{followers:c-1});case 4:R(t),b(!1),x((function(n){return n-1})),A(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return(0,k.jsxs)(j,{children:[(0,k.jsx)("img",{src:m,alt:"React Logo",style:{position:"absolute",top:"20px",left:"20px"}}),(0,k.jsx)(y,{}),(0,k.jsx)(C,{children:(0,k.jsx)(Z,{src:p||N,alt:"Avatar"})}),(0,k.jsxs)(U,{children:[(0,k.jsxs)(S,{children:[(0,k.jsxs)("li",{children:[a," tweets"]}),(0,k.jsxs)("li",{style:{marginTop:16},children:[f," followers"]})]}),h?(0,k.jsx)(Y,{disabled:V,onClick:O,children:"Unfollow"}):(0,k.jsx)(P,{disabled:V,onClick:F,children:"Follow"})]})]})},Q=V.ZP.ul(w||(w=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  text-align: center;\n  text-transform: uppercase;\n"]))),q=function(){var n=(0,i.useState)([]),e=(0,o.Z)(n,2),t=e[0],a=e[1],l=(0,i.useState)(!0),c=(0,o.Z)(l,2),u=c[0],d=c[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p().then((function(n){a((function(){return n.data}))}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n(),d(!1)}),[]),(0,k.jsx)(k.Fragment,{children:!u&&(0,k.jsx)(Q,{children:t&&t.map((function(n){var e=n.avatar,t=n.user,r=n.id,o=n.tweets,a=n.followers;return(0,k.jsx)(O,{id:r,tweets:o,avatar:e,user:t,followers:a},r)}))})})},M=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h1",{children:"TweetsList"}),(0,k.jsx)(q,{}),(0,k.jsx)("button",{children:"Load More"})]})}},275:function(n,e,t){n.exports=t.p+"static/media/bcg.b3d9942b3f9d5dad1ff0.png"},839:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=596.1e563fc2.chunk.js.map