import { reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'

import type { ExchangeRate } from '@/types'

export const useEditedExchangeRatesStore = defineStore('edited-exchange-rates', () => {
  const editedExchangeRates = reactive<ExchangeRate[]>([])

  function getFromLocalStorage() {
    const editedExchangeRatesLocalStorage = localStorage.getItem('editedExchangeRates')

    if (editedExchangeRatesLocalStorage) {
      return JSON.parse(editedExchangeRatesLocalStorage)
    }

    return []
  }

  function addEditedExchangeRate(exchangeRate: ExchangeRate) {
    editedExchangeRates.push(exchangeRate)

    localStorage.setItem('editedExchangeRates', JSON.stringify(editedExchangeRates))
  }

  onMounted(async () => {
    const exchangeRatesFromLocalStorage = getFromLocalStorage()

    editedExchangeRates.push(...exchangeRatesFromLocalStorage)

  })

  return { editedExchangeRates, addEditedExchangeRate }
})
