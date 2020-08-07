<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  background: #ffffff;
  margin: 0 auto;
  overflow: hidden;
}
</style>
