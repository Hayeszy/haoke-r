<template>
  <div class="home">
    <!-- 搜索框 -->
    <div class="search-box am-flexbox">
      <div class="search am-flexbox">
        <div class="location">
          <span class="name">深圳</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="form">
          <van-icon name="search" />
          <span class="text">请输入小区或地址</span>
        </div>
      </div>
      <van-icon
        class="icon-map"
        name="location-o"
      />
    </div>
    <!-- /搜索框 -->

    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#888"
    >
      <van-swipe-item><img
          src="~@/assets/1.png"
          alt=""
        ></van-swipe-item>
      <van-swipe-item><img
          src="~@/assets/2.png"
          alt=""
        ></van-swipe-item>
      <van-swipe-item><img
          src="~@/assets/3.png"
          alt=""
        ></van-swipe-item>
    </van-swipe>
    <!-- /轮播图 -->

    <!-- 分类导航 -->
    <div class="am-flexbox nav-flex">
      <div class="am-flexbox-item"><img
          alt=""
          src="~@/assets/To_rent.png"
        >
        <h2>整租</h2>
      </div>
      <div class="am-flexbox-item"><img
          alt=""
          src="~@/assets/Sharing.png"
        >
        <h2>合租</h2>
      </div>
      <div class="am-flexbox-item"><img
          alt=""
          src="~@/assets/Map_find_room.png"
        >
        <h2>地图找房</h2>
      </div>
      <div class="am-flexbox-item"><img
          alt=""
          src="~@/assets/Whole_rent.png"
        >
        <h2>去出租</h2>
      </div>
    </div>
    <!-- /分类导航 -->

    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group-title">租房小组
        <span class="more">更多</span>
      </h3>
      <div class="am-grid">
        <div class="am-flexbox am-flexbox-align-stretch">
          <div
            class="am-flexbox-item am-grid-item"
            style="width: 50%;"
          >
            <div class="am-grid-item-content">
              <div class="am-flexbox groupsFlex"><img
                  alt="图片"
                  class="left"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                >
                <div class="right">
                  <span>家住回龙观</span><br>
                  <span>归属的感觉</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="am-flexbox-item am-grid-item"
            style="width: 50%;"
          >
            <div class="am-grid-item-content">
              <div class="am-flexbox groupsFlex"><img
                  alt="图片"
                  class="left"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                >
                <div class="right">
                  <span>宜居四五环</span><br>
                  <span>大都市生活</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="am-flexbox am-flexbox-align-stretch">
          <div
            class="am-flexbox-item am-grid-item"
            style="width: 50%;"
          >
            <div class="am-grid-item-content">
              <div class="am-flexbox groupsFlex"><img
                  alt="图片"
                  class="left"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                >
                <div class="right">
                  <span>喧嚣三里屯</span><br>
                  <span>繁华的背后</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="am-flexbox-item am-grid-item"
            style="width: 50%;"
          >
            <div class="am-grid-item-content">
              <div class="am-flexbox groupsFlex"><img
                  alt="图片"
                  class="left"
                  src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                >
                <div class="right">
                  <span>比邻十号线</span><br>
                  <span>地铁心连心</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /租房小组 -->
  </div>
</template>
<script>
export default {
  name: 'Home',
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
.home {
  font-size: 28px;
  .am-flexbox {
    text-align: left;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  // 搜索框
  .search-box {
    position: absolute;
    top: 50px;
    width: 94%;
    padding: 0 20px;
    z-index: 2;
    .search {
      flex: 1 1;
      height: 49px;
      margin: 0 20px;
      padding: 10px 10px 10px 16px;
      border-radius: 6px;
      background-color: #fff;
      .van-icon-arrow-down {
        margin-left: 10px;
        font-size: 24px;
        color: #7f7f80;
      }
      .form {
        border-left: 1px solid #e5e5e5;
        margin-left: 12px;
        line-height: 16px;
        .van-icon-search {
          padding: 0 2px 0 12px;
          color: #9c9fa1;
          font-size: 35px;
        }
        .text {
          vertical-align: middle;
          padding-left: 8px;
          font-size: 26px;
          color: #9c9fa1;
        }
      }
    }
    .icon-map {
      font-size: 50px;
      color: #fff;
    }
  }

  // 轮播图
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    width: 100%;
    height: 424px;
    vertical-align: top;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  // 分类导航
  .nav-flex {
    .am-flexbox-item {
      text-align: center;
      padding: 20px 0;
      flex: 1 1;
      box-sizing: border-box;
      margin-left: 16px;
      min-width: 20px;
      img {
        width: 120px;
        height: 120px;
      }
      h2 {
        font-size: 28px;
        font-weight: 400;
      }
    }
    .am-flexbox-item:first-child {
      margin-left: 0;
    }
  }

  // 租房小组
  .group {
    background-color: #f6f5f6;
    overflow: hidden;
    padding: 0 20px;
    font-size: 28px;
    .group-title {
      position: relative;
      margin: 15px 0;
      .more {
        color: #787d82;
        position: absolute;
        right: 0;
        font-size: 30px;
        font-weight: 400;
      }
    }
    .am-grid {
      width: 710px;
      height: 260px;
      margin-bottom: 20px;
      .am-flexbox-align-stretch {
        margin-bottom: 20px;
        .am-grid-item {
          border-radius: 5px;
          .am-grid-item-content {
            background: #fff;
            width: 345px;
            height: 120px;
            .left {
              width: 100px;
              height: 100px;
              margin: 0 20px;
            }
          }
        }
      }
    }
  }
}
</style>
