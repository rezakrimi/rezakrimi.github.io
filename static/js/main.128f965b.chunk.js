(this.webpackJsonprezakrimi=this.webpackJsonprezakrimi||[]).push([[0],{46:function(e,t,a){e.exports=a(71)},51:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},53:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),c=a.n(r),o=(a(51),a(52),a(53),a(6)),l=a(7),s=a(9),m=a(8),u=a(10),h=a(23),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(h.b,{style:{textDecoration:"none"},to:this.props.to},this.props.children)}}]),t}(n.Component),d=a(77),y=a(76),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{expand:"lg",variant:"light",className:"nav-custom"},i.a.createElement(d.a.Brand,null,"Reza Karimi"),i.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(y.a,{className:"mr-auto"},i.a.createElement(p,{to:"/"},i.a.createElement("li",{className:"nav-item nav-link"},"Home")),i.a.createElement(p,{style:{textDecoration:"none"},to:"/projects"},i.a.createElement("li",{className:"nav-item nav-link"},"Projects")),i.a.createElement(p,{style:{textDecoration:"none"},to:"/contact"},i.a.createElement("li",{className:"nav-item nav-link"},"Contact Me")))))}}]),t}(n.Component),b=a(17),f=a(34),g=a.n(f),v=a(45),x=a(14),j=a(73),k=a(74),O=a(75),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={title:""},e.updateTitle=e.updateTitle.bind(Object(x.a)(e)),e.timer=e.timer.bind(Object(x.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"timer",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"updateTitle",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["#","#","#","#","M","y"," ","n","a","m","e"," ","i","s"," ","R","e","z","a"," ","a","n","d"," ","y","e","s",","," ","m","y"," ","f","a","v","o","r","i","t","e"," ","c","o","l","o","r"," ","i","s"," ","p","i","n","k","#","#","#","#","#","#","#","#","#","-","#","-","#","-","#","-","#","#","#","#","y","e","l","l","o","w","#","#","#","#","#","#","#","#","#","#","#","."],a=0;case 2:if(!(a<t.length)){e.next=11;break}return n=this.state.title,"-"==t[a]?n=n.substr(0,n.length-1):"#"!=t[a]&&(n+=t[a]),this.setState({title:n}),e.next=8,this.timer(110);case 8:a++,e.next=2;break;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.updateTitle()}},{key:"render",value:function(){return i.a.createElement(j.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement(k.a,{className:"justify-content-md-center"},i.a.createElement(O.a,{xs:12},i.a.createElement("div",{className:"profilePicFrame"},i.a.createElement("img",{className:"profilePic",src:"https://rezakrimi.s3.us-east-2.amazonaws.com/photo_2019-09-15_18-30-30.jpg"})))),i.a.createElement(k.a,{className:"justify-content-md-center",style:{marginTop:"50px"}},i.a.createElement(O.a,{xs:"auto"},i.a.createElement("div",{className:"dynamicTitle"},i.a.createElement("p",null,this.state.title)))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(j.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement("div",{className:"dynamicTitle",style:{marginTop:"50%;"}},"Coming Soon (Like Really Soon)"))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).emojiStyle={display:"inline-block",position:"relative",borderRadius:"50%",backgroundColor:"#212325",width:"".concat(a.props.width),height:"".concat(a.props.width)},a.rightEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30,"%"),left:"".concat(65,"%")},a.leftEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30,"%"),left:"".concat(20,"%")},a.state={x:0,y:0},a.mouseMove=a.mouseMove.bind(Object(x.a)(a)),a.leftEye=i.a.createRef(),a.rightEye=i.a.createRef(),a.leftEyePosition=a.leftEyePosition.bind(Object(x.a)(a)),a.rightEyePosition=a.rightEyePosition.bind(Object(x.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.mouseMove)}},{key:"mouseMove",value:function(e){this.leftEyePosition(),this.rightEyePosition(),this.setState({x:e.clientX,y:e.clientY})}},{key:"leftEyePosition",value:function(){if(this.state&&this.leftEye.current&&this.rightEye.current){var e=10*Math.tanh((this.state.x-this.leftEye.current.getBoundingClientRect().left)/400),t=10*Math.tanh((this.state.y-this.leftEye.current.getBoundingClientRect().top)/400);this.leftEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30+t,"%"),left:"".concat(20+e,"%")}}}},{key:"rightEyePosition",value:function(){if(this.state&&this.leftEye.current&&this.rightEye.current){var e=10*Math.tanh((this.state.x-this.rightEye.current.getBoundingClientRect().left)/400),t=10*Math.tanh((this.state.y-this.rightEye.current.getBoundingClientRect().top)/400);this.rightEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30+t,"%"),left:"".concat(65+e,"%")}}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:this.emojiStyle},i.a.createElement("div",{style:this.leftEyeStyle,ref:this.leftEye}),i.a.createElement("div",{style:this.rightEyeStyle,ref:this.rightEye})))}}]),t}(n.Component),S=a(27),R=a(28),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(j.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement(k.a,{className:"justify-content-md-center"},i.a.createElement(O.a,{xs:4,className:"emojiContainer d-none d-lg-block",style:{padding:"70px 0px 0px 200px"}},i.a.createElement(N,{width:"70px",height:"70px"})),i.a.createElement(O.a,{xs:4,className:"emojiContainer d-none d-lg-block"},i.a.createElement(N,{width:"300px",height:"300px"})),i.a.createElement(O.a,{xs:4,className:"emojiContainer d-none d-lg-block"},i.a.createElement(N,{width:"150px",height:"150px"}))),i.a.createElement(k.a,null,i.a.createElement(O.a,{xs:12},i.a.createElement("div",{className:"dynamicTitle"},"Email: rezakrimi@gmail.com")),i.a.createElement(O.a,{xs:12},i.a.createElement("div",{className:"dynamicTitle"},"Phone: (416) 570 8482"))),i.a.createElement(k.a,null,i.a.createElement(O.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://www.linkedin.com/in/rezakrimi/",target:"_blank"},i.a.createElement(S.a,{icon:R.b}))),i.a.createElement(O.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://github.com/rezakrimi",target:"_blank"},i.a.createElement(S.a,{icon:R.a}))),i.a.createElement(O.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://stackoverflow.com/users/7158702/reza-karimi",target:"_blank"},i.a.createElement(S.a,{icon:R.c})))))}}]),t}(n.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(j.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement("div",{className:"dynamicTitle",style:{marginTop:"50%;"}},"404"))}}]),t}(n.Component);var P=function(){return i.a.createElement(h.a,{basename:"."},i.a.createElement(E,null),i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",component:w}),i.a.createElement(b.a,{exact:!0,path:"/projects",component:C}),i.a.createElement(b.a,{exact:!0,path:"/contact",component:T}),i.a.createElement(b.a,{component:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);c.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.128f965b.chunk.js.map