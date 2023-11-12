
  <template>
  <div class="container">
    <div class="content-box">
      <div class="content-left">
        <leftBox />
      </div>
      <div class="content-right">
        <rightBox />
      </div>
      <div class="aside-model" @click="handleShowHide">
        <img
          class="show_btn"
          v-if="!state.showAside"
          src="@/assets/images/home/aside_btn.png"
        />
      </div>
      <div
        class="aside-model-show"
        @click="handleShowHide"
        v-if="state.showAside"
      >
        <dic class="aside-list">
          <div class="aside-item">视频监控系统</div>
          <div class="aside-item">视频监控系统</div>
          <div class="aside-item">视频监控系统</div>
          <div class="aside-item">视频监控系统</div>
          <div class="aside-item">视频监控系统</div>
          <var> <div class="aside-item">视频监控系统</div></var>
        </dic>
      </div>
    </div>
  </div>
</template>

<script setup>
import config from "../config";
import initData from "../common/initData.js";
//左侧
import leftBox from "./components/leftBox/index.vue";
//右侧
import rightBox from "./components/rightBox/index.vue";
import { reactive } from "vue";
const { base } = initData(config);
const state = reactive({
  showAside: false,
});
function handleShowHide() {
  state.showAside = !state.showAside;
}
</script>
<style lang="scss" scoped>
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
      background-image: url("@/assets/images/home/aside_show.png");
      background-size: contain;
      background-repeat: no-repeat;
      .aside-list {
        height: 100%;
        position: absolute;
        top: vh(250);
        right: vw(30);
        .aside-item {
          width: vw(175);
          height: vh(34);
          background-image: url("@/assets/images/home/aside_bg.png");
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: vh(29);
        }
      }
    }
  }
}
</style>
