<template>
  <div>
    <div @click="handleDialog">点击弹窗</div>
    <div @click="handleTeleport">点击传送门</div>
    <van-popup v-model:show="show">内容</van-popup>
    <teleport-home :isOpen="isOpen" @close-modal="closeModal" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import TeleportHome from '../../components/teleport-home.vue'

export default defineComponent({
  components: {
    TeleportHome
  },
  setup() {
    const state = reactive({
      show: false,
      isOpen: true
    })
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
      handleTeleport
    }
  }
})
</script>
<style>
.teleport-hidden {
  overflow: hidden;
}
</style>
