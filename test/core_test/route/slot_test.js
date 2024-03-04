function build_slot(el) {
  return el.replace(/<([a-zA-Z]+)[^>]*>/g, '<$1 slot="outlet">')
}

const el = '<p></p>'

console.log(build_slot(el))