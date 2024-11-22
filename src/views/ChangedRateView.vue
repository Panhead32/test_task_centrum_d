<template>
  <div class="flex flex-col gap-y-4">
    <Search @search="setSearchString" />
    <SharedExchangeTable :exchange-rates="searchResults" />
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue';

import { useEditedExchangeRatesStore } from '@/stores/edited-exchange-rates'

import Search from '@/components/Search.vue';
import SharedExchangeTable from '@/components/SharedExchangeTable.vue'

const { editedExchangeRates } = storeToRefs(useEditedExchangeRatesStore())

const search = ref('')

const searchResults = computed(() => {
  return editedExchangeRates.value.filter((exchangeRate) => {
    return exchangeRate.txt.toLowerCase().includes(search.value.toLowerCase())
  })
})

function setSearchString(event: string) {
  search.value = event
}
</script>
