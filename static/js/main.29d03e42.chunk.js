(this.webpackJsonpmini_currency=this.webpackJsonpmini_currency||[]).push([[0],{26:function(e,t,a){e.exports=a(54)},31:function(e,t,a){},32:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),s=(a(31),a(20)),c=a(21),i=a(6),u=a(25),d=a(24),m=a(56),h=a(57),p=a(59),E=a(58),v=a(23),y=(a(32),a(22)),g=a.n(y),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleClick=function(){e.convertMoney()},e.state={usd:1,eur:"",idr:"",jpy:"",sgd:"",inputMoney:"",firstBox:"usd",secondBox:"idr",thirdBox:"0"},e.handleChange1=e.handleChange1.bind(Object(i.a)(e)),e.handleChange2=e.handleChange2.bind(Object(i.a)(e)),e.handleClick=e.handleClick.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.frankfurter.app/latest?amount=1&from=USD&to=IDR,EUR,JPY,SGD",{async:!0,crossDomain:!0,method:"GET",data:"{}"}).then((function(t){console.log(t),e.setState({eur:t.data.rates.EUR,idr:t.data.rates.IDR,jpy:t.data.rates.JPY,sgd:t.data.rates.SGD})})).catch((function(e){console.log(e.response)}))}},{key:"handleChange1",value:function(e){this.setState({firstBox:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({secondBox:e.target.value})}},{key:"inputMoney",value:function(){this.setState({inputMoney:this.refs.money.value})}},{key:"convertMoney",value:function(){var e,t,a,n=this.state.firstBox,l=this.state.secondBox,o=this.state.inputMoney;switch(n){case"usd":e=this.state.usd;break;case"idr":e=this.state.idr;break;case"eur":e=this.state.eur;break;case"jpy":e=this.state.jpy;break;case"sgd":e=this.state.sgd}switch(l){case"usd":t=this.state.usd;break;case"idr":t=this.state.idr;break;case"eur":t=this.state.eur;break;case"jpy":t=this.state.jpy;break;case"sgd":t=this.state.sgd}a=new Intl.NumberFormat("de-DE").format(o/e*t),this.setState({thirdBox:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(m.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement("h1",null,"Mini Currency"),l.a.createElement("p",null,"Build using react, react-bootstrap and axios."))),l.a.createElement(h.a,{className:"mt-3"},l.a.createElement(p.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Input"),l.a.createElement(p.a.Control,{ref:"money",type:"text",placeholder:"ex: 100",value:this.state.inputMoney,onInput:function(){e.inputMoney()}}))),l.a.createElement(E.a,null,l.a.createElement(v.a,{xs:5,lg:4,className:"mt-3"},l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Control,{as:"select",value:this.state.firstBox,onChange:this.handleChange1},l.a.createElement("option",{value:"usd",selected:"selected"},"USD"),l.a.createElement("option",{value:"eur"},"EUR"),l.a.createElement("option",{value:"idr"},"IDR"),l.a.createElement("option",{value:"jpy"},"JPY"),l.a.createElement("option",{value:"sgd"},"SGD")))),l.a.createElement(v.a,{xs:2,lg:1,className:"mt-3"},l.a.createElement("div",{className:"text-convert"}," ",l.a.createElement("span",null," to "))),l.a.createElement(v.a,{xs:5,lg:4,className:"mt-3"},l.a.createElement(p.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(p.a.Control,{as:"select",value:this.state.secondBox,onChange:this.handleChange2},l.a.createElement("option",{value:"usd"},"USD"),l.a.createElement("option",{value:"eur"},"EUR"),l.a.createElement("option",{value:"idr",selected:"selected"},"IDR"),l.a.createElement("option",{value:"jpy"},"JPY"),l.a.createElement("option",{value:"sgd"},"SGD")))),l.a.createElement(v.a,{lg:3,className:"mt-3"},l.a.createElement("button",{type:"button",className:"button-convert btn btn-secondary",onClick:this.handleClick}," Convert "))),l.a.createElement(p.a,{className:"mt-3"},l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Result"),l.a.createElement(p.a.Control,{type:"text",readonly:!0,value:this.state.thirdBox})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.29d03e42.chunk.js.map