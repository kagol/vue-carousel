var D=Object.defineProperty;var k=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var r=(e,s,t)=>s in e?D(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,g=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&r(e,t,s[t]);if(k)for(var t of k(s))E.call(s,t)&&r(e,t,s[t]);return e};import{_ as F,r as d,c as N,a as m,w as _,b as a,d as n,o as P,V}from"./app.a004aa05.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:s,createVNode:t,withCtx:o,openBlock:l,createElementBlock:u}=V,c=e("div",{class:"carousel-item"},"page 1",-1),p=e("div",{class:"carousel-item"},"page 2",-1),v=e("div",{class:"carousel-item"},"page 3",-1);function x(j,T){const C=s("DCarouselPrev"),h=s("DCarouselNext"),f=s("DCarousel");return l(),u("div",null,[t(f,null,{pagination:o(i=>[t(C,{onClick:i.prevPage,style:{top:"40px",left:"calc(100% - 110px)"}},null,8,["onClick"]),t(h,{onClick:i.nextPage,style:{top:"40px"}},null,8,["onClick"])]),default:o(()=>[c,p,v]),_:1})])}return g({render:x},{})}()}},A='{"title":"\u5206\u9875\u5668\u4F4D\u7F6E","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5206\u9875\u5668\u4F4D\u7F6E","slug":"\u5206\u9875\u5668\u4F4D\u7F6E"}],"relativePath":"features/pagination-position/index.md","lastUpdated":1643034244629}',B=a("h3",{id:"\u5206\u9875\u5668\u4F4D\u7F6E",tabindex:"-1"},[n("\u5206\u9875\u5668\u4F4D\u7F6E "),a("a",{class:"header-anchor",href:"#\u5206\u9875\u5668\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),b=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("DCarousel")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 1"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 2"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 3"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),n(),a("span",{class:"token attr-name"},"#pagination"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("page"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("DCarouselPrev")]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("page.prevPage"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"top"),a("span",{class:"token punctuation"},":"),n(" 40px"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"left"),a("span",{class:"token punctuation"},":"),n(),a("span",{class:"token function"},"calc"),a("span",{class:"token punctuation"},"("),n("100% - 110px"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("DCarouselNext")]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("page.nextPage"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"top"),a("span",{class:"token punctuation"},":"),n(" 40px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),n(),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("DCarousel")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[n(`
`),a("span",{class:"token selector"},".carousel-item"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"text-align"),a("span",{class:"token punctuation"},":"),n(" center"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),n(" 200px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"background"),a("span",{class:"token punctuation"},":"),n(" #f3f6f8"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
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
