<template lang="html">
  <transition name="fadeIn">
    <div class="about-me-wrap">
      <div class="about-me">
      <h2 class="title">关于</h2>
      <div class="intro">
        <h3>前言</h3>
        <p>感谢<a href="https://www.vue-js.com/" target="_blank">Vue.Js中文社区</a>提供的API</p>
      </div>
      <div class="tech-stack">
        <h3>技术栈</h3>
        <p>Vue2.0,Vue-Router,Vuex,Axios,ES6,Sass</p>
      </div>
      <div class="source-code">
        <h3>源码</h3>
        <a href="#"></a>
      </div>
      <div class="author">
        <h3>作者</h3>
        <p>Ming</p>
      </div>
      <div class="email">
        <h3>邮箱</h3>
        <p>1165951849@qq.com</p>
      </div>
      <div class="shade" @click="changeAboutMeShow">

      </div>
    </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-me-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  color: #f9fafc;
  word-wrap: break-word;
   /* 对所有a标签加颜色样式 */
  a {
    color: #58b7ff;
  }
  .about-me {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    height: 60%;
    border-radius: 15px;
    background-color: rgba(7, 17, 27, .7);
    padding: 5%;
    text-align: center;
    font-size: 12px;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    overflow-x: hidden;
  h2 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e5e9f2;
    font-size: 24px;
  }
  div {
    margin: 0 20px;
  }
  h3 {
    line-height: 40px;
    font-size: 18px;
  }
}
/*
.shade {
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, .7);
 }
 */
}
</style>
