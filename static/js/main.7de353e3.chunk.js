(this.webpackJsonprezakrimi=this.webpackJsonprezakrimi||[]).push([[0],{48:function(e,t,a){e.exports=a(67)},53:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},55:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),c=a.n(r),o=(a(53),a(54),a(55),a(6)),l=a(7),s=a(9),h=a(8),m=a(10),u=a(24),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u.b,{style:{textDecoration:"none"},to:this.props.to},this.props.children)}}]),t}(n.Component),p=a(72),f=a(73),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{expand:"lg",variant:"light",className:"nav-custom"},i.a.createElement(p.a.Brand,null,"Reza Karimi"),i.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:"mr-auto"},i.a.createElement(d,{to:"/"},i.a.createElement("li",{className:"nav-item nav-link"},"Home")),i.a.createElement(d,{style:{textDecoration:"none"},to:"/projects"},i.a.createElement("li",{className:"nav-item nav-link"},"Projects")),i.a.createElement(d,{style:{textDecoration:"none"},to:"/contact"},i.a.createElement("li",{className:"nav-item nav-link"},"Contact Me")))))}}]),t}(n.Component),y=a(18),E=a(35),g=a.n(E),v=a(47),x=a(15),w=a(69),k=a(70),j=a(71),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).emojiStyle={display:"inline-block",position:"relative",borderRadius:"50%",backgroundColor:"#212325",width:"".concat(a.props.width),height:"".concat(a.props.width)},a.rightEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30,"%"),left:"".concat(65,"%")},a.leftEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30,"%"),left:"".concat(20,"%")},a.state={x:0,y:0},a.mouseMove=a.mouseMove.bind(Object(x.a)(a)),a.leftEye=i.a.createRef(),a.rightEye=i.a.createRef(),a.leftEyePosition=a.leftEyePosition.bind(Object(x.a)(a)),a.rightEyePosition=a.rightEyePosition.bind(Object(x.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.mouseMove)}},{key:"mouseMove",value:function(e){this.leftEyePosition(),this.rightEyePosition(),this.setState({x:e.clientX,y:e.clientY})}},{key:"leftEyePosition",value:function(){if(this.state&&this.leftEye.current&&this.rightEye.current){var e=10*Math.tanh((this.state.x-this.leftEye.current.getBoundingClientRect().left)/400),t=10*Math.tanh((this.state.y-this.leftEye.current.getBoundingClientRect().top)/400);this.leftEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30+t,"%"),left:"".concat(20+e,"%")}}}},{key:"rightEyePosition",value:function(){if(this.state&&this.leftEye.current&&this.rightEye.current){var e=10*Math.tanh((this.state.x-this.rightEye.current.getBoundingClientRect().left)/400),t=10*Math.tanh((this.state.y-this.rightEye.current.getBoundingClientRect().top)/400);this.rightEyeStyle={position:"absolute",borderRadius:"50%",backgroundColor:"white",width:"15%",height:"20%",top:"".concat(30+t,"%"),left:"".concat(65+e,"%")}}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:this.emojiStyle},i.a.createElement("div",{style:this.leftEyeStyle,ref:this.leftEye}),i.a.createElement("div",{style:this.rightEyeStyle,ref:this.rightEye})))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={title:""},e.updateTitle=e.updateTitle.bind(Object(x.a)(e)),e.timer=e.timer.bind(Object(x.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"timer",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"updateTitle",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["#","#","#","#","M","y"," ","n","a","m","e"," ","i","s"," ","R","e","z","a"," ","a","n","d"," ","y","e","s",","," ","m","y"," ","f","a","v","o","r","i","t","e"," ","c","o","l","o","r"," ","i","s"," ","p","i","n","k","#","#","#","#","#","#","#","#","#","-","#","-","#","-","#","-","#","#","#","#","y","e","l","l","o","w","#","#","#","#","#","#","#","#","#","#","#","."],a=0;case 2:if(!(a<t.length)){e.next=11;break}return n=this.state.title,"-"==t[a]?n=n.substr(0,n.length-1):"#"!=t[a]&&(n+=t[a]),this.setState({title:n}),e.next=8,this.timer(110);case 8:a++,e.next=2;break;case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.updateTitle()}},{key:"render",value:function(){return i.a.createElement(w.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement(k.a,{className:"justify-content-md-center"},i.a.createElement(j.a,{xs:4,className:"emojiContainer d-none d-lg-block",style:{padding:"70px 0px 0px 200px"}},i.a.createElement(O,{width:"70px",height:"70px"})),i.a.createElement(j.a,{xs:12,md:4},i.a.createElement("div",{className:"profilePicFrame"},i.a.createElement("img",{className:"profilePic",src:"https://rezakrimi.s3.us-east-2.amazonaws.com/photo_2019-09-15_18-30-30.jpg"}))),i.a.createElement(j.a,{xs:4,className:"emojiContainer d-none d-lg-block"},i.a.createElement(O,{width:"150px",height:"150px"}))),i.a.createElement(k.a,{className:"justify-content-md-center",style:{marginTop:"50px"}},i.a.createElement(j.a,{xs:"auto"},i.a.createElement("div",{className:"dynamicTitle"},i.a.createElement("p",null,this.state.title)))))}}]),t}(n.Component),S=a(74),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(w.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement(k.a,null,i.a.createElement(j.a,{xs:12},i.a.createElement(S.a,{style:{width:"100%"}},i.a.createElement(S.a.Body,null,i.a.createElement(S.a.Title,null,"NSERC USRA Undergraduate Research"),i.a.createElement(S.a.Subtitle,{className:"mb-2 text-muted"},"Real-Time Seizure Detection Using Machine Learning"),i.a.createElement(S.a.Text,null,i.a.createElement("p",null,"Approximately 360,000 Canadians live with epilepsy and it affects 1-in-100 people worldwide. Over the past years and with the rise of machine learning, there have been a lot of research going on in the field of detecting epileptic seizures, which have resulted in detecting these seizures with a high accuracy. But yet, there is no commercial device available that has an acceptable performance. One reason is that there are a lot of limitations to these kind of devices, one being the limits for power consumption. Another problem is that epileptic seizures come in various number of forms and they can differ across patients."),i.a.createElement("p",null,"So the goal of this project was to develop a patient-specific algorithm that can detect seizures with a high accuracy using data from limited number of electrodes on the brain surface to make it suitable for a wearable device. The features, or in other words, the numerical data that are considered for detecting seizures are the spectral energy bands and the Phase Locking Value between all possible pair of electrodes. Since a device like this should be constantly calculating the feature of upcoming signals, the efficiency of this part is very important. The feature extraction module was speeded up by 80% by vectorizing the implementation. Support Vector Machines are well known to be very efficient in addition to being a very reliable classifier. To increase the accuracy even further, we used a Gaussian kernel with the classifier to detect non-linear data .The obtained models, tested across 24 patients, gave us a sensitivity of 96%, specificity of 99%, and precision of 97%. The results are comparable to the state of the art, while being efficient enough to be suitable for wearable devices."),i.a.createElement("p",null,i.a.createElement("strong",null,"Accomplishments"),i.a.createElement("ul",null,i.a.createElement("li",null,"My paper for this work has been accepted at",i.a.createElement("a",{href:"https://www.iscas2020.org/"}," ","ISCAS 2020"," "),"."),i.a.createElement("li",null,"Selected as one of the top 5 projects to have an oral presentation at the"," ",i.a.createElement("a",{href:"http://www.lassondeundergraduateresearch.com/past-researchers"},"Lassonde School of Engineering Undergraduate Research Conference")," ","among ~70 other reasearch project."," "),i.a.createElement("li",null,"Received the"," ",i.a.createElement("a",{href:"https://yfile.news.yorku.ca/2019/08/30/lassonde-undergraduate-summer-student-research-conference-narrows-in-on-sustainability-and-inclusivity/"},"first place")," ","for having the best presentation of the conference."))),i.a.createElement("p",null,"Here are my presentation slides at the conference:"),i.a.createElement("iframe",{src:"https://onedrive.live.com/embed?cid=95BBDE332BC065CD&resid=95BBDE332BC065CD%21112&authkey=AAhyeJfiGkKZxmw&em=2&wdAr=1.7777777777777777",width:"100%",height:"500vh",frameborder:"0"},"This is an embedded"," ",i.a.createElement("a",{target:"_blank",href:"https://office.com"},"Microsoft Office")," ","presentation, powered by"," ",i.a.createElement("a",{target:"_blank",href:"https://office.com/webapps"},"Office"),".")))))),i.a.createElement("div",{className:"dynamicTitle",style:{marginTop:"50%;"}},"More Projects To Be Added Soon (Like Really Soon)"))}}]),t}(n.Component),N=a(29),z=a(30),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(w.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement(k.a,{className:"justify-content-md-center"},i.a.createElement(j.a,{xs:4,className:"emojiContainer d-none d-lg-block",style:{padding:"70px 0px 0px 200px"}},i.a.createElement(O,{width:"70px",height:"70px"})),i.a.createElement(j.a,{xs:4,className:"emojiContainer d-none d-lg-block"},i.a.createElement(O,{width:"320px",height:"320px"})),i.a.createElement(j.a,{xs:4,className:"emojiContainer d-none d-lg-block"},i.a.createElement(O,{width:"150px",height:"150px"}))),i.a.createElement(k.a,null,i.a.createElement(j.a,{xs:12},i.a.createElement("div",{className:"dynamicTitle"},"Email: rezakrimi@gmail.com")),i.a.createElement(j.a,{xs:12},i.a.createElement("div",{className:"dynamicTitle"},"Phone: (416) 570 8482"))),i.a.createElement(k.a,null,i.a.createElement(j.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://www.linkedin.com/in/rezakrimi/",target:"_blank"},i.a.createElement(N.a,{icon:z.b}))),i.a.createElement(j.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://github.com/rezakrimi",target:"_blank"},i.a.createElement(N.a,{icon:z.a}))),i.a.createElement(j.a,{xs:4,style:{fontSize:"400%",textAlign:"center",color:"#343a40"}},i.a.createElement("a",{href:"https://stackoverflow.com/users/7158702/reza-karimi",target:"_blank"},i.a.createElement(N.a,{icon:z.c})))))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(w.a,{fluid:!0,style:{padding:"20px 20px 100px 20px",backgroundColor:"#FFD300"}},i.a.createElement("div",{className:"dynamicTitle",style:{marginTop:"50%;"}},"404"))}}]),t}(n.Component);var B=function(){return i.a.createElement(u.a,{basename:"."},i.a.createElement(b,null),i.a.createElement(y.c,null,i.a.createElement(y.a,{exact:!0,path:"/",component:C}),i.a.createElement(y.a,{exact:!0,path:"/projects",component:T}),i.a.createElement(y.a,{exact:!0,path:"/contact",component:R}),i.a.createElement(y.a,{component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66);c.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7de353e3.chunk.js.map