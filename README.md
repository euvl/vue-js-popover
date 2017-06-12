### Vue.js 2.0+ dropdown

[![npm version](https://badge.fury.io/js/vue-js-dropdown.svg)](https://badge.fury.io/js/vue-js-dropdown)

[Live demo here](http://vue-js-drodown.yev.io/)

Install:
```bash
npm install vue-js-dropdown --save
```
Import:
```javascript
import Vue      from 'vue'
import Dropdown from 'vue-js-dropdown'

Vue.use(Dropdown)
```
Use:
```vue
<button v-dropdown:foo>Toggle dropdown</button>

<dropdown name="foo">
  Hello 🎉
</dropdown>
```

### Positioning

You can use `.left`, `.right`, `.top`, `.bottom` modifiers to set the position of the dropdown.

Example:

```vue
<button v-dropdown:foo.left>Toggle dropdown (left)</button>
```
