<template>
    <div class="flex flex-col gap-y-3 bg-slate-50 rounded-xl p-4 shadow-md">
        <div class="font-medium text-xl mx-auto text-gray-800">Edit Exchange Rate</div>
        <div class="text-xl px-3 font-extralight">{{ exchangeRate?.txt }}</div>
        <div class="flex flex-row gap-x-4">
            <div class="text-8xl bg-slate-100 rounded-xl px-2 shadow-sm font-semibold border text-neutral-800">{{
                exchangeRate?.cc }}
            </div>
            <div class="flex flex-col gap-y-3 h-full my-auto ">
                <div class="text-neutral-700 font-light">
                    Code: <i>{{ exchangeRate?.r030 }}</i>
                </div>
                <div class="flex flex-row justify-between items-center gap-x-2">
                    <div class="text-neutral-700 font-medium flex flex-row gap-x-2">
                        Rate:
                        <input type="number"
                            class="bg-transparent border-none 
                        w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            ref="exchangeRateRef" v-model="rateValue" :disabled="!isEditing" />
                    </div>
                    <EditIcon v-if="!isEditing" class="w-6 h-6 cursor-pointer" @click="editExchangeRate" />
                    <SaveIcon v-else class="w-6 h-6 cursor-pointer" @click="saveEditedExchangeRate" />
                </div>
                <div class="text-neutral-700 font-light">
                    Date: <i>{{ exchangeRate?.exchangedate }}</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { storeToRefs } from 'pinia';

import { router } from '@/router';

import { useSelectedExchangeRateStore } from '@/stores/selected-exchange-rate'
import { useEditedExchangeRatesStore } from '@/stores/edited-exchange-rates'

import SaveIcon from '@/components/icons/SaveIcon.vue';
import EditIcon from '@/components/icons/EditIcon.vue';

const selectedExchangeRateStore = useSelectedExchangeRateStore()
const { exchangeRate } = storeToRefs(selectedExchangeRateStore)

const editedExchangeRateStore = useEditedExchangeRatesStore()
const { addEditedExchangeRate } = editedExchangeRateStore

if (!exchangeRate.value) {
    router.push({ name: 'home-page' })
}

const isEditing = ref(false)
const rateValue = ref(exchangeRate.value?.rate)

const exchangeRateRef = ref<HTMLInputElement | null>(null)

function editExchangeRate() {
    isEditing.value = true
    nextTick(() => {
        exchangeRateRef.value?.focus()
    })
}

function saveEditedExchangeRate() {
    if (!exchangeRateRef.value?.value) return;
    if (exchangeRate.value && rateValue.value) {
        isEditing.value = false

        addEditedExchangeRate({
            ...exchangeRate.value,
            rate: rateValue.value,
        })
    }
}
</script>