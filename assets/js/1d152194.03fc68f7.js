"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[810],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),w=r,h=d["".concat(u,".").concat(w)]||d[w]||p[w]||o;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=w;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},6678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(5773),r=(n(7378),n(5318));const o={id:"use-window-size",title:"useWindowSize",description:"useWindowSize is a hook which return `ts height`, `ts widht` when resizing the window.",tags:["hook","useWindowSize"]},s=void 0,a={unversionedId:"hooks/use-window-size",id:"hooks/use-window-size",title:"useWindowSize",description:"useWindowSize is a hook which return `ts height`, `ts widht` when resizing the window.",source:"@site/docs/hooks/10-use-window-size.md",sourceDirName:"hooks",slug:"/hooks/use-window-size",permalink:"/docs/hooks/use-window-size",draft:!1,editUrl:"https://github.com/utiliser/utiliser/docs/hooks/10-use-window-size.md",tags:[{label:"hook",permalink:"/docs/tags/hook"},{label:"useWindowSize",permalink:"/docs/tags/use-window-size"}],version:"current",sidebarPosition:10,frontMatter:{id:"use-window-size",title:"useWindowSize",description:"useWindowSize is a hook which return `ts height`, `ts widht` when resizing the window.",tags:["hook","useWindowSize"]},sidebar:"docSidebar",previous:{title:"useWindowScroll",permalink:"/docs/hooks/use-window-scroll"}},u={},l=[{value:"Definition",id:"definition",level:3},{value:"Usage Example",id:"usage-example",level:3}],c={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useWindowSize is a hook which return ",(0,r.kt)("inlineCode",{parentName:"li"},"ts height"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ts widht")," when resizing the window.")),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useWindowSize } from 'urh-react-hooks'\n\nconst App = () => {\n\n  const { height, width } = useWindowSize()\n\n  return (\n    <div>\n      <p>{ height }</p>\n      <p>{ width }</p>\n    </div>\n  )\n}\n\nexport default App\n")))}p.isMDXComponent=!0}}]);