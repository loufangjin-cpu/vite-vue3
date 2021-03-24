import { createStore } from "vuex";
const moduleA = {
  namespaced: true,
  state: () => ({
    listData:{1:10},
    num:10,
    listInfo: []
  }),
  mutations: {
    setData(state,value){
        state.listInfo=value
    },
    addNum(state){
      console.log('state, addNum', state);
      state.num=state.num+10
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
    async fetchInfo(params, ajax) {
      // console.log('params', params, ajax);
      const data = await ajax()
      params.commit('setData', data)
    }
  },
  modules: {}
}
const moduleB = {
  namespaced: true,
  state: () => ({
    listData:{1:10},
    num:10,
    listInfo: []
  }),
  mutations: {
    setData(state,value){
        state.listInfo=value
    },
    addNum(state){
      console.log('state', state);
      state.num=state.num+10
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
    async fetchInfo(params, ajax) {
      // console.log('params', params, ajax);
      const data = await ajax()
      console.log('data', data)
      params.commit('setData', data)
    }
  },
  modules: {}
}
const store = createStore({
  modules: {
    moduleA,
    moduleB
  }
})
export default store