<template>
    <div class="max-w-sm bg-white border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center pt-3">
            <img class="rounded-t-lg" :src="movie.poster" :alt="movie.title">
        </div>
        <div class="p-5">
            <!-- <h5 class="mb-2 text-2xl font-bold tracking-light text-gray-900 dark:text-white">
                {{ movie.title }}
            </h5> -->
            <!-- <router-link :to="`/movies/${movie.id}`">{{ movie.title }}</router-link> -->
            <router-link :to="{name: 'movie-details', params: {id: movie.id}}">{{ movie.title }}</router-link>
            <span class="mr-4">{{ movie.year }}</span>
            <span>{{ movie.runtime }}</span>
        </div>
    </div>
</template>

<script setup>

defineProps({
    movie: Object
})

</script>

<style lang="scss" scoped>

</style>