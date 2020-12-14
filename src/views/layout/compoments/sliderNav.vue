<template>
     <div class="main-app-haed">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrunb">
          <a-breadcrumb>
            <a-breadcrumb-item
              ><a href="">首页</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">统计</a></a-breadcrumb-item
            >
          </a-breadcrumb>
        </div>
        <ul class="user-info">
            <li>欢迎
              <a-icon type="down" />
            </li>
            <li>退出</li>
        </ul>
      </div>
</template>

<script>
export default {
//   props: ['collapsed'],
  data() {
    return {
    //   collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('toggleCollapsed');
    },
  },
};
</script>
