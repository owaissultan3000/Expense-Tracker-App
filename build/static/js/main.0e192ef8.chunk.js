(this.webpackJsonpexpense=this.webpackJsonpexpense||[]).push([[0],[,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(1),j=t.n(s),r=t(6),a=t.n(r);t(13),t(14),t(15);var l=function(){return Object(n.jsx)("div",{className:"Title",children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{style:{color:"#00cccc"},children:"E"}),Object(n.jsx)("span",{style:{color:"#C51827"},children:"x"}),Object(n.jsx)("span",{style:{color:"#ffc61a"},children:"p"}),Object(n.jsx)("span",{style:{color:"#00cc00"},children:"e"}),Object(n.jsx)("span",{style:{color:"#00cccc"},children:"n"}),Object(n.jsx)("span",{style:{color:"#C51827"},children:"s"}),Object(n.jsx)("span",{style:{color:"#ffc61a"},children:"e"}),"  ",Object(n.jsx)("span",{style:{color:"#00cccc"},children:"T"}),Object(n.jsx)("span",{style:{color:"#C51827"},children:"r"}),Object(n.jsx)("span",{style:{color:"#ffc61a"},children:"a"}),Object(n.jsx)("span",{style:{color:"#00cc00"},children:"c"}),Object(n.jsx)("span",{style:{color:"#00cccc"},children:"k"}),Object(n.jsx)("span",{style:{color:"#C51827"},children:"e"}),Object(n.jsx)("span",{style:{color:"#ffc61a"},children:"r"}),"   ",Object(n.jsx)("span",{style:{color:"#00cccc"},children:"A"}),Object(n.jsx)("span",{style:{color:"#C51827"},children:"p"}),Object(n.jsx)("span",{style:{color:"#ffc61a"},children:"p"})]})})},i=t(2),b=Object(s.createContext)(),o=function(e){var c=Object(s.useState)("0"),t=Object(i.a)(c,2),j=t[0],r=t[1],a=Object(s.useState)("0"),l=Object(i.a)(a,2),o=l[0],O=l[1],x=Object(s.useState)("0"),d=Object(i.a)(x,2),h=d[0],u=d[1];return Object(n.jsx)(b.Provider,{value:{balance:[j,r],income:[o,O],expense:[h,u]},children:e.children})};t(16);var O=function(){var e=Object(s.useContext)(b),c=e.balance,t=(e.income,e.expense,Object(i.a)(c,2)),j=t[0];return t[1],Object(n.jsxs)("div",{className:"Balance",children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"YOUR BALANCE"}),Object(n.jsxs)("h1",{style:{color:"#ff9900"},children:["$",j]})]})};t(17);var x=function(){var e=Object(s.useContext)(b),c=e.balance,t=e.income,j=e.expense,r=Object(i.a)(c,2),a=(r[0],r[1],Object(i.a)(t,2)),l=a[0],o=(a[1],Object(i.a)(j,2)),O=o[0];return o[1],Object(n.jsxs)("div",{className:"Display",children:[Object(n.jsxs)("div",{className:"Income",children:[Object(n.jsx)("h2",{children:"INCOME"}),Object(n.jsxs)("h2",{style:{color:"green"},children:["$",l]})]}),Object(n.jsxs)("div",{className:"Expense",children:[Object(n.jsx)("h2",{children:"EXPENSE"}),Object(n.jsxs)("h2",{style:{color:"red"},children:["$",O]})]})]})},d=(t(18),t(19),function(e){var c=e.name,t=e.price;return Object(n.jsxs)("div",{className:"History",children:[Object(n.jsx)("div",{className:"Name_History",children:Object(n.jsx)("h3",{children:c})}),Object(n.jsx)("div",{className:"Price_History",children:Object(n.jsx)("h3",{children:t})})]})}),h=Object(s.createContext)(),u=function(e){var c=Object(s.useState)([]),t=Object(i.a)(c,2),j=t[0],r=t[1];return Object(n.jsx)(h.Provider,{value:[j,r],children:e.children})},p=function(){var e=Object(s.useContext)(h),c=Object(i.a)(e,2),t=c[0];c[1];return Object(n.jsxs)("div",{className:"Store",children:[Object(n.jsx)("h2",{children:"HISTORY"}),Object(n.jsx)("br",{}),Object(n.jsx)("hr",{}),t.map((function(e){return Object(n.jsx)(d,{name:e.name,price:e.price})}))]})},f=t(7),v=(t(20),function(){var e=Object(s.useState)(""),c=Object(i.a)(e,2),t=c[0],j=c[1],r=Object(s.useState)(),a=Object(i.a)(r,2),l=a[0],o=a[1],O=Object(s.useContext)(h),x=Object(i.a)(O,2),d=(x[0],x[1]),u=Object(s.useContext)(b),p=u.balance,v=u.income,m=u.expense,y=Object(i.a)(p,2),C=y[0],N=y[1],S=Object(i.a)(v,2),F=S[0],g=S[1],E=Object(i.a)(m,2),A=E[0],T=E[1];return Object(n.jsxs)("div",{className:"AddTransaction",children:[Object(n.jsx)("h2",{children:"ADD NEW TRANSACTION"}),Object(n.jsx)("br",{}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==t&&""!==l){if(d((function(e){return[].concat(Object(f.a)(e),[{name:t,price:l}])})),l>0){var c=parseFloat(F)+parseFloat(l);g(c),N("");var n=parseFloat(C)+parseFloat(l);N(n)}else{var s=parseFloat(A)+parseFloat(l);T(s),N();var r=parseFloat(C)+parseFloat(l);N(r)}j(""),o("")}},children:[Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Enter Description"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:t,onChange:function(e){j(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Enter Amount [ +ve value(income), -ve value(expense) ]"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)}}),Object(n.jsx)("button",{children:"Add Transaction"})]})]})});var m=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsxs)(o,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(x,{}),Object(n.jsxs)(u,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(v,{})]})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,j=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),j(e),r(e)}))};a.a.render(Object(n.jsx)(j.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.0e192ef8.chunk.js.map