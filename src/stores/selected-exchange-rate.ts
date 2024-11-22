import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ExchangeRate } from '@/types'

export const useSelectedExchangeRateStore = defineStore('selected-exchange-rate', () => {
    let exchangeRate = ref<ExchangeRate>()

    function setExchangeRate(rate: ExchangeRate) {
        exchangeRate.value = rate
    }

    return { exchangeRate, setExchangeRate }
})
