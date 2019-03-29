import Vue from 'vue'
import Router from 'vue-router'
const layoutProject = r => require.ensure([], () => r(require('../components/layoutProject.vue')), 'layoutProject');
Vue.use(Router)

export default () => {
    let router = new Router({
        mode: history,
        routes: [{
            path: '/',
            component: layoutProject
        }, {
            path: '/bar',
            component: () =>
                import ("../components/Bar.vue")
        }, {
            path: '/foo',
            component: () =>
                import ("../components/Foo.vue")
        }]
    })
    return router
}