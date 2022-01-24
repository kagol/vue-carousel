var E=Object.defineProperty;var k=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))h.call(t,s)&&d(e,s,t[s]);if(k)for(var s of k(t))F.call(t,s)&&d(e,s,t[s]);return e};import{_ as y,r as m,c as B,a as _,w as l,b as n,d as a,o as V,V as I}from"./app.9af11bed.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:t,createVNode:s,withCtx:o,openBlock:i,createElementBlock:r}=I,c=e("div",{class:"carousel-item"},"page 1",-1),u=e("div",{class:"carousel-item"},"page 2",-1),v=e("div",{class:"carousel-item"},"page 3",-1);function f($,U){const x=t("DCarouselIndicator"),C=t("DCarousel");return i(),r("div",null,[s(C,null,{indicator:o(p=>[s(x,{count:p.count,modelValue:p.pageIndex,"onUpdate:modelValue":D=>p.pageIndex=D,style:{"justify-content":"flex-start","padding-left":"20px"}},null,8,["count","modelValue","onUpdate:modelValue"])]),default:o(()=>[c,u,v]),_:1})])}return g({render:f},{})}()}},z='{"title":"\u6307\u793A\u5668\u4F4D\u7F6E","description":"","frontmatter":{},"headers":[],"relativePath":"features/indicator-position/index.md","lastUpdated":1643033544523}',N=n("h1",{id:"\u6307\u793A\u5668\u4F4D\u7F6E",tabindex:"-1"},[a("\u6307\u793A\u5668\u4F4D\u7F6E "),n("a",{class:"header-anchor",href:"#\u6307\u793A\u5668\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),A=n("div",null,[n("code",null,"<DCarousel>"),a("\u7EC4\u4EF6\u5C06\u5176\u4E2D\u7684\u6307\u793A\u5668\u5B50\u7EC4\u4EF6\u66B4\u9732\u51FA\u6765\uFF0C\u5E76\u63D0\u4F9B\u4E86"),n("code",null,"indicator"),a("\u63D2\u69FD\uFF0C\u56E0\u6B64\u53EF\u4EE5\u968F\u610F\u8C03\u6574"),n("code",null,"DCarouselIndicator"),a("\u7684\u4F4D\u7F6E\uFF0C\u6BD4\u5982\u653E\u5728\u5DE6\u4E0B\u89D2\u3002")],-1),b=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#indicator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarouselIndicator")]),a(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.count"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.pageIndex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" flex-start"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("DCarouselIndicator")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1);function j(e,t,s,o,i,r){const c=m("render-demo-0"),u=m("demo");return V(),B("div",null,[N,_(u,{sourceCode:`<template>
  <DCarousel>
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
    <template #indicator="page">
      <DCarouselIndicator :count="page.count" v-model="page.pageIndex" style="justify-content: flex-start; padding-left: 20px;"></DCarouselIndicator>
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
`},{description:l(()=>[A]),highlight:l(()=>[b]),default:l(()=>[_(c)]),_:1})])}var G=y(q,[["render",j]]);export{z as __pageData,G as default};
