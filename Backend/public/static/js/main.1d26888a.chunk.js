(this.webpackJsonpex=this.webpackJsonpex||[]).push([[0],{37:function(e,t,a){e.exports=a(86)},46:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=a(10),i=a(12),s=a(34),m=a(35),u=a.n(m),d=a(14),E={isLoggedIn:!1,token:null,userdetails:null},p=Object(i.c)({Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,token:t.token,userdetails:t.userdetails});case"LOGOUT":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,token:null,userdetails:null});case"SET_USER_DETAILS":return Object(d.a)(Object(d.a)({},e),{},{userdetails:t.payload});default:return e}}}),g=[s.a,u.a],h=Object(i.d)(p,{},i.a.apply(void 0,g)),b=(a(46),a(2)),f=a(4),v=a(18);var N=Object(o.b)((function(e){return{Auth:e.Auth}}),{})((function(e){var t=e.children,a=e.Auth,n=Object(v.a)(e,["children","Auth"]);return console.log(a.isLoggedIn),l.a.createElement(f.b,Object.assign({},n,{render:function(){return a.isLoggedIn?t:l.a.createElement(f.a,{to:{pathname:"/login"}})}}))})),O=a(36),y={BASE_LOCAL_URL:"https://pickcode.herokuapp.com/",BASE_SERVER_URL:"https://pickcode.herokuapp.com/",GET_USER_DETAILS:"/apis/v1/userdetails",LOGIN:"/api/login",REGISTER:"/api/signup",FETCHCOLORS:"/api/fetchcolors",FETCHRANDOMCOLORS:"/api/fetchrandomcolors",DELETECOLOR:"/api/deletecolor",FETCHUSERCOLORS:"/api/fetchcolor",SAVECOLOR:"/api/savecolor"},w=a.n(O).a.create({baseURL:y.BASE_SERVER_URL}),k=function(e,t){return console.log(e),w.defaults.headers.common.Authorization="Bearer "+e,localStorage.setItem("Token",e),{type:"LOGIN",token:e,userdetails:t}},S=function(){return localStorage.removeItem("Token"),{type:"LOGOUT"}},j=function(e){return{type:"SET_USER_DETAILS",payload:e}},L=a(5),C=a(13),A=a.n(C);var I=function(e){var t=Object(n.useState)([]),a=Object(L.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)([]),i=Object(L.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(!1),d=Object(L.a)(u,2),E=d[0],p=d[1],g=Object(n.useState)(!1),h=Object(L.a)(g,2),f=h[0],v=h[1];return Object(n.useEffect)((function(){v(!0),w.get(y.FETCHCOLORS).then((function(e){v(!1),r(e.data.data),window.document.querySelectorAll(".color-strip").forEach((function(e){""===e.style.background?(e.children[0].innerHTML="Invalid",e.addEventListener("click",(function(){console.log(e.parentElement.parentElement),w.post(y.DELETECOLOR,{colorcode:e.parentElement.nextElementSibling.innerHTML}).then((function(t){e.parentElement.parentElement.remove(),window.alert("It is invalid code, it's deleted")})).catch((function(e){console.log(e),window.alert(e)}))}))):e.addEventListener("click",(function(){document.body.style.background=e.style.background,setTimeout((function(){document.body.style.background="#f2f2f2"}),1200)}))})),document.querySelectorAll(".delete").forEach((function(e){e.addEventListener("click",(function(){v(!0),w.post(y.DELETECOLOR,{colorcode:e.previousElementSibling.innerHTML}).then((function(t){v(!1),e.parentElement.remove(),window.alert("Color Code Deleted")})).catch((function(e){v(!1),console.log(e),window.alert(e)}))}))}))})).catch((function(e){v(!1),console.log(e),window.alert(e)}))}),[E]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"colors-loader ".concat(!f&&"loaderinvisible")},l.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),l.a.createElement("div",{className:"colors-loader ".concat(!f&&"loaderinvisible")},l.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),l.a.createElement("div",{className:"colortable-showcase"},l.a.createElement("div",{className:"colortable-inner"},c&&0!==c.length?l.a.createElement("table",{className:"content-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"Color Strip"),l.a.createElement("th",null,"Color Code"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,c&&c.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,l.a.createElement("div",{className:"color-strip",style:{background:e.colorcode}},l.a.createElement("h5",null,"Click"))),l.a.createElement("td",null,e.colorcode),l.a.createElement("td",{className:"delete"},l.a.createElement("i",{className:"fas fa-trash"})))})))):l.a.createElement("h1",{className:"empty-array"},"Add atleast one color to your ",l.a.createElement(b.b,{to:"/dashboard"},l.a.createElement("span",null,"profile "),l.a.createElement("i",{className:"fas fa-user"}))))),l.a.createElement("div",{className:"submit-section"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(!0),w.post(y.SAVECOLOR,{colorcode:s}).then((function(e){v(!1),p(!E),window.alert(e.data.message)})).catch((function(e){v(!1),console.log(e),window.alert(e)}))}},l.a.createElement("h3",null,"Save your favourite color code."),l.a.createElement("input",{className:"input",type:"text",placeholder:"Enter the code",name:"colorcode",onChange:function(e){m(e.target.value)}}),l.a.createElement("input",{className:"submit",type:"submit",value:"Submit"}))))};var R=Object(o.b)((function(e){return{Auth:e.Auth}}),{})((function(e){var t=e.children,a=e.Auth,n=Object(v.a)(e,["children","Auth"]);return console.log(a),l.a.createElement(f.b,Object.assign({},n,{render:function(e){e.location;return a.isLoggedIn?l.a.createElement(f.a,{to:{pathname:"/dashboard"}}):t}}))}));a(84);var T=Object(o.b)((function(e){return{Auth:e.Auth}}),{login:k,logout:S,setUserDetails:j})((function(e){var t=Object(n.useState)(!1),a=Object(L.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),i=Object(L.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(L.a)(u,2),E=d[0],p=d[1],g=Object(n.useState)(""),h=Object(L.a)(g,2),b=h[0],f=h[1],v=Object(n.useState)(""),N=Object(L.a)(v,2),O=N[0],k=N[1],S=Object(n.useState)("login"),j=Object(L.a)(S,2),C=j[0],I=j[1],R=Object(n.useState)(!1),T=Object(L.a)(R,2),F=T[0],x=T[1],U=function(){r(!c)},M=function(){m(!s)},_=function(t){t.preventDefault(),x(!0),"login"===C?w.post(y.LOGIN,{email:b,password:O}).then((function(t){x(!1),e.login(t.data.token)})).catch((function(t){x(!1),console.log(t),window.alert(t),e.logout()})):w.post(y.REGISTER,{username:E,email:b,password:O}).then((function(e){x(!1),window.alert(e.data.message+"Now you can sign in")})).catch((function(e){window.alert(e),x(!1),console.log(e)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"colors-loader ".concat(!F&&"loaderinvisible")},l.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),l.a.createElement("div",{className:"container-wrapper"},l.a.createElement("div",{className:"login-container ".concat(c?"right-active-panel":""),id:"container"},l.a.createElement("div",{className:"form-container sign-up-container ".concat(s?"":"overlay-panel-inactive-mobile")},l.a.createElement("form",{onSubmit:_},l.a.createElement("h1",null,"Create Account"),l.a.createElement("span",null,"or use your email for registration"),l.a.createElement("input",{type:"text",placeholder:"Name",onChange:function(e){p(e.target.value)}}),l.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){f(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){k(e.target.value)}}),l.a.createElement("button",{onClick:function(){I("signup")}},"Sign Up"),l.a.createElement("button",{id:"signIn",className:"ghostMobile",onClick:M},"Sign In"))),l.a.createElement("div",{className:"form-container sign-in-container ".concat(s?"overlay-panel-inactive-mobile":"")},l.a.createElement("form",{onSubmit:_},l.a.createElement("h1",null,"Sign in"),l.a.createElement("span",null,"or use your account"),l.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(e){f(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(e){k(e.target.value)}}),l.a.createElement("a",{href:"/"},"Forgot your password?"),l.a.createElement("button",{onClick:function(){I("login")}},"Sign In"),l.a.createElement("button",{id:"signUp",className:"ghostMobile",onClick:M},"Sign Up"))),l.a.createElement("div",{className:"overlay-container"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay-panel overlay-left"},l.a.createElement("h1",null,"Welcome Back!"),l.a.createElement("p",null,"To keep connected with us please login with your personal info"),l.a.createElement("button",{className:"ghost",id:"signIn",onClick:U},"Sign In")),l.a.createElement("div",{className:"overlay-panel overlay-right"},l.a.createElement("h1",null,"Hello, Friend!"),l.a.createElement("p",null,"Enter your personal details and start journey with us"),l.a.createElement("button",{className:"ghost",id:"signUp",onClick:U},"Sign Up")))))))}));var F=Object(o.b)((function(e){return{Auth:e.Auth}}),{logout:S})((function(e){var t=Object(n.useState)(!1),a=Object(L.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu-btn",onClick:function(){r(!c)}},l.a.createElement("i",{className:"fas fa-bars fa-2x"})),l.a.createElement("div",{className:"main-nav"},l.a.createElement("div",{className:"logo"},l.a.createElement("h1",null,"Pick",l.a.createElement("span",null,"Code"))),l.a.createElement("ul",{className:"main-menu ".concat(c&&"show")},l.a.createElement("li",null,l.a.createElement(b.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/colors"},"Colors")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/blogs"},"Blogs")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/about"},"About Us")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/dashboard"},"Profile"))),l.a.createElement("div",{className:"right-menu"},e.Auth.isLoggedIn?l.a.createElement("div",{onClick:function(){e.logout()},style:{cursor:"pointer"}},l.a.createElement("i",{className:"fas fa-sign-out-alt fa-2x","aria-hidden":"true"})):l.a.createElement(b.b,{to:"/login",id:"modalBtn",className:"button"},l.a.createElement("i",{className:"fas fa-user fa-2x"})))))}));var x=function(){return l.a.createElement("section",{className:"links"},l.a.createElement("div",{className:"links-inner"},l.a.createElement("div",{className:"rightside-link"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"About Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Blogs")))),l.a.createElement("div",{className:"newsletter"},l.a.createElement("h1",null,"Newsletter"),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",placeholder:"Enter your email"}),l.a.createElement("a",{href:"#"},"Subscribe")))))};var U=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-globe fa-2x"})," \xa9 All Rights Reversed By Pickcode 2020.")))};var M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"showcase"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Color Picker"),l.a.createElement("p",null,"Searching for that perfect color has never been easier"),l.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",l.a.createElement("i",{className:"fas fa-chevron-right"})),l.a.createElement("img",{src:"images/color.svg",alt:""}))),l.a.createElement("section",{className:"leftside"},l.a.createElement("div",{className:"leftside-pic"},l.a.createElement("div",{className:"leftside-inner"},l.a.createElement("img",{src:"images/leftside.svg",alt:""}))),l.a.createElement("div",{className:"leftside-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Color Picker"),l.a.createElement("p",null,"Save your favourite color code and use it for your future projects."),l.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",l.a.createElement("i",{className:"fas fa-chevron-right"}))))),l.a.createElement("div",{className:"cards"},l.a.createElement("div",null,l.a.createElement("img",{src:"images/card1.jpeg",alt:""}),l.a.createElement("h3",null,"Mobile App Design"),l.a.createElement("p",null,"14 Trendy Color Schemes"),l.a.createElement(b.b,{to:"https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3",target:"_blank"},"Learn More ",l.a.createElement("i",{className:"fas fa-chevron-right"}))),l.a.createElement("div",null,l.a.createElement("img",{src:"images/card2.jpeg",alt:""}),l.a.createElement("h3",null,"Medium Article"),l.a.createElement("p",null,"Color Tools For Designers 2019"),l.a.createElement(b.b,{to:"https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab",target:"_blank"},"Learn More ",l.a.createElement("i",{className:"fas fa-chevron-right"}))),l.a.createElement("div",null,l.a.createElement("img",{src:"images/card3.jpeg",alt:""}),l.a.createElement("h3",null,"Choosing colors for web design"),l.a.createElement("p",null,"A practical UI color application guide"),l.a.createElement(b.b,{to:"https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide",target:"_blank"},"Learn More ",l.a.createElement("i",{className:"fas fa-chevron-right"})))),l.a.createElement("section",{className:"rightside"},l.a.createElement("div",{className:"rightside-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Color Picker"),l.a.createElement("p",null,"You can click over the strips to see the colors in background."),l.a.createElement(b.b,{to:"/colors",className:"btn"},"Know More ",l.a.createElement("i",{className:"fas fa-chevron-right"})))),l.a.createElement("div",{className:"rightside-pic"},l.a.createElement("div",{className:"rightside-inner"},l.a.createElement("img",{src:"images/rightside.svg",alt:""})))),l.a.createElement("div",{className:"main-spectrum"},l.a.createElement("img",{src:"images/spectrum.svg",alt:""}),l.a.createElement("div",{className:"spectrum-content"},l.a.createElement("div",{className:"spectrum-wrapper"},l.a.createElement("div",{className:"spectrum-layer"})),l.a.createElement("div",null,l.a.createElement("br",null),"Move your mouse over color spectrum or click on it to see respective rgb and hex values",l.a.createElement("br",null)),l.a.createElement("div",null,"Red: ",l.a.createElement("span",{className:"red"})),l.a.createElement("div",null,"Green: ",l.a.createElement("span",{className:"green"})),l.a.createElement("div",null,"Blue: ",l.a.createElement("span",{className:"blue"})),l.a.createElement("div",null,l.a.createElement("br",null),"Hex: ",l.a.createElement("span",{className:"hex"})))))};var _=function(){return l.a.createElement("div",{class:"about-section"},l.a.createElement("div",{class:"about-inner"},l.a.createElement("h1",null,"About Us"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio perferendis excepturi iusto mollitia labore porro asperiores totam sequi quam, exercitationem, error impedit quaerat recusandae eum iste itaque in quas eligendi nemo. Voluptatem consequuntur recusandae maiores, eaque necessitatibus quas. Aliquam distinctio aspernatur blanditiis dolor nesciunt placeat fuga ex ad? Incidunt voluptatum dolor voluptates ea, perspiciatis, voluptate mollitia, atque ut magni tempora voluptatem deserunt esse itaque consequatur nisi numquam. Accusamus, architecto."),l.a.createElement("img",{src:"images/aboutpage.svg",alt:""})))};var D=function(){return l.a.createElement("div",{class:"blog-cards"},l.a.createElement("div",{class:"card1"},l.a.createElement("h3",null,"Mobile App Design"),l.a.createElement(b.b,{to:{pathname:"https://medium.com/@Adoriasoft/mobile-app-design-14-trendy-color-schemes-2669b5bb77d3"},target:"_blank"},"Look Over",l.a.createElement("i",{class:"fas fa-chevron-right"}))),l.a.createElement("div",{class:"card2"},l.a.createElement("h3",null,"Medium Article"),l.a.createElement(b.b,{to:{pathname:"https://medium.muz.li/color-tools-for-designers-2019-6ebd77a94ab"},target:"_blank"},"Look Over",l.a.createElement("i",{class:"fas fa-chevron-right"}))),l.a.createElement("div",{class:"card3"},l.a.createElement("h3",null,"Choosing colors"),l.a.createElement(b.b,{to:{pathname:"https://dribbble.com/stories/2018/12/19/choosing-colors-for-web-design-a-practical-ui-color-application-guide"},target:"_blank"},"Look Over",l.a.createElement("i",{class:"fas fa-chevron-right"}))))};var q=function(){var e=Object(n.useState)([]),t=Object(L.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(L.a)(r,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){s(!0),w.get(y.FETCHRANDOMCOLORS).then((function(e){s(!1),c(e.data.data),window.document.querySelectorAll(".color-strip").forEach((function(e){""===e.style.background?(e.children[0].innerHTML="Invalid",e.addEventListener("click",(function(){console.log(e.parentElement.parentElement),w.post("/api/deletecolor",{colorcode:e.parentElement.nextElementSibling.innerHTML}).then((function(t){e.parentElement.parentElement.remove(),window.alert("It is invalid code, it's deleted")})).catch((function(e){console.log(e),window.alert(e)}))}))):e.addEventListener("click",(function(){document.body.style.background=e.style.background,setTimeout((function(){document.body.style.background="#f2f2f2"}),1200)}))}))})).catch((function(e){s(!1),console.log(e),window.alert(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"colors-loader ".concat(!i&&"loaderinvisible")},l.a.createElement(A.a,{type:"Puff",color:"#00BFFF",height:100,width:100})),l.a.createElement("div",{className:"colortable-showcase"},l.a.createElement("div",{className:"colortable-inner"},a&&0!==a.length?l.a.createElement("table",{className:"content-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"Color Strip"),l.a.createElement("th",null,"Color Code"))),l.a.createElement("tbody",null,a&&a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,l.a.createElement("div",{className:"color-strip",style:{background:e.colorcode}},l.a.createElement("h5",null,"Click"))),l.a.createElement("td",null,e.colorcode))})))):l.a.createElement("h1",{className:"empty-array"},"Add atleast one color to your ",l.a.createElement("a",{href:"#"},l.a.createElement("span",null,"profile "),l.a.createElement("i",{className:"fas fa-user"})),"."))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-inner"},l.a.createElement("h3",null,"Want to save your favourite color code?"),l.a.createElement("h4",null,"Head to your ",l.a.createElement(b.b,{to:"/dashboard"},l.a.createElement("span",null,"profile "),l.a.createElement("i",{className:"fas fa-user"}))),l.a.createElement("img",{src:"images/usercard.svg",alt:""}))))};a(85);var B=Object(o.b)((function(e){return{}}),{login:k,logout:S,setUserDetails:j})((function(e){var t=localStorage.getItem("Token");return t&&"null"!==t&&"undefined"!==t&&e.login(t),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,l.a.createElement(b.b,{to:"#",id:"top"}),l.a.createElement("div",{className:"container"},l.a.createElement(F,null),l.a.createElement(f.d,null,l.a.createElement(f.b,{path:"/",exact:!0},l.a.createElement(M,null)),l.a.createElement(f.b,{path:"/colors",exact:!0},l.a.createElement(q,null)),l.a.createElement(f.b,{path:"/blogs",exact:!0},l.a.createElement(D,null)),l.a.createElement(f.b,{path:"/about",exact:!0},l.a.createElement(_,null)),l.a.createElement(R,{path:"/login",exact:!0},l.a.createElement(T,null)),l.a.createElement(N,{path:"/dashboard",refresh:function(){1},exact:!0},l.a.createElement(I,null))))),l.a.createElement(x,null),l.a.createElement(U,null),l.a.createElement("a",{href:"#top",className:"gotopbtn"},l.a.createElement("i",{className:"fas fa-arrow-up"})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,{store:h},l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.1d26888a.chunk.js.map