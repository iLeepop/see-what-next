// 这段代码 屁用没有
function loopNode(node) { // 嵌套 思路有问题
  const children = node.children
  const _node = {}
  for (let i = 0; i < children.length; i++) {
    if (node.tagName.match(/^swn-/i)) {
      _node.swnId = node.swnId
      _node.tagName = node.tagName
      _node.children = []
      let n
      if (node.shadowRoot.children.length > 0) {
        n = loopNode(node)
      }
      _node.children.push(n)
    }
  }
  return _node
}

export class StorageTree {
  static tree = []
  static treeset(rootElement) {
    const treeNode = {}
    for (let i = 0; i < rootElement.children.length; i++) {
      let child = rootElement.children[i]

    }
    return treeNode
  }
}

document.StorageTree = StorageTree