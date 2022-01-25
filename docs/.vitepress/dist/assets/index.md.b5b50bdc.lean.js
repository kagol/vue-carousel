var C=Object.defineProperty;var r=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var k=(e,s,t)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,d=(e,s)=>{for(var t in s||(s={}))F.call(s,t)&&k(e,t,s[t]);if(r)for(var t of r(s))x.call(s,t)&&k(e,t,s[t]);return e};import{_ as B,r as _,c as E,a as g,w as u,b as n,d as a,o as f,V as D}from"./app.a004aa05.js";const y={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:s,withCtx:t,createVNode:p,openBlock:l,createElementBlock:i}=D,o=e("div",{class:"carousel-item"},"page 1",-1),c=e("div",{class:"carousel-item"},"page 2",-1),m=e("div",{class:"carousel-item"},"page 3",-1);function v(q,A){const h=s("DCarousel");return l(),i("div",null,[p(h,null,{default:t(()=>[o,c,m]),_:1})])}return d({render:v},{})}()}},T='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","lastUpdated":1643118547214}',V=n("h1",{id:"\u5FEB\u901F\u5F00\u59CB",tabindex:"-1"},[a("\u5FEB\u901F\u5F00\u59CB "),n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u5F00\u59CB","aria-hidden":"true"},"#")],-1),N=n("div",null,[n("code",null,"Carousel"),a("\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u76F4\u63A5\u5C06\u5143\u7D20\u653E\u5728"),n("code",null,"<DCarousel>"),a("\u5373\u53EF\u5B9E\u73B0\u8F6E\u64AD\u6548\u679C\u3002")],-1),b=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".carousel-item"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(" #f3f6f8"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function w(e,s,t,p,l,i){const o=_("render-demo-0"),c=_("demo");return f(),E("div",null,[V,g(c,{sourceCode:`<template>
  <DCarousel>
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
  </DCarousel>
</template>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
`},{description:u(()=>[N]),highlight:u(()=>[b]),default:u(()=>[g(o)]),_:1})])}var U=B(y,[["render",w]]);export{T as __pageData,U as default};
