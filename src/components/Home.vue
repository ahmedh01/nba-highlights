<template>
    <h1 class="mb-6 text-3xl font-extrabold">NBA Highlights</h1>

    <div class="flex flex-wrap w-full mb-12">
        <div v-for="video in videos" :key="video.name" class="mb-4 mr-4">
            <HighlightItem :highlight="video" />
        </div>
    </div>

    <div class="flex justify-center">
        <button
            type="button"
            class="px-4 py-2 rounded bg-indigo-600 text-white mb-12"
            @click="loadMore"
        >
            Load more
        </button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import HighlightItem from './HighlightItem.vue'

const store = useStore()

store.dispatch('getHighlights')

const videos = computed(() => {
    return store.state.highlights.videos
})

function loadMore() {
    store.dispatch('getHighlights')
}
</script>
