<template>
  <div id="app">
    <div style="text-align: left;">
      <h2>Vue.js Dropdown
        <a href="https://github.com/euvl/vue-js-dropdown/blob/master/README.md" target="readme">Readme</a>
        <a href="https://github.com/euvl/vue-js-dropdown/issues" target="issues">Issues</a>
      </h2>
    </div>

    <div>
      <button v-dropdown:aaa.left>Left</button>
      <button v-dropdown:bbb.top>Top</button>
      <button v-dropdown:ccc.bottom>Bottom</button>
      <button v-dropdown:ddd.right>Right</button>

      <transition name="show-from-left">
        <dropdown name="aaa" :width="120">
          🎉 Hi 🎉
        </dropdown>
      </transition>

      <transition name="pop-out">
        <dropdown name="bbb">
          How are you? 🚀
        </dropdown>
      </transition>

      <dropdown name="ccc" @show="showFour">
        <div>Hm... 🤔</div>
        <div>Opened at <i>{{openedTime}}</i></div>
      </dropdown>

      <transition name="show-from-right">
        <dropdown name="ddd" :width="120">
          Whats up? 🐸
        </dropdown>
      </transition>
    </div>

    <pre class="xml" v-text="example.html">
    </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      openedTime: '',
      example: {
        html:
`npm install vue-js-dropdown --save

...

import Vue      from 'vue'
import Dropdown from 'vue-js-dropdown'

Vue.use(Dropdown)

...

<button v-dropdown:myname>Toggle dropdown</button>

<dropdown name="myname">
  Hello!
</dropdown>
`
      }
    }
  },
  methods: {
    showFour () {
      this.openedTime = new Date().toLocaleTimeString()
    }
  }
}
</script>

<style lang="scss">
$buttonWidth: 90px;
$buttonHeight: 40px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 100px;

  max-width: 500px;
  margin: 0 auto;
}

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
  width: $buttonWidth;
  height: $buttonHeight;
  line-height: $buttonHeight;
  text-align: center;

  cursor: pointer;

  outline: none;

  padding: 0;
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

// Show-from-left transition

.show-from-left-enter-active, .show-from-left-leave-active {
  transition: transform 1s, opacity 0.7s;
}

.show-from-left-enter, .show-from-left-leave-to {
  opacity: 0;
  transform: translate(-20px);
}

// Show-from-right transition

.show-from-right-enter-active, .show-from-right-leave-active {
  transition: transform 1s, opacity 0.7s;
}

.show-from-right-enter, .show-from-right-leave-to {
  opacity: 0;
  transform: translate(20px);
}

// Pop-out transition

.pop-out-enter-active, .pop-out-leave-active {
  transition: transform 1.5s, opacity 2s;
//  transform-origin: center;
}

.pop-out-enter, .pop-out-leave-to {
  opacity: 0;
  transform: rotate(720deg) translate(0, 120px);
}
</style>
