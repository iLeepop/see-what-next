const mock_tree = {
  swnId: '',
  ref: '',
  tagName: 'SWN-APP',
  children: [
    {
      swnId: '',
      ref: 'LeftSlider',
      tagName: 'SWN-SLIDER',
      children: []
    },
    {
      swnId: '',
      ref: 'RightSlider',
      tagName: 'SWN-SLIDER',
      children: []
    },
  ]
}

function loopNode(node) { // 递归遍历树 寄 不应该是以解析 dom 的方式去 而是在运行时注册到一个地方
  const children = node.querySelectorAll('[swnId]')
  const _node = {}
  _node.swnId = node.getAttribute('swnId')
  _node.tagName = node.tagName
  _node.children = []
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (!child.tagName.match(/^swn-/i)) return
    let n = {}
    n.swnId = child.getAttribute('swnId')
    n.tagName = child.tagName
    n.children = []
    if (child?.shadowRoot && child?.shadowRoot.children.length > 0) {
      console.log(child.swnId, child.tagName)
      n = loopNode(child)
    }
    _node.children.push(n)
  }
  return _node
}

const test = document.getElementById('test')

const root = document.getElementById('root')
const tree = loopNode(root)
console.log(tree)