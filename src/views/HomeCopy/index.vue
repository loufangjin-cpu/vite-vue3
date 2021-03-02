<template>
  <h1 class="text">我是首页</h1>
  vuex:{{ $store.state.num }}
  <div>computed: {{state.wordCOunt}}</div>
  <button @click="add">++</button>
  {{ state.name }}
  {{ state.num }}
  <div class="login">
    <van-button type="primary" @click="goLogin">跳转登录页</van-button>
  </div>
  <van-cell is-link @click="showPopup">展示弹出层</van-cell>
  <van-popup v-model:show="state.show">内容</van-popup>
  <div
    class="list-box"
    v-for="item in state.list"
    :key='item.index'>
    {{item.name}}
  </div>
</template>
<script lang="ts" setup="props">
import { computed, reactive, ref, onMounted, onUnmounted, onUpdated, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore} from 'vuex'
import { article } from "@/api/index";

const router = useRouter()
const store = useStore()

const state = reactive({
  name: '霍庆祝',
  num: computed(() => {
    store.state.moduleA.num
  }),
  color: computed(() => {
    return store.state.moduleA.num > 20 ? (state.color = 'pink') : (state.color = '#ccc')
  }),
  show: false,
  wordCOunt: computed(() => `${state.name}-${state.num}`),
  list: computed(() => store.state.listInfo)
})
const goLogin = () => {
  router.push('/login')
}
const add = () => {
  console.log('store', store);
  store.commit('moduleA/addNum')
}
// const show = ref(false)
const showPopup = () => {
  state.show = true
  ajaxInfo()
}
// 监听
 watchEffect(() => {
    console.log('state num', state.num)
})
watch(() => state.num, val => {
  console.log('val', val);
})
onMounted(() => {
  console.log('onMounted')
  // ajaxInfo()
})
onUnmounted(() => {
  console.log('onUnmounted')
})
const ajaxInfo = () => {
  store.dispatch('fetchInfo', article)
}
</script>
<style scoped>
.text {
  color: v-bind('state.color');
  font-size: 20px;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
