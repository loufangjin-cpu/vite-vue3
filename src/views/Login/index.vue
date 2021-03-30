<template>
  <h1>登录页</h1>
  vuex:{{ $store.state.moduleA.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
import qs from 'query-string'

const router = useRouter();
const params = qs.parse(window.location.search)
console.log('params', params)
const goLogin = () => {
  router.push("/");
};
</script>