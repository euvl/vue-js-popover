import Component from './Component.vue'
import { events } from './bus'

const eventPairs = {
  click: 'click',
  mouneter: 'mouseleave'
}

const defaultPosition = 'bottom'

export default {
  install (Vue) {
    Vue.component('Popover', Component)

    document.addEventListener('resize', (event) => {
      events.$emit('hide', { srcEvent: event })
    })

    Vue.directive('popover', {
      inserted: function (target, binding, vnode) {
        let name = binding.arg
        let modifiers = Object.keys(binding.modifiers || {})
        let position = modifiers[0] || defaultPosition

        target.addEventListener('click', (srcEvent) => {
          let params = { name, target, position }

          events.$emit('show', { ...params, srcEvent })

          let closeListener = (srcEvent) => {
            events.$emit('hide', { ...params, srcEvent })
            document.removeEventListener('click', closeListener)
          }

          document.addEventListener('click', closeListener)
          event.stopPropagation()
        })
      }
    })
  }
}
