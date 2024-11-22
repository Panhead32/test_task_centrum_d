<template>
    <div class="flex w-fit px-2 bg-gray-100 rounded-lg shadow-md mx-auto" v-if="totalPages > 1">
        <div v-show="props.modelValue !== 1"
            class="text-xs cursor-pointer hover:bg-slate-50 py-1 px-1 rounded-lg my-auto" @click="previousPage">
            Previous</div>
        <div v-for="pageNumber in totalPages" :key="pageNumber" @click="emit('update:modelValue', pageNumber)"
            class="text-sm cursor-pointer hover:bg-slate-50 hover:cursor-pointer py-1 px-2 rounded-lg"
            :class="{ 'bg-slate-200': pageNumber === props.modelValue }">
            {{ pageNumber }}
        </div>
        <div v-show="props.modelValue !== totalPages"
            class="text-xs cursor-pointer hover:bg-slate-50 py-1 px-1 rounded-lg my-auto" @click="nextPage">Next</div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    modelValue: number
    totalElements: number
    elementsPerPage: number
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', currentPage: number): void
}>()

const totalPages = computed(() => Math.ceil(props.totalElements / props.elementsPerPage))

function nextPage() {
    emit('update:modelValue', props.modelValue + 1)
}

function previousPage() {
    emit('update:modelValue', props.modelValue - 1)
}
</script>