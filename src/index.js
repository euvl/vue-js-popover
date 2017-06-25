import Popover    from './Popover.vue'
import Tooltip    from './Tooltip.vue'
import { events } from './bus'

const defaultPosition = 'bottom'

const prepareBinding = (binding) => {
  let { arg, modifiers, value } = binding
  let mods = Object.keys(modifiers || {})

  return {
    name: arg,
    position: mods[0] || defaultPosition,
    value
  }
}

const addClickEventListener = (target, params) => {
  target.addEventListener('click', (srcEvent) => {
    events.$emit('show:click', { ...params, target, srcEvent })

    let handler = (srcEvent) => {
      events.$emit('hide:click', { ...params, target, srcEvent })
      document.removeEventListener('click', handler)
    }

    document.addEventListener('click', handler)
    srcEvent.stopPropagation()
  })
}

const addHoverEventListener = (target, params) => {
  target.addEventListener('mouseover', (srcEvent) => {
    events.$emit('show:hover', { ...params, target, srcEvent })
  })

  target.addEventListener('mouseleave', (srcEvent) => {
    events.$emit('hide:hover', { ...params, target, srcEvent })
  })
}

export default {
  install (Vue, params = {}) {
    document.addEventListener('resize', (event) => {
      events.$emit('hide', { srcEvent: event })
    })

    Vue.component('Popover', Popover)

    Vue.directive('popover', {
      inserted: function (target, binding, vnode) {
        let params = prepareBinding(binding)

        addClickEventListener(target, params)
        addHoverEventListener(target, params)
      }
    })

    if (params.tooltip) {
      Vue.component('Tooltip', Tooltip)
    }
  }
}
