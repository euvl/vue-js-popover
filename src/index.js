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

const addClickEventListener = (target, params, vnode) => {
  const click = (srcEvent) => {
    events.$emit('show:click', { ...params, target, srcEvent })

    let handler = (srcEvent) => {
      events.$emit('hide:click', { ...params, target, srcEvent })
      document.removeEventListener('click', handler)
    }

    document.addEventListener('click', handler)
    srcEvent.stopPropagation()
  }

  target.addEventListener('click', click)

  vnode.__popoverRemoveClickHandlers = () => {
    target.removeEventListener('click', click)
  }
}

const addHoverEventListener = (target, params, vnode) => {
  const mouseover = (srcEvent) => {
    events.$emit('show:hover', { ...params, target, srcEvent })
  }

  const mouseleave = (srcEvent) => {
    events.$emit('hide:hover', { ...params, target, srcEvent })
  }

  target.addEventListener('mouseover', mouseover)
  target.addEventListener('mouseleave', mouseleave)

  vnode.__popoverRemoveHoverHandlers = () => {
    target.removeEventListener('mouseover', mouseover)
    target.removeEventListener('mouseleave', mouseleave)
  }
}

export default {
  install (Vue, params = {}) {
    document.addEventListener('resize', (event) => {
      events.$emit('hide', { srcEvent: event })
    })

    Vue.component('Popover', Popover)

    Vue.directive('popover', {
      bind: function (target, binding, vnode) {
        let params = prepareBinding(binding)

        addClickEventListener(target, params, vnode)
        addHoverEventListener(target, params, vnode)
      },
      unbind: function (target, binding, vnode) {
        if (vnode) {
          vnode.__popoverRemoveHoverHandlers()
          vnode.__popoverRemoveClickHandlers()
        }
      }
    })

    if (params.debug) {
      console.log('vue-js-popover | params:', params)
    }

    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active')
      }
      Vue.component('Tooltip', Tooltip)
    }
  }
}
