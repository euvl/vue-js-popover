import { subscription } from './subscription'
import { first } from './utils'

const defaultPosition = 'bottom'

const prepareBinding = ({ arg = '', modifiers = {}, value = {} }) => {
  const mods = Object.keys(modifiers)
  const name = typeof value === 'object' && value.name ? value.name : arg
  const position = first(mods) || value.position || defaultPosition

  return { name, position, value }
}

const addClickEventListener = (target, params) => {
  const onClick = srcEvent => {
    subscription.$emit('show:click', {
      ...params,
      target,
      srcEvent
    })

    const onDocumentClick = srcEvent => {
      subscription.$emit('hide:click', {
        ...params,
        target,
        srcEvent
      })

      document.removeEventListener('click', onDocumentClick)
    }

    document.addEventListener('click', onDocumentClick)
    srcEvent.stopPropagation()
  }

  target.addEventListener('click', onClick)

  target.$popoverRemoveClickHandlers = () => {
    target.removeEventListener('click', onClick)
  }
}

const addHoverEventListener = (target, params) => {
  const onMouseEnter = srcEvent => {
    subscription.$emit('show:hover', {
      ...params,
      target,
      srcEvent
    })
  }

  const onMouseLeave = srcEvent => {
    subscription.$emit('hide:hover', {
      ...params,
      target,
      srcEvent
    })
  }

  target.addEventListener('mouseenter', onMouseEnter)
  target.addEventListener('mouseleave', onMouseLeave)

  target.$popoverRemoveHoverHandlers = () => {
    target.removeEventListener('mouseenter', onMouseEnter)
    target.removeEventListener('mouseleave', onMouseLeave)
  }
}

export const directive = () => {
  return {
    bind: function(target, binding) {
      const params = prepareBinding(binding)

      addClickEventListener(target, params)
      addHoverEventListener(target, params)
    },
    unbind: function(target) {
      target.$popoverRemoveHoverHandlers()
      target.$popoverRemoveClickHandlers()
    }
  }
}
