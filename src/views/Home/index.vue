<template>
  <div @click="goLogin">goLogin</div>
  <div>3</div>
  <div>2</div>
</template>
<script lang="ts" setup="props">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>
<style scoped></style>
