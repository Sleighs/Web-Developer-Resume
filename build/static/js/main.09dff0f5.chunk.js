(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a(5),i=a(19),n=a.n(i),c=(a(32),a(33),a(9)),l=a(10),o=a(12),h=a(11),j=a(15),d={interval:null,newIntervalTime:175,info:!1,company:!1},b=(a(17),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={arr:["ENGINEER","ARCHITECT","DEVELOPER"],pos:0,text:null,typedText:[],newText:"",a:[],reverse:!1,interval:null,n:"start"},s.init=s.init.bind(Object(j.a)(s)),s.getText=s.getText.bind(Object(j.a)(s)),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.primaryInterval=setTimeout((function(){e.init("start")}),1090)}},{key:"getInterval",value:function(e){var t;switch(e){case 1:t=500;break;case 2:t=1800;break;case 0:t=2e3;break;default:t=2e3}return t}},{key:"getText",value:function(){var e,t=this,a=this.state.arr[this.state.pos],s=a.split(""),r=this.state.typedText,i=this.state.reverse,n=this.state.a,c=this.state.newText;if(e=!0===i?Math.floor(200*Math.random())+25:Math.floor(275*Math.random())+75,d.newIntervalTime=e,!0===i){r.splice(-1,1);for(var l=n.length;l>r.length;l--)if(n.splice(-1,1),c=n.join(""),""===n.join("")){r=[],i=!1,clearInterval(d.interval);var o=Math.floor(1800*Math.random())+200;d.primaryInterval=setTimeout((function(){t.init("start")}),o),this.state.pos<this.state.arr.length-1?this.setState({pos:this.state.pos+1}):this.setState({pos:0})}}else if(!this.state.reverse){n=[],r.push(s[r.length]);for(var h=0;h<r.length;h++)if(n.push(s[h]),(c=n.join(""))===a){i=!0,clearInterval(d.interval);var j=Math.floor(4e3*Math.random())+100;d.primaryInterval=setTimeout((function(){t.init("start")}),j)}}this.setState({typedText:r,reverse:i,a:n,newText:c})}},{key:"init",value:function(e){var t=this,a=document.getElementById("log");"stop"===e&&(this.setState({n:"start"}),clearInterval(d.interval),clearInterval(d.primaryInterval)),"start"===e&&(this.setState({n:"stop"}),d.interval=setInterval((function(e){t.getText(),a.innerHTML=t.state.newText}),d.newIntervalTime))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"header-container",className:"container",onClick:function(){e.init(e.state.n)},children:[Object(s.jsx)("div",{id:"name-container",children:Object(s.jsx)("h1",{id:"name",children:Object(s.jsx)("strong",{children:"SAMUEL WRIGHT"})})}),Object(s.jsx)("div",{className:"header-text",id:"header-description",children:Object(s.jsxs)("h2",{children:[Object(s.jsx)("span",{id:"title",children:"SOFTWARE "}),Object(s.jsx)("span",{id:"log"}),Object(s.jsx)("span",{id:"glyph",children:"|"})]})})]})}}]),a}(r.Component)),m=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",id:"skills-container",children:[Object(s.jsx)("div",{className:"header-box",id:"skills-title1",children:Object(s.jsx)("h3",{className:"title",children:Object(s.jsx)("strong",{children:"WHAT DO I DO?"})})}),Object(s.jsxs)("div",{id:"do-list",children:[d.company?Object(s.jsx)("p",{children:"Work at AweSumo creating software"}):null,Object(s.jsx)("p",{children:"Create fun projects in my spare time"}),Object(s.jsx)("p",{children:"Write quality code"}),Object(s.jsx)("p",{children:"Keep my functions small, focused, and easy to understand"}),Object(s.jsx)("p",{children:"Leave comments as I create and maintain code"}),Object(s.jsx)("p",{children:"Make tests for the code I write"}),Object(s.jsx)("p",{children:"Document every feature"}),Object(s.jsx)("p",{children:"Keep track of every bug"}),Object(s.jsx)("p",{children:"Strictly follow security best practices"}),Object(s.jsx)("p",{children:"Never stop learning"})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{id:"skills2-header",children:Object(s.jsx)("h3",{id:"skills2-title",children:Object(s.jsx)("strong",{children:"WHAT DO I KNOW?"})})}),Object(s.jsxs)("ul",{id:"know-list",children:[Object(s.jsx)("li",{children:"Javascript, PHP, C# and several other programming languages"}),Object(s.jsx)("li",{children:"How to design user friendly UX with React, SASS, HTML5 Canvas, and other front end technologies"}),Object(s.jsx)("li",{children:"How to write efficient MySQL queries"}),Object(s.jsx)("li",{children:"How to use a feature/dev/master branch workflow in Git"}),Object(s.jsx)("li",{children:"How to query and interpret data to make meaningful insights"}),Object(s.jsxs)("li",{children:["How to make an excellent ",Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Sleighs/google-maps-react-tutorial/",rel:"noreferrer",children:"Github Repository"})]})]})]})}}]),a}(r.Component),u=a.p+"static/media/portfolio-mint2048.f860bfe2.png",p=a.p+"static/media/portfolio-cashflowjs.caf3d3b9.png",O=a.p+"static/media/portfolio-heromatchups.c33b1f7a.png",x=a.p+"static/media/portfolio-realitycalc03.96a7c323.png",g=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"projects-container",children:[Object(s.jsx)("div",{id:"projects-header",children:Object(s.jsx)("h3",{id:"projects-title",children:Object(s.jsx)("strong",{children:"WHAT HAVE I BUILT?"})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)("h3",{className:"projects-row-title",children:Object(s.jsx)("strong",{children:"HeroMatchups"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{target:"_blank",href:"https://heromatchups.com",rel:"noreferrer",children:"HeroMatchups"})," is a hero matchup and counter resource for Overwatch."]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Sleighs/HeroMatchups/",rel:"noreferrer",children:"Visit HeroMatchups"})})]}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("a",{className:"projects-pic-container-heromatchups",target:"_blank",href:"https://github.com/sleighs/heromatchups",rel:"noreferrer",title:"Visit",children:Object(s.jsx)("img",{className:"img-responsive rounded projects-pic d-block mx-auto",alt:"HeroMatchups",src:O})})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)("h3",{className:"projects-row-title",children:Object(s.jsx)("strong",{children:"RealityCalc.com"})}),Object(s.jsxs)("p",{children:["The ",Object(s.jsx)("a",{target:"_blank",href:"https://realitycalc.com",rel:"noreferrer",children:"Male Reality Calculator"})," is a tool that uses US Census Bureau statistics to calculate the user's odds of meeting their dream woman."]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Sleighs/reality-calculator/",rel:"noreferrer",children:"Check out the Male Reality Calculator"})})]}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("a",{className:"projects-pic-container-realitycalc",target:"_blank",href:"https://github.com/Sleighs/reality-calculator",rel:"noreferrer",title:"Check it out",children:Object(s.jsx)("img",{className:"img-responsive rounded projects-pic mx-auto d-block",alt:"RealityCalc.com",src:x})})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)("h3",{className:"projects-row-title",children:Object(s.jsx)("strong",{children:"CashFlow JS"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{target:"_blank",href:"https://sleighs.github.io/CashFlowJs/",rel:"noreferrer",children:"CashFlow JS"})," is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play."]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Sleighs/CashFlowJs/",rel:"noreferrer",children:"Check out CashFlowJs"})})]}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("a",{className:"projects-pic-container-cashflow",target:"_blank",href:"https://github.com/Sleighs/CashFlowJs",rel:"noreferrer",title:"Play",children:Object(s.jsx)("img",{className:"img-responsive rounded projects-pic mx-auto d-block",alt:"CashFlow JS",src:p})})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-7",children:[Object(s.jsx)("h3",{className:"projects-row-title",children:Object(s.jsx)("strong",{children:"Mint 2048"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{target:"_blank",href:"https://mint2048.com/",rel:"noreferrer",children:"Mint"})," is a sliding tile puzzle game where players combine tiles, perform combos and use abilities to create the 2048 tile."]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{target:"_blank",href:"https://github.com/Sleighs/Mint-2048",rel:"noreferrer",children:"Check out Mint 2048 "})})]}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("a",{className:"projects-pic-container-mint",target:"_blank",href:"https://github.com/sleighs/mint-2048",rel:"noreferrer",title:"Play",children:Object(s.jsx)("img",{className:"img-responsive rounded projects-pic d-block mx-auto",alt:"Mint 2048",src:u})})})]})]})}}]),a}(r.Component),f=a(20),v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onMarkerClick=function(e,t,a){s.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!1})},s.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.getElementById("map-container").children[1].children[0].style.position="relative"}},{key:"toggleBounce",value:function(){null!==this.state.marker.getAnimation()||this.setState({})}},{key:"render",value:function(){return Object(s.jsxs)(f.Map,{google:this.props.google,zoom:10,style:{width:"100%",maxWidth:"600px",height:"265px",position:"relative",display:"block",margin:"auto 0",float:"left"},initialCenter:{lat:39.855,lng:-75.008},children:[Object(s.jsx)(f.Marker,{onClick:this.onMarkerClick,name:"Where I Live",draggable:!1,animation:window.google.maps.Animation.DROP}),Object(s.jsx)(f.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(s.jsx)("div",{className:"map-infor",children:Object(s.jsx)("h4",{children:this.state.selectedPlace.name})})})]})}}]),a}(r.Component),y=Object(f.GoogleApiWrapper)({apiKey:"AIzaSyAcBp9-09CTRSP0hzcHK7UcxlIJ2zwcBy4"})(v),k=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"map-container",className:"container mx-auto d-block",children:[Object(s.jsx)("h3",{id:"map-title",className:"title",children:Object(s.jsx)("strong",{children:"WHERE AM I?"})}),Object(s.jsx)(y,{})]})}}]),a}(r.Component),w={apiKey:"AIzaSyDM8mIKG75bihhtAtwpEpCAcH5FA9Zm2IM",authDomain:"resume-bbd43.firebaseapp.com",databaseURL:"https://resume-bbd43-default-rtdb.firebaseio.com",projectId:"resume-bbd43",storageBucket:"resume-bbd43.appspot.com",messagingSenderId:"899941858131",appId:"1:899941858131:web:44e23ae6642e4ccb36ffa6",measurementId:"G-17LKMEH19D"},S=a(24).a.initializeApp(w).firestore(),N=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={name:"",email:"",message:"",dataSent:""},s.handleSubmit=s.handleSubmit.bind(Object(j.a)(s)),s.resetSend=s.resetSend.bind(Object(j.a)(s)),s}return Object(l.a)(a,[{key:"makeid",value:function(e){for(var t="",a=0;a<e;a++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(10*Math.random()));return t}},{key:"handleSubmit",value:function(e){var t=new Date,a=String(this.state.name+"-"+t.getTime()),s=String(t.getMonth()+1)+"-"+String(t.getDate())+"-"+String(t.getFullYear()),r=String(t.getHours())+":"+(t.getMinutes()<10?String("0"+t.getUTCMinutes()):String(t.getUTCMinutes()))+"."+String(t.getSeconds()),i=this.makeid(10);S.collection("messages").doc(a).set({name:this.state.name,email:this.state.email,message:this.state.message,date:s,time:r,timezone:t.getTimezoneOffset(),id:i}).then((function(){console.log("Great news! Message sent successfully!")})).catch((function(e){console.error("Krikey! Error sending message: ",e)})),this.state.datasent||this.setState({dataSent:!0})}},{key:"resetSend",value:function(){this.setState({dataSent:!1})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",id:"contact-container",children:[Object(s.jsx)("div",{id:"contact-header",children:Object(s.jsx)("h3",{id:"contact-title",children:Object(s.jsx)("strong",{children:"HOW CAN YOU REACH ME?"})})}),Object(s.jsxs)("div",{style:{textAlign:"center",fontSize:"1.2em"},children:[Object(s.jsx)("a",{href:"mailto:wsright987@gmail.com",children:"WSRIGHT987@GMAIL.COM"}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"609-472-2897"})]}),this.state.dataSent?Object(s.jsxs)("div",{className:"msg",style:{textAlign:"center"},children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{style:{fontSize:"1.2em"},children:"Great news! Message sent successfully!"}),Object(s.jsx)("button",{className:"new-message-btn",style:{margin:"auto",display:"block",padding:"5px 25px",outline:"none",background:"lightgray",border:"1pt solid white",color:"white",fontSize:"1.2em",borderRadius:"25px"},onClick:function(t){e.resetSend()},children:"New Message"})]}):Object(s.jsxs)("form",{style:{maxWidth:450,margin:"auto",padding:"0 3%"},children:[Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)("p",{children:"Or use this contact form below:"})}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{name:"inputName",children:"Your Name"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"name-input",name:"name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{name:"inputEmail",children:"Your Email"}),Object(s.jsx)("input",{type:"email",className:"form-control",id:"email-input","aria-describedby":"emailHelp",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{name:"inputMessage",className:"form-text",children:"Your Message "}),Object(s.jsx)("textarea",{type:"text",className:"form-control",id:"message-input",name:"text-area",value:this.state.message,onChange:function(t){e.setState({message:t.target.value})}})]}),Object(s.jsx)("input",{type:"submit",className:"input for-control submit",style:{margin:"auto",display:"block",padding:"5px 25px",outline:"none",background:"rgba(0, 187, 16, .5)",border:"1pt solid white",color:"white",fontSize:"1.2em",borderRadius:"25px"},value:"Send",onClick:function(t){e.handleSubmit(t)}})]})]})}}]),a}(r.Component),M=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("footer",{id:"footer-container",className:"container",children:[Object(s.jsx)("p",{children:"Thank you for reading!"}),Object(s.jsx)("small",{children:Object(s.jsx)("a",{href:"http://www.github.com/sleighs/Portfolio",target:"blank",children:"View The Source Code"})})]})}}]),a}(r.Component),C=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"portfolio",className:"container-md",style:{fontSize:"1.2em"},children:[Object(s.jsx)(b,{}),Object(s.jsx)(m,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(g,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(I,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(k,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(N,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(M,{})]})}}]),a}(r.Component),I=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"github-container",children:[Object(s.jsx)("h3",{className:"title",children:Object(s.jsx)("strong",{children:"DO I HAVE A GITHUB?"})}),Object(s.jsx)("p",{id:"github-text",children:Object(s.jsx)("a",{href:"http://www.github.com/sleighs",target:"blank",children:"Yes."})})]})}}]),a}(r.Component),T=C,H=document.getElementById("root");n.a.render(Object(s.jsx)(T,{}),H)}},[[54,1,2]]]);
//# sourceMappingURL=main.09dff0f5.chunk.js.map