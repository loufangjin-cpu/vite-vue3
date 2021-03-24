<template>
<div ref="refC">
  <div @click="habdleClck">炸裂</div>
  <canvas ref="canvas" id="canvans"></canvas>
</div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
// const MyPromise = require('some-promise-lib');
// const confetti = require('canvas-confetti');
// import MyPromise from 'some-promise-lib'
import confetti from 'canvas-confetti'
// confetti.Promise = MyPromise;

import img1 from './img/snow1.png'
import img2 from './img/snow2.png'
import img3 from './img/snow3.png'
import img4 from './img/snow4.png'
import img5 from './img/snow5.png'
import img6 from './img/snow6.png'
import img7 from './img/snow7.png'
import img8 from './img/snow8.png'
import img9 from './img/snow9.png'
import img10 from './img/snow10.png'

export default defineComponent({
  name: 'Snow',
  created() {
    this.preloadImg([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]);
  },
  methods: {
    preloadImg(srcArr){
      if(srcArr instanceof Array){
        for(let i = 0; i < srcArr.length; i++){
            let oImg = new Image();
            oImg.src = srcArr[i];
        }
      }
    },
    randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    },
    habdleClck() {
      var myCanvas = this.$refs.canvas
      // this.$refs.refC.appendChild(myCanvas);

      var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
      });
      myConfetti({
        particleCount: 20,
        angle: 45,
        origin: { x: 0 , y:0},
        spread: 10,
      });
    }
  },
  data() {
    return {
      value: '888',
      lineList: []
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

</style>
