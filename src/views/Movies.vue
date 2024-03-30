<template>
    <div>
        <h1>Movies</h1>
        <!-- <pre>
            {{ movieList }}
        </pre> -->

        <div v-if="isLoading" class="max-w-sm mx-auto">
            <span class="text-2xl font-bold text-indigo-700">
                Is isLoading....
            </span>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
        </div>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import MovieCard from '../components/MovieCard.vue'
const movieList = ref([])
const isLoading = ref(true)

onMounted(async() => {
    // fetch('http://localhost:8000/movies')
    //     .then(res => res.json())
    //     .then(data => movieList.value = data)

    const result = await fetch('http://localhost:8000/movies')
    const response = await result.json()
    movieList.value = response
    isLoading.value = false
})
</script>

<style lang="scss" scoped>

</style>