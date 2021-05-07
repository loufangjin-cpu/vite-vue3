<template>
  <h1>child1</h1>
  <div>userLocation: {{userLocation}}</div>
  <div>userGeolocation: {{userGeolocation}}</div>
  <div @click="updateUserLocation">更改： updateLocation</div>
</template>
<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const userLocation = inject('location')
    const userGeolocation = inject('geolocation')

    // 组件内部更新注入的数据
    const updateUserLocation = inject('updateLocation')
    return {
      userLocation,
      userGeolocation,
      updateUserLocation
    }
  },
})
</script>
