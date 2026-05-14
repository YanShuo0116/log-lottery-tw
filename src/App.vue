<script setup lang="ts">
import { provide, watch } from 'vue'
import { loadingKey, loadingState } from '@/components/Loading'
import { useGlobalConfig } from '@/store/globalConfig'
// import PlayMusic from '@/components/PlayMusic/index.vue'

provide(loadingKey, loadingState)

const globalConfig = useGlobalConfig()

watch(
  () => globalConfig.getTopTitle,
  (newTitle) => {
    document.title = newTitle || 'Log-Lottery'
  },
  { immediate: true }
)
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss"></style>
