var D=Object.defineProperty;var k=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var r=(e,s,t)=>s in e?D(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,g=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&r(e,t,s[t]);if(k)for(var t of k(s))E.call(s,t)&&r(e,t,s[t]);return e};import{_ as F,r as d,c as N,a as m,w as _,b as n,d as a,o as P,V}from"./app.9ee6a65e.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:s,createVNode:t,withCtx:o,openBlock:l,createElementBlock:u}=V,c=e("div",{class:"carousel-item"},"page 1",-1),p=e("div",{class:"carousel-item"},"page 2",-1),v=e("div",{class:"carousel-item"},"page 3",-1);function x(j,T){const C=s("DCarouselPrev"),h=s("DCarouselNext"),f=s("DCarousel");return l(),u("div",null,[t(f,null,{pagination:o(i=>[t(C,{onClick:i.prevPage,style:{top:"40px",left:"calc(100% - 110px)"}},null,8,["onClick"]),t(h,{onClick:i.nextPage,style:{top:"40px"}},null,8,["onClick"])]),default:o(()=>[c,p,v]),_:1})])}return g({render:x},{})}()}},A='{"title":"\u5206\u9875\u5668\u4F4D\u7F6E","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5206\u9875\u5668\u4F4D\u7F6E","slug":"\u5206\u9875\u5668\u4F4D\u7F6E"}],"relativePath":"features/pagination-position/index.md","lastUpdated":1643034244629}',B=n("h3",{id:"\u5206\u9875\u5668\u4F4D\u7F6E",tabindex:"-1"},[a("\u5206\u9875\u5668\u4F4D\u7F6E "),n("a",{class:"header-anchor",href:"#\u5206\u9875\u5668\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),b=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#pagination"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarouselPrev")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.prevPage"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 40px"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),a("100% - 110px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarouselNext")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.nextPage"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 40px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".carousel-item"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(" #f3f6f8"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function w(e,s,t,o,l,u){const c=d("render-demo-0"),p=d("demo");return P(),N("div",null,[B,m(p,{sourceCode:`<template>
<DCarousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination="page">
    <DCarouselPrev @click="page.prevPage" style="top: 40px; left: calc(100% - 110px);" />
    <DCarouselNext @click="page.nextPage" style="top: 40px;" />
  </template>
</DCarousel>
</template>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
`},{highlight:_(()=>[b]),default:_(()=>[m(c)]),_:1})])}var G=F(q,[["render",w]]);export{A as __pageData,G as default};
