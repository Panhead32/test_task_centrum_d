<template>
    <tr class="hover:bg-slate-50 hover:cursor-pointer">
        <td class="p-4 border-b border-slate-200" v-for="tableColumnValue in tableColumnValues" :key="tableColumnValue">
            <p class="block text-sm text-slate-800">
                {{ tableColumnValue }}
            </p>
        </td>
    </tr>
</template>
<script lang="ts" setup>
import type { ExchangeRate } from '@/types';

import { computed } from 'vue';

const props = withDefaults(defineProps<Omit<ExchangeRate, 'exchangedate'>>(), {
    r030: 0,
    txt: '-',
    cc: '-',
    rate: 0,
});

const tableColumnValues = computed(() => {
    return Object.values(props)
});
</script>