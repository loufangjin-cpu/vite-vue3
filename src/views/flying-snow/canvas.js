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
import { convertToObject } from 'typescript'
let imgList = [
  snow1,
  snow2,
  snow3,
  snow4,
  snow5,
  snow6,
  snow7,
  snow8,
  snow9,
  snow10
]

let nowBox = function () {
  let canvasEl = document.getElementById('snowFall')
  let ctx = canvasEl.getContext('2d')
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  let lineList = [] // 雪的容器

  let snow = function () {
    let _this = this
    let count = Math.ceil(Math.random() * 9)
    _this.cacheCanvas = document.createElement('canvas')
    _this.cacheCtx = _this.cacheCanvas.getContext('2d')
    _this.cacheCanvas.width = 10
    _this.cacheCanvas.height = 10
    _this.speed = [1, 1.5, 2][Math.floor(Math.random() * 3)] // 雪花下落的三种速度，便于取整
    _this.posx = Math.round(Math.random() * canvasEl.width) // 雪花x坐标
    _this.posy = Math.round(Math.random() * canvasEl.height) // 雪花y坐标
    _this.img = imgList[count] // img
    _this.w = _this.getInt(5 + Math.random() * 6)
    _this.h = _this.getInt(5 + Math.random() * 6)
    _this.cacheSnow()
  }
  snow.prototype = {
    cacheSnow: function () {
      let _this = this
      _this.cacheCtx.save()
      let img = new Image() // 创建img元素
      img.src = _this.img
      img.onload = function () {
        // 如果使用html5的ctx.drawImage(img,0,0);绘制不出来，说明只有img 加载完了，你画它才有意义。
        _this.cacheCtx.drawImage(img, 0, 0, _this.w, _this.h)
      }
      _this.cacheCtx.restore()
    },
    fall: function () {
      let _this = this
      if (_this.posy > canvasEl.height + 5) {
        _this.posy = _this.getInt(0 - _this.h)
        _this.posx = _this.getInt(canvasEl.width * Math.random())
      }
      if (_this.posx > canvasEl.width + 5) {
        _this.posx = _this.getInt(0 - _this.w)
        _this.posy = _this.getInt(canvasEl.height * Math.random())
      }
      // 如果雪花在可视区域
      if (_this.posy <= canvasEl.height || _this.posx <= canvasEl.width) {
        _this.posy = _this.posy + _this.speed
        _this.posx = _this.posx + _this.speed * 0.5
      }
      _this.paint()
    },
    paint: function () {
      ctx.drawImage(this.cacheCanvas, this.posx, this.posy)
    },
    getInt: function (num) {
      let rounded
      rounded = (0.5 + num) | 0
      return rounded
    }
  }
  let control = {
    start: function (num) {
      for (let i = 0; i < num; i++) {
        let s = new snow()
        lineList.push(s)
      }
      ;(function loop() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
        for (let i = 0; i < num; i++) {
          lineList[i].fall()
        }
        // stats.update()
        requestFrame(loop)
      })()
    }
  }
  return control
}

function requestFrame(cb) {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )(cb)
}
export { nowBox }
