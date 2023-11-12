<template>
  <div class="header-box">
    <div class="header-left">
      <div class="time-box">
        <div class="hours">17:52:00</div>
        <div class="date">2023-11-09</div>
        <div class="week">星期四</div>
      </div>
    </div>
    <div class="header-center">
      <div class="title-box">
        <div class="title-one">怡和聚源煤矿</div>
        <div class="title-two">三维可视化综合管控平台</div>
      </div>
    </div>
    <div class="header-right">
      <div class="btn-box">
        <div class="weather-icon"></div>
        <div class="temp">
          <img src="@/assets/images/header/deg.png" />
        </div>
        <div class="deg">26℃</div>
        <div class="line"></div>
        <div class="comput">
          <img src="@/assets/images/header/comput.png" />
        </div>
        <div class="close-icon">
          <img src="@/assets/images/header/close.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.header-box {
  width: 100%;
  height: vh(90);

  background-image: url("@/assets/images/header/header.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  .header-left {
    width: 33%;
    margin-top: vh(32);
    margin-left: vh(47);
    .time-box {
      display: flex;
      .hours {
        width: vw(74);
        height: vh(28);

        font-size: vh(20);
        font-family: AppleSystemUIFont-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: vh(27);
        letter-spacing: vh(-0.01);
        margin-right: vh(18);
      }
      .date {
        width: vw(109);
        height: vh(28);
        font-size: vh(20);
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        letter-spacing: vh(-0.01);
        margin-right: vh(18);
      }
      .week {
        // width: vw(50);
        height: vh(25);
        font-size: vh(18);
        font-family: AppleSystemUIFont-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: vh(25);
        letter-spacing: vh(-0.01);
      }
    }
  }
  .header-center {
    width: 33%;
    margin-right: vh(30);
    .title-box {
      margin-top: vh(15);
      .title-one {
        font-size: vh(36);
        font-family: PangMenZhengDao, PangMenZhengDao-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: vh(32);
        letter-spacing: vh(0.15);
      }
      .title-two {
        font-size: vh(36);
        font-family: PangMenZhengDao, PangMenZhengDao-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: vh(32);
        letter-spacing: vh(0.15);
        margin-top: vh(5);
      }
    }
  }
  .header-right {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    // margin-left: vh(520);
    .btn-box {
      display: flex;
      margin-top: vh(32);
      margin-right: vh(50);

      .comput {
        width: vw(25);
        height: vh(25);
        margin-right: vh(30);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .close-icon {
        width: vw(25);
        height: vh(25);
        // margin-right: vh(30);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .temp {
        width: vw(25);
        height: vh(25);
        margin-right: vh(30);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .weather-icon {
        width: vw(25);
        height: vh(25);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .line {
        width: vw(2);
        height: vh(20);
        background: #ffffff;
        opacity: 0.5;
        margin-right: vh(30);
      }
      .deg {
        color: #ffffff;
        font-size: vh(20);
        font-weight: 400;
        margin-right: vh(30);
      }
    }
  }
}
</style>
