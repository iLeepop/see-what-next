function elementSetSlot(el) {
  return el.replace(/<([a-zA-Z]+)[^>]*>/g, '<$1 slot="outlet">')
}

function PathEqual(key) {
  const path = location.pathname
  return path === key
}

function recursion(routes, root, droute) {
  routes.forEach(i => {
    droute[i.path] = () => {
      // 路由方法 比较难判断 无法确定父子关系 因为项目设计原因 只让子路由去匹配了 card 所以 '/' 这种属于父级的路由比较 '/home' 之类的需要单独处理
    }
    if (i.children) recursion(i.children, root, droute)
  })
}

export function nBuildRouter(routes, root) {
  const droute = {}
  recursion(routes, root, droute)
  return droute
}

// todo: 应该为递归方法 而不是只处理到第二层路由
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