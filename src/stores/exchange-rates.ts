import { reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { NBUGateway } from '@/gateways/nbu/gateway'
import type { ExchangeRate } from '@/types'

export const useExchangeRatesStore = defineStore('exchange-rates', () => {
  const exchangeRates = reactive<ExchangeRate[]>([])

  const currentDate = computed(() => {
    const date = new Date()

    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const currentDay = date.getDate();

    return `${currentYear}${currentMonth}${currentDay}`
  })

  function getFromLocalStorage() {
    const exchangeRates = localStorage.getItem('exchangeRates')

    if (exchangeRates) {
      const parsedData = JSON.parse(exchangeRates)

      if (parsedData.date !== currentDate.value) {
        return []
      }

      return parsedData.data
    }
    return []
  }

  function getFromGateway() {
    const NBUGatewayInstance = new NBUGateway()

    return NBUGatewayInstance.getExchangeRates({ date: currentDate.value })
  }

  onMounted(async () => {
    const exchangeRatesFromLocalStorage = getFromLocalStorage()

    if (exchangeRatesFromLocalStorage.length) {
      exchangeRates.push(...exchangeRatesFromLocalStorage)
      return
    }

    const fetchedExchangeRates = await getFromGateway()

    exchangeRates.push(...fetchedExchangeRates)

    localStorage.setItem('exchangeRates', JSON.stringify({ data: fetchedExchangeRates, date: currentDate.value }))
  })

  return { exchangeRates }
})
