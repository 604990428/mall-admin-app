<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav />
      <div class="main-app-content">列表内容</div>
    </div>
  </div>
</template>

<script>
import LeftMenu from './compoments/menu.vue';
import SliderNav from './compoments/sliderNav.vue';

export default {
  data() {
    return {
      // collapsed: false,
    };
  },
  components: {
    LeftMenu,
    SliderNav,
  },
  // methods: {
  //   toggleCollapsed() {
  //     this.collapsed = !this.collapsed;
  //   },
  // },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
