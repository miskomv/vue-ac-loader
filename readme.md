# AC Loader (vue-ac-loader)
**vue-ac-loader** is a plugin for show a full screen loader on requests.

### Demo
https://dist-fltukrcrdr.now.sh/#/

### Install it
```console
npm install vue-ac-loader
``` 

### Enable it
```javascript
import Vue from "vue";
import AcLoader from 'vue-ac-loader';
Vue.use(AcLoader);
```
### Use it

##### Show Loader
```javascript
this.$showLoader() ;
```

##### Hide Loader
```javascript
this.$hideLoader() ;
```

### NuxtJS
install the plugin `npm install vue-ac-loader`

Create `plugins/vue-ac-loader.js`
```javascript
import Vue from 'vue';
import AcLoader from 'vue-ac-loader';
Vue.use(AcLoader);
```

Add `'@/plugins/vue-ac-loader.js'` in `nuxt.config.js` `plugins` object
```javascript
	plugins: [
		'@/plugins/vue-ac-loader.js'
	]
``` 
