<template lang="html">
  <div class="nav-bar">
  <div class="nav-bar-wrap">
    <a href="/"><img src="./cnodejs_light.svg" alt="vue" class="logo" width="120" height="28"></a>
    <div class="info" @click="changeAboutMeShow">
      <i class="iconfont icon-about"></i>
    </div>
    <div class="notification" @click="toNotification">
      <i class="iconfont icon-notification"></i>
    </div>
    <div class="user" @click="showUserDatail">
      <i class="iconfont icon-user" v-show="isLogin"></i>
      <img class="user-avatar" src="" alt="" v-show="isLogin">
    </div>
    <transition name="pulldown">
      <ul class="user-menu" v-show="isUserMenuShow">
          <li><i class="iconfont icon-home"></i><span @click="toRouter(`/user/${userData.loginname}`)">我的主页</span></li>
          <li><i class="iconfont icon-edit"></i><span @click="toRouter({path: 'publish', query: {update: false, topic_id: ''}})">发布文章</span></li>
          <li><i class="iconfont icon-collected"></i><span @click="toRouter(`/collect/${userData.loginname}`)">我的收藏</span></li>
          <li><i class="iconfont icon-exit"></i><span @click="loginOut">退出登录</span></li>
      </ul>
    </transition>
  </div>
  <about-me v-show="isAboutMeShow"></about-me>
</div>
</template>

<script>
import AboutMe from '../AboutMe/AboutMe'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isUserMenuShow: false
    }
  },
  activated () {
    if (this.isLogin) {
      this.axios.get('https://www.vue-js.com/api/v1/message/count?accesstoken=${this.userData.accesstoken}')
      .then(res => {
        this.$store.dispatch('get_message_count',res.data.data)
      },() => {
        this.$store.dispatch('connect_fail')
      })
    }
  },
  comeputed: {
    ...mapGetters([
      'isAboutMeShow',
      'isLogin',
      'isLoginShow',
      'userData',
      'messageCount'
    ])
  },
  methods: {
    changeAboutMeShow () {
      this.$store.dispatch('changeAboutMeShow')
    },
    showUserDatail (){
      if (!this.isLogin) {
        this.$router.push({name: 'login'})
      }else {
        this.isUserMenuShow = !this.isUserMenuShow
      }
    },
    toRouter (route) {
      this.isUserMenuShow = !this.isUserMenuShow
      this.$router.push(route)
    },
    toNotification () {
      if (this.isLogin) {
        this.$router.push('./notification')
      }else {
        this.$store.dispatch('add_warn',{content: '请登录后使用'})
      }
    },
    loginOut () {
      this.$store.dispatch('add_success',{
        content: '退出成功'
      })
      this.$store.dispatch('loginOut')
      this.isUserMenuShow =! this.isUserMenuShow
    }
  },
  components: {
    AboutMe
  }
}

</script>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background:  rgba(7,17,27,.8);
  -webkit-backdrop-filter: blur(8px);
  padding: 10px;
  z-index: 100;
  @media screen and (max-width: 1200px) {
    .nav-bar-wrap {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1200px) {
    .nav-bar-wrap {
      width: 1200px;
      margin: 0 auto;
    }
  }
  .nav-bar-wrap {
    .info, .notification, .user {
    position: absolute;
    top: 0;
    color: #fff;
    height: 50px;
    padding: 12px;
    .icon-about, .icon-notication, .icon-user {
      font-size: 24px;
      &:active{
        color: #58b7ff;
      }
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    &.info {
      right: 100%;
    }
    &notification {
      right: 50%;
      .count {
        position: absolute;
        top: 8px;
      }
    }
    }
  }
}
</style>
