
interface E {
  uniform: any,
  uniformDiscrete: any
}
const e: E = {
  uniform: function (t: number, e: number): number {
    return t + (e - t) * Math.random()
  },
  uniformDiscrete: function (t: number, r: number): number {
    return t + Math.floor((r - t + 1) * e.uniform(0, 1))
  },
}
const i: any = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
  return setTimeout(t, 16)
}
function n(t: object, e: any): void {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
function draw(t: any, n: any, r: any): any {
  const i: number = e.uniformDiscrete(89, 91) / 100;
  const o: number = 1 - i;
  const u: number = (e.uniformDiscrete(45, 60) + e.uniformDiscrete(45, 60)) / 100;
  function a(t: number): number {
    return t > i ? Math.max(parseFloat(((1 - t) / o).toFixed(2)), .1) * u : u
  }
  const c: number = e.uniformDiscrete(-30, 30);
  function f(t: number): number {
    return c;
  }
  const h: number = 10;
  const s: number = n.width / 2 + e.uniformDiscrete(-h, h);
  const d: number = (n.width - Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2))) / 2 - h;
  const l: number = e.uniformDiscrete(.8 * d, d) * (e.uniformDiscrete(0, 1) ? 1 : -1);
  const m: number = e.uniformDiscrete(250, 400);
  function w(t: number): number {
    return t > i ? s : s + l * Math.sin(m * (i - t) * Math.PI / 180)
  }
  function v(e: number): number {
    return t.height / 2 + (n.height - t.height / 2) * e
  }
  const p: number = e.uniformDiscrete(14, 18) / 100;
  function g(t: number): number {
    return t > p ? 1 : 1 - parseFloat(((p - t) / p).toFixed(2))
  }
  return function (e: number): any {
    if (!(e >= 0)) return !0;
    r.save();
    var n = a(e),
      i = f(e),
      o = w(e),
      u = v(e);
    r.translate(o, u), r.scale(n, n), r.rotate(i * Math.PI / 180), r.globalAlpha = g(e), r.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), r.restore()
  }
}
export class BubbleHearts {
  canvas: any
  _children: Array<any>
  context: any
  constructor() {
    // n(this, o);
    var t = this.canvas = document.createElement("canvas"),
      e = this.context = t.getContext("2d"),
      r = this._children = [],
      u = function n() {
        try {
          i(n), e.clearRect(0, 0, t.width, t.height);
          for (var o = 0, u = r.length;o < u;) {
            var a = r[o];
            a.render.call(null, (a.timestamp + a.duration - Number(new Date)) / a.duration) ? (r.splice(o, 1), u--) : o++
          }
        } catch (ex) {
          console.log(ex)
        }
      };
    i(u)
  }
  bubble(img) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.uniformDiscrete(2400, 3600),
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : draw(img, this.canvas, this.context);
    this._children.push({
      render: i,
      duration: r,
      timestamp: +new Date
    })
    return this
  }
}
