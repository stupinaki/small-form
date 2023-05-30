import {createRouter, createWebHistory} from 'vue-router';
import FormPage from "@/pages/FormPage.vue";
import PreviewPage from "@/pages/PreviewPage.vue";

export const routerNames = {
    form: "form",
    preview: "preview",
}

const routes = [
    {
        path: '/form',
        name: routerNames.form,
        component: FormPage,
    },
    {
        path: '/preview',
        name: routerNames.preview,
        component: PreviewPage,
    },
    {
        path: '/:catchAll(.*)',
        redirect: {name: routerNames.form},
    },
]

const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return {top: 0};
    },
    history: createWebHistory(),
})

export default router;
