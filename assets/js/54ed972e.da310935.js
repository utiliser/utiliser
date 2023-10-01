"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[268],{5318:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>m});var n=t(7378);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},u=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?n.createElement(m,a(a({ref:o},u),{},{components:t})):n.createElement(m,a({ref:o},u))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8094:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(5773),r=(t(7378),t(5318));const i={id:"use-geo",title:"useGeolocation",description:"useGeolocation is a hook which return location information.",tags:["hook","useGeolocation"]},a=void 0,s={unversionedId:"hooks/use-geo",id:"hooks/use-geo",title:"useGeolocation",description:"useGeolocation is a hook which return location information.",source:"@site/docs/hooks/2-use-geo.md",sourceDirName:"hooks",slug:"/hooks/use-geo",permalink:"/docs/hooks/use-geo",draft:!1,editUrl:"https://github.com/utiliser/utiliser/docs/hooks/2-use-geo.md",tags:[{label:"hook",permalink:"/docs/tags/hook"},{label:"useGeolocation",permalink:"/docs/tags/use-geolocation"}],version:"current",sidebarPosition:2,frontMatter:{id:"use-geo",title:"useGeolocation",description:"useGeolocation is a hook which return location information.",tags:["hook","useGeolocation"]},sidebar:"docSidebar",previous:{title:"useAcceptOnlyInteger",permalink:"/docs/hooks/use-accept-only-interger"},next:{title:"useIntersectionObserver",permalink:"/docs/hooks/use-intersect"}},c={},l=[{value:"Definition",id:"definition",level:3},{value:"Usage Example",id:"usage-example",level:3}],u={toc:l},p="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useGeolocation is a hook which return location information.")),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useGeolocation } from 'urh-react-hooks'\n\nconst App = () => {\n\n  const { coords, errors } = useGeolocation()\n\n  return (\n    <div>\n      <p>\n        {JSON.stringify(coords, null, 2)}\n      </p>\n      <br />\n      <p>\n        {JSON.stringify(errors, null, 2)}\n      </p>\n    </div>\n  )\n}\n\nexport default App\n")))}d.isMDXComponent=!0}}]);