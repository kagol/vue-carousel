# QQ音乐

:::demo

```vue
<template>
  <Carousel>
    <!-- 以下 html 片段拷贝自QQ音乐官网 -->
    <div class="mod_playlist">
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/7759293603"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/ibO7y1R5gAqKsKKDaUxchyzkEBvN9tMHxMGhxaDsveRImUCyTiboVWrQ/300?n=1" alt="旋律说唱:一起感受粉色恋爱泡泡" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/7759293603">旋律说唱:一起感受粉色恋爱泡泡</a></span></h4><div class="playlist__other">播放量：297.2万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/8249092627"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/BibN36PYLliczibicnsXMuTzLUZaErDuDop6moxSnrfAuWnAKrqDUnibMlQ/300?n=1" alt="上班族必备:枯燥无味听点歌解闷" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/8249092627">上班族必备:枯燥无味听点歌解闷</a></span></h4><div class="playlist__other">播放量：685.5万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/8175037786"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/W43yJLl09jro4gLJXBxMR1PKp3oH0yfqaWZsCjgJEFCxCAMhx5XdGA/300?n=1" alt="追星名场面 | 一人一首偶像曲" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/8175037786">追星名场面 | 一人一首偶像曲</a></span></h4><div class="playlist__other">播放量：35.2万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/7845656497"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/tzTIee65HohmgERhaae4MdXH1NnSAicACibx3A81TpOj14Qheibiajcic0O13hk2qnCd3/300?n=1" alt="『甜度100%』我瞒着所有人在想你" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/7845656497">甜度100%｜我瞒着所有人在想你</a></span></h4><div class="playlist__other">播放量：136.3万</div></div>
      </div>
    </div>
    <div class="mod_playlist">
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/7683199209"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/Eoo44uQyI5ubcwbQbs6E0V8261fic2HA7jsGO6p5oAcsUJ5KxOdU84w/300?n=1" alt="伤感片段丨不过是南柯一梦" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/7683199209">伤感片段丨不过是南柯一梦</a></span></h4><div class="playlist__other">播放量：4921.6万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/1169459292"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/Ej7F4g676QjYgica7iamaB8vD7Dp1Bgiaicia2V0jNunmKNT5uSFLaZ6r2w/300?n=1" alt="「90后」承载着青春回忆的歌谣" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/1169459292">「90后」承载着青春回忆的歌谣</a></span></h4><div class="playlist__other">播放量：9941.1万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/4276472710"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/ic88Gx52icY2Txiaiao5n2tlPibPEGUKydonCia8mKhpetTbZnjHhBtMBkbA/300?n=1" alt="欧美节奏控 | 触碰你的听觉神经" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/4276472710">欧美节奏控 | 触碰你的听觉神经</a></span></h4><div class="playlist__other">播放量：236.9万</div></div>
      </div>
      <div class="playlist__item">
        <div class="playlist__item_box"><div class="playlist__cover mod_cover"><a href="/n/ryqq/playlist/8037914794"><img class="playlist__pic" loading="lazy" src="//qpic.y.qq.com/music_cover/t3ZMFYNfykL5iaia5MjecOXibibjic2UzATaTkHnCvb5zQNQgicf1w4j0yeQ/300?n=1" alt="粉墨登场~坠入人间的星屑少女" data-qar-def="//y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div><h4 class="playlist__title"><span class="playlist__title_txt"><a href="/n/ryqq/playlist/8037914794">粉墨登场~坠入人间的星屑少女</a></span></h4><div class="playlist__other">播放量：762.9万</div></div>
      </div>
    </div>
  </Carousel>
</template>

<style>
/* 以下 css 样式片段拷贝自QQ音乐官网 */
.playlist__item {
    position: relative;
    padding-bottom: 0;
    display: inline-block;
    width: 224px;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
}

a:hover {
    color: #31c27c;
}
a, a:hover {
    text-decoration: none;
}
a {
    color: #000;
    cursor: pointer;
}

.playlist__item_box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.playlist__item_box {
    position: relative;
    margin-right: 20px;
}

.playlist__cover {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: 100%;
    margin-bottom: 15px;
}

.playlist__pic {
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.playlist__pic {
    transform: scale(1) translateZ(0);
    transition: transform .75s;
}

.playlist__pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-transform: scale(1) translateZ(0);
    -webkit-transition: -webkit-transform .75s;
}

.playlist__cover:hover .playlist__pic {
    transform: scale(1.07) translateZ(0);
    transition: transform .75s cubic-bezier(0,1,.75,1);
}

.playlist__title_txt {
    white-space: normal;
}

.playlist__title {
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 14px;
}

.playlist__title_txt {
    float: left;
    max-width: 100%;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 22px;
    max-height: 44px;
}

.playlist__author, .playlist__author a, .playlist__other {
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 22px;
    font-size: 14px;
}

.mod_playlist {
  margin-left: 110px;
}
</style>
```

:::
