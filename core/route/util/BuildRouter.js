function elementSetSlot(el) {
  return el.replace(/<([a-zA-Z]+)[^>]*>/g, '<$1 slot="outlet">')
}

function PathEqual(key) {
  const path = location.pathname
  return path === key
}

export function BuildRouter(route, root) {
  const troute = {}
  Object.keys(route).forEach(key => {
    troute[key] = () => {
      root.innerHTML = `<${route[key].component.cname}></${route[key].component.cname}>` || route[key].element
    }
    if (route[key].children) {
      route[key].children.forEach(child => {
        Object.keys(child).forEach(ckey => {
          troute[ckey] = () => {
            // 这里指定了渲染区域是 card 的插槽
            // 通过路由方法 go 可以实现跳转 但是直接修改 url 会导致页面重新渲染而丢失 card 元素
            let card
            try {
              card = root.querySelector('swn-app').shadowRoot.querySelector('swn-card')
            } catch (error) {
              troute[key]()
              card = root.querySelector('swn-app').shadowRoot.querySelector('swn-card')
            }

            // todo: 处理 element 以及 components
            let template
            if (child[ckey].component) {
              if (card.querySelector(child[ckey].component.cname)) return
              card.replaceChildren([])
              template = document.createElement(child[ckey].component.cname)
              template.setAttribute('slot', 'outlet')
              card.appendChild(template)
              // card.innerHTML = `<${child[ckey].component.cname} slot="outlet"></${child[ckey].component.cname}>`
            }
            if (child[ckey].element) {
              template = elementSetSlot(child[ckey].element)
              card.innerHTML = template
            }
          }
        })
      })
    }
  })
  return troute
}