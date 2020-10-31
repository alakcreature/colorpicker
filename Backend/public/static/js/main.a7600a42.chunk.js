(this.webpackJsonpex=this.webpackJsonpex||[]).push([[0],{37:function(e,a,t){e.exports=t(86)},46:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(16),c=t.n(r),o=t(10),s=t(12),i=t(34),m=t(35),u=t.n(m),E=t(13),d={isLoggedIn:!1,token:null,userdetails:null},h=Object(s.c)({Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!0,token:a.token,userdetails:a.userdetails});case"LOGOUT":return Object(E.a)(Object(E.a)({},e),{},{isLoggedIn:!1,token:null,userdetails:null});case"SET_USER_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{userdetails:a.payload});default:return e}}}),g=[i.a,u.a],p=Object(s.d)(h,{},s.a.apply(void 0,g)),b=(t(46),t(2)),f=t(4),v=t(18);var N=Object(o.b)((function(e){return{Auth:e.Auth}}),{})((function(e){var a=e.children,t=e.Auth,l=Object(v.a)(e,["children","Auth"]);return console.log(t.isLoggedIn),n.a.createElement(f.b,Object.assign({},l,{render:function(){return t.isLoggedIn?a:n.a.createElement(f.a,{to:{pathname:"/login"}})}}))})),O=t(36),y={BASE_LOCAL_URL:"http://localhost:3000",BASE_SERVER_URL:"http://localhost:7000",GET_USER_DETAILS:"/apis/v1/userdetails",LOGIN:"/api/login",REGISTER:"/api/signup",FETCHCOLORS:"/api/fetchcolors",FETCHRANDOMCOLORS:"/api/fetchrandomcolors",DELETECOLOR:"/api/deletecolor",FETCHUSERCOLORS:"/api/fetchcolor",SAVECOLOR:"/api/savecolor"},S=t.n(O).a.create({baseURL:y.BASE_SERVER_URL}),j=function(e,a){return console.log(e),S.defaults.headers.common.Authorization="Bearer "+e,localStorage.setItem("Token",e),{type:"LOGIN",token:e,userdetails:a}},w=function(){return localStorage.removeItem("Token"),{type:"LOGOUT"}},k=function(e){return{type:"SET_USER_DETAILS",payload:e}},C=t(5),A=t(14),L=t.n(A);var R=function(e){var a=Object(l.useState)([]),t=Object(C.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)([]),s=Object(C.a)(o,2),i=s[0],m=s[1],u=Object(l.useState)(!1),E=Object(C.a)(u,2),d=E[0],h=E[1],g=Object(l.useState)(!1),p=Object(C.a)(g,2),f=p[0],v=p[1];return Object(l.useEffect)((function(){v(!0),S.get(y.FETCHCOLORS).then((function(e){v(!1),c(e.data.data)})).catch((function(e){v(!1),console.log(e),window.alert(e)}))}),[d]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"colors-loader ".concat(!f&&"loaderinvisible")},n.a.createElement(L.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),n.a.createElement("div",{className:"colortable-showcase"},n.a.createElement("div",{className:"colortable-inner"},r&&0!==r.length?n.a.createElement("table",{className:"content-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Number"),n.a.createElement("th",null,"Color Strip"),n.a.createElement("th",null,"Color Code"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,r&&r.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,a+1),n.a.createElement("td",null,n.a.createElement("div",{className:"color-strip",style:{background:e.colorcode}},n.a.createElement("h5",null,"Click"))),n.a.createElement("td",null,e.colorcode),n.a.createElement("td",{className:"delete"},n.a.createElement("i",{className:"fas fa-trash"})))})))):n.a.createElement("h1",{className:"empty-array"},"Add atleast one color to your ",n.a.createElement(b.b,{to:"/dashboard"},n.a.createElement("span",null,"profile "),n.a.createElement("i",{className:"fas fa-user"}))))),n.a.createElement("div",{className:"submit-section"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(!0),S.post(y.SAVECOLOR,{colorcode:i}).then((function(e){v(!1),h(!d),window.alert(e.data.message)})).catch((function(e){v(!1),console.log(e),window.alert(e)}))}},n.a.createElement("h3",null,"Save your favourite color code."),n.a.createElement("input",{className:"input",type:"text",placeholder:"Enter the code",name:"colorcode",onChange:function(e){m(e.target.value)}}),n.a.createElement("input",{className:"submit",type:"submit",value:"Submit"}))))};var I=Object(o.b)((function(e){return{Auth:e.Auth}}),{})((function(e){var a=e.children,t=e.Auth,l=Object(v.a)(e,["children","Auth"]);return console.log(t),n.a.createElement(f.b,Object.assign({},l,{render:function(e){e.location;return t.isLoggedIn?n.a.createElement(f.a,{to:{pathname:"/dashboard"}}):a}}))}));t(84);var F=Object(o.b)((function(e){return{Auth:e.Auth}}),{login:j,logout:w,setUserDetails:k})((function(e){var a=Object(l.useState)(!1),t=Object(C.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(!1),s=Object(C.a)(o,2),i=s[0],m=s[1],u=Object(l.useState)(""),E=Object(C.a)(u,2),d=E[0],h=E[1],g=Object(l.useState)(""),p=Object(C.a)(g,2),b=p[0],f=p[1],v=Object(l.useState)(""),N=Object(C.a)(v,2),O=N[0],j=N[1],w=Object(l.useState)("login"),k=Object(C.a)(w,2),A=k[0],R=k[1],I=Object(l.useState)(!1),F=Object(C.a)(I,2),x=F[0],T=F[1],U=function(){c(!r)},_=function(){m(!i)},B=function(a){a.preventDefault(),T(!0),"login"===A?S.post(y.LOGIN,{email:b,password:O}).then((function(a){T(!1),e.login(a.data.token)})).catch((function(a){T(!1),console.log(a),window.alert(a),e.logout()})):S.post(y.REGISTER,{username:d,email:b,password:O}).then((function(e){T(!1),window.alert(e.data.message)})).catch((function(e){window.alert(e),T(!1),console.log(e)}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"colors-loader ".concat(!x&&"loaderinvisible")},n.a.createElement(L.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),n.a.createElement("div",{className:"container-wrapper"},n.a.createElement("div",{className:"login-container ".concat(r?"right-active-panel":""),id:"container"},n.a.createElement("div",{className:"form-container sign-up-container ".concat(i?"":"overlay-panel-inactive-mobile")},n.a.createElement("form",{onSubmit:B},n.a.createElement("h1",null,"Create Account"),n.a.createElement("span",null,"or use your email for registration"),n.a.createElement("input",{type:"text",placeholder:"Name",onChange:function(e){h(e.target.value)}}),n.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){f(e.target.value)}}),n.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){j(e.target.value)}}),n.a.createElement("button",{onClick:function(){R("signup")}},"Sign Up"),n.a.createElement("button",{id:"signIn",className:"ghostMobile",onClick:_},"Sign In"))),n.a.createElement("div",{className:"form-container sign-in-container ".concat(i?"overlay-panel-inactive-mobile":"")},n.a.createElement("form",{onSubmit:B},n.a.createElement("h1",null,"Sign in"),n.a.createElement("span",null,"or use your account"),n.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){f(e.target.value)}}),n.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){j(e.target.value)}}),n.a.createElement("a",{href:"/"},"Forgot your password?"),n.a.createElement("button",{onClick:function(){R("login")}},"Sign In"),n.a.createElement("button",{id:"signUp",className:"ghostMobile",onClick:_},"Sign Up"))),n.a.createElement("div",{className:"overlay-container"},n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"overlay-panel overlay-left"},n.a.createElement("h1",null,"Welcome Back!"),n.a.createElement("p",null,"To keep connected with us please login with your personal info"),n.a.createElement("button",{className:"ghost",id:"signIn",onClick:U},"Sign In")),n.a.createElement("div",{className:"overlay-panel overlay-right"},n.a.createElement("h1",null,"Hello, Friend!"),n.a.createElement("p",null,"Enter your personal details and start journey with us"),n.a.createElement("button",{className:"ghost",id:"signUp",onClick:U},"Sign Up")))))))}));var x=Object(o.b)((function(e){return{Auth:e.Auth}}),{logout:w})((function(e){var a=Object(l.useState)(!1),t=Object(C.a)(a,2),r=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"menu-btn",onClick:function(){c(!r)}},n.a.createElement("i",{className:"fas fa-bars fa-2x"})),n.a.createElement("div",{className:"main-nav"},n.a.createElement("div",{className:"logo"},n.a.createElement("h1",null,"Pick",n.a.createElement("span",null,"Code"))),n.a.createElement("ul",{className:"main-menu ".concat(r&&"show")},n.a.createElement("li",null,n.a.createElement(b.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(b.b,{to:"/colors"},"Colors")),n.a.createElement("li",null,n.a.createElement(b.b,{to:"/blogs"},"Blogs")),n.a.createElement("li",null,n.a.createElement(b.b,{to:"/about"},"About Us")),n.a.createElement("li",null,n.a.createElement(b.b,{to:"/dashboard"},"Profile"))),n.a.createElement("div",{className:"right-menu"},e.Auth.isLoggedIn?n.a.createElement("div",{onClick:function(){e.logout()},style:{cursor:"pointer"}},n.a.createElement("i",{className:"fas fa-sign-out-alt fa-2x","aria-hidden":"true"})):n.a.createElement(b.b,{to:"/login",id:"modalBtn",className:"button"},n.a.createElement("i",{className:"fas fa-user fa-2x"})))))}));var T=function(){return n.a.createElement("section",{className:"links"},n.a.createElement("div",{className:"links-inner"},n.a.createElement("div",{className:"rightside-link"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Blogs")))),n.a.createElement("div",{className:"newsletter"},n.a.createElement("h1",null,"Newsletter"),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",placeholder:"Enter your email"}),n.a.createElement("a",{href:"#"},"Subscribe")))))};var U=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"main-footer"},n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-globe fa-2x"})," \xa9 All Rights Reversed By Pickcode 2020.")))};var _=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"showcase"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,"Color Picker"),n.a.createElement("p",null,"Searching for that perfect color has never been easier"),n.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",n.a.createElement("i",{className:"fas fa-chevron-right"})),n.a.createElement("img",{src:"images/color.svg",alt:""}))),n.a.createElement("section",{className:"leftside"},n.a.createElement("div",{className:"leftside-pic"},n.a.createElement("div",{className:"leftside-inner"},n.a.createElement("img",{src:"images/leftside.svg",alt:""}))),n.a.createElement("div",{className:"leftside-content"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,"Color Picker"),n.a.createElement("p",null,"Save your favourite color code and use it for your future projects."),n.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",n.a.createElement("i",{className:"fas fa-chevron-right"}))))),n.a.createElement("div",{className:"cards"},n.a.createElement("div",null,n.a.createElement("img",{src:"images/card1.jpeg",alt:""}),n.a.createElement("h3",null,"Mobile App Design"),n.a.createElement("p",null,"14 Trendy Color Schemes"),n.a.createElement(b.b,{to:"https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3",target:"_blank"},"Learn More ",n.a.createElement("i",{className:"fas fa-chevron-right"}))),n.a.createElement("div",null,n.a.createElement("img",{src:"images/card2.jpeg",alt:""}),n.a.createElement("h3",null,"Medium Article"),n.a.createElement("p",null,"Color Tools For Designers 2019"),n.a.createElement(b.b,{to:"https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab",target:"_blank"},"Learn More ",n.a.createElement("i",{className:"fas fa-chevron-right"}))),n.a.createElement("div",null,n.a.createElement("img",{src:"images/card3.jpeg",alt:""}),n.a.createElement("h3",null,"Choosing colors for web design"),n.a.createElement("p",null,"A practical UI color application guide"),n.a.createElement(b.b,{to:"https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide",target:"_blank"},"Learn More ",n.a.createElement("i",{className:"fas fa-chevron-right"})))),n.a.createElement("section",{className:"rightside"},n.a.createElement("div",{className:"rightside-content"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,"Color Picker"),n.a.createElement("p",null,"You can click over the strips to see the colors in background."),n.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",n.a.createElement("i",{className:"fas fa-chevron-right"})))),n.a.createElement("div",{className:"rightside-pic"},n.a.createElement("div",{className:"rightside-inner"},n.a.createElement("img",{src:"images/rightside.svg",alt:""})))),n.a.createElement("div",{className:"main-spectrum"},n.a.createElement("img",{src:"images/spectrum.svg",alt:""}),n.a.createElement("div",{className:"spectrum-content"},n.a.createElement("div",{className:"spectrum-wrapper"},n.a.createElement("div",{className:"spectrum-layer"})),n.a.createElement("div",null,n.a.createElement("br",null),"Move your mouse over color spectrum or click on it to see respective rgb and hex values",n.a.createElement("br",null)),n.a.createElement("div",null,"Red: ",n.a.createElement("span",{className:"red"})),n.a.createElement("div",null,"Green: ",n.a.createElement("span",{className:"green"})),n.a.createElement("div",null,"Blue: ",n.a.createElement("span",{className:"blue"})),n.a.createElement("div",null,n.a.createElement("br",null),"Hex: ",n.a.createElement("span",{className:"hex"})))))};var B=function(){return n.a.createElement("div",{class:"about-section"},n.a.createElement("div",{class:"about-inner"},n.a.createElement("h1",null,"About Us"),n.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio perferendis excepturi iusto mollitia labore porro asperiores totam sequi quam, exercitationem, error impedit quaerat recusandae eum iste itaque in quas eligendi nemo. Voluptatem consequuntur recusandae maiores, eaque necessitatibus quas. Aliquam distinctio aspernatur blanditiis dolor nesciunt placeat fuga ex ad? Incidunt voluptatum dolor voluptates ea, perspiciatis, voluptate mollitia, atque ut magni tempora voluptatem deserunt esse itaque consequatur nisi numquam. Accusamus, architecto."),n.a.createElement("img",{src:"images/aboutpage.svg",alt:""})))};var M=function(){return n.a.createElement("div",{class:"blog-cards"},n.a.createElement("div",{class:"card1"},n.a.createElement("h3",null,"Mobile App Design"),n.a.createElement(b.b,{to:{pathname:"https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3"},target:"_blank"},"Look Over",n.a.createElement("i",{class:"fas fa-chevron-right"}))),n.a.createElement("div",{class:"card2"},n.a.createElement("h3",null,"Medium Article"),n.a.createElement(b.b,{to:{pathname:"https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab"},target:"_blank"},"Look Over",n.a.createElement("i",{class:"fas fa-chevron-right"}))),n.a.createElement("div",{class:"card3"},n.a.createElement("h3",null,"Choosing colors"),n.a.createElement(b.b,{to:{pathname:"https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide"},target:"_blank"},"Look Over",n.a.createElement("i",{class:"fas fa-chevron-right"}))))};var D=function(){var e=Object(l.useState)([]),a=Object(C.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!1),o=Object(C.a)(c,2),s=o[0],i=o[1];return Object(l.useEffect)((function(){i(!0),S.get(y.FETCHRANDOMCOLORS).then((function(e){i(!1),r(e.data.data)})).catch((function(e){i(!1),console.log(e),window.alert(e)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"colors-loader ".concat(!s&&"loaderinvisible")},n.a.createElement(L.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),n.a.createElement("div",{className:"colortable-showcase"},n.a.createElement("div",{className:"colortable-inner"},t&&0!==t.length?n.a.createElement("table",{className:"content-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Number"),n.a.createElement("th",null,"Color Strip"),n.a.createElement("th",null,"Color Code"))),n.a.createElement("tbody",null,t&&t.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,a+1),n.a.createElement("td",null,n.a.createElement("div",{className:"color-strip",style:{background:e.colorcode}},n.a.createElement("h5",null,"Click"))),n.a.createElement("td",null,e.colorcode))})))):n.a.createElement("h1",{className:"empty-array"},"Add atleast one color to your ",n.a.createElement("a",{href:"#"},n.a.createElement("span",null,"profile "),n.a.createElement("i",{className:"fas fa-user"})),"."))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-inner"},n.a.createElement("h3",null,"Want to save your favourite color code?"),n.a.createElement("h4",null,"Head to your ",n.a.createElement(b.b,{to:"/dashboard"},n.a.createElement("span",null,"profile "),n.a.createElement("i",{className:"fas fa-user"}))),n.a.createElement("img",{src:"images/usercard.svg",alt:""}))))};t(85);var q=Object(o.b)((function(e){return{}}),{login:j,logout:w,setUserDetails:k})((function(e){var a=localStorage.getItem("Token");return a&&"null"!==a&&"undefined"!==a&&e.login(a),n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement(b.b,{to:"#",id:"top"}),n.a.createElement("div",{className:"container"},n.a.createElement(x,null),n.a.createElement(f.d,null,n.a.createElement(f.b,{path:"/",exact:!0},n.a.createElement(_,null)),n.a.createElement(f.b,{path:"/colors",exact:!0},n.a.createElement(D,null)),n.a.createElement(f.b,{path:"/blogs",exact:!0},n.a.createElement(M,null)),n.a.createElement(f.b,{path:"/about",exact:!0},n.a.createElement(B,null)),n.a.createElement(I,{path:"/login",exact:!0},n.a.createElement(F,null)),n.a.createElement(N,{path:"/dashboard",refresh:function(){1},exact:!0},n.a.createElement(R,null))))),n.a.createElement(T,null),n.a.createElement(U,null),n.a.createElement("a",{href:"#top",className:"gotopbtn"},n.a.createElement("i",{className:"fas fa-arrow-up"})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,{store:p},n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a7600a42.chunk.js.map