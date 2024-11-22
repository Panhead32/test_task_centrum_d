<template>
    <thead>
        <tr>
            <th class="p-4 border-b border-slate-300 bg-slate-50" v-for="{ text, width } in columnNames" :key="text">
                <p class="block text-sm font-normal leading-none text-slate-500">
                    {{ text }}
                </p>
            </th>
        </tr>
    </thead>
</template>

<script lang="ts" setup>
const columnNames = [{ text: 'Code', width: 30 }, { text: 'Name', width: 80 }, { text: 'Currency', width: 30 }, { text: 'Rate', width: 30 }]
</script>