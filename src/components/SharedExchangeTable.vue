<template>
    <div v-if="!props.exchangeRates.length" class="mx-auto w-fit">
        <p>No exchange rates found</p>
    </div>
    <div v-else class="flex flex-col gap-y-4">
        <div
            class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table v-if="props.exchangeRates.length" class="w-full text-left table-auto min-w-max">
                <ExchangeRateHead />
                <tbody>
                    <ExchangeRateRow v-for="exchangeRate in paginatedExchangeRates" :key="exchangeRate.r030"
                        v-bind="exchangeRate" @click="exchangeRateDetails(exchangeRate)" />
                </tbody>
            </table>
            <p v-else>Loading...</p>
        </div>
        <Pagination :total-elements="props.exchangeRates.length" :elements-per-page="elementsPerPage"
            v-model="currentPage" />
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'

import { router } from '@/router'

import { type ExchangeRate } from '@/types'

import { useSelectedExchangeRateStore } from '@/stores/selected-exchange-rate'

import ExchangeRateHead from '@/components/ExchangeRateHead.vue'
import ExchangeRateRow from '@/components/ExchangeRateRow.vue'
import Pagination from '@/components/Pagination.vue'

const elementsPerPage = 10

const props = defineProps<{
    exchangeRates: ExchangeRate[]
}>()

const { setExchangeRate } = useSelectedExchangeRateStore()

const currentPage = ref(1)

const paginatedExchangeRates = computed(() => {
    const start = (currentPage.value - 1) * elementsPerPage
    const end = start + elementsPerPage

    return props.exchangeRates.slice(start, end)
})

function exchangeRateDetails(exchangeRate: ExchangeRate) {
    setExchangeRate(exchangeRate)
    router.push({ name: 'exchange-rate' })
}
</script>