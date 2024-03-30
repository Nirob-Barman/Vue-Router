<template>
    <div>
        <div class="flex justify-center ">
            <!-- <button @click="$router.go(-1)"> -->
            <button @click="$router.back()">
                Go Back
            </button>
        </div>

        <h1>Movie Details Page {{ $route.params.id }}</h1>

        <pre>
            {{ movie }}
        </pre>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'


const props = defineProps({
    id: {
        type: String,
        required: true
    }
})


const queryMovieId = useRoute().params.id
const movie = ref({})
const isLoading = ref(true)
const route = useRoute()
const router = useRouter()

onMounted(async() => {
    // const result = await fetch(`http://localhost:8000/movies/${queryMovieId}`)
    // const result = await fetch(`http://localhost:8000/movies/${route.params.id}`)
    // const result = await fetch(`http://localhost:8000/movies/${props.id}`)
    const result = await fetch(`http://localhost:8000/movies/${parseInt(props.id)}`)
    // if(!result.ok) {
    // if(result.status === 404) {
    //     router.push({name: 'not-found'})  // 404
    // }
    const data = await result.json()
    // const {title, year, runtime, genre, director, actors, plot} = data
    movie.value = data
    isLoading.value = false
})

</script>

<style lang="scss" scoped>

</style>