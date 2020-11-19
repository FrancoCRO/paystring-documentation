(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},y=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,b=d["".concat(o,".").concat(y)]||d[y]||u[y]||i;return r?n.a.createElement(b,c(c({ref:t},l),{},{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(7),i=(r(0),r(100)),o={id:"payid-discovery",title:"Discover a PayID",sidebar_label:"Discover a PayID"},c={unversionedId:"payid-discovery",id:"payid-discovery",isDocsHomePage:!1,title:"Discover a PayID",description:"The PayID Discovery endpoint facilitates finding the PayID URI for a given PayID.",source:"@site/docs/payid-discovery.md",permalink:"/payid-documentation/review-apps/fix-payid-links/155ca1/payid-discovery",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/payid-discovery.md",sidebar_label:"Discover a PayID",sidebar:"docs",previous:{title:"Enhance Security With Verifiable PayID",permalink:"/payid-documentation/review-apps/fix-payid-links/155ca1/verifiable-payid"},next:{title:"Security Best Practices",permalink:"/payid-documentation/review-apps/fix-payid-links/155ca1/payid-best-practices"}},p=[{value:"PayID discovery by a wallet application",id:"payid-discovery-by-a-wallet-application",children:[]},{value:"PayID discovery with a default template",id:"payid-discovery-with-a-default-template",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The PayID Discovery endpoint facilitates finding the PayID URI for a given PayID."),Object(i.b)("h2",{id:"payid-discovery-by-a-wallet-application"},"PayID discovery by a wallet application"),Object(i.b)("p",null,"Suppose Alice wants to send Bob some XRP from a web-based wallet provider that Alice has an account on. Alice logs in to the wallet provider and enter Bob's PayID, such as ",Object(i.b)("inlineCode",{parentName:"p"},"bob$receiver.example.com"),", into the wallet UI to start the payment. If the wallet application is set up to use the PayID Discovery endpoint, the wallet application performs a WebFinger query that looks for the PayID Discovery service provider, like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /.well-known/webfinger?resource=payid%3Abob%24receiver.example.com\nHTTP/1.1\nHost: receiver.example.com\n")),Object(i.b)("p",null,"If the server for Bob's exchange, where Bob receives currency, supports the PayID Discovery endpoint, it responds like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' HTTP/1.1 200 OK\n Access-Control-Allow-Origin: *\n Content-Type: application/jrd+json\n\n {\n   "subject" : "payid:bob$receiver.example.com",\n   "links" :\n   [\n     {\n       "rel": "https://payid.org/ns/payid-uri-template/1.0",\n       "template": "https://receiver.example.com/users/{acctpart}"\n     }\n   ]\n }\n')),Object(i.b)("p",null,'Alice\'s wallet can then use the URL template found in the "template" property to assemble the specified PayId URL. Typically, this template might add a folder structure to the URL, such as ',Object(i.b)("inlineCode",{parentName:"p"},"https://receiver.example.com/users/bob"),". The server can be set up to use other URL formats, so long as the resulting URL is valid and represents Bob's PayID."),Object(i.b)("h2",{id:"payid-discovery-with-a-default-template"},"PayID discovery with a default template"),Object(i.b)("p",null,"In this case, Alice's wallet application makes the same request as previously, but Bob's server does not support Webfinger, and returns ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP/1.1 404 NOT FOUND"),"."),Object(i.b)("p",null,"The wallet application then uses a default template to transform ",Object(i.b)("inlineCode",{parentName:"p"},"bob$receiever.example.com"),"\nto ",Object(i.b)("inlineCode",{parentName:"p"},"https://receiver.example.com/bob"),". The wallet then uses this URL to continue making the payment. Alice's wallet proceeds to make the payment."))}s.isMDXComponent=!0}}]);