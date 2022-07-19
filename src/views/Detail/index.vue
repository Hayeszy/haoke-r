<template>
  <div class=''>
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
    >
      <van-icon
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      />
    </van-nav-bar>
    <!-- /导航栏 -->
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  computed: {
  },
  components: {
  }
}
</script>
<style scoped lang='less'>
</style>
