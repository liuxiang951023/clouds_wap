<template>
  <div class="home">
    <van-search
      v-model="value"
      shape="round"
      background="#ff6666"
      placeholder="请输入搜索关键词"
    />
    <!--轮播图-->
    <swiper :options="swiperOption" ref="mySwiper" class="mySwiper">
      <swiper-slide
        v-for="(item, index) in swiperImages"
        :key="index"
        class="swiper-slide"
      >
        <img :src="$imgUrlBase + item.adImage" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 点击添加 -->
    <div class="sum_content">
      <div class="num">{{ shopNumber }}</div>
      <van-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="small"
        @click="addNumber"
        >点击添加</van-button
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { adList } from "@/api/index";
import { Search, Button } from "vant";
import "vant/lib/index.css";
export default {
  name: "home",
  components: {
    "van-search": Search,
    "van-button": Button,
  },
  data() {
    return {
      value: "",
      swiperImages: [],
      // swiper配置参数
      swiperOption: {
        loop: false,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
        },
        centerInsufficientSlides: true,
        observer: true,
        observeParents: true,
      },
    };
  },
  created() {
    this.getList();
  },
  computed: {
    //将store.state中的属性映射到computed
    ...mapState({
      shopNumber: "number",
    }),
  },
  methods: {
    ...mapActions(["add"]),
    // 获取轮播图片
    getList() {
      adList({
        pageSize: 100,
        pageNo: 1,
      }).then((res) => {
        if (res.data.code === "SUCCESS") {
          res.data.rows.forEach((item, index) => {
            if (item.position == "试灯馆频道-大牌汇集#005") {
              this.swiperImages.push(item);
            }
          });
        }
      });
    },
    // 计数器
    addNumber() {
      this.$store.dispatch("add", this.shopNumber);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .mySwiper {
    width: 100%;
    height: 140px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      width: 100%;
      height: 20px;
      color: #00ff;
    }
  }
  .sum_content {
    margin-top: 40px;
    .num {
      color: red;
      font-size: 20px;
    }
    .stepBox {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
