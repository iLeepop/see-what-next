function loopNode(node) { // 嵌套 寄了没写完
  if (node.tagName.match(/^swn-/i)) {
    node.swnId = node.swnId
    node.tagName = node.tagName
    node.children = []
    if (node.shadowRoot.children.length > 0) {
      loopNode(node)
    }
    node.children.push(node)
  }
  return node
}

export class StorageTree {
  static tree = []
  static treeset(rootElement) {
    const treeNode = {}
    for (let i = 0; i < rootElement.children.length; i++) {
      let child = rootElement.children[i]
      if (child.tagName.match(/^swn-/i)) { // 查组件
        treeNode.swnId = child.swnId
        treeNode.tagName = child.tagName
        treeNode.children = []
        if (child.shadowRoot.children.length > 0) {
          this.treeset(child)
        }
        treeNode.children.push(treeNode)
      }
    }
    return treeNode
  }
}

document.StorageTree = StorageTree