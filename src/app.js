import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

Vue.config.productionTip = false
export default () => {
    let router = createRouter();
    let app = new Vue({
        el: '#app',
        router,
        // components: { App },
        // template: '<App/>'
        render: (h) => h(App)
    })
    return { app, router }
}