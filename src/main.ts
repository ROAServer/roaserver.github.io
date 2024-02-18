import { createApp } from "vue";
import App from "./App.vue";

// custom css
import '~/styles/normalize.css'
import '~/styles/common.css'

// google fonts
import '~/styles/google_fonts.css'

// import "~/styles/element/index.scss";

// ElementPlus
import ElementPlus from "element-plus";

// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";

// unocss
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

// ElementPlus Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// ElementPlus transports fade/zoom
import 'element-plus/theme-chalk/base.css'

// custom transports
import '~/styles/transition.css'

// app
const app = createApp(App)

// ElementPlus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('IconMenu', ElementPlusIconsVue["Menu"])

app.use(ElementPlus);

app.mount("#app");
