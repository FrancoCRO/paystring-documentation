(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(99)),i={id:"getting-started-local",title:"Get Started With a Local PayID Server",sidebar_label:"Get Started With a Local PayID Server"},c={unversionedId:"getting-started-local",id:"getting-started-local",isDocsHomePage:!1,title:"Get Started With a Local PayID Server",description:"To familiarize yourself and experiment with PayID, you can set up a local PayID server. Here is a simple method. For more options, including PayID deployment for production environments, see Deployment Overview.",source:"@site/docs/getting-started-local.md",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/getting-started-local",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/getting-started-local.md",sidebar_label:"Get Started With a Local PayID Server",sidebar:"docs",previous:{title:"Get Started With PayID Sandbox",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/getting-started-sandbox"},next:{title:"Get Started With PayID CLI",permalink:"/payid-documentation/review-apps/loisrp-networks/b5f241/payid-cli"}},s=[{value:"Create a PayID",id:"create-a-payid",children:[]},{value:"Request a PayID",id:"request-a-payid",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To familiarize yourself and experiment with PayID, you can set up a local PayID server. Here is a simple method. For more options, including PayID deployment for production environments, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"intro-deploy"}),"Deployment Overview"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you haven't already, install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docks.docker.com/get-docker/"}),"Docker")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node")," on your machine.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The reference implementation server is available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/payid-org/payid"}),"https://github.com/payid-org/payid"),". You can download the reference implementation server by cloning the repository at the command line:\n",Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/payid-org/payid.git"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"/payid")," directory that you just created:\n",Object(o.b)("inlineCode",{parentName:"p"},"cd payid"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Boot up the PayID HTTP server and a Postgres database to develop against:\n",Object(o.b)("inlineCode",{parentName:"p"},"npm run devEnvUp")))),Object(o.b)("h3",{id:"create-a-payid"},"Create a PayID"),Object(o.b)("p",null,"Now that you have a PayID server running, you can create a PayID. If your server is publicly accessible, other people could query your account information from your PayID server."),Object(o.b)("p",null,"To create a PayID, with an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://xrpl.org/xrp-testnet-faucet.html"}),"XRP Ledger Testnet account"),", send this request to your server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'http://127.0.0.1:8081/users\' \\\n  --header \'PayID-API-Version: 2020-06-18\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n       "payId": "alice$127.0.0.1",\n       "addresses": [\n           {\n               "paymentNetwork": "XRPL",\n               "environment": "TESTNET",\n               "details": {\n                   "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",\n                   "tag": "123"\n               }\n           }\n       ]\n   }\'\n')),Object(o.b)("p",null,"PayID supports various payment networks. To create a second user with a Bitcoin testnet account, send this request to your server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'http://127.0.0.1:8081/users\' \\\n  --header \'PayID-API-Version: 2020-06-18\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n       "payId": "bob$127.0.0.1",\n       "addresses": [\n           {\n               "paymentNetwork": "BTC",\n               "environment": "TESTNET",\n               "details": {\n                   "address": "mxNEbRXokcdJtT6sbukr1CTGVx8Tkxk3DB"\n               }\n           }\n       ]\n   }\'\n')),Object(o.b)("h3",{id:"request-a-payid"},"Request a PayID"),Object(o.b)("p",null,"After setting up a server and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#create-a-payid"}),"creating a PayID")," on the server, the next step is to request the PayID from the server. The PayID Protocol is what allows you to make these requests. And, when the server is publicly available, other wallets and entities can make similar requests to query any PayID and related account information stored on the server."),Object(o.b)("p",null,"To request the PayID you created for Alice:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://127.0.0.1:8080/alice' \\\n   --header 'PayID-Version: 1.0' \\\n   --header 'Accept: application/xrpl-testnet+json'\n")),Object(o.b)("p",null,"The response should have the following payload:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "payId": "alice$127.0.0.1",\n  "addresses": [\n    {\n      "paymentNetwork": "XRPL",\n      "environment": "TESTNET",\n      "addressDetailsType": "CryptoAddressDetails",\n      "addressDetails": {\n        "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",\n        "tag:": "123"\n      }\n    }\n  ]\n}\n')),Object(o.b)("p",null,"To request the PayID you created for Bob:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://127.0.0.1:8080/bob' \\\n   --header 'PayID-Version: 1.0' \\\n   --header 'Accept: application/btc-testnet+json'\n")),Object(o.b)("p",null,"That's it! You've set up a PayID server locally, created new PayIDs on your server, and requested those PayIDs by using the PayID Protocol."),Object(o.b)("p",null,"If you want to clean up the Docker containers, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run devDown"),"."),Object(o.b)("p",null,"Now that you've set up the basics, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#learn-more"}),"learn more")," about PayID and what you can do with it."))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,y=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(y,c(c({ref:t},l),{},{components:a})):r.a.createElement(y,c({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);