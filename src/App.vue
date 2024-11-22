<template>
  <header>
    <nav class="flex justify-evenly w-full bg-gray-100 py-1 shadow-sm">
      <RouterLink class="rounded-md hover:shadow-md font-light text-xl hover:bg-gray-50 py-1 px-4 transition-colors"
        :to="route.path" v-for="route in headerRoutes">
        {{
          route.text }}
      </RouterLink>
    </nav>
  </header>
  <div class="w-1/2 h-full mx-auto mt-5">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { headerRoutes } from '@/router'
</script>
