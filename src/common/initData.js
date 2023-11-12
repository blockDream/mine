import { computed, reactive, ref } from 'vue';

let base = null;
let scale = null;
let scaleX = null;
let scaleY = null;
let transform = null;
const getScale = function (config) {
  let h = window.innerHeight / config.base.height;
  let w = window.innerWidth / config.base.width;
  if (h < w) {
    return { scale: h, h, w };
  } else {
    return { scale: w, h, w };
  }
};
export default function (config) {
  base = reactive(config.base);
  scale = ref(getScale(config).scale);
  scaleX = ref(getScale(config).w);
  scaleY = ref(getScale(config).h);
  window.addEventListener('resize', () => {
    scale.value = getScale(config).scale;
    scaleX.value = getScale(config).w;
    scaleY.value = getScale(config).h;
  });
  transform = computed(() => {
    if (config.base.scaleMode == 'auto') {
      if (scaleX.value > scaleY.value) {
        let mvx = (config.base.width * (scaleX.value - scaleY.value)) / 2 / scale.value;
        return 'scale(' + scale.value + ')  translateX(' + mvx + 'px)';
      } else {
        let mvy = (config.base.height * (scaleY.value - scaleX.value)) / 2 / scale.value;
        return 'scale(' + scale.value + ')  translateY(' + mvy + 'px)';
      }
    } else if (config.base.scaleMode == 'fill') {
      return 'scale(' + scaleX.value + ',' + scaleY.value + ')';
    } else {
      // 默认铺满
      return 'scale(' + scaleX.value + ',' + scaleY.value + ')';
    }
  });
  return {
    base,
    scale,
    scaleX,
    scaleY,
    transform,
  };
}
