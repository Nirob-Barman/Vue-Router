<template>
    <div>
        <h1>About</h1>
        <pre>
            {{ posts }}
        </pre>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const posts = ref([])

onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts.value = data)
})
</script>

<style lang="scss" scoped>

</style>