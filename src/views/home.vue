<template>
  <div class="main">
    <Header />
    <div class="container">
      <div class="content-box">
        <div class="content-left">
          <leftBox />
        </div>
        <div :class="['content-right', state.showAside ? 'show-aside' : '']">
          <rightBox />
        </div>
        <Aside @handleShowAside="handleShowAside" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
//左侧
import leftBox from './components/leftBox/index.vue';
//右侧
import rightBox from './components/rightBox/index.vue';
//侧边
import Aside from '@/components/aside.vue';
import { reactive } from 'vue';
const state = reactive({});
function handleShowAside(item) {
  if (item) {
    state.showAside = item;
  } else {
    state.showAside = false;
  }
}
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
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    // padding: 10px;
    box-sizing: border-box;
    .content-box {
      display: flex;
      flex: 1;
      justify-content: space-between;
      height: 100%;
      position: relative;
      .content-left {
        width: vw(484);
        height: vh(910);

        background: rgb(13, 27, 64, 0.48);
        border: vh(1) solid rgba(167, 221, 254, 0.94);
        box-shadow: vh(0) vh(2) vh(11) vh(0) rgba(0, 150, 255, 0.23);
        margin-top: vh(29);
        margin-left: vh(36);
      }
      .content-right {
        width: vw(484);
        height: vh(910);
        background: rgb(13, 27, 64, 0.48);
        border: 1px solid rgba(167, 221, 254, 0.94);
        box-shadow: vh(0) vh(2) vh(11) vh(0) rgba(0, 150, 255, 0.23);
        margin-top: vh(29);
        margin-right: vh(44);
        &.show-aside {
          filter: blur(5px);
        }
      }
      .aside-model {
        width: vw(42);
        height: vh(147);
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 30%;
        .show_btn {
          width: vw(42);
          height: vh(147);
        }
      }
      .aside-model-show {
        width: vw(309);
        height: vh(1000);
        position: absolute;
        right: 0;
        cursor: pointer;
        opacity: 1;
        background-image: url('@/assets/images/home/aside_show.png');
        background-size: contain;
        background-repeat: no-repeat;

        .aside-list {
          height: 100%;
          position: absolute;
          top: vh(200);
          right: vw(25);
          .aside-item {
            width: vw(175);
            height: vh(34);
            background-image: url('@/assets/images/home/aside_bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            // justify-content: left;
            padding-left: vw(35);
            color: #fff;
            margin-bottom: vh(29);
            &:hover {
              color: #02fbec;
            }
            &.active {
              color: #02fbec;
            }
          }
        }
      }
    }
  }
}
</style>
