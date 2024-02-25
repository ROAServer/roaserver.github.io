import { createApp } from "vue";
import App from "./App.vue";

// custom css
import '~/styles/normalize.css'
import '~/styles/common.css'

// custom transition
import '~/styles/transition.css'

// google fonts
import '~/styles/google_fonts.css'

// ElementPlus
import ElementPlus from "element-plus";

// import all element css, uncommented next line
// import "element-plus/dist/index.css";
// or use cdn, uncomment cdn link in `index.html`

// unocss
import "uno.css";

// ElMessage
import "element-plus/theme-chalk/src/message.scss";

// ElementPlus Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// ElementPlus transports fade/zoom
import 'element-plus/theme-chalk/base.css'

// import Vue from 'vue'
// import VueTypedJs from 'vue-typed-js'
// import "~/styles/element/index.scss"
import "~/styles/index.scss";

// app
const app = createApp(App)

// ElementPlus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('IconMenu', ElementPlusIconsVue["Menu"])

app.use(ElementPlus);

// app.use(VueTypedJs)

app.mount("#app");
