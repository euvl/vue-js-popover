<template>
  <Wrapper>
    <template slot="header">
      <button v-popover:ccc>Fixed position</button>
    </template>

    <div>
      <button v-popover:bbb.top>Top</button>
      <button v-popover:ccc.bottom>Bottom</button>
      <button v-popover:aaa.left>Left</button>
      <button v-popover:ddd.right>Right</button>

      <button
        v-popover:tooltip="
          'This is just an example of a tooltip wrapper and you can put your i18n value here.'
        "
      >
        Tooltip
      </button>

      <div style="position: absolute; right: 0; top: 160px">
        <button v-popover="{ name: 'aaa' }">Absolute position</button>
      </div>
      <!-------- POPOVERS --------->

      <popover name="aaa" transition="show-from-left" :width="120">
        <a href="http://yev.io">Popover "A"</a>
      </popover>

      <popover name="bbb">
        Popover "B"
      </popover>

      <popover name="ccc" transition="show-from-bottom" @show="showFour">
        <div>Popover "C"</div>
        <div>
          Opened at <i>{{ time }}</i>
        </div>
      </popover>

      <popover name="ddd" :width="120" transition="show-from-right">
        Popover "D"
      </popover>
    </div>

    <!--------- TOOLTIP --------->

    <tooltip />

    <div style="height: 1000px" />

    <button v-popover:ddd>Button</button>

    <template slot="footer">
      <popover name="eee" transition="show-from-right" :delay="1000">
        Popover "E"
      </popover>

      <popover
        name="fff"
        event="hover"
        transition="show-from-right"
        :delay="1000"
      >
        Popover "F"
      </popover>

      <button v-popover:eee.top>Fixed footer (click) + delay</button>
      <button v-popover:fff.top>
        Fixed footer (hover) + delay
      </button>
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from './Wrapper.vue'

export default {
  name: 'app',
  components: {
    Wrapper
  },
  data() {
    return {
      time: ''
    }
  },
  methods: {
    showFour() {
      this.time = new Date().toLocaleTimeString()
    }
  }
}
</script>

<style lang="scss">
$buttonWidth: 90px;
$buttonHeight: 40px;

.xml {
  max-width: 500px;
  margin: 20px auto;
  text-align: left;
  background: #f3f3f3;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #dedede;
}

h1,
h2 {
  font-weight: normal;

  a {
    font-size: 12px;
  }
}

a {
  color: inherit;
}

button {
  position: relative;

  text-align: center;

  cursor: pointer;

  outline: none;

  padding: 8px 16px;
  border: 0;
  margin: 4px;
  border-radius: 3px;

  background: white;
  border: 1px solid #9ac367;
  color: #9ac367;

  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 800;
}

// Show from bottom transition

.show-from-bottom-enter-active,
.show-from-bottom-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-bottom-enter,
.show-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

// Show from left transition

.show-from-left-enter-active,
.show-from-left-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-left-enter,
.show-from-left-leave-to {
  opacity: 0;
  transform: translate(-20px);
}

// Show from right transition

.show-from-right-enter-active,
.show-from-right-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-right-enter,
.show-from-right-leave-to {
  opacity: 0;
  transform: translate(20px);
}

// Pop-out transition

.pop-out-enter-active,
.pop-out-leave-active {
  transition: transform 0.3s, opacity 0.3s;
  //  transform-origin: center;
}

.pop-out-enter,
.pop-out-leave-to {
  opacity: 0;
  transform: scale(0.3);
}

div[data-popover='tooltip'] {
  background: #444;
  color: #f9f9f9;

  font-size: 12px;
  line-height: 1.5;
  margin: 5px;
}
</style>
