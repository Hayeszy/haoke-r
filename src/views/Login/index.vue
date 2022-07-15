<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="账号登录"
    >
      <van-icon
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      />
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form
      ref="loginForm"
      @submit="onSubmit"
      class="form"
    >
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
      >
      </van-field>
      <van-field
        v-model="password"
        name="password"
        placeholder="请输入密码"
        type="password"
      >
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          block
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
    <div class="register">
      <a href="#">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    async onSubmit () {
      const nameRules = /^[A-Za-z0-9]{5,8}$/
      const pwdRules = /^[A-Za-z0-9]{5,12}$/
      if (this.username === '' || this.password === '') {
        return this.$toast('用户名和密码不能为空')
      } else if (!this.username.match(nameRules)) {
        return this.$toast('用户名格式5-8位的字母和数字')
      } else if (!this.password.match(pwdRules)) {
        return this.$toast('密码格式5-12位的字母和数字')
      } else {
        this.$toast('你的账号或者密码异常')
      }
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        this.$store.commit('setUser', res.data.body.token)
        console.log(res.data.body)
        this.$toast.success({
          message: '登录成功',
          icon: 'passed'
        })
        this.$router.push('./my')
      } catch (error) {
        console.log(error)
        // const status = error.response.status
        // if (data.body === 400) {
        //   this.$toast('你的账号或者密码异常')
        // } else {
        //   this.$toast('登录失败，请稍后重试')
        // }
        // console.log(error)
        // this.$toast('你的账号或者密码异常')
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .page-nav-bar {
    background-color: #21b97a;
    :deep(.van-nav-bar__title) {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
  .form {
    :deep(.van-field__control) {
      height: 120px;
      font-size: 34px;
    }
    .login-btn-wrap {
      padding: 54px 33px;
      .login-btn {
        width: 680px;
        height: 100px;
        background-color: #1cb676;
        border: none;
        :deep(.van-button__text) {
          font-size: 36px;
        }
      }
    }
  }
  .register {
    text-align: center;
    font-size: 28px;
    a {
      color: #333;
    }
  }
}
</style>
