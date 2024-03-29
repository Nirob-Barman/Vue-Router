import { createApp } from 'vue'
// import { createMemoryHistory, createRouter } from 'vue-router'
// import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Movies from './views/Movies.vue'


// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/movies', component: Movies }
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     // history: createMemoryHistory(),
//     routes
// });

// import router from './routes/index.js'
import router from './routes'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
