<template lang="html">
  <div class="content-wrap">
    <!--
    <nav-bar></nav-bar>
  //-->
    <div class="content-tab-wrap">
      <div class="content-tab">
        <router-link to="/all" :class="{'selected': selectedTab === 'all'}" class="tab">全部</router-link>
        <router-link to="/good" :class="{'selected': selectedTab === 'good'}" class="tab">精华</router-link>
        <router-link to="/share" :class="{'selected': selectedTab === 'share'}" class="tab">分享</router-link>
        <router-link to="/ask" :class="{'selected': selectedTab === 'ask'}" class="tab">问答</router-link>
        <router-link to="/job" :class="{'selected': selectedTab === 'job'}" class="tab">招聘</router-link>
        <router-link to="/weex" :class="{'selected': selectedTab === 'wexx'}" class="tab">wexx</router-link>
      </div>
    </div>
    <div class="content">
      <ul class="content-list">
        <li v-for="(item,idx) in articleList" class="article">
          <!--
          <article-card :article="item"><article-card>
          //-->
        </li>
      </ul>
      <div class="back-to-top" v-show="isTopShow" @click="backToTop">
        <i class="iconfont"></i>
        <p class="text">回到顶部</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.content-wrap {
  background-color: #eff2f7;
  width: 100%;
  padding-top: 86px;
  .content-tab-wrap {
    width: 100%;
    height: 36px;
    line-height: 36px;
    position: fixed;
    left: 0;
    top: 50px;
    z-index: 99;
    background: rgba(7, 17, 27, .8);
    .content-tab {
      padding-left: 10px;
      .tab {
        color: #fff;
        text-decoration: none;
        margin-right: 4px;
        font-size: 14px;
        padding: 2px 5px;
        text-align: center;
        &.selected {
         background-color: #ffffff;
         color: #1F2D3D;
         border-radius: 5px;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      .content-tab {
        width: 100%;
        margin: 0 auto;
      }
    }
    @media screen and (min-width: 1200px) {
      .content-tab {
        width: 1200px;
        margin: 0 auto;
        padding-left: 0;
      }
    }
  }
  .content {
    width: 100%;
    .back-to-top {
      position: fixed;
      right: 10px;
      bottom: 20px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      background-color: rgba(7, 17, 27, .5);
      padding: 5px;
      border-radius: 10px;
      .iconfont {
        font-size: 36px;
      }
    }
  }
}
</style>
