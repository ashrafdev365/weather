(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(27),a(21)),j=a(2),d=a(9),l=(a(28),a(7)),o=a.n(l),h=(a(11),a(0)),b=function(){var e=s.a.useState(""),t=Object(d.a)(e,2),a=t[0],c=t[1];s.a.useEffect((function(){window.screen.width<1050?c("0"):c("320px"),o.a.init({duration:2e3})}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{"data-aos":"fade-down",children:Object(h.jsxs)("div",{className:"nav_div",children:[Object(h.jsxs)("div",{className:"logo_div",children:[Object(h.jsx)("img",{src:"images/images.png",alt:"covid19 image"}),Object(h.jsx)("p",{children:"WEATHER"})]}),Object(h.jsx)("div",{className:"menu",children:Object(h.jsx)("i",{className:"fas fa-bars",onClick:function(){return c("50%")}})}),Object(h.jsxs)("div",{className:"slide",style:{width:a},children:[Object(h.jsx)("div",{className:"crose",onClick:function(){return c("0%")},children:Object(h.jsx)("i",{className:"fal fa-times"})}),Object(h.jsxs)("ul",{className:"nav_links_div",children:[Object(h.jsx)("li",{children:"Home"}),Object(h.jsx)("li",{children:"developer"}),Object(h.jsx)("li",{children:"About"})]})]})]})})})},m=(a(30),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"footer_main_div",children:[Object(h.jsxs)("div",{className:"footer_text",children:[Object(h.jsx)("i",{className:"fal fa-envelope"}),Object(h.jsx)("h1",{children:"ADD YOURSELF TO MY EMAIL LIST"}),Object(h.jsx)("p",{children:"Get updates on my projects and events, as well as a curated selection of my best content."})]}),Object(h.jsxs)("div",{className:"email_div",children:[Object(h.jsx)("input",{type:"email",placeholder:"Email.."}),Object(h.jsx)("button",{children:"Submit"})]}),Object(h.jsxs)("div",{className:"social_div",children:[Object(h.jsxs)("a",{href:"https://www.facebook.com/ashrafdev.ashraf",children:[" ",Object(h.jsx)("i",{className:"fab fa-facebook-square"})]}),Object(h.jsxs)("a",{href:"https://www.instagram.com/ashrafdev_365/",children:[" ",Object(h.jsx)("i",{className:"fab fa-instagram"})]}),Object(h.jsxs)("a",{href:"https://twitter.com/Ashraf_365",children:[" ",Object(h.jsx)("i",{className:"fab fa-twitter"})]}),Object(h.jsxs)("a",{href:"https://www.linkedin.com/in/ashraf-dev-297301206/",children:[" ",Object(h.jsx)("i",{className:"fab fa-linkedin"})]})]}),Object(h.jsxs)("div",{className:"footer_logo_div",children:[Object(h.jsx)("img",{src:"images/images.png",alt:"weather"}),Object(h.jsx)("p",{children:"WEATHER"})]})]})})}),u=(a(31),a(15)),O=a.n(u),x=a(20),f=(a(14),function(e){var t=e.name,a=e.country,c="https://www.countryflags.io/".concat(t,"/flat/64.png");return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"flag_div",children:[Object(h.jsx)("img",{src:c}),Object(h.jsx)("h1",{children:a})]})})}),v=function(e){var t=e.name,a=e.value;return s.a.useEffect((function(){o.a.init({duration:2e3})}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"weather_box","data-aos":"fade-up","data-aos-anchor-placement":"center-bottom",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("p",{children:a})]})})},p=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(d.a)(n,2),r=i[0],j=i[1],l=Object(c.useState)("bangladesh"),b=Object(d.a)(l,2),m=b[0],u=b[1],p="http://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&appid=aabbfb93a86b2cfd6cd5beb5650d7539&units=metric"),g=function(){var e=Object(x.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g(),o.a.init({duration:2e3})}),[m]);var w=(new Date).getDate();return Object(h.jsx)(h.Fragment,{children:a?Object(h.jsx)("div",{className:"weather_main_div",children:Object(h.jsxs)("div",{className:"weather_div",children:[Object(h.jsxs)("div",{className:"search_div","data-aos":"zoom-out-up",children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),u(r)},children:Object(h.jsx)("input",{type:"search",placeholder:"Search Place",onChange:function(e){return j(e.target.value)}})}),Object(h.jsxs)("p",{children:["Date: ",w]})]}),Object(h.jsxs)("div",{className:"weather_data",children:[Object(h.jsxs)("div",{className:"tem_main_div","data-aos":"zoom-out-up",children:[Object(h.jsxs)("div",{className:"country_name_div",children:[Object(h.jsx)("h1",{children:a.name}),Object(h.jsx)("h2",{children:a.weather[0].description}),Object(h.jsx)("span",{children:"clear sky"===a.weather[0].description?Object(h.jsx)("img",{src:"images/icons8-clouds-100.png",alt:"clouds"}):Object(h.jsx)("img",{src:"images/icons8-storm-100.png",alt:"clouds"})})]}),Object(h.jsx)("div",{className:"temp_div",children:Object(h.jsx)("h1",{className:"temp",children:a.main.temp})})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{name:a.sys.country,country:a.name})}),Object(h.jsxs)("div",{className:"box_main_div",children:[Object(h.jsx)(v,{name:"Himudity",value:a.main.humidity}),Object(h.jsx)(v,{name:"sea_level",value:a.main.pressure}),Object(h.jsx)(v,{name:"pressure",value:a.main.sea_level}),Object(h.jsx)(v,{name:"speed",value:a.wind.speed}),Object(h.jsx)(v,{name:"deg",value:a.wind.deg}),Object(h.jsx)(v,{name:"clouds",value:a.clouds.all})]})]})]})}):Object(h.jsx)("div",{children:"No data found"})})},g=function(){return s.a.useEffect((function(){o.a.init({duration:2e3})}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"header_div","data-aos":"zoom-out",children:[Object(h.jsxs)("div",{className:"header_content",children:[Object(h.jsx)("p",{children:"Current Weather"}),Object(h.jsx)("h1",{children:"Weather forecasts for thousands of locations around the world"})]}),Object(h.jsx)("div",{className:"header_image",children:Object(h.jsx)("img",{src:"images/weather-animate.svg",alt:"weather"})})]})}),Object(h.jsx)(p,{}),Object(h.jsx)(m,{})]})},w=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(j.c,{children:Object(h.jsx)(j.a,{exact:!0,path:"/",component:g})})})})};i.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ce6f5152.chunk.js.map