import Popover from './Popover.vue'
import Tooltip from './Tooltip.vue'
import { subscription } from './subscription'
import { directive } from './directive'

export default {
  install(Vue, params = {}) {
    document.addEventListener('resize', event => {
      subscription.$emit('hide', { srcEvent: event })
    })

    Vue.component('Popover', Popover)
    Vue.directive('popover', directive())

    if (params.tooltip) {
      Vue.component('Tooltip', Tooltip)
    }
  }
}
