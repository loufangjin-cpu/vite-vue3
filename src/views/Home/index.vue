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
</template>
<script lang="ts" setup="props">
import { computed, reactive, ref, onMounted, onUnmounted, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
// import { article } from "@/api/index";

const router = useRouter()
const store = useStore()
const state = reactive({
  name: '霍庆祝',
  num: 10,
  color: '#ccc',
  show: false,
  wordCOunt: computed(() => `${state.name}-${state.num}`)
})
const goLogin = () => {
  router.push('/login')
}
const add = () => {
  store.commit('addNum')
  state.num = store.state.num
  state.num > 20 ? (state.color = 'pink') : (state.color = '#ccc')
}
// const show = ref(false)
const showPopup = () => {
  state.show = true
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
})
onUnmounted(() => {
  console.log('onUnmounted')
})
// article().then((res: any) => {
//   console.log(res);
// });


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
