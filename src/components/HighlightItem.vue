<template>
    <a :href="highlight.url" target="blank">
        <!-- video thumbnail + caption container -->
        <div
            class="
                border border-gray-200
                rounded-lg
                shadow-sm
                cursor-pointer
                w-96
            "
        >
            <!-- thumbnail -->
            <div v-if="highlight.thumbnail">
                <img
                    :src="highlight.thumbnail"
                    class="rounded-t-lg rounded-b-none"
                />
            </div>
            <div v-else>
                <img
                    src="placeholder.png"
                    class="rounded-t-lg rounded-b-none"
                />
            </div>

            <!-- caption -->
            <div class="p-3">
                <p class="font-semibold text-gray-800 line-clamp-2">
                    {{ highlight.title }}
                </p>
            </div>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    highlight: {
        type: Object,
        required: true,
    },
})
</script>
