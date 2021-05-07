<template>
  <div>provide???</div>
  <!-- <div @click="updateLocation">更改： updateLocation</div> -->
  <Context />
  <Context2 />
</template>
<script>
import { defineComponent, provide, ref, reactive, onMounted } from 'vue'
import Context from '@/components/context.vue'
import Context2 from '@/components/context2.vue'
export default defineComponent({
  components: {
    Context,
    Context2,
  },
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    onMounted(() => {
      setTimeout(() => {
        geolocation.longitude = 100
      }, 1000)
    })
    const updateLocation = () => {
      console.log('更改')
      setTimeout(() => {
        location.value = 'South Pole'
        geolocation.longitude = 110
      }, 1000)
    }

    provide('location', location)
    provide('geolocation', geolocation)
    provide('updateLocation', updateLocation)
  },
})
</script>
