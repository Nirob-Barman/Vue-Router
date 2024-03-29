<template>
    <div>
        <h1>Movies</h1>
        <!-- <pre>
            {{ movieList }}
        </pre> -->

        <div class="grid grid-cols-3 gap-4">
            <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
        </div>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import MovieCard from '../components/MovieCard.vue'
const movieList = ref([])

onMounted(() => {
    fetch('http://localhost:8000/movies')
        .then(res => res.json())
        .then(data => movieList.value = data)
})
</script>

<style lang="scss" scoped>

</style>