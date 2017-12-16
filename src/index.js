import Popover    from './Popover.vue'
import Tooltip    from './Tooltip.vue'
import { events } from './bus'

const defaultPosition = 'bottom'

const prepareBinding = ({ arg = '', modifiers = {}, value = {} }) => {
  let mods = Object.keys(modifiers)
  let name = typeof value === 'object' && value.name ? value.name : arg
  let position = mods[0] || value.position || defaultPosition

  return { name, position, value }
}

const addClickEventListener = (target, params) => {
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

  target.$popoverRemoveClickHandlers = () => {
    target.removeEventListener('click', click)
  }
}

const addHoverEventListener = (target, params) => {
  const mouseenter = (srcEvent) => {
    events.$emit('show:hover', { ...params, target, srcEvent })
  }

  const mouseleave = (srcEvent) => {
    events.$emit('hide:hover', { ...params, target, srcEvent })
  }

  target.addEventListener('mouseenter', mouseenter)
  target.addEventListener('mouseleave', mouseleave)

  target.$popoverRemoveHoverHandlers = () => {
    target.removeEventListener('mouseenter', mouseenter)
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
      bind: function (target, binding) {
        let params = prepareBinding(binding)

        addClickEventListener(target, params)
        addHoverEventListener(target, params)
      },
      unbind: function (target, binding) {
        target.$popoverRemoveHoverHandlers()
        target.$popoverRemoveClickHandlers()
      }
    })

    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active')
      }
      Vue.component('Tooltip', Tooltip)
    }
  }
}
