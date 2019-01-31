function view() {
  return <ul id="filmList" className="list">
    <li className="main">Detective Chinatown Vol 2</li>
    <li>Ferdinand</li>
    <li>Paddington 2</li>
  </ul>
}

function flatten(arr) {
  return [].concat(...arr)
}

function h(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: flatten(children)
  }
}

// 创建节点
function createElement(node) {
  if (typeof(node) === 'string') {
    return document.createTextNode(node)
  }

  let { type, props, children } = node
  const el = document.createElement(type)
  setProps(el, props)
  children.map(createElement)
    .forEach(el.appendChild.bind(el))

  return el
}

// 放classname
function setProp(target, name, value) {
  if (name === 'className') {
    return target.setAttribute('class', value)
  }

  target.setAttribute(name, value)
}

// 递归放入节点
function setProps(target, props) {
  Object.keys(props).forEach(key => {
    setProp(target, key, props[key])
  })
}

function render(el) {
  console.log(view())
  el.appendChild(createElement(view(0)))
}