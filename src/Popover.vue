<template>
  <transition :name="transition">
    <div
      v-if="visible"
      :class="className"
      :style="style"
      :data-popover="this.name"
      @click.stop
      ref="dropdown"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import { subscription } from './subscription'
import { getFixedPositionParents, getLayer, getMaxZIndex } from './utils'

const pointerSize = 6

const anchors = {
  leftTop: '',
  leftCenter: '',
  leftBottom: '',
  topLeft: '',
  topCenter: '',
  topRight: '',
  rightTop: '',
  rightCenter: '',
  rightBottom: '',
  bottomLeft: '',
  bottomCenter: '',
  bottomRight: ''
}

const directions = {
  left: [-1, 0],
  right: [1, 0],
  top: [0, 1],
  bottom: [0, -1]
}

export default {
  name: 'Popover',
  props: {
    name: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      default: 0
    },
    transition: {
      type: String
    },
    width: {
      type: Number,
      default: 180
    },
    pointer: {
      type: Boolean,
      default: true
    },
    event: {
      type: String,
      default: 'click'
    },
    anchor: {
      type: Number,
      default: 0.5,
      validator: v => v >= 0 && v <= 1
    }
  },
  data() {
    return {
      visible: false,
      zIndex: 1,
      positionClass: '',
      fixedParents: [],
      position: {
        left: 0,
        top: 0
      }
    }
  },
  mounted() {
    subscription.$on(this.showEventName, this.showEventListener)
    subscription.$on(this.hideEventName, this.hideEventListener)
  },
  beforeDestroy() {
    subscription.$off(this.showEventName, this.showEventListener)
    subscription.$off(this.hideEventName, this.hideEventListener)
  },
  computed: {
    showEventName() {
      return `show:${this.event}`
    },
    hideEventName() {
      return `hide:${this.event}`
    },
    className() {
      return ['vue-popover', this.pointer && this.positionClass]
    },
    style() {
      const { width, zIndex, fixedParents } = this
      const hasFixedParents = fixedParents.length > 0

      const styles = {
        width: `${width}px`,
        zIndex,
        ...this.position
      }

      if (hasFixedParents) {
        styles.position = 'fixed'
      }

      return styles
    }
  },
  methods: {
    showEventListener(event) {
      if (this.visible) {
        subscription.$emit(this.hideEventName)
        return
      }

      let { name, position } = event

      if (name !== this.name) {
        return
      }

      this.timeout = setTimeout(() => {
        this.positionClass = `dropdown-position-${position}`
        this.visible = true

        this.$nextTick(() => {
          this.$emit('show', event)

          this.$nextTick(() => {
            let position = this.getDropdownPosition(event)

            this.position = {
              left: `${position.left}px`,
              top: `${position.top}px`
            }
          })
        })
      }, Math.max(this.delay, 0))
    },

    hideEventListener(event) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      if (this.visible) {
        this.visible = false
        this.$emit('hide', event)
      }
    },

    getDropdownPosition(event) {
      const { target, position } = event

      const direction = directions[position]
      const dropdown = this.$refs.dropdown

      const trRect = target.getBoundingClientRect()
      const ddRect = dropdown.getBoundingClientRect()

      this.fixedParents = getFixedPositionParents(target)

      const zIndex = event.zIndex
        ? event.zIndex
        : getMaxZIndex([target, ...this.fixedParents]) + 1

      this.zIndex = zIndex

      let offsetLeft = trRect.left
      let offsetTop = trRect.top

      if (this.fixedParents.length === 0) {
        // Scroll offset of the current document
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop

        const scrollLeft =
          window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft

        // Position within the parent
        offsetLeft = trRect.left + scrollLeft
        offsetTop = trRect.top + scrollTop
      }

      // let shiftX = ddRect.width - trRect.width
      let shiftY = 0.5 * (ddRect.height + trRect.height)

      // Center of the target element
      let centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width)
      let centerY = offsetTop + trRect.height - shiftY

      // let anchorX = direction[0] * this.anchor
      // let anchorY = direction[0] * this.anchor

      // Position of the dropdown relatively to target
      let x = direction[0] * 0.5 * (ddRect.width + trRect.width)
      let y = direction[1] * shiftY

      // Pointer size correction
      if (this.pointer) {
        x += direction[0] * pointerSize
        y += direction[1] * pointerSize
      }

      return {
        left: Math.round(centerX + x),
        top: Math.round(centerY - y)
      }
    }
  }
}
</script>

<style lang="scss">
$pointer-size: 6px;

.vue-popover {
  display: block;
  position: absolute;
  background: #fff;

  box-shadow: 0px 4px 20px 0px rgba(52, 73, 94, 0.2);

  padding: 5px;
  border-radius: 5px;

  z-index: 998;

  &:before {
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    content: '';
  }

  &.dropdown-position-bottom:before {
    border-left: $pointer-size solid transparent;
    border-right: $pointer-size solid transparent;
    border-bottom: $pointer-size solid #fff;
    top: -$pointer-size;
    left: calc(50% - #{$pointer-size});
    filter: drop-shadow(0px -2px 2px rgba(52, 73, 94, 0.1));
  }

  &.dropdown-position-top:before {
    border-left: $pointer-size solid transparent;
    border-right: $pointer-size solid transparent;
    border-top: $pointer-size solid #fff;
    bottom: -$pointer-size;
    left: calc(50% - #{$pointer-size});
    filter: drop-shadow(0px 2px 2px rgba(52, 73, 94, 0.1));
  }

  &.dropdown-position-left:before {
    border-top: $pointer-size solid transparent;
    border-bottom: $pointer-size solid transparent;
    border-left: $pointer-size solid #fff;
    right: -$pointer-size;
    top: calc(50% - #{$pointer-size});
    filter: drop-shadow(2px 0px 2px rgba(52, 73, 94, 0.1));
  }

  &.dropdown-position-right:before {
    border-top: $pointer-size solid transparent;
    border-bottom: $pointer-size solid transparent;
    border-right: $pointer-size solid #fff;
    left: -$pointer-size;
    top: calc(50% - #{$pointer-size});
    filter: drop-shadow(-2px 0px 2px rgba(52, 73, 94, 0.1));
  }
}
</style>
