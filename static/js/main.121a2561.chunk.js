(this.webpackJsonpbookviewer=this.webpackJsonpbookviewer||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(46),o=t.n(c),i=t(18),u=t(15),l=t(25);function s(){var e=Object(i.a)(["\n    body {\n        margin: 0;\n    }\n\n    ","\n"]);return s=function(){return e},e}var f={colors:{primary:"#9b003dff",secondary:"#ffcd00ff"},fonts:["sans-serif","Roboto"],fontSizes:{small:"1em",medium:"2em",large:"3em"}},d=Object(u.b)(s(),l.a.css()),m=function(e){var n=e.children;return a.a.createElement(u.a,{theme:f},a.a.createElement(d,null),n)},p=t(20),b=t(52),v=t(22);function E(){var e=Object(i.a)(["\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n\n    button {\n        background: none;\n        border: none;\n        font-size: 1.5em;\n    }\n"]);return E=function(){return e},e}function j(){var e=Object(i.a)(["\n    width: 100%;\n\n    canvas {\n        filter: ",";\n    }\n"]);return j=function(){return e},e}var g=u.c.div(j(),(function(e){return e.invert?"invert(100%)":"none"})),h=u.c.div(E()),O=t(19),x=t(23),w=t(51);v.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(v.pdfjs.version,"/pdf.worker.js");var k=function(e){var n=Object(r.useState)(1),t=Object(p.a)(n,2),c=t[0],o=t[1],i=Object(r.useState)(),u=Object(p.a)(i,2),l=u[0],s=u[1],f=Object(r.useState)(),d=Object(p.a)(f,2),m=d[0],b=d[1],E=Object(r.useState)(!1),j=Object(p.a)(E,2),k=j[0],y=j[1],S=Object(r.useRef)();Object(r.useEffect)((function(){b(S.current.offsetWidth-20),window.addEventListener("resize",(function(){b(S.current.offsetWidth-20)}))}),[S]);return a.a.createElement(g,{ref:S,invert:k},a.a.createElement(v.Document,{onLoadSuccess:function(e){var n=e.numPages;s(n)},file:e.pdf},a.a.createElement(v.Page,{renderAnnotationLayer:!1,pageNumber:c,width:m})),a.a.createElement(h,null,a.a.createElement("button",{onClick:function(){1!==c&&o(c-1)}},a.a.createElement(O.a,{icon:x.a})),a.a.createElement("p",null,c,"/",l),a.a.createElement("button",{onClick:function(){y(!k)}},k?a.a.createElement(O.a,{icon:w.a}):a.a.createElement(O.a,{icon:x.d})),a.a.createElement("button",{onClick:function(){c!==l&&o(c+1)}},a.a.createElement(O.a,{icon:x.b}))))};function y(){var e=Object(i.a)(["\n    padding: 0 40px;\n    background: #ccc;\n    text-align: center;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    svg {\n        font-size: 5em;\n    }\n"]);return y=function(){return e},e}var S=u.c.div(y()),D=function(e){var n=Object(r.useState)(),t=Object(p.a)(n,2),c=t[0],o=t[1],i=Object(r.useCallback)((function(e){"application/pdf"===e[0].type&&o(URL.createObjectURL(e[0]))}),[]),u=Object(b.a)({onDrop:i}),l=u.getRootProps,s=u.getInputProps,f=u.isDragActive;return c?a.a.createElement(k,{pdf:c}):a.a.createElement(S,l(),a.a.createElement("p",null,a.a.createElement(O.a,{icon:x.c})),a.a.createElement("input",s()),f?a.a.createElement("p",null,"Drop the files here ..."):a.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null,a.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=28},53:function(e,n,t){e.exports=t(106)},66:function(e,n){},68:function(e,n){},69:function(e,n){},70:function(e,n){},71:function(e,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.121a2561.chunk.js.map