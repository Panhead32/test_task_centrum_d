<template>
  <div class="flex flex-col gap-y-4">
    <Search @search="getData" />
    <InputDate v-model="selectedDate" />
    <SharedExchangeTable :exchange-rates="exchangeRates" />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

import type { ExchangeRate } from '@/types';

import { NBUGateway } from '@/gateways/nbu/gateway';

import SharedExchangeTable from '@/components/SharedExchangeTable.vue'
import Search from '@/components/Search.vue'
import InputDate from '@/components/InputDate.vue';

const currentDate = new Date().toISOString().split('T')[0]

const selectedDate = ref<string>(currentDate)
const exchangeRates = ref<ExchangeRate[]>([])

const formattedDate = computed(() => (selectedDate.value.split('-').join('')))

async function getData(searchString: string) {
  const NBUGatewayInstance = new NBUGateway();
  const fetchedExchangeRates = await NBUGatewayInstance.getExchangeRates({ date: formattedDate.value });

  exchangeRates.value = fetchedExchangeRates.filter((exchangeRate) => {
    return exchangeRate.txt.toLowerCase().includes(searchString.toLowerCase())
  });
}
</script>
