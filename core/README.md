# some

## storageTree
获取自定义组件树
```

```
草，太难了，先不写这玩意了

## registryElement
灵光咋现，在挂载期间将 new 出来的对象保存到一个对象集中，使用 ref 映射，不就行了？得试试

## HistoryRoute
路由注册，路由跳转，使用 history api

### 实现原理
- 创建路由对象，不同 url 对应不同的操作，使用 history api
- 监听浏览器的 popstate 事件，url 变更进行对应的操作
- 问题
  - 如何改变特定组件的内容