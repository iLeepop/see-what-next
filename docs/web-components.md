# Web Components
使用 web components 来作为本项目的组件化方案
需考虑以下问题：
- 我根本没有学
- 多个组件怎么结合
- 父子，兄弟，全局怎么传参
- css 穿透，是使用内部样式还是使用外部样式
- SPA 中怎么切换组件
- 使用 template 还是使用 js 来创建模版
- 是否需要一个组件注册器帮助管理组件
- 组件的设计模式，我不懂
- 组件的边界
- 如何自定义组件样式，是否暴露特定样式属性
- 组件的生命周期，我更不懂
- 设计组件是否考虑该项目外的复用性
- 寄

## 暂时设计
```javascript
class SWNComponent extends HTMLElement { // 自定义组件的类
  constructor() { // 构建
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() { // 组件连接到 DOM
    console.log('connected')
  }

  disconnectedCallback() { // 组件从 DOM 中移除
    console.log('disconnected')
  }

  static get observedAttributes() { // 监听属性改变
    return ['value']
  }

  attributeChangedCallback(value, oldValue, newValue) { // 属性改变时触发
  }

  render(value) { // 渲染
    this.shadowRoot.innerHTML = `<template></template>`
  }
}

customElements.define('swn-component', SWNComponent) // 注册组件到全局

export default SWNComponent // 导出 其实不需要
```