export const first = array => {
  return Array.isArray(array) && array.length > 0 ? array[0] : null
}

export const forEachParent = (startElement, callback) => {
  let element = startElement

  while (
    callback &&
    element.parentNode &&
    element.parentNode.tagName !== 'BODY'
  ) {
    callback(element)
    element = element.parentNode
  }
}

export const getFixedPositionParents = element => {
  let fixed = []

  forEachParent(element, node => {
    const position = window.getComputedStyle(node).position

    if (position === 'fixed') {
      fixed.push(node)
    }
  })

  return fixed
}

export const getMaxZIndex = (elements = []) => {
  return elements.reduce((z, node) => {
    let nz = parseInt(getComputedStyle(node)['z-index']) || 1
    return Math.max(z, nz)
  }, 1)
}
