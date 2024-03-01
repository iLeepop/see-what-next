const build_ = {
  obb: 0,
  'build'() {
    console.log('build')
  },
  'test'() {
    console.log(this.obb)
    this['build']()
  }
}

build_['test']()