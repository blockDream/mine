<template>
  <router-view />
</template>

<script setup>
import config from './config';
import initData from '@/common/initData.js';
const { base, transform } = initData(config);
</script>

<style lang="scss" scoped>
</style>
