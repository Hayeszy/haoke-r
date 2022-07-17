<template>
  <div class='my-container'>
    <!-- 已未登录头部 -->
    <div
      v-if="isLogin"
      class="My_log_title"
    >
      <img
        class="bg-img"
        src="~@/assets/avatar.png"
        alt=""
      >
      <div class="My_log_info">
        <div class="My_myIcon">
          <img
            class="tourist-img"
            src="~@/assets/tourist.png"
            alt=""
          >
        </div>
        <div class="My_user">
          <div class="My_name">好客_845296</div>
          <div class="My_edit">
            <button
              class="sign_out_btn"
              v-if="isLogin"
              block
              @click="logout"
            >
              <span>退出</span>
            </button>
          </div>
        </div>
        <div class="My_arrow">
          编辑个人资料
          <span class="My_arrow_g">
            <van-icon name="play" />
          </span>
        </div>
      </div>
    </div>
    <!-- 已未登录头部 -->

    <!-- 未登录头部 -->
    <div
      v-else
      class="My_title not-login"
    >
      <img
        class="bg-img"
        src="~@/assets/bg.png"
        alt=""
      >
      <div class="My_info">
        <div class="My_myIcon">
          <img
            class="tourist-img"
            src="~@/assets/tourist.png"
            alt=""
          >
        </div>
        <div class="My_user">
          <div class="My_name">游客</div>
          <div
            class="My_edit"
            @click="goLogin"
          >
            <button class="loginbtn">
              <span>去登录</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /未登录头部 -->

    <!-- 主体 -->
    <!-- 宫格导航 -->
    <div class="My-grid">
      <van-grid
        class="grid-nav mb-9"
        :column-num="3"
        clickable
        :border="false"
      >
        <van-grid-item
          class="grid-item"
          icon="star-o"
          text="我的收藏"
        />
        <van-grid-item
          class="grid-item"
          icon="wap-home-o"
          text="我的出租"
        />
        <van-grid-item
          class="grid-item"
          icon="underway-o"
          text="看房记录"
        />
        <van-grid-item
          class="grid-item"
          icon="idcard"
          text="成为房主"
        />
        <van-grid-item
          class="grid-item"
          icon="contact"
          text="个人资料"
        />
        <van-grid-item
          class="grid-item"
          icon="service-o"
          text="联系我们"
        />
      </van-grid>
    </div>
    <!-- /宫格导航 -->

    <!-- 底部广告 -->
    <div class="My_ad">
      <img
        src="~@/assets/join.png"
        alt=""
      >
    </div>
    <!-- /底部广告 -->
    <!-- /主体 -->
  </div>
</template>
<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'My',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$dialog.confirm({
        title: '提示',
        message: '是否确定退出？',
        confirmButtonText: '退出',
        confirmButtonColor: '#47A8EE'
      })
        .then(() => {
          this.$store.commit('setUser', {})
        })
        .catch(() => { })
    },
    goLogin () {
      this.$router.push('/login')
    },
    async getUserInfo () {
      if (this.isLogin) {
        try {
          const {
            data: { data }
          } = await getUserInfo()

          this.userInfo = data
        } catch (error) {
          // this.$toast.fail('请重新登陆')
        }
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  mounted () {
  },
  watch: {
  },
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  },
  components: {
  }
}
</script>
<style scoped lang='less'>
.my-container {
  .My_log_title {
    height: 800px;
    .bg-img {
      width: 100%;
    }
    .My_log_info {
      background: #fff;
      width: 80%;
      height: 53%;
      top: 2.95rem;
      left: 50%;
      transform: translateY(-110%);
      box-shadow: 0 0 0.13333rem 0.04rem #ddd;
      margin: 0.66667rem auto 0;
      padding: 0 0.26667rem;
      text-align: center;
      font-size: 0.17333rem;
      .My_myIcon {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        border: 10.25px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
        .tourist-img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .My_user {
        .My_name {
          margin-top: -30px;
          font-size: 26px;
        }
        .My_edit {
          margin-top: 30px;
          .sign_out_btn {
            border-radius: 30px;
            color: #fff;
            padding: 4px 30px;
            background: #21b97a;
            font-size: 12px;
            border: none;
          }
        }
      }
      .My_arrow {
        color: #999;
        font-size: 12px;
        margin-top: 50px;
      }
    }
  }
  .My_title {
    height: 650px;
    .bg-img {
      width: 100%;
    }
    .My_info {
      background: #fff;
      width: 80%;
      height: 50%;
      top: 2.95rem;
      left: 50%;
      transform: translateY(-50%);
      box-shadow: 0 0 0.13333rem 0.04rem #ddd;
      margin: 0.66667rem auto 0;
      padding: 0 0.26667rem;
      text-align: center;
      font-size: 0.17333rem;
      .My_myIcon {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        border: 10.25px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
        .tourist-img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .My_user {
        .My_name {
          margin-top: -30px;
          font-size: 26px;
        }
        .My_edit {
          margin-top: 30px;
          .loginbtn {
            background-color: #21b97a;
            color: #fff;
            height: 58px;
            widows: 136px;
            padding: 0 30px;
            border-radius: 10px;
            border: none;
          }
        }
      }
    }
  }
  .My_ad {
    text-align: center;
    margin-top: 10px;
    img {
      width: 92%;
    }
  }
}
</style>
