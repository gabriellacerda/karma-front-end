(this["webpackJsonpkarma-front-end"]=this["webpackJsonpkarma-front-end"]||[]).push([[0],{25:function(e,a,t){e.exports=t(60)},30:function(e,a,t){},32:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},33:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),s=(t(30),t(6)),i=t.n(s),o=t(18),m=t(19),u=t(20),d=t(2),h=t(23),E=t(24),v=(t(32),t(33),t(21)),p=t.n(v),b=t(22),f=t.n(b),g=t(3),N=t(5),w=t.n(N);t(59);var k="delivery123",y=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={preloader:!0,requests:[],auth:!1},n.auth=n.auth.bind(Object(d.a)(n)),n.loadResources=n.loadResources.bind(Object(d.a)(n)),n.logout=n.logout.bind(Object(d.a)(n)),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){null!==JSON.parse(window.localStorage.getItem("authenticated"))&&(this.setState({auth:!0}),this.loadResources())}},{key:"logout",value:function(){window.localStorage.setItem("authenticated",null),this.setState({auth:!1,requests:[]})}},{key:"loadResources",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({preloader:!0}),e.prev=1,e.next=4,f.a.get("https://acaiteria-karma.herokuapp.com/requests");case 4:for(l in a=e.sent,t=[],a.data.data)(n=a.data.data[l]).request=JSON.parse(n.request),t.push(n);this.setState({requests:t,preloader:!1}),console.log(this.state),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"auth",value:function(e){e.target.value===k&&(window.localStorage.setItem("authenticated",JSON.stringify(!0)),this.setState({auth:!0}),this.loadResources())}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.Helmet,null,l.a.createElement("link",{rel:"icon",type:"image/jpg",href:"https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg"})),l.a.createElement(p.a,{fonts:[{font:"Roboto",weights:[100,300,400,500]}]}),this.state.auth?l.a.createElement("div",{className:"panelView"},l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:"https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg",width:"30",height:"30",alt:""}),"Karma"),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link cursor-pointer",onClick:this.logout},"Sair")))),this.state.preloader?l.a.createElement("div",null,l.a.createElement(g.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Obtendo dados frescos - A\xe7aiteria Delivery - Karma \xb7 Private instance")),l.a.createElement("div",{className:"container mt-5 mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("h4",null,"Obtendo dados frescos \xb7 A\xe7aiteria Delivery"))))):l.a.createElement("div",{className:"listing"},l.a.createElement(g.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Eventos - A\xe7aiteria Delivery - Karma \xb7 Private instance")),l.a.createElement("div",{className:"container mt-5 mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("div",{className:"btn-fixed"},l.a.createElement("button",{className:"btn btn-primary",onClick:this.loadResources},"Atualizar")),l.a.createElement("h4",null,"Eventos \xb7 A\xe7aiteria Delivery"),l.a.createElement("ul",{className:"timeline"},this.state.requests.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"https://www.totoprayogo.com/#"},"Nova requisi\xe7\xe3o"),l.a.createElement("a",{href:"#",className:"float-right"},w()(e.date).calendar()),l.a.createElement("p",null,l.a.createElement("div",null,"Endpoint:"),e.request.request," ",l.a.createElement("br",null),l.a.createElement("code",null,e.request.response)," ",l.a.createElement("br",null),l.a.createElement("div",null,"Env variables:"),l.a.createElement("code",null,"CITY_TOKEN: ",e.request.env_variables.token," ",l.a.createElement("br",null),"CITY_ENV_K: ",e.request.env_variables.token_name),l.a.createElement("div",null,"Detalhes do pedido:"),l.a.createElement("code",null,"Total: ",e.request.total," ",l.a.createElement("br",null),"N\xfamero de telefone: ",e.request.phone," ",l.a.createElement("br",null))))}))),l.a.createElement("br",null),l.a.createElement("div",{className:"credits"},l.a.createElement("small",null,"\xa9 2020 Built with Karma"))))))):l.a.createElement("div",{className:"accessKey"},l.a.createElement(g.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Sign in - A\xe7aiteria Delivery - Karma \xb7 Private instance")),l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"https://cdn.jsdelivr.net/gh/gabriellacerda/resources/karma.jpg"})),l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"A\xe7aiteria Delivery")),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Ol\xe1 novamente! Entre com a chave de ",l.a.createElement("br",null)," acesso para continuar...")),l.a.createElement("br",null),l.a.createElement("div",{className:"accessKeyInput"},l.a.createElement("span",null,"Chave de acesso"),l.a.createElement("input",{className:"form-control",type:"text",onChange:this.auth})),l.a.createElement("br",null),l.a.createElement("div",{className:"credits"},l.a.createElement("small",null,"Built with Karma"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d1bc88c6.chunk.js.map