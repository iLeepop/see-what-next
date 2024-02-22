const Registry = new Map()
const _document = document

export class RegistryElement {
  static registrys = Registry
  registryTime
  constructor() {
  }
  static registry(cname, ref) {
    const elref = `${cname}[ref="${ref}"]`
    this.registrys.set(ref, elref)
    console.log(`${ref}registry success`)
    clearTimeout(this.registryTime)
    // 不太对 我将注册方法放到组件的构造函数里面了 所以导致构造函数会延迟 200ms 不是我期望的
    // 应该有更好的解决方法在所有事情处理完成后执行
    // 比如在更外层的代码中调用
    this.registryTime = setTimeout(() => {
      console.log(`now registrys:`)
      this.registrys.forEach((value, key) => {
        console.log(`${key} => ${value}`)
      })
    }, 200)
  }
  static ref(ref) {
    try { // 错误的 无法透过 shadow root 获取元素
      const elref = this.registrys.get(ref)
      console.log(elref)
      return _document.querySelector(elref)
    } catch (error) {
      throw error
    }
  }
}

document.RegistryElement = RegistryElement