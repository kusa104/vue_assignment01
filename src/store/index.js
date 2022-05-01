import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    output: '',
    return: false,
  },
  getters: {
    getStr(state){
      return state.output;
    },
    getReturn(state){
      return state.return;
    },
  },
  mutations: {
    input(state, str){
			state.output += String(str);
    },
    clear(state){
      state.output = '';
      state.return = false;
    },
    execution(state){
      state.output = eval(state.output);
      state.return = true;
    },
  },
  actions: {
    input({commit}, str){
      if(this.state.return) commit('clear');
			commit('input', str);
    },
    clear({commit}){
			commit('clear');
    },
    execution({commit}){
			commit('execution');
    },
  },
  modules: {
    page
  }
})
