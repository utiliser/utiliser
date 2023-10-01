"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(5773),a=(r(7378),r(5318));const i={sidebar_label:"Getting Started",sidebar_position:1,title:"Getting Started"},o=void 0,l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Welcome to URH[use react hooks\ud83e\ude9d].",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/utiliser/docs/intro",draft:!1,editUrl:"https://github.com/utiliser/utiliser/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Getting Started",sidebar_position:1,title:"Getting Started"},sidebar:"docSidebar",next:{title:"useAcceptOnlyInteger",permalink:"/utiliser/docs/hooks/use-accept-only-interger"}},p={},s=[{value:"Prequesites",id:"prequesites",level:3},{value:"Installation",id:"installation",level:2},{value:"Quick Example",id:"quick-example",level:2},{value:"\u2728 Inspired By",id:"-inspired-by",level:2},{value:"\ud83e\udd77 Written",id:"-written",level:2},{value:"\ud83d\udcc3 License",id:"-license",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("strong",{parentName:"p"},"URH","[use react hooks\ud83e\ude9d]"),"."),(0,a.kt)("h3",{id:"prequesites"},"Prequesites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org"},"React")," ^18.*"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Choose your favorite package manager either ",(0,a.kt)("strong",{parentName:"p"},"npm")," or ",(0,a.kt)("strong",{parentName:"p"},"yarn"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"with npm:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install urh-react-hooks\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"with yarn:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add urh-react-hooks\n")),(0,a.kt)("h2",{id:"quick-example"},"Quick Example"),(0,a.kt)("p",null,"To use a hook, you will need to import it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useOnline } from 'urh-react-hooks'\n\nconst App = () => {\n\n  const { isOnline } = useOnline()\n\n  return (\n    <div>\n      { isOnline ? <p>Online</p> : <p>Offline</p> }\n    </div>\n  )\n}\n\nexport default App\n")),(0,a.kt)("h2",{id:"-inspired-by"},"\u2728 Inspired By"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vueuse.org/"},"vueuse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://usehooks.com/"},"usehooks"))),(0,a.kt)("h2",{id:"-written"},"\ud83e\udd77 Written"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Written In ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TS")),(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"https://tsdoc.org/"},"tsdoc")," to documented")),(0,a.kt)("h2",{id:"-license"},"\ud83d\udcc3 License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vueuse/vueuse/blob/main/LICENSE"},"MIT License")," \xa9 2022-PRESENT ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/virakkhun"},"Virak Khun")))}d.isMDXComponent=!0}}]);