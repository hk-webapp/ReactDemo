(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,t,n){e.exports=n(403)},369:function(e,t,n){},373:function(e,t,n){},401:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(62),o=n(63),c=n(4),i=(n(181),n(367),n(117)),l=n(406),s=n(407),u=n(35),m=n(114),p=(n(369),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.c)(t,e),t.prototype.render=function(){return document.title="About React Demo Site",a.createElement("div",null,"about us ... ")},t}(a.Component)),d=n(43),f="FETCH_INTROPAGES_SUCCESS",h="FETCH_INTROPAGES_FAIL",g="CONTACT_US_CHANGE_NAME",E="CONTACT_US_CHANGE_EMAIL",v="CONTACT_US_CHANGE_DESC";function b(e){return{name:e,type:g}}function N(e){return{desc:e,type:v}}function y(e){return{email:e,type:E}}var C={Desc:"",Email:"",Name:""};var w=function(e){return e.Name},O=function(e){return e.Email},j=function(e){return e.Desc},S=function(e){function t(t){var n=e.call(this,t)||this;return n.Send=n.Send.bind(n),n.blurHandlingForEmail=n.blurHandlingForEmail.bind(n),n.blurHandlingForName=n.blurHandlingForName.bind(n),n.changeHanhleing=n.changeHanhleing.bind(n),n.blurHandlingForDesc=n.blurHandlingForDesc.bind(n),n}return Object(c.c)(t,e),t.prototype.changeHanhleing=function(e){},t.prototype.blurHandlingForName=function(e){this.props.ChangeName(e.target.value)},t.prototype.blurHandlingForEmail=function(e){this.props.ChangeEmail(e.target.value)},t.prototype.blurHandlingForDesc=function(e){this.props.ChangeDesc(e.target.value)},t.prototype.Send=function(){alert("Thanks "+this.props.Name)},t.prototype.render=function(){return document.title="Countact us",a.createElement("div",{className:"contact-us-form"},a.createElement("div",{className:"desc-top"},"Please send to us, your opinions and suggestions. "),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Name",a.createElement("input",{className:"form-control",onChange:this.changeHanhleing,onBlur:this.blurHandlingForName,type:"text",placeholder:"please enter your name."}))),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Email",a.createElement("input",{className:"form-control",type:"email",onBlur:this.blurHandlingForEmail,onChange:this.changeHanhleing,placeholder:"please enter your Email."}))),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Description",a.createElement("textarea",{className:"form-control",rows:5,onBlur:this.blurHandlingForDesc,placeholder:"please enter your description."}))),a.createElement("div",{className:"form-group"},a.createElement("input",{type:"button",id:"sendBtn",value:"Send",onClick:this.Send}),"   "))},t}(a.Component),H=Object(o.b)(function(e){return{Desc:j(e.contactusState),Email:O(e.contactusState),Name:w(e.contactusState)}},function(e){return Object(d.b)({ChangeDesc:N,ChangeEmail:y,ChangeName:b},e)})(S),D=(n(371),{error:"",items:[],loaded:!1});var k=function(e){return e.items},I=function(e){return e.error},T=function(e){return e.loaded},A=(n(373),function(e){var t=e.info,n=e.index;return a.createElement("div",{className:"ss-col-4"},a.createElement("div",{className:"page-item"},a.createElement("div",{className:!0!==t.IsNew?"new-badge-hidden":"new-badge"},a.createElement("span",{className:"rotate-span"},"New")),a.createElement("div",{className:"page-item-header"},a.createElement("img",{src:"/ReactDemo/images/"+t.IntroImg,onError:function(e){return e.currentTarget.className="img-not-found"},className:"page-item-img",alt:t.Title}),a.createElement("div",{className:"page-item-title"},a.createElement(u.c,{key:n,to:"/Page/"+t.Title},t.Title))),a.createElement("div",{className:"page-item-info"},t.IntroInfo)))}),F=function(e){function t(t){return e.call(this,t)||this}return Object(c.c)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"page-container"},a.createElement("div",{className:"ss-row"},this.props.items.map(function(e,t){return a.createElement(A,{key:t,info:e,index:t})})))},t}(a.Component),R=Object(o.b)(function(e){return{error:I(e.introPageState),items:k(e.introPageState),loaded:T(e.introPageState)}})(F),U=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.c)(t,e),t.prototype.render=function(){return a.createElement(R,null)},t}(a.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.c)(t,e),t.prototype.render=function(){var e=this.getPageName();return document.title=e,a.createElement("div",{className:"page-viewer-container"},a.createElement("h2",null,e),a.createElement("p",null,"This a static content with dynamic title. this is a fixed content for demo."),a.createElement("p",null,"this part is about ",a.createElement("span",{className:"content-title"},e," "),"subject."),a.createElement("p",null,"content content content content content content"),a.createElement("hr",null),a.createElement(u.b,{to:"/"},"Home"))},t.prototype.getPageName=function(){return this.props.match.params.Name},t}(a.Component),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.c)(t,e),t.prototype.componentDidMount=function(){var e=this;t.interval=setInterval(function(){e.setTime()},1e3)},t.prototype.componentWillUnmount=function(){t.interval&&delete t.interval},t.prototype.render=function(){return a.createElement("div",{className:"time-container"},this.state?this.state.time:"")},t.prototype.setTime=function(){this.setState({time:(new Date).toLocaleTimeString()})},t}(a.Component),P=function(e){function t(t){var n=e.call(this,t)||this;return n.menuIsOpen=!1,n.menuOnClick=n.menuOnClick.bind(n),n.menuDropdownRef=a.createRef(),n}return Object(c.c)(t,e),t.prototype.menuOnClick=function(){this.menuIsOpen?(i(this.menuDropdownRef.current).hide(),this.menuIsOpen=!1):(i(this.menuDropdownRef.current).show(),this.menuIsOpen=!0)},t.prototype.render=function(){return a.createElement(u.a,{basename:"/ReactDemo"},a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement("h1",{className:"App-title"},"React App Demo"),a.createElement("div",{className:"title"},a.createElement("div",{className:"app-time"},a.createElement(x,null)))),a.createElement("div",{className:"app-menubar"},a.createElement(l.a,{className:"navbar navbar-inverse",expand:"md",bg:"drak",variant:"dark"},a.createElement(l.a.Toggle,{"aria-controls":"myNavbar"}),a.createElement(l.a.Collapse,{className:"navbar-right",id:"myNavbar"},a.createElement(s.a,{className:"mr-auto"},a.createElement(s.a.Item,null,a.createElement(u.c,{to:"/Home",activeClassName:"active-page",className:"nav-link "},"Home")),a.createElement(s.a.Item,null,a.createElement(u.c,{to:"/ContactUs",activeClassName:"active-page",className:"nav-link"},"Contact Us")),a.createElement(s.a.Item,null,a.createElement(u.c,{to:"/AboutUs",activeClassName:"active-page",className:"nav-link"},"About Us")))))),a.createElement("div",{className:"pages-container"},a.createElement(m.a,{exact:!0,path:"/",component:U}),a.createElement(m.a,{path:"/Home",component:U}),a.createElement(m.a,{path:"/ContactUs",component:H}),a.createElement(m.a,{path:"/AboutUs",component:p}),a.createElement(m.a,{path:"/Page/:Name",component:_})),a.createElement("div",{className:"App-footer"},"@Copy 2019 (version 2.0)")))},t}(a.Component),L=n(170),G=n.n(L),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c.c)(t,e),t.prototype.GetIntroInfoList=function(){return Object(c.b)(this,void 0,void 0,function(){return Object(c.d)(this,function(e){switch(e.label){case 0:return[4,this.get("/data.json")];case 1:return[2,e.sent().data]}})})},t}(function(){function e(){this.axiosObj=G.a.create({baseURL:"/ReactDemo"})}return e.prototype.get=function(e,t){return void 0===t&&(t={}),this.axiosObj.get(e,t).then(function(e){return e}).catch(function(e){console.log(e)})},e}()),W=function(){return function(e){return Object(c.b)(void 0,void 0,void 0,function(){return Object(c.d)(this,function(t){return(new B).GetIntroInfoList().then(function(t){e({items:t,loaded:!0,type:f})}).catch(function(t){e({error:t,loaded:!1,type:h})}),[2]})})}},M=(n(401),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function J(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=n(171),$=Object(d.c)({contactusState:function(e,t){switch(void 0===e&&(e=C),t.type){case g:return Object(c.a)(Object(c.a)({},e),{Name:t.name});case E:return Object(c.a)(Object(c.a)({},e),{Email:t.email});case v:return Object(c.a)(Object(c.a)({},e),{Desc:t.desc});default:return e}},introPageState:function(e,t){switch(void 0===e&&(e=D),t.type){case f:return Object(c.a)(Object(c.a)({},e),{error:"",items:t.items,loaded:t.loaded});case h:return Object(c.a)(Object(c.a)({},e),{items:[],loaded:t.loaded,error:t.error});default:return e}}});var q=Object(d.d)($,Object(d.a)(Q.a));var z=document.getElementById("root");q.dispatch(W()),r.render(a.createElement(o.a,{store:q},a.createElement(P,null)),z),function(){if("serviceWorker"in navigator){if(new URL("/ReactDemo",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/ReactDemo/service-worker.js";M?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):J(e)})}}()}},[[172,2,1]]]);
//# sourceMappingURL=main.e266c841.chunk.js.map