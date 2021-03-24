<template>
<div ref="refC">
  <div @click="habdleClck">炸裂</div>
  <canvas ref="canvas" id="canvans"></canvas>
  <div class="hearts">
    <!-- <span @click="bubble">heart</span> -->
  </div>
</div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
// const MyPromise = require('some-promise-lib');
// const confetti = require('canvas-confetti');
// import MyPromise from 'some-promise-lib'
import confetti from 'canvas-confetti'
// confetti.Promise = MyPromise;
import { BubbleHearts } from './hearts'

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

import heart from './img/heart.png'
const assets = [heart]
export default defineComponent({
  name: 'Snow',
  data() {
    return {
      value: '888',
      lineList: [],
      images: '',
      stage: '',
      random: {
        uniform: (min, max) => {
          return min + (max - min) * Math.random()
        },
        uniformDiscrete: (i, j) => {
          return i + Math.floor((j - i + 1) * this.random.uniform(0, 1))
        }
      }
    }
  },
  created() {
    // this.preloadImg([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]);
    this.preloadImg([heart]);
  },
  mounted() {
    const con = document.querySelector('.hearts')
    Promise.all(assets).then((images) => {
      this.images = images
      this.stage = new BubbleHearts()
      console.log('stage', this.stage)
      var canvas = this.stage.canvas
      canvas.width = 130
      canvas.height = 300
      canvas.style['width'] = '100%'
      canvas.style['height'] = '100%'
      con.appendChild(canvas)
      setInterval(() => {
        this.stage.bubble(this.images[this.random.uniformDiscrete(0, this.images.length - 1)])
      }, 600)
    })
  },
  methods: {
    preloadImg(srcArr){
      // if(srcArr instanceof Array){
      //   for(let i = 0; i < srcArr.length; i++){
      //       let oImg = new Image();
      //       oImg.src = srcArr[i];
      //   }
      // }
      assets.forEach(function (src, index) {
        assets[index] = new Promise(function (resolve) {
          var img = new Image()
          img.onload = resolve.bind(null, img)
          img.src = src
          img.width = 56
          img.height = 50
        })
      })
    },
    
    randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    },
    habdleClck() {
      var canvas = this.$refs.canvas
      // this.$refs.refC.appendChild(myCanvas);

      // var myConfetti = confetti.create(myCanvas, {
      //   resize: true,
      //   useWorker: true
      // });
      // myConfetti({
      //   particleCount: 20,
      //   angle: 45,
      //   origin: { x: 0 , y:0},
      //   spread: 10,
      // });
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
