<template>
    <input type="date" :value="props.modelValue" @input="updateModelValue"
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Select date" />
</template>
<script lang="ts" setup>
const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', selectedDate: string): void
}>()

function updateModelValue(event: Event) {
    const { value } = event.target as HTMLInputElement
    emit('update:modelValue', value)
}
</script>