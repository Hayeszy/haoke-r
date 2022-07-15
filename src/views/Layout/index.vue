<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <van-tabbar
      class="layout-tabbar"
      route
    >
      <van-tabbar-item
        replace
        to="/ "
        icon="wap-home-o"
      >首页</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/findroom"
        icon="search"
      >找房</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/info"
        icon="newspaper-o"
      >资讯</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/my"
        icon="contact"
      >我的</van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
