### Vue.js 2.0+ popover

[![npm version](https://badge.fury.io/js/vue-js-popover.svg)](https://badge.fury.io/js/vue-js-popover)

<p align="center">
  <img src="https://media.giphy.com/media/xUA7beKmTnr9fkbI6k/giphy.gif">
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

### Tooltip 

Plugin contains a simple wrapper for `Tooltip`. To use it you will have to:

Set `tooltip` flag in your `main.js`:
```javascript
import VPopover from 'vue-js-popover`
Vue.use(VPopover, { tooltip: true })
```

Include `tooltip` component anywhere in the application:

```
<tooltip/>
```

Assign message to any element:
```vue
<button v-popover:tooltip="'This is string value'">My butt0n</button>
```

Component itself is simple af, 33 lines of code (mostly declarations). It is created for a purpose of demostrating how easily you can use the tool to create new things using the tool provided.

### Positioning

You can use `.left`, `.right`, `.top`, `.bottom` modifiers to set the position of the popover.

### Styling

Popover components have `data-popover="name"` argument that allows to apply styles to it. 

Example:

```
<popover name="foo" :pointer="false">Bar</popover>
```

```css
div[data-popover="foo"] {
  background: #444;
  color: #f9f9f9;

  font-size: 12px;
  line-height: 1.5;
  margin: 5px;
}
```

Example:

```vue
<button v-popover:foo.left>Toggle popover (left)</button>
```
