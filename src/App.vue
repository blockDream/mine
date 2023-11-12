<template>
  <div class="main">
    <Header></Header>
    <router-view />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';

import config from './config';
import initData from '@/common/initData.js';
const { base, transform } = initData(config);
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  overflow: hidden;
  background-image: url('@/assets/images/header/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
