<template>
  <div class="left-box">
    <div class="content-top">
      <div class="title-box">
        <!-- <img class="circle-icon" src="@/assets/images/home/circle2.png" /> -->
        <div class="white-icon"></div>
        <div class="title">人员实施在线情况</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-item">
          <div class="info-title">总人数/人</div>
          <div class="num">759</div>
          <div class="img-box">
            <div class="arrow">
              <img src="@/assets/images/home/user1.png" />
            </div>
          </div>
        </div>
        <div class="info-item">
          <div class="info-title">在线人数/人</div>
          <div class="num">59</div>
          <div class="img-box">
            <div class="arrow">
              <img src="@/assets/images/home/user2.png" />
            </div>
          </div>
        </div>
        <div class="info-item">
          <div class="info-title">离线人数/人</div>
          <div class="num">700</div>
          <div class="img-box">
            <div class="arrow">
              <img src="@/assets/images/home/user3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-middle">
      <div class="title-box">
        <div class="title">人员信息</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="info-box">
        <div class="info-left">
          <div class="user-info">
            <div class="user-num">
              <div class="word">施工队人员统计</div>
              <div class="num">104</div>
            </div>

            <div class="user-icon">
              <img src="@/assets/images/home/user.png" />
            </div>
          </div>
          <div class="user-info">
            <div class="user-num">
              <div class="word">管理部人员统计</div>
              <div class="num">46</div>
            </div>

            <div class="user-icon">
              <img src="@/assets/images/home/user.png" />
            </div>
          </div>
        </div>
        <div class="info-right">
          <div class="info-img-box">
            <img class="circle1" src="@/assets/images/home/circle1-1.png" />
            <div class="num-word">
              <div class="num">50%</div>
              <div class="word">施工队人员</div>
            </div>

            <!-- <img src="@/assets/images/home/circle2.png" /> -->
            <img class="circle2" src="@/assets/images/home/circle4.png" />
          </div>
          <div class="info-word-box">
            <div class="word-left"><i></i><span>施工队人员</span></div>
            <div class="word-right"><i></i><span>管理部人员</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="title-box">
        <div class="title">人员列表</div>
        <div class="line-bg">
          <div class="line"></div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="info-box">
        <el-table :data="tableData" highlight-current-row>
          <el-table-column prop="name" label="人员名称" />
          <el-table-column prop="dept" label="部门" />
          <el-table-column prop="num" label="定位卡号" show-overflow-tooltip />
          <el-table-column prop="speed" label="实时速度" />
          <el-table-column prop="date" label="数据时间" show-overflow-tooltip />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    name: '李永帅',
    dept: '施工队',
    num: '120685779',
    speed: '0.53',
    date: '2023-10-31',
  },
  {
    name: '李永帅',
    dept: '施工队',
    num: '120685779',
    speed: '0.53',
    date: '2023-10-31',
  },
  {
    name: '李永帅',
    dept: '施工队',
    num: '120685779',
    speed: '0.53',
    date: '2023-10-31',
  },
  {
    name: '李永帅',
    dept: '施工队',
    num: '120685779',
    speed: '0.53',
    date: '2023-10-31',
  },
  {
    name: '李永帅',
    dept: '施工队',
    num: '120685779',
    speed: '0.53',
    date: '2023-10-31',
  },
];
</script>

<style lang="scss" scoped>
.left-box {
  width: 100%;
  height: 100%;
  .title-box {
    width: 100%;
    height: vh(30);
    margin-top: vh(16);
    background-image: url('@/assets/images/home/title_icon.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: vh(5);
    position: relative;
    .circle-icon {
      position: absolute;
      width: vh(32);
      height: vh(32);
      animation: rotate1 3s infinite ease-in-out;
    }
    .white-icon {
      // position: absolute;
      // left: vw(5);
      // top: vh(5);
      // width: vh(22);
      // height: vh(22);
      // background: #ffffff;
      // border-radius: 50%;
    }
    .circle {
      width: vh(13);
      height: vh(13);
      background: #d8f0ff;
      border-radius: 50%;
      box-shadow: vh(0) vh(0) vh(5) vh(0) rgba(0, 145, 255, 0.5),
        vh(0) vh(0) vh(2) vh(0) rgba(0, 145, 255, 0.8);
    }
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
      display: flex;
      justify-content: space-around;
      .info-title {
        font-size: vh(18);
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: Medium;
        text-align: center;
        color: rgba(255, 255, 255, 0.82);
        line-height: vh(25);
        text-shadow: vh(0) vh(0) vh(4) vh(0) #0a3a5f;
        margin-top: vh(20);
      }
      .num {
        // height: vh(27);
        font-size: vh(34);
        font-family: DIN, DIN-Bold;
        font-weight: Bold;
        text-align: center;
        color: #09fffe;
      }
      .img-box {
        width: vw(137);
        height: vh(136);
        background-image: url('@/assets/images/home/bottom.png');
        background-size: cover;
        text-align: center;
        background-repeat: no-repeat;
        position: relative;
        .arrow {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          margin-left: -1%;
          animation-name: beat;
          /*动画名称*/
          animation-duration: 0.5s;
          /*设置秒数*/
          animation-timing-function: linear;
          /*速度曲线*/
          animation-iteration-count: infinite;
          /*播放次数*/
          animation-direction: alternate;
          /*逆向播放*/
          animation-play-state: running;
          /*正在运行*/
          img {
            width: vw(43);
            height: vh(58);
          }
        }
        @keyframes beat {
          0% {
            bottom: 5%;
          }

          100% {
            bottom: 14%;
          }
        }
      }
    }
  }
  .content-middle {
    width: 100%;
    height: vh(271);
    .info-box {
      width: 100%;
      height: vh(241);
      margin-top: vh(15);
      margin-left: vh(27);
      display: flex;
      .info-left {
        width: 100%;
        height: 100%;
        .user-info {
          width: 100%;
          height: 50%;

          .user-num {
            display: flex;
            margin-bottom: vh(15);
            .word {
              font-size: vh(18);
              font-family: PingFang SC, PingFang SC-Medium;
              font-weight: Medium;
              text-align: center;
              color: rgba(255, 255, 255, 0.82);
              line-height: vh(50);
              text-shadow: vh(0) vh(0) vh(0) vh(0) #0a3a5f;
              margin-right: vh(26);
            }
            .num {
              font-size: vh(34);
              font-family: DIN, DIN-Bold;
              font-weight: Bold;
              text-align: cneter;
              color: #09fffe;
            }
          }
          .user-icon {
            width: vw(218);
            height: vh(22);
            margin: vh(2);

            background: rgba(8, 139, 255, 0.11);
            border: 1px solid #0f4a96;
            background-image: url('@/assets/images/home/user.png');
            opacity: 0.5;
            background-size: contain;
            background-repeat: repeat;
            img {
              height: vh(22);
              opacity: 1;
            }
          }
        }
      }
      .info-right {
        width: 100%;
        height: 100%;
        .info-img-box {
          width: vh(160);
          height: vh(160);
          // border: vh(2) solid rgba(204, 238, 255, 0.28);
          // border-radius: 50%;
          background-image: url('@/assets/images/home/circle3.png');
          // opacity: ;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .num-word {
            width: vh(130);
            height: vh(130);
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 50%;
            border-top: vh(5) solid #00b8fb;
            border-left: vh(5) solid #00b8fb;
            border-right: vh(5) solid #42e15e;
            border-bottom: vh(5) solid #42e15e;
            .num {
              margin-top: vh(15);
              color: #09fffe;
              font-size: vh(34);
              text-align: center;
            }
            .word {
              font-size: vh(14);
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: Regular;
              text-align: center;
              color: rgba(255, 255, 255, 0.82);
              line-height: 20px;
            }
          }
          .circle1 {
            position: absolute;
            width: vh(140);
            height: vh(140);
            // width: vw(160);
            // height: vh(160);
            animation: rotate1 5s infinite ease-in-out;
          }
          .circle2 {
            position: absolute;
            width: vh(110);
            height: vh(110);
            animation: rotate2 5s infinite ease-in-out;
          }
          @keyframes rotate1 {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
          @keyframes rotate2 {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }
        }
        .info-word-box {
          display: flex;
          margin-top: vh(25);
          .word-left {
            margin-right: vw(15);
            i {
              width: vh(10);
              height: vh(10);
              display: inline-block;
              background: #088bff;
              margin-right: vh(5);
            }
            span {
              font-size: vh(14);
              font-family: Source Han Sans CN, Source Han Sans CN-Regular;
              font-weight: Regular;
              color: #ffffff;
              line-height: vh(16);
            }
          }
          .word-right {
            i {
              width: vh(10);
              height: vh(10);
              display: inline-block;
              background: #42e15e;
              margin-right: vh(5);
            }
            span {
              font-size: vh(14);
              font-family: Source Han Sans CN, Source Han Sans CN-Regular;
              font-weight: Regular;
              color: #ffffff;
              line-height: vh(16);
            }
          }
        }
      }
    }
  }
  .content-bottom {
    width: 100%;
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
