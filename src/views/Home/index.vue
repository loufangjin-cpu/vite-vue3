<template>
  <h1 class="text">我是首页</h1>
  vuex:{{ $store.state.moduleA.num }}
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
  <hello-world msg='hhhhh' />
  <hello-world-1 @changeValue="changeValue" msg='daada' />
</template>
<script lang="ts" setup="props">
import { computed, reactive, ref, onMounted, onUnmounted, watchEffect, watch, provide } from 'vue'
import { useRouter } from 'vue-router'
import { useStore} from 'vuex'
import { article } from "@/api/index";
import HelloWorld from '../../components/HelloWorld.vue';
import HelloWorld1 from '../../components/HelloWorld1.vue';
const router = useRouter()
const store = useStore()
const state = reactive({
  name: '霍庆祝',
  num: computed(() => {
    store.state.moduleA.num
  }),
  color: computed(() => {
    return store.state.moduleA.num > 20 ? (state.color = 'red') : (state.color = '#ccc')
  }),
  show: false,
  wordCOunt: 0,
  list: computed(() => store.state.moduleA.listInfo)
})
provide('geolocation', state)
const goLogin = () => {
  // this.$router.push('/group/team?fromsrc=pk')
  router.push('/login/team?fromsrc=pk')
}
const add = () => {
  setTimeout(() => {
    state.wordCOunt += 10
  },100)
  store.commit('moduleA/addNum')
}
// const show = ref(false)
const showPopup = () => {
  state.show = true
  ajaxInfo()
}
const changeValue = (value) => {
  console.log('value', value);
  
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
  store.dispatch('moduleA/fetchInfo', article)
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
