<template>
    <h1 class="mb-6 text-3xl font-extrabold">NBA Highlights</h1>

    <div v-for="video in videos" :key="video.name">
        <a :href="video.url" target="blank">
            {{ video.title }}
        </a>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

store.dispatch('getHighlights')

const videos = computed(() => {
    return store.state.highlights.videos
})
</script>
