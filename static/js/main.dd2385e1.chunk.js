(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.18ca293f.png"},function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n,c,o,r=t(0),i=t.n(r),l=t(8),s=t.n(l),m=(t(18),t(1)),u=(t(19),t(2)),d=(t(20),function(e){var a=e.icon,t=e.name,n=e.theme,c=e.clickHandler,o=e.dotLocation,r=i.a.useState(!1),l=Object(m.a)(r,2),s=l[0],u=l[1];return i.a.createElement("div",{className:"IconContainer"},i.a.createElement("div",{onClick:c,className:s?"bounce icon2":"icon2"},i.a.createElement("span",{className:a+" AppIcon"+n,onClick:function(){u(!0),setTimeout(function(){u(!1)},750)}})),o===t&&i.a.createElement("span",{className:"fas fa-circle dot"}))}),f=t(3),p=(t(21),f.a.div(n||(n=Object(u.a)(["\n  height: 40px;\n  border-right: 1.7px solid rgba(255, 255, 255, 0.3);\n  border-radius: 20px;\n\n  margin: 0px 5px;\n"])))),g=function(e){var a=e.websiteOptions,t=e.socialMedia,n=e.theme,c=e.changeTheme,o=e.dotLocation,r=e.setDotLocation,l=function(e){setTimeout(function(){r(e)},750)};return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"AppBar"},i.a.createElement("div",{className:"section "},i.a.createElement(d,{icon:"fas fa-home icon",name:"Home",theme:n,dotLocation:o,clickHandler:function(){return l("Home")}})),i.a.createElement(p,null),i.a.createElement("div",{className:"section "},a.map(function(e){return i.a.createElement(d,{icon:e.icon,name:e.name,key:e.id,theme:n,dotLocation:o,clickHandler:function(){l(e.name),e.open()}})})),i.a.createElement(p,null),i.a.createElement("div",{className:"section "},t.map(function(e){return i.a.createElement(d,{icon:e.icon,name:e.name,key:e.id,theme:n,clickHandler:function(){return a=e.link,void setTimeout(function(){window.open(a,"_blank")},750);var a},dotLocation:o})})),i.a.createElement(p,null),i.a.createElement("div",{className:"section "},i.a.createElement(d,{icon:"fas fa-adjust icon",name:"Change Theme",theme:n,clickHandler:c}))))},h=f.a.a(c||(c=Object(u.a)(["\ntext-decoration: none;\ncolor: #fff;\n"]))),E=f.a.div(o||(o=Object(u.a)(["\n    position: absolute;\n    bottom: 5px;\n    width: 100%;\n"]))),b=function(){var e=i.a.useState((new Date).getFullYear()),a=Object(m.a)(e,2),t=a[0],n=a[1];return i.a.useEffect(function(){n((new Date).getFullYear())},[]),i.a.createElement(E,{style:{color:"white",fontSize:"10px"}},"Copyright \xa9",t," All rights reserved | Created by",i.a.createElement(h,{class:"linking",href:"https://www.facebook.com/youngboiCoder",target:"_blank"},i.a.createElement("strong",null," Khoa Nguy\u1ec5n")))},v=(t(26),t(12)),N=t.n(v),y=function(e){var a=e.closePage;return i.a.createElement("div",{className:"AppPage"},i.a.createElement("div",{className:"HeaderPage"},i.a.createElement("i",{className:"fas fa-circle dotnav",onClick:a}),i.a.createElement("i",{className:"fas fa-circle dotnav yellow"}),i.a.createElement("i",{className:"fas fa-circle dotnav green"})),i.a.createElement("div",{className:"ContainerText"},i.a.createElement("img",{src:N.a,alt:"avatar",className:"Avatar Display"}),i.a.createElement("div",{className:"Display TextDisplay"},i.a.createElement("h1",{className:"TitlePage"},"Khoa Nguy\u1ec5n"),i.a.createElement("h2",{className:"PrePara"},i.a.createElement("strong",null,"Developer/Designer")),i.a.createElement("hr",{className:"Seperator"}),i.a.createElement("p",{className:"TextPage"},i.a.createElement("strong",null,"Dob:")," 12/04/2005"),i.a.createElement("p",{className:"TextPage"},i.a.createElement("strong",null,"Address:")," H\xe0 N\u1ed9i"),i.a.createElement("p",{className:"TextPage"},i.a.createElement("strong",null,"Phone:")," 0376971168"),i.a.createElement("p",{className:"TextPage"},i.a.createElement("strong",null,"Email:")," rogkhoa.mail@gmail.com "))),i.a.createElement("div",{className:"Footer"},i.a.createElement(b,null)))},k=(t(27),function(){var e=new Date,a=e.getHours(),t=e.getMinutes(),n=e.getDay(),c=e.getDate(),o=e.getMonth(),r=e.getFullYear(),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];return t<10?{days:i[n],daynumber:c,months:l[o],year:r,hours:a,minutes:"0"+t}:{days:i[n],daynumber:c,months:l[o],year:r,hours:a,minutes:t}}),w=function(){var e=i.a.useState(k()),a=Object(m.a)(e,2),t=a[0],n=a[1];return i.a.useEffect(function(){n(k());var e=setInterval(function(){n(k())},1e3);return function(){return clearInterval(e)}},[]),i.a.createElement("div",{className:"AppHeader"},i.a.createElement("div",{className:"left"},i.a.createElement("span",{className:"fab fa-apple apple-logo"}),i.a.createElement("span",{className:"menus active"},"Finder"),i.a.createElement("span",{className:"menus hide"},"File"),i.a.createElement("span",{className:"menus hide"},"Edit"),i.a.createElement("span",{className:"menus hide"},"View"),i.a.createElement("span",{className:"menus hide"},"Go"),i.a.createElement("span",{className:"menus hide"},"Window"),i.a.createElement("span",{className:"menus hide"},"Help")),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"menu-time"},t.days+" "+t.daynumber+" "+t.months+" "+t.year,i.a.createElement("span",{className:"active time margin"},t.hours+":"+t.minutes))))},T=[{id:4,name:"Facebook",icon:"fab fa-facebook icon seperate",link:"https://www.facebook.com/youngboiCoder"},{id:5,name:"Instagram",icon:"fab fa-instagram icon",link:"https://instagram.com/_youngboicoder"},{id:6,name:"Github",icon:"fab fa-github icon",link:"https://github.com/youngboiCoder"},{id:7,name:"Behance",icon:"fab fa-behance icon",link:"https://www.behance.net/youngboicoder"}];var x=function(){var e=Object(r.useState)("light"),a=Object(m.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(!0),o=Object(m.a)(c,2),l=o[0],s=o[1],u=Object(r.useState)("Home"),d=Object(m.a)(u,2),f=d[0],p=d[1],h=[{id:1,name:"About",icon:"fas fa-address-card icon",url:"/contact",open:function(){return s(!0)}},{id:2,name:"Projects",icon:"fas fa-lightbulb icon",url:"/projects"},{id:3,name:"Picture",icon:"fas fa-camera icon",url:"/picture"}];return i.a.createElement("div",{className:"App App"+t},i.a.createElement(w,null),l&&i.a.createElement(y,{closePage:function(){s(!1),p("Home")}}),i.a.createElement(g,{websiteOptions:h,socialMedia:T,theme:t,changeTheme:function(){console.log("Chaning theme"),"light"===t?(document.body.classList.remove(),document.body.classList.add("Appdark"),n("dark")):(document.body.classList.remove(),document.body.classList.add("Applight"),n("light"))},dotLocation:f,setDotLocation:p}))},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),o(e),r(e)})};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),P()}],[[13,1,2]]]);
//# sourceMappingURL=main.dd2385e1.chunk.js.map