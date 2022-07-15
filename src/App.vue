<template>
  <div class="wrapper">
    <div>
      <!-- <canvas id="tutorial" width="150" height="150"></canvas> -->
      <h1 class="wrapper-title">疫情信息实时大屏监控</h1>
    </div>
    <div class="box">
      <div class="box-left">
        <div class="box-left-card">
          <div class="box-title">中国概况</div>
          <Card />
        </div>

        <div class="box-left-pieChart">
          <div class="box-title">高风险城市</div>
          <PieChart />
        </div>

        <div class="box-left-lineChart">
          <div class="box-title">中风险地区</div>
          <Line ref="lineChart" :dataList="store.lineData.dataList" :thisYear="store.lineData.thisYear" />
        </div>
      </div>
      <div class="box-main">
        <Map />
      </div>
      <div class="box-right">
        <div class="box-right-table">
          <div class="box-title">地区详情</div>
          <Table />
        </div>
        <div class="box-right-table">
          <div class="box-title">雷达图</div>
          <Thunder :dataList="store.lineData.dataList" :thisYear="store.lineData.thisYear" />
        </div>
        <div class="box-right-table">
          <div class="box-title">柱状图</div>
          <Column :dataList="store.lineData.dataList" :thisYear="store.lineData.thisYear" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Map from './views/map.vue'
import Table from './views/table.vue'
import Card from './views/card.vue'
import Column from './views/columns.vue';
import PieChart from './views/pieChart.vue'
import Line from './views/line.vue'
import Thunder from './views/thunder.vue'
import { useStore } from './store/index'


const store = useStore()

</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  background: url('./assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  &-title {
    width: 100%;
    height: 5%;
    padding: 10px 0 0 0;
    color: #fff;
    text-align: center;
    font-family: cursive;
    letter-spacing: .2em;
  }
}

.box {
  color: #fff;
  display: flex;
  height: 95%;

  &-left {
    width: 20%;
    padding: 10px;
    overflow: hidden;

    &-card {
      height: 33.3%;
    }

    &-card,
    &-pieChart {
      margin-bottom: 10px;
    }

    &-pieChart {
      height: 33.3%;
    }

    &-lineChart {
      height: 33.3%;
    }

  }

  &-main {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

  }

  &-title {
    position: relative;
    color: #fff;
    padding: 10px 20px;
    background: linear-gradient(to right, #212028, #2F57E8, transparent);

    &::before {
      position: absolute;
      content: '';
      left: 5px;
      width: 7px;
      height: 20px;
      background-color: #41b0db;
    }
  }

  &-right {
    width: 20%;
    padding: 10px;
    overflow: auto;

    &-table {
      height: calc((100% - 20px) / 3);
      overflow: hidden;
    }

    &-table:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  /*修改滚动条样式*/
  div::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    /**/
  }

  div::-webkit-scrollbar-track {
    background: #212028;
    border-radius: 2px;
  }

  div::-webkit-scrollbar-thumb {
    background: #212028;
    border-radius: 10px;
  }

  div::-webkit-scrollbar-thumb:hover {
    background: #333;
  }

  div::-webkit-scrollbar-corner {
    background: #179a16;
  }
}
</style>