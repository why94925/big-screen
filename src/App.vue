<template>
  <div class="wrapper">
    <div>
      <h1 class="wrapper-title">疫情信息实时大屏监控</h1>
    </div>
    <div class="box">
      <div class="box-left">
        <div>
          <div class="box-left-card">
              <div class="box-title">中国概况</div>
              <Card />
          </div>

          <div class="box-left-pieChart">
            <div class="box-title">高风险城市</div>
            <PieChart />
          </div>

          <div class="box-left-pieChart">
            <div class="box-title">高风险城市</div>
            <PieChart />
          </div>
        </div>
      </div>
      <div class="box-main">
        <Map />
      </div>
      <div class="box-right">
        <div class="box-title">地区详情</div>
        <Table />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import Map from './views/map.vue'
import Table from './views/table.vue'
import Card from './views/card.vue'
import PieChart from './views/pieChart.vue'


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

  &-title {
    width: 100%;
    height: 10%;
    padding: 10px 0;
    color: #fff;
    text-align: center;
    font-family: cursive;
    letter-spacing: .2em;
  }
}

.box {
  color: #fff;
  display: flex;
  height: 90%;

  &-left {
    width: 20%;
    padding: 10px;
    overflow: hidden;

    &-card, &-pieChart{
      margin-bottom: 20px;
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
    padding:10px 20px;
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
  }

}
</style>