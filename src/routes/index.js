// import { createMemoryHistory, createRouter } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Movies from '../views/Movies.vue'

// const Home = ()  =>('../views/Home.vue')
// const About = ()  =>('../views/About.vue')
// const Movies = ()  =>('../views/Movies.vue')

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    // { path: '/about', component: About },
    { path: '/about', component: () => import('../views/About.vue') },
    // { path: '/movies', component: Movies }
    { path: '/movies', component: () => import('../views/Movies.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    // history: createMemoryHistory(),
    routes
});

export default router;