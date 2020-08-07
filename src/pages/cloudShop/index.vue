<template>
  <div class="cloudShop">
    <div>
      <div class="num">{{ shopNumber }}</div>
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
                  size="small"
                  @click="delNumber">点击减少</van-button>
    </div>
    <div style="margin:20px;">
      <div id="demo"
           style="height:1300px"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Button } from "vant";
import "vant/lib/index.css";
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
export default {
  name: "cloudShop",
  components: {
    "van-button": Button,
  },
  data () {
    return {
      pdfh5: null,
    };
  },
  created () { },
  computed: {
    //将store.state中的属性映射到computed
    ...mapState({
      shopNumber: "number",
    }),
  },
  mounted () {
    //实例化
    this.pdfh5 = new Pdfh5("#demo", {
      pdfurl:
        "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
    });
    //监听完成事件
    this.pdfh5.on("complete", function (status, msg, time) {
      console.log(
        "状态：" +
        status +
        "，信息：" +
        msg +
        "，耗时：" +
        time +
        "毫秒，总页数：" +
        this.totalNum
      );
    });
  },
  methods: {
    ...mapActions(["del"]),
    delNumber () {
      this.$store.dispatch("del", this.shopNumber);
    },
  },
};
</script>
<style lang="scss" scoped>
.cloudShop {
  width: 100%;
  .num {
    color: red;
    font-size: 20px;
  }
}
</style>
