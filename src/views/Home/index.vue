<template>
  <div class="home-box">
    <div>count: {{ count }}</div>
    <div v-for="item in listInfo" :key="item.id">
      {{ item.name }}
    </div>
    <div @click="handleVuex">操作vuex</div>
    <br />
    <div @click="handleSkip">点击跳转</div>
    <div @click="handleDialog">点击弹窗</div>
    <br />
    <div @click="handleTeleport">点击传送门</div>
    <br />
    <van-popup v-model:show="show">内容</van-popup>
    <teleport-home :isOpen="isOpen" @close-modal="closeModal" />
    <div>
      lottie-web
      <rain />
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import TeleportHome from '@/components/teleport-home.vue'
import Rain from '@/components/rain/index.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    TeleportHome,
    Rain
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      show: false,
      isOpen: true,
      count: computed(() => {
        return store.state.moduleB.num
      }),
      listInfo: computed(() => {
        return store.state.moduleB.listInfo
      })
    })
    const handleVuex = () => {
      store.dispatch('moduleB/fetchInfo')
    }
    const handleSkip = () => {
      router.push('/login?uid=0&sharetype=2')
    }
    const handleDialog = () => {
      state.show = true
    }
    const handleTeleport = () => {
      state.isOpen = true
      handleAddList()
    }
    const closeModal = () => {
      state.isOpen = false
      handleAddList()
    }
    const handleAddList = () => {
      window.document.body.classList.toggle('teleport-hidden')
    }
    return {
      ...toRefs(state),
      handleDialog,
      closeModal,
      handleTeleport,
      handleVuex,
      handleSkip
    }
  }
})
</script>
<style>
.teleport-hidden {
  overflow: hidden;
}
.home-box {
  background: #f4f4f4;
  min-height: 100vh;
}
</style>
