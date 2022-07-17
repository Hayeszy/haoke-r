<template>
  <div class="Rent_Root_List">
    <van-list
      @load="onLoad"
    >
      <van-cell>
        <div
          class="HouseItem_house"
          v-for="(item, index) in RentRootList"
          :key="index"
          :title="item.title"
        >
          <div class="HouseItem_imgWrap"><img
              class="HouseItem_img"
              :src="`http://liufusong.top:8080${item.houseImg}`"
              alt=""
            ></div>
          <div class="HouseItem_content">
            <h3 class="HouseItem_title">{{item.price}}</h3>
            <div class="HouseItem_desc">{{item.desc}}</div>
            <div>
              <span
                class="HouseItem_tag HouseItem_tag1"
                v-for="(arr, arrindex) in item.tags"
                :key="arrindex"
              >{{arr}}
              </span>
            </div>
            <div class="HouseItem_price">
              <span class="HouseItem_priceNum">{{item.price}}</span> 元/月
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import { getRent } from '@/api/rent'
export default {
  name: 'RentRootList',
  props: {
  },
  data () {
    return {
      token: '',
      getRent,
      RentRootList: []
    }
  },
  created () {
  },
  methods: {
    async onLoad () {
      this.token = this.$store.state.user.token
      try {
        const res = await this.getRent(this.token)
        console.log(res)
        this.RentRootList = res.data.body
      } catch (error) {
        this.$toast('请重新获取房屋管理列表')
      }
    }
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
.HouseItem_house {
  height: 240px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 36px;
  border-bottom: 1px solid #e5e5e5;
  .HouseItem_imgWrap {
    float: left;
    width: 212px;
    height: 170px;
    .HouseItem_img {
      width: 100%;
      height: 100%;
    }
  }
  .HouseItem_content {
    overflow: hidden;
    line-height: 44px;
    padding-left: 24px;
    .HouseItem_desc,
    .HouseItem_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .HouseItem_title {
      margin: 0;
      font-size: 30px;
      color: #394043;
    }
    .HouseItem_desc {
      font-size: 24px;
      color: #afb2b3;
    }
    .HouseItem_tag {
      display: inline-block;
      font-size: 24px;
      border-radius: 6px;
      padding: 8px 10px;
      margin-right: 10px;
      line-height: 24px;
    }
    .HouseItem_tag1 {
      color: #39becd;
      background: #e1f5f8;
    }
    .HouseItem_price {
      font-weight: 700;
      color: #fa5741;
    }
  }
}
</style>
