# vue-metro
metro-ui components built with Vue.js


## Installation

### NPM

```bash
$ npm install vue-metro
```

### CommonJS
```js
var accordion = require('vue-metro').accordion;

new Vue({
  components: {
    'accordion': accordion
  }
})
```

### ES6
```js
import {accordion} from 'vue-metro/src/index.js'

new Vue({
  components: { accordion }
})
```

### AMD
```js
$ bower install vue-metro
define(['vue-metro'], function(vueMetro) { var alert = vueMetro.alert; ... });
```

### Browser globals
The `dist` folder contains `vue-metro.js` and `vue-metro.min.js` with all components exported in the <code>window.vueMetro</code> object. These bundles are also available in [CDNJS](https://cdnjs.com/libraries/vue-metro),
and on both the Bower and NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-metro.js"></script>
<script>
  var alert = vueMetro.alert
</script>
```


## License
vue-metro is licensed under [The MIT License](LICENSE).