var b=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))F.call(t,s)&&v(e,s,t[s]);if(y)for(var s of y(t))w.call(t,s)&&v(e,s,t[s]);return e};import{_ as V,r as f,c as T,a as E,w as k,b as a,d as n,o as N,V as x}from"./app.c71ed8f7.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:e,createElementVNode:t,resolveComponent:s,withCtx:i,createVNode:r,openBlock:d,createElementBlock:u}=x,l=t("br",null,null,-1),h=t("br",null,null,-1),A=t("div",{class:"carousel-item"},"page 1",-1),C=t("div",{class:"carousel-item"},"page 2",-1),B=t("div",{class:"carousel-item"},"page 3",-1);function D(o,c){const p=s("DCarousel");return d(),u("div",null,[t("button",{onClick:c[0]||(c[0]=(...m)=>o.play&&o.play(...m))},e(o.text),1),l,h,r(p,{autoplay:o.autoplay,interval:1e3},{default:i(()=>[A,C,B]),_:1},8,["autoplay"])])}const{ref:g}=x;return _({render:D},{setup(){const o="Play",c=g(!1),p=g(o);return{autoplay:c,text:p,play:()=>{c.value=!c.value,p.value=c.value?"Stop":o}}}})}()}},H='{"title":"\u81EA\u52A8\u64AD\u653E","description":"","frontmatter":{},"headers":[],"relativePath":"features/autoplay/index.md","lastUpdated":1643298823333}',S=a("h1",{id:"\u81EA\u52A8\u64AD\u653E",tabindex:"-1"},[n("\u81EA\u52A8\u64AD\u653E "),a("a",{class:"header-anchor",href:"#\u81EA\u52A8\u64AD\u653E","aria-hidden":"true"},"#")],-1),P=a("div",null,[a("code",null,"autoplay"),n("\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u9700\u8981\u81EA\u52A8\u64AD\u653E\uFF0C\u9ED8\u8BA4\u503C\u4E3A"),a("code",null,"true"),n("\uFF0C\u9ED8\u8BA4\u6BCF\u96943000\u6BEB\u79D2\u5207\u6362\u4E00\u6B21\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E"),a("code",null,"interval"),n("\u81EA\u5B9A\u4E49\u81EA\u52A8\u64AD\u653E\u7684\u95F4\u9694\u65F6\u95F4\u3002")],-1),$=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("button")]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("play"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("{{text}}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("br")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("br")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("DCarousel")]),n(),a("span",{class:"token attr-name"},":autoplay"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("autoplay"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":interval"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("1000"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 1"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 2"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("carousel-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("page 3"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("DCarousel")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" defaultText "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},"'Play'"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" autoplay "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" text "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),n("defaultText"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"play"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      autoplay`),a("span",{class:"token punctuation"},"."),n("value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token operator"},"!"),n("autoplay"),a("span",{class:"token punctuation"},"."),n(`value
      text`),a("span",{class:"token punctuation"},"."),n("value "),a("span",{class:"token operator"},"="),n(" autoplay"),a("span",{class:"token punctuation"},"."),n("value "),a("span",{class:"token operator"},"?"),n(),a("span",{class:"token string"},"'Stop'"),n(),a("span",{class:"token operator"},":"),n(` defaultText
    `),a("span",{class:"token punctuation"},"}"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      autoplay`),a("span",{class:"token punctuation"},","),n(" text"),a("span",{class:"token punctuation"},","),n(` play
    `),a("span",{class:"token punctuation"},"}"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[n(`
`),a("span",{class:"token selector"},".carousel-item"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"text-align"),a("span",{class:"token punctuation"},":"),n(" center"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),n(" 200px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"background"),a("span",{class:"token punctuation"},":"),n(" #f3f6f8"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1);function j(e,t,s,i,r,d){const u=f("render-demo-0"),l=f("demo");return N(),T("div",null,[S,E(l,{sourceCode:`<template>
  <button @click="play">{{text}}</button>
  <br><br>
  <DCarousel :autoplay="autoplay" :interval="1000">
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
  </DCarousel>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const defaultText = 'Play'
    const autoplay = ref(false)
    const text = ref(defaultText)

    const play = () => {
      autoplay.value = !autoplay.value
      text.value = autoplay.value ? 'Stop' : defaultText
    }

    return {
      autoplay, text, play
    }
  }
}
<\/script>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
`},{description:k(()=>[P]),highlight:k(()=>[$]),default:k(()=>[E(u)]),_:1})])}var I=V(q,[["render",j]]);export{H as __pageData,I as default};
