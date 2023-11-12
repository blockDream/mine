<template>
  <div class="right-box">
    <div class="content-top">
      <div class="title-box">
        <div class="title">车辆实施在线情况</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg">
            <!-- <img src="@/assets/images/home/line_icon.png" /> -->
          </div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-title-box">
          <div class="icon"></div>
          <div class="car_title">车辆总数</div>
          <div class="car_num"><span>182</span><i>/辆</i></div>
        </div>
        <div class="info-content-box">
          <div class="info-online-car">
            <div class="online-num">82</div>
            <div class="online-word">在线/辆</div>
          </div>
          <div class="info-outline-car">
            <div class="online-num">100</div>
            <div class="online-word">离线/辆</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-middle">
      <div class="title-box">
        <div class="title">车辆信息</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-top">
          <div class="info-item">
            <div class="img-box">
              <img class="big_car" src="@/assets/images/home/bigCar.png" />
            </div>
            <div class="data-box">
              <div class="word">卡车</div>
              <div class="num">
                <span>82</span>
                <i>/辆</i>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="img-box">
              <img class="big_car" src="@/assets/images/home/bigCar.png" />
            </div>
            <div class="data-box">
              <div class="word">卡车</div>
              <div class="num">
                <span>82</span>
                <i>/辆</i>
              </div>
            </div>
          </div>
        </div>
        <div class="info-bottom">
          <div class="info-item">
            <div class="img-box">
              <img class="big_car" src="@/assets/images/home/bigCar.png" />
            </div>
            <div class="data-box">
              <div class="word">卡车</div>
              <div class="num">
                <span>82</span>
                <i>/辆</i>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="img-box">
              <img class="big_car" src="@/assets/images/home/bigCar.png" />
            </div>
            <div class="data-box">
              <div class="word">卡车</div>
              <div class="num">
                <span>82</span>
                <i>/辆</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="title-box">
        <div class="title">车辆列表</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="info-box">
        <el-table :data="tableData" highlight-current-row>
          <el-table-column prop="carName" label="车辆名称" />
          <el-table-column prop="type" label="车辆类型" />
          <el-table-column prop="carNum" label="车牌" show-overflow-tooltip />
          <el-table-column prop="dept" label="部门" />
          <el-table-column prop="num" label="定位卡号" show-overflow-tooltip />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    carName: '装卸机1',
    dept: '施工队',
    num: '120685779',
    type: '装卸机',
    carNum: '545435',
  },
  {
    carName: '装卸机1',
    dept: '施工队',
    num: '120685779',
    type: '装卸机',
    carNum: '545435',
  },
  {
    carName: '装卸机1',
    dept: '施工队',
    num: '120685779',
    type: '装卸机',
    carNum: '545435',
  },
  {
    carName: '装卸机1',
    dept: '施工队',
    num: '120685779',
    type: '装卸机',
    carNum: '545435',
  },
  {
    carName: '装卸机1',
    dept: '施工队',
    num: '120685779',
    type: '装卸机',
    carNum: '545435',
  },
];
</script>

<style lang="scss" scoped>
.right-box {
  width: 100%;
  height: 100%;
  .title-box {
    width: 100%;
    height: vh(30);
    margin-top: vh(16);
    background-image: url('@/assets/images/home/title_icon.png');
    background-size: cover;
    background-repeat: no-repeat;
    .title {
      font-size: vh(20);
      font-family: PingFang SC, PingFang SC-Medium;
      font-weight: Medium;
      text-align: left;
      color: #ffffff;
      line-height: vh(30);
      text-shadow: vh(0) vh(0) vh(4) vh(0) #0a3a5f;
      margin-left: vh(50);
    }
    .line-bg {
      display: flex;
      align-items: center;
      .line {
        width: vw(370);
        height: vh(1);
        background: #87c2ff;
        margin-left: vh(50);
      }
      .bg {
        margin-top: vh(4);
        width: vw(36);
        height: vh(4);
        background-image: url('@/assets/images/home/line_icon.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .content-top {
    width: 100%;
    height: vh(271);
    .info-box {
      .info-title-box {
        margin-top: vh(20);
        margin-left: vh(19);
        width: vw(440);
        height: vh(37);
        background: linear-gradient(
          104deg,
          rgba(29, 52, 118, 0.41) 20%,
          rgba(19, 122, 176, 0) 100%
        );
        background-image: url('@/assets/images/home/right_car_box.png');
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        .icon {
        }
        .car_title {
          font-size: vh(18);
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
          font-weight: Medium;
          text-align: center;
          color: #ffffff;
          line-height: vh(37);
          margin-left: vw(50);
        }
        .car_num {
          margin-left: vw(220);
          span {
            font-size: vh(30);
            font-family: DIN, DIN-Bold;
            font-weight: Bold;
            text-align: left;
            color: #09fffe;
          }
          i {
            font-size: vh(20);
            font-family: DIN, DIN-Bold;
            font-weight: Bold;
            text-align: left;
            color: #09fffe;
          }
        }
      }
      .info-content-box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: vh(35);
        .info-online-car {
          width: 40%;
          height: vh(79);
          background-image: url('@/assets/images/home/online_car.png');
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          .online-num {
            font-size: vh(34);
            font-family: DIN, DIN-Bold;
            font-weight: Bold;
            text-align: left;
            color: #09fffe;
            line-height: 0px;
            text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
            margin: vw(0) vw(15);
          }
          .online-word {
            font-size: vh(18);
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: Medium;
            text-align: center;
            color: #ffffff;
            line-height: vh(18);
          }
        }
        .info-outline-car {
          width: 40%;
          height: vh(79);
          background-image: url('@/assets/images/home/outline_car.png');
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          .online-num {
            font-size: vh(34);
            font-family: DIN, DIN-Bold;
            font-weight: Bold;
            text-align: left;
            color: #09fffe;
            line-height: 0px;
            text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
            margin: vw(0) vw(10);
          }
          .online-word {
            font-size: vh(18);
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: Medium;
            text-align: center;
            color: #ffffff;
            line-height: vh(18);
          }
        }
      }
    }
  }
  .content-middle {
    height: vh(271);
    .info-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      .info-item {
        display: flex;
        justify-content: space-around;
        margin: 0 vh(20);
        // align-items: center;
        .img-box {
          width: vw(90);
          height: vh(84);
          text-align: center;
          background-image: url('@/assets/images/home/car_info2.png');
          background-size: contain;
          background-repeat: no-repeat;
          @keyframes bigCar {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.6);
            }
          }
          .big_car {
            width: vw(30);
            height: vh(30);
            animation: bigCar 1s ease-in-out infinite alternate;
          }
        }
        .data-box {
          .word {
            font-size: vh(18);
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: Medium;
            text-align: center;
            color: #ffffff;
          }
          .num {
            span {
              font-size: vh(34);
              font-family: DIN, DIN-Bold;
              font-weight: Bold;
              text-align: left;
              color: #09fffe;
            }
            i {
              font-size: vh(18);
              font-family: DIN, DIN-Bold;
              font-weight: Bold;
              text-align: left;
              color: #09fffe;
            }
          }
        }
      }
      .info-top {
        display: flex;
        justify-content: space-around;
        margin: vh(30);
      }
      .info-bottom {
        display: flex;
        justify-content: space-around;
        margin: vh(30);
      }
    }
  }
  .content-bottom {
    height: vh(308);
    .info-box {
      width: 100%;
      :deep(.el-table) {
        width: 90%;
        margin: 0 auto;
        margin-top: vh(15);
        height: vh(258);
        font-size: vh(14);
      }
    }
  }
}
</style>
