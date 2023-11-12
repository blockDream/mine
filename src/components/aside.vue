<template>
  <div class="aside-model" @click.stop="handleShowHide">
    <img v-if="!state.showAside" class="show_btn" src="@/assets/images/home/aside_btn.png" />
  </div>
  <div v-if="state.showAside" class="aside-model-show" @click="handleShowHide">
    <div class="aside-list">
      <div v-for="(item, index) in state.asideItemArr" :key="index"
        :class="['aside-item', state.checkdAsideItem == item.id ? 'active' : '']" @click.stop="handleClickItem(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const router = useRouter();
const state = reactive({
  showAside: false,
  checkdAsideItem: 1,
  asideItemArr: [
    {
      id: 1,
      label: '人员车辆定位监控系统',
    },
    {
      id: 2,
      label: '视频监控系统',
    },
    {
      id: 3,
      label: 'AI智能识别系统',
    },
    {
      id: 4,
      label: '边坡监测系统',
    },
    {
      id: 5,
      label: '雷达灾害监测系统',
    },
    {
      id: 6,
      label: '地测采集系统',
    },
    {
      id: 7,
      label: '消防系统',
    },
    {
      id: 8,
      label: '踩坑门禁系统',
    },
    {
      id: 9,
      label: '环境监测系统',
    },
    {
      id: 10,
      label: '设备自动化系统',
    },
  ],
});
const emit = defineEmits('handleShowAside');
function handleShowHide() {
  state.showAside = !state.showAside;
  emit('handleShowAside', state.showAside);
}
function handleClickItem(item) {
  state.checkdAsideItem = item.id;
  switch (item.id) {
    case 1:
      router.push('/vehiclePositionSys');
      break;

    default:
      break;
  }
}
</script>

<style lang="scss" scoped>
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
</style>
