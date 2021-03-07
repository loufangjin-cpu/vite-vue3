<template>
  <h1 class="text">圆环设计</h1>
  <button @click="circleProgress(10, 50)">点击开始绘制圆环</button>
  <canvas id="yuan"></canvas>
</template>
<script lang="ts" setup="props">

import {
  computed,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
  watch,
  provide,
} from "vue";
const state = reactive({
  maxpercent: 1,
  count: 0,
  timer: 0,
  color: '#ff6100'
})
// 监听
watchEffect(() => {});
onMounted(() => {
  start()
});
onUnmounted(() => {});
const start = () => {
  state.timer = setInterval(function(){
    if(state.count > state.maxpercent ) {
     end()
    } else {
    circleProgress(state.count)
    state.count += 0.001
   }
  }, 15)
}
const end = () => {
  clearInterval(state.timer)
}
const changeCount = (value) => {
  return (value * 100).toFixed(0)
}
const circleProgress = (value) => {
  const canvas = document.getElementById("yuan");
  const context = canvas.getContext("2d");
  const c_width = canvas.width;
  const c_height = canvas.height;
  let color = state.color
  // 清空画布
  context.clearRect(0, 0, c_width, c_height);

  // 画外部圆空白
  context.beginPath();
  // 将起始点移到canvas中心
  context.moveTo(c_width/2, c_height/2);
  // 绘制一个中心点为（c_width/2, c_height/2），半径为c_height/2，起始点0，终止点为Math.PI * 2的 整圆
  context.arc(c_width/2, c_height/2, c_height/2, 0, Math.PI * 2, false);
  context.closePath();
  context.fillStyle = '#ddd'; //填充颜色
  context.fill();

  // 画内部圆空白
  context.beginPath();
  context.moveTo(c_width/2, c_height/2);
  context.arc(c_width/2, c_height/2, c_height/2-10, 0, Math.PI * 2, true);
  context.closePath();
  context.fillStyle = 'rgba(255,255,255,1)';  // 填充内部颜色
  context.fill();

  /**
   * fillStyle: 填充颜色
   * strokeStyle: 边框颜色
   * stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
   * lineCap:
   */

  // 画内圆
  context.beginPath();
  context.strokeStyle = color;
  context.lineCap = 'square';
  context.lineWidth = 10.0;//绘制内圆的线宽度
  // // 绘制一个中心点为（c_width/2, c_height/2），半径为c_height/2-5不与外圆重叠，
  // // 起始点-(Math.PI/2)，终止点为((Math.PI*2)*cur)-Math.PI/2的 整圆cur为每一次绘制的距离
  context.arc(c_width/2, c_height/2, c_height/2-5, -(Math.PI / 2), ((Math.PI * 2) * value) - Math.PI / 2, false);
  context.stroke();

  //在中间写字
  context.font = "bold 18pt Arial";  // 字体大小，样式
  context.fillStyle = color;  // 颜色
  context.textAlign = 'center';  // 位置
  context.textBaseline = 'middle';
  context.moveTo(c_width/2, c_height/2);  // 文字填充位置
  context.fillText( changeCount(value) +"%", c_width/2, c_height/2-20);
  context.fillText("正确率", c_width/2, c_height/2+20);

}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: pink;
}
</style>
/**
画圆环的参数：
  1、 cxt.arc(100,100,100,0,Math.PI*2,true)
  Canvas绘制圆形的arc方法中，参数说明正确的是：
  答：圆心X坐标，圆心Y坐标，圆半径，开始角度，结束角度，是否顺时针
  2、弧度是以x轴正方向(时钟三点钟)为基准、进行顺时针旋转的角度来计算的
  https://www.geek-share.com/detail/2687087172.html
 */
