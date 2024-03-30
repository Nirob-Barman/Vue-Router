// import { createMemoryHistory, createRouter } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Movies from '../views/Movies.vue'

// const Home = ()  =>('../views/Home.vue')
// const About = ()  =>('../views/About.vue')
// const Movies = ()  =>('../views/Movies.vue')

const routes = [
    { path: '/', name: 'home', component: () => import('../views/Home.vue') },
    // { path: '/about', component: About },
    { path: '/about', name: 'about', component: () => import('../views/About.vue') },
    // { path: '/movies', component: Movies }
    { path: '/movies', name: 'movies', component: () => import('../views/Movies.vue') },
    {
        path: '/movies/:id',
        name: 'movie-details',
        component: () => import('../views/MovieDetails.vue'),
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    // history: createMemoryHistory(),
    routes
});

export default router;