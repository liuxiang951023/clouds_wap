<template>
  <div class="enter">
    <shop-header></shop-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <shop-footer></shop-footer>
    <!-- 点击音效 -->
    <audio src="" id="eventAudio"></audio>
  </div>
</template>
<script>
import shopHeader from "@/components/shopHeader";
import shopFooter from "@/components/shopFooter";
export default {
  name: "enter",
  components: {
    "shop-header": shopHeader,
    "shop-footer": shopFooter,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.enter {
  width: 100%;
  .container {
    width: 100%;
    height: calc(100vh - 80px);
    margin: 40px auto;
    overflow-y: scroll;
  }
}
</style>
