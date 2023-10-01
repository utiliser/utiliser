"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[860],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,f=g["".concat(i,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(5773),a=(n(7378),n(5318));const o={id:"use-language",title:"useLanguage",description:"useLanguage is a hook use to detect a current languauge is being used as your preference.",tags:["hook","useLauguage"]},u=void 0,s={unversionedId:"hooks/use-language",id:"hooks/use-language",title:"useLanguage",description:"useLanguage is a hook use to detect a current languauge is being used as your preference.",source:"@site/docs/hooks/5-use-language.md",sourceDirName:"hooks",slug:"/hooks/use-language",permalink:"/docs/hooks/use-language",draft:!1,editUrl:"https://github.com/utiliser/utiliser/docs/hooks/5-use-language.md",tags:[{label:"hook",permalink:"/docs/tags/hook"},{label:"useLauguage",permalink:"/docs/tags/use-lauguage"}],version:"current",sidebarPosition:5,frontMatter:{id:"use-language",title:"useLanguage",description:"useLanguage is a hook use to detect a current languauge is being used as your preference.",tags:["hook","useLauguage"]},sidebar:"docSidebar",previous:{title:"useIsEmail",permalink:"/docs/hooks/use-is-email"},next:{title:"useMouseMove",permalink:"/docs/hooks/use-mouse-move"}},i={},l=[{value:"Definition",id:"definition",level:3},{value:"Usage Example",id:"usage-example",level:3}],c={toc:l},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"useLanguage is a hook use to detect a current languauge is being used as your preference.")),(0,a.kt)("h3",{id:"usage-example"},"Usage Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLanguage } from 'urh-react-hooks'\n\nconst App = () => {\n\n  const { lang } = useLangauge()\n\n  return (\n    <div>\n      { lang }\n    </div>\n  )\n}\n\nexport default App\n")))}p.isMDXComponent=!0}}]);