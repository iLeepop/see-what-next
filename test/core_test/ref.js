class Left {
  name
  constructor(name) {
    this.name = name
  }
  render() {
    return `<div>${this.name}</div>`
  }
}

const LeftSlider = new Left('LeftSlider')

const map = new Map()
map.set('LeftSlider', LeftSlider)

const f = map.get('LeftSlider')

console.log(f === LeftSlider) // true 同一个对象
console.log(f.name) // LeftSlider
console.log(f.render()) // <div>LeftSlider</div>