### Vue.js 2.0+ popover

#### Renames from `vue-js-popover` as a number of people said that the name is misleading.

[![npm version](https://badge.fury.io/js/vue-js-popover.svg)](https://badge.fury.io/js/vue-js-popover)

<p align="center">
  <img src="https://media.giphy.com/media/3ohzdLUN7wlswXpFwQ/giphy.gif">
</p>

[Live demo here](http://vue-js-dropdown.yev.io/)

Install:
```bash
npm install vue-js-popover --save
```
Import:
```javascript
import Vue      from 'vue'
import Popover  from 'vue-js-popover'

Vue.use(Popover)
```
Use:
```vue
<button v-popover:foo>Toggle popover</button>

<popover name="foo">
  Hello 🎉
</popover>
```

### Positioning

You can use `.left`, `.right`, `.top`, `.bottom` modifiers to set the position of the popover.

Example:

```vue
<button v-popover:foo.left>Toggle popover (left)</button>
```
