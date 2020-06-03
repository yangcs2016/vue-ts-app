import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout/Index.vue';
import Login from '../views/Login/Login.vue';
import Password from '../views/Login/Password.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/password',
        name: 'Password',
        component: Password
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('tsToken') ? true : false;
    if (to.path == '/login' || to.path == '/password') {
        next();
    }
    else {
        isLogin ? next() : next('/login');
    }
});
export default router;
//# sourceMappingURL=index.js.map