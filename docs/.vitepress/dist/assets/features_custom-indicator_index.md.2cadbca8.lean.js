var V=Object.defineProperty;var m=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(e,s,t)=>s in e?V(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,f=(e,s)=>{for(var t in s||(s={}))q.call(s,t)&&v(e,t,s[t]);if(m)for(var t of m(s))F.call(s,t)&&v(e,t,s[t]);return e};import{_ as N,V as _,r as y,c as j,a as x,w as r,b as n,d as a,o as $}from"./app.fef14296.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,renderList:s,Fragment:t,openBlock:u,createElementBlock:l,normalizeClass:k,resolveComponent:i,withCtx:o,createVNode:d}=_,h=e("div",{class:"carousel-item-dark"},"page 1",-1),C=e("div",{class:"carousel-item-dark"},"page 2",-1),A=e("div",{class:"carousel-item-dark"},"page 3",-1),E=["onClick"];function w(g,G){const I=i("DCarouselIndicator"),B=i("DCarousel");return u(),l("div",null,[d(B,null,{indicator:o(c=>[d(I,{count:c.count,modelValue:c.pageIndex,"onUpdate:modelValue":p=>c.pageIndex=p,style:{"justify-content":"flex-start","padding-left":"20px"}},{default:o(()=>[(u(!0),l(t,null,s(g.indicatorArr,p=>(u(),l("div",{class:k(["carousel-indicator-item",c.pageIndex===p+1?"active":""]),key:p,onClick:H=>c.setPageIndex(p+1)},null,10,E))),128))]),_:2},1032,["count","modelValue","onUpdate:modelValue"])]),default:o(()=>[h,C,A]),_:1})])}const{defineComponent:b}=_,D=b({setup(){return{indicatorArr:Array.from(new Array(3).keys())}}});return f({render:w},D)}()}},M='{"title":"\u81EA\u5B9A\u4E49\u6307\u793A\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"features/custom-indicator/index.md","lastUpdated":1643033808342}',U=n("h1",{id:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u6307\u793A\u5668 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6307\u793A\u5668","aria-hidden":"true"},"#")],-1),z=n("div",null,[a("\u5982\u679C"),n("code",null,"Carousel"),a("\u5185\u7F6E\u7684"),n("code",null,"CarouselIndicator"),a("\u6307\u793A\u5668\u4E0D\u6EE1\u8DB3\u4F60\u7684\u8981\u6C42\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u5236\u81EA\u5DF1\u7684\u6307\u793A\u5668\u3002")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item-dark"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item-dark"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("carousel-item-dark"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("page 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#indicator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("DCarouselIndicator")]),a(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.count"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.pageIndex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" flex-start"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(`
          `),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("carousel-indicator-item"),n("span",{class:"token punctuation"},"'"),a(", page.pageIndex === item+1 ? "),n("span",{class:"token punctuation"},"'"),a("active"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item of indicatorArr"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("page.setPageIndex(item+1)"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("DCarouselIndicator")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("DCarousel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" indicatorArr "),n("span",{class:"token operator"},"="),a(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" indicatorArr "),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".carousel-item-dark"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),a(" 200px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),a("135"),n("span",{class:"token punctuation"},","),a(" 164"),n("span",{class:"token punctuation"},","),a(" 186"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".carousel-indicator-item"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" relative"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" inline-block"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 4px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),a("--devui-icon-fill"),n("span",{class:"token punctuation"},","),a(" #d3d5d9"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),a(" hidden"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),a(" pointer"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".carousel-indicator-item.active"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 14px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 14px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 1px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function T(e,s,t,u,l,k){const i=y("render-demo-0"),o=y("demo");return $(),j("div",null,[U,x(o,{sourceCode:`<template>
  <DCarousel>
    <div class="carousel-item-dark">page 1</div>
    <div class="carousel-item-dark">page 2</div>
    <div class="carousel-item-dark">page 3</div>
    <template #indicator="page">
      <DCarouselIndicator :count="page.count" v-model="page.pageIndex" style="justify-content: flex-start; padding-left: 20px;">
        <div
          :class="['carousel-indicator-item', page.pageIndex === item+1 ? 'active' : '']"
          v-for="item of indicatorArr"
          :key="item"
          @click="page.setPageIndex(item+1)"
        ></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const indicatorArr = Array.from(new Array(3).keys())

    return { indicatorArr }
  },
})
<\/script>
<style>
.carousel-item-dark {
  text-align: center;
  line-height: 200px;
  background: rgb(135, 164, 186);
  color: #fff;
}

.carousel-indicator-item {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: var(--devui-icon-fill, #d3d5d9);
  overflow: hidden;
  cursor: pointer;
}

.carousel-indicator-item.active {
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
`},{description:r(()=>[z]),highlight:r(()=>[L]),default:r(()=>[x(i)]),_:1})])}var O=N(P,[["render",T]]);export{M as __pageData,O as default};
