<template>
  <div class='MyFavorites'>
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="收藏列表"
    >
      <van-icon
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      />
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 列表 -->
    <FavoritesList></FavoritesList>
    <!-- /列表 -->
  </div>
</template>
<script>
import FavoritesList from './components/FavoritesList.vue'
export default {
  name: 'MyFavorites',
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
    FavoritesList
  }
}
</script>
<style scoped lang='less'>
.MyFavorites {
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
