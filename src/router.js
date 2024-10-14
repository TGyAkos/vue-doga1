import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import("./components/HelloWorld.vue") },
    { path: '/recept', component: () => import("./views/Recept.vue") },
    { path: '/player', component: () => import("./views/Player.vue") },
    { path: '/calendar', component: () => import("./views/Calendar.vue") },
    { path: '/math', component: () => import("./views/Math.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;