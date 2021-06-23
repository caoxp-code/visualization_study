const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.font = '16px serif'
ctx.textAlign = 'center'
ctx.fillText('绘制一个空心的矩形', 130, 25)
ctx.fillRect(25, 25, 100, 100) // 在（25，25）绘制100 * 100
ctx.clearRect(45, 45, 60, 60) // 在上面里的（20，20）清除60 * 60
ctx.strokeRect(50, 50, 50, 50)// 在第一步里的(25，25) 绘制 50 * 50

ctx.fillText('绘制三角形', 130, 130)
ctx.beginPath()
ctx.moveTo(25, 175)
ctx.lineTo(100, 200)
ctx.lineTo(100, 150)
ctx.fill()

ctx.fillText('绘制圆弧', 0, 220)
for(let i = 0; i < 4; i++) {
  for(let j=0;j<3;j++){
    ctx.beginPath()
    const x = 25 + j * 50
    const y = 240 + i * 50
    const radius = 20
    let startAngle = 0
    let endAngle = Math.PI + (Math.PI * j) / 2
    let antic = i % 2 === 0 ? false : true
    ctx.arc(x, y, radius, startAngle, endAngle, antic)
    if (i > 1) {
      ctx.fill()
    } else {
      ctx.stroke()
    }
  }
}

// draw贪吃蛇
// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function drawO () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
// 圆角矩形

