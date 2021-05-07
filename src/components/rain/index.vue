<template>
  <div class="rain">
    <div
      v-for="(item, index) in 8"
      :key="index"
      :ref="el => domList2[index] = el"
      class="red-package"
      :style="redPkgStyle[index]"
      @touchstart="handleClick(index)"
      @touchmove.prevent
      @transitionend="transitionEnd(index)"
    />
    <div ref='single'></div>
  </div>
</template>
<script>
import { computed, defineComponent, onMounted,onBeforeUpdate,onUpdated, reactive, ref, toRefs, nextTick } from 'vue'
import type1 from './1/data.json'
import type2 from './2/data.json'
import type3 from './3/data.json'
import type4 from './4/data.json'
import type5 from './5/data.json'
import type6 from './6/data.json'
import lottie from 'lottie-web'
const tops = [-2, -10, -3, -13, -20, -15, -25, -35]

export default defineComponent({
  setup() {
    const state = reactive({
      num: 8,
      types: [
        type1,
        type2,
        type3,
        type4,
        type5
      ],
      speed:0.2,
      rem: 20,
      configs: [],
      highestItem: null,
      timer: null,
      lottieObjs:[]
    })
    const domList2 = ref([])
    const single = ref()
    const redPkgStyle = computed(() => {
      return state.configs.map(item => {
        return {
          transform: `translate3d(${item.left}rem, ${item.top}rem, 0)`,
          transition: item.transition,
          width: `3rem`,
          height: 'auto'
        }
      })
    })
    onMounted(() => {
      try {
        state.rem = parseInt(document.documentElement.style.fontSize, 10)
      } catch {
        state.rem = 20
      }
      state.contentHeight = (window.innerHeight - 40) / state.rem
      initConfig()
    })
    onBeforeUpdate(() => {
    })
    onUpdated(() => {
    })
    const inittype6 = () => {
      // console.log('single', single.value)
      // state.lottieObjs.push(
      //   lottie.loadAnimation({
      //     container: single.value,
      //     renderer: 'svg',
      //     loop: true,
      //     autoplay: true,
      //     animationData: type6
      //   })
      // )
    }
    const restartItem = (index) => {
      const item = state.configs[index]
      const time = parseInt(((window.innerHeight) / state.rem - item.top) / item.speed) * 33
      item['transition'] = `transform linear ${time}ms`
      setTimeout(() => {
        item.top = window.innerHeight / state.rem
      }, 100)
    }
    const start = () => {
      console.log('configs', state.configs)
      state.configs.forEach((item, index) => {
        nextTick(() => {
          requestFrame(restartItem(index))
        })
      })
    }
    const initConfig = () => {
      state.configs = Array.from({ length: state.num }).map((_, i) => generate(i, tops[i]))
      state.lottieObjs = []
      state.configs.forEach((item, i) => {
        let ele = domList2.value[i]
        if (ele) {
          state.lottieObjs.push(
            lottie.loadAnimation({
              container: ele,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: state.types[item.type]
            })
          )
        }
      })
      start()
    }
    const generate  = (index, top) => {
      let top1 = tops[index]
      return {
        angle: parseInt(Math.random() * 90 - 45),
        top: top || top1,
        left: (index % 3) === 0 ? 1 : ((index % 3 === 1) ? 5 : 13),
        width: ((index % 3) === 1) ? 8 : 6,
        speed: state.speed,
        transition: 'none',
        type: parseInt(Math.random() * 4)
      }
    }
    const handleClick = () => {
      console.log('1')
    }
    const transitionEnd = (index) => {
      updateItem(index)
    }
    const updateSpecConfig = (index, isClick) => {
      let nextTopMap = {
        0: 3,
        3: 6,
        1: 4,
        4: 7,
        2: 5,
        5: 2,
        6: 3,
        7: 3
      }
      let item = state.configs[nextTopMap[index]]
      if (isClick && item) {
        let newtop
        if (item.top > 0) {
          newtop = (index % 3 === 1 ? -15 : -8)
        } else {
          newtop = item.top + (index % 3 === 1 ? -15 : -8)
        }
        state.configs.splice(index, 1, generate(index, newtop))
      } else {
        state.configs.splice(index, 1, generate(index, (index % 3 === 1 ? -15 : -8)))
      }
    }
    const updateItem = (index, isClick = false) => {
      state.configs[index]['transition'] = 'all 0 ease 0'
      updateSpecConfig(index, isClick)
      setTimeout(() => {
        restartItem(index)
      }, 100)

    }
    const requestFrame = (cb) => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    }

    return {
      ...toRefs(state),
      redPkgStyle,
      domList2,
      handleClick,
      transitionEnd,
      inittype6,
      single
    }
  },
})
</script>
<style scoped>
.rain{
  height: 100%;
  background: rgba(0,0,0,.8) no-repeat top center/ contain;
  backdrop-filter: blur(0.3rem);
  /* overflow: hidden; */
  position: relative;
  flex:1;
  width:100%;
}

.red-package{
  position: absolute;
  will-change: transform;
}

</style>
