import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单栏的闭合状态
    collapsed: false,
  },
  mutations: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    toggleCollapsed(context) {
      context.commit('toggleCollapsed');
    },
  },
  modules: {
  },
});
