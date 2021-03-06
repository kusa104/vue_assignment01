import CalcView from '@/views/CalcView.vue'
import InfoView from '@/views/InfoView.vue'
import AxiosView from '@/views/AxiosView.vue'

export default {
  namespaced : true,
  state : {
    title : '',
    basePath : '',
    list : {
      home : {
        path: `/`,
        name: `Calculator`,
        meta: {
          title: `Calculator`,
          icon: `mdi-home-city`
        },
        component : CalcView
      },
      info : {
        path: `/info`,
        name: `Infomation`,
        meta: {
          title: `Info`,
          icon: `mdi-forum`
        },
        component : InfoView
      },
      axios : {
        path: `/axios`,
        name: `axios`,
        meta: {
          title: `axios`,
          icon: `mdi-forum`
        },
        component : AxiosView
      }
    },
    visible : {
      header : true,
      navi : true,
      footer : true
    }
  },
  getters : {
    title(state){
      return state.title;
    },
    basePath(state){
      return state.basePath;
    },
    menuList(state){
      return state.list;
    },
    visible(state){
      return state.visible;
    }
  },
  mutations : {
    setTitle(state, title){
      state.title = title;
    },
    setVisible(state, {key, value}){
      state[key] = value;
    }
  },
  actions : {
    setTitle({commit}, title){
      commit('setTitle', title);
    },
    setVisible({commit}, payload){
      commit('setVisible', payload); 
    }
  }
}