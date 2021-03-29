<template>
<div ref="refC" class="snow-box">
  <div class="snow-title">雪花盛开</div>
  <canvas id='snowFall' class="backStyle"></canvas>
</div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import {nowBox} from './canvas'
import snow1 from './images/snow1.png'
import snow2 from './images/snow2.png'
import snow3 from './images/snow3.png'
import snow4 from './images/snow4.png'
import snow5 from './images/snow5.png'
import snow6 from './images/snow6.png'
import snow7 from './images/snow7.png'
import snow8 from './images/snow8.png'
import snow9 from './images/snow9.png'
import snow10 from './images/snow10.png'

export default defineComponent({
  name: 'Snow',
  data() {
    return {
      value: '888',
      lineList: [],
      images: '',
      stage: '',
      thumbsUpAni: '',
      parabola: ''
    }
  },
  created() {
  },
  mounted() {
  this.preloadImg([
    snow1,
    snow2,
    snow3,
    snow4,
    snow5,
    snow6,
    snow7,
    snow8,
    snow9,
    snow10,
  ])
   const {start} = nowBox()
   start(50)
  },
  methods: {
     preloadImg (srcArr){
        if(srcArr instanceof Array){
            for(let i = 0; i < srcArr.length; i++){
                let oImg = new Image();
                oImg.src = srcArr[i];
            }
        }
    }
  },
  setup() {
    const state = reactive({
      name: 'hello',
      age: 10
    })
    return {
      ...toRefs(state)
    }
  },
})
</script>
<style scoped>
.snow-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.backStyle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  background: rgba(22,46,120,1);
  /* width: 100vw;
  height: 100vh; */
}
.snow-title {
  position: fixed;
  z-index: 99;
  color: #fff;
  text-align: center;
  margin: auto;
}
</style>
