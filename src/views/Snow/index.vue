<template>
<div ref="refC">
  <div @click="habdleClck">炸裂</div>
  <canvas ref="canvas" id="canvans"></canvas>
  <div class="hearts">
    <!-- <span @click="bubble">heart</span> -->
  </div>
  <div class="praise_bubble" id="praise_bubble"></div>
  <canvas id="thumsCanvas" width="200" height="400" style="width:100px;height:200px"></canvas>
</div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
// const MyPromise = require('some-promise-lib');
// const confetti = require('canvas-confetti');
// import MyPromise from 'some-promise-lib'
import confetti from 'canvas-confetti'
// confetti.Promise = MyPromise;
// import { BubbleHearts } from './hearts'
import {ThumbsUpAni} from './canvas'
import img1 from './images/snow1.png'
import img2 from './images/snow2.png'
import img3 from './images/snow3.png'
import img4 from './images/snow4.png'
import img5 from './images/snow5.png'
import img6 from './images/snow6.png'
import img7 from './images/snow7.png'
import img8 from './images/snow8.png'
import img9 from './images/snow9.png'
import img10 from './images/snow10.png'

import heart from './images/heart.png'
const assets = [heart]
export default defineComponent({
  name: 'Snow',
  data() {
    return {
      value: '888',
      lineList: [],
      images: '',
      stage: '',
      thumbsUpAni: '',
    }
  },
  created() {
    // this.preloadImg([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]);
    // this.preloadImg([heart]);
  },
  mounted() {
    // const con = document.querySelector('.hearts')
    // Promise.all(assets).then((images) => {
    //   this.images = images
    //   // this.stage = new BubbleHearts()
    //   console.log('stage', this.stage)
    //   var canvas = this.stage.canvas
    //   canvas.width = 130
    //   canvas.height = 300
    //   canvas.style['width'] = '100%'
    //   canvas.style['height'] = '100%'
    //   con.appendChild(canvas)
    //     this.stage.bubble(this.images[0])
      // setInterval(() => {
      //   this.stage.bubble(this.images[0])
      // }, 600)
      
    // })
    this.thumbsUpAni = new ThumbsUpAni()
    setInterval(()=>{
        this.thumbsUpAni.start();
    },300);
  },
  methods: {
    addPraise() {
      let praiseBubble = document.getElementById("praise_bubble");
      let last = 0;
      const b =Math.floor(Math.random() * 6) + 1;
      const bl =Math.floor(Math.random() * 11) + 1; // bl1~bl11

      let d = document.createElement("div");
      d.className = `bubble b${b} bl${bl}`;
      d.dataset.t = String(Date.now());
      praiseBubble.appendChild(d);
    },
    preloadImg(srcArr){
      // if(srcArr instanceof Array){
      //   for(let i = 0; i < srcArr.length; i++){
      //       let oImg = new Image();
      //       oImg.src = srcArr[i];
      //   }
      // }
      // assets.forEach(function (src, index) {
      //   assets[index] = new Promise(function (resolve) {
      //     var img = new Image()
      //     img.onload = resolve.bind(null, img)
      //     img.src = src
      //     img.width = 56
      //     img.height = 50
      //   })
      // })
    },
    randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    },
    habdleClck() {
      // this.addPraise()
      // var canvas = this.$refs.canvas
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
      this.thumbsUpAni.start();
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
.praise_bubble {
  width: 100px;
  height: 200px;
  position: relative;
  background-color: #f4f4f4;
}
.bubble {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 30px;
  bottom: 0px;
  background-repeat: no-repeat;
  background-size: 100%;
  transform-origin: bottom;
}
.b1 {
  background-image: url(./images/heart.png);
}
.b2 {
  background-image: url(./images/heart.png);
}
.b3 {
  background-image: url(./images/heart.png);
}
.b4 {
  background-image: url(./images/heart.png);
}
.b5 {
  background-image: url(./images/heart.png);
}
.b6 {
  background-image: url(./images/heart.png);
}
.bl1 {
  animation: bubble_1 var(--bubble_time) linear 1 forwards,
    bubble_big_1 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl2 {
  animation: bubble_2 var(--bubble_time) linear 1 forwards,
    bubble_big_2 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl3 {
  animation: bubble_3 var(--bubble_time) linear 1 forwards,
    bubble_big_1 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl4 {
  animation: bubble_4 var(--bubble_time) linear 1 forwards,
    bubble_big_2 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl5 {
  animation: bubble_5 var(--bubble_time) linear 1 forwards,
    bubble_big_1 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl6 {
  animation: bubble_6 var(--bubble_time) linear 1 forwards,
    bubble_big_3 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl7 {
  animation: bubble_7 var(--bubble_time) linear 1 forwards,
    bubble_big_1 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl8 {
  animation: bubble_8 var(--bubble_time) linear 1 forwards,
    bubble_big_3 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl9 {
  animation: bubble_9 var(--bubble_time) linear 1 forwards,
    bubble_big_2 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl10 {
  animation: bubble_10 var(--bubble_time) linear 1 forwards,
    bubble_big_1 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
.bl11 {
  animation: bubble_11 var(--bubble_time) linear 1 forwards,
    bubble_big_2 var(--bubble_scale) linear 1 forwards,
    bubble_y var(--bubble_time) linear 1 forwards;
}
@keyframes bubble_11 {
  0% {
  }
  25% {
    margin-left: -10px;
  }
  50% {
    margin-left: -10px;
  }
  100% {
    margin-left: -18px;
  }
}
@keyframes bubble_10 {
  0% {
  }
  25% {
    margin-left: -20px;
  }
  50% {
    margin-left: -20px;
  }
  100% {
    margin-left: -20px;
  }
}
@keyframes bubble_9 {
  0% {
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: 10px;
  }
  100% {
    margin-left: 10px;
  }
}
@keyframes bubble_8 {
  0% {
  }
  25% {
    margin-left: 20px;
  }
  50% {
    margin-left: 20px;
  }
  100% {
    margin-left: 20px;
  }
}
@keyframes bubble_7 {
  0% {
  }
  25% {
    margin-left: 3px;
  }
  50% {
    margin-left: 1px;
  }
  75% {
    margin-left: 2px;
  }
  100% {
    margin-left: 3px;
  }
}
@keyframes bubble_6 {
  0% {
  }
  25% {
    margin-left: -3px;
  }
  50% {
    margin-left: -1px;
  }
  75% {
    margin-left: -2px;
  }
  100% {
    margin-left: -3px;
  }
}
@keyframes bubble_5 {
  0% {
  }
  25% {
    margin-left: 5px;
  }
  50% {
    margin-left: -5px;
  }
  75% {
    margin-left: -10px;
  }
  100% {
    margin-left: -20px;
  }
}
@keyframes bubble_4 {
  0% {
  }
  25% {
    margin-left: -5px;
  }
  50% {
    margin-left: -5px;
  }
  75% {
    margin-left: 20px;
  }
  100% {
    margin-left: 10px;
  }
}
@keyframes bubble_3 {
  0% {
  }
  25% {
    margin-left: -20px;
  }
  50% {
    margin-left: 10px;
  }
  75% {
    margin-left: 20px;
  }
  100% {
    margin-left: -10px;
  }
}
@keyframes bubble_2 {
  0% {
  }
  25% {
    margin-left: 20px;
  }
  50% {
    margin-left: 25px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 5px;
  }
}
@keyframes bubble_1 {
  0% {
  }
  25% {
    margin-left: -8px;
  }
  50% {
    margin-left: 8px;
  }
  75% {
    margin-left: -15px;
  }
  100% {
    margin-left: 15px;
  }
}
@keyframes bubble_big_1 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1.2);
  }
}
@keyframes bubble_big_2 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(0.9);
  }
}
@keyframes bubble_big_3 {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(0.6);
  }
}
@keyframes bubble_y {
  0% {
    margin-bottom: 0;
  }
  10% {
    margin-bottom: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    margin-bottom: 200px;
    opacity: 0;
  }
}
</style>
