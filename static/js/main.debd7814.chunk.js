(this.webpackJsonpinfoscreen=this.webpackJsonpinfoscreen||[]).push([[0],{34:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),s=n(28),a=n.n(s),r=(n(34),n(10)),o=n(1);var j=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return i(e.data.children[0].data)}))}),[]),Object(o.jsxs)("div",{className:"joke",children:[Object(o.jsx)("h2",{children:"Dad Joke"}),Object(o.jsx)("p",{children:n.title}),Object(o.jsx)("p",{children:n.selftext})]})},u=n(29),d=n.n(u)()({clientName:"Axel-infoscreen"});var l=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){d.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return i(e)}))}),[]),Object(o.jsxs)("div",{className:"bike",children:[Object(o.jsx)("h2",{children:"City Bikes"}),n.map((function(e){return Object(o.jsx)(b,{data:e},e.name)}))]})};function b(e){var t=e.data;return Object(o.jsxs)("div",{className:"Station",children:[t.name,": ",t.bikesAvailable," - ",t.spacesAvailable]})}var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(l,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),h()}},[[69,1,2]]]);
//# sourceMappingURL=main.debd7814.chunk.js.map