<template>
    <div class="relative">
        <input type="text"
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Type here..." v-model="searchValue" />
        <button
            class="absolute right-1 top-1 rounded bg-gray-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-20"
            type="button" @click="updateValue">
            Search
        </button>
        <CloseIcon v-if="searchValue" class="absolute w-4 h-4 cursor-pointer right-24 top-1/2 -translate-y-1/2"
            @click="clearInput" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import CloseIcon from '@/components/icons/CloseIcon.vue'

const searchValue = ref<string>('')

const emit = defineEmits<{
    (e: 'search', text: string): void
}>()

function updateValue() {
    emit('search', searchValue.value)
}

function clearInput() {
    searchValue.value = ''
}
</script>