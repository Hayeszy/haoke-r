<template>
  <div class='Rent_root'>
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="房屋管理"
    >
      <van-icon
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      />
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 列表 -->
    <RentRootList></RentRootList>
    <!-- /列表 -->
  </div>
</template>
<script>
import RentRootList from './components/RentRootList.vue'
export default {
  name: 'Rent',
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
    RentRootList
  }
}
</script>
<style scoped lang='less'>
.Rent_root {
  .page-nav-bar {
    background-color: #21b97a;
    :deep(.van-nav-bar__title) {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
}
</style>
