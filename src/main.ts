import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './utils/ant';
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import "./utils/rem"
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://80ce8de4297b4e95a1dac7bbeef50f5c@o541977.ingest.sentry.io/5660965",
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });
const app = createApp(App)

app
.use(router)
.use(store)
.use(ant)
.mount('#app')

// 挂载5秒后，应用将被卸载
// setTimeout(() => app.unmount('#app'), 5000)

