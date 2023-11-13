<template>
  <div class="main">
    <Header />
    <div class="carPositionSys">
      <Aside />
    </div>
  </div>
</template>

<script setup>
//侧边
import Aside from '@/components/aside.vue';
import Header from '@/components/header.vue';
Header;
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
  background-image: url('@/assets/images/carPositionSys/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  .carPositionSys {
    width: 100%;
    height: 120%;
    position: relative;
    box-sizing: border-box;
  }
}
</style>
