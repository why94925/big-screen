<template>
  <div id="lineChart" class="lineChart">
  </div>
</template>

<script setup lang='ts'>
import { reactive, defineProps, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useStore } from '../store/index'

type LineChartData = {
  dataList: string[],
  thisYear: number[]
}
const props = defineProps<LineChartData>()
const store = useStore()


onMounted(() => {
    getLineChart()
})
// 获取折线图
const getLineChart = async () => {
  const echart = echarts.init(document.querySelector('#lineChart') as HTMLElement);
  await store.getLocalCityNCOVDataList();
  let xLabel = props.dataList
  let goToSchool = props.thisYear
  const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#0e1c47',
        textStyle: {
          color: '#fff',
          fontSize: 16
        },
        axisPointer: {
          lineStyle: {
            color: '#fff'
          },
        },
      },
      legend: {
        align: "left",
        right: '10%',
        top: '10%',
        type: 'plain',
        textStyle: {
          color: '#7ec7ff',
          fontSize: 16
        },
        // icon:'rect',
        itemGap: 25,
        itemWidth: 18,
        icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
          {
            name: '人数'
          }
        ]
      },
      grid: {
        left: '16%'
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: '#233653'
          },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#7ec7ff',
            padding: 16,
            fontSize: 14
          },
          interval:0,
          rotate: 45,
          formatter: function (data: string[]) {
            return data
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#192a44'
          },
        },
        axisTick: {
          show: false,
        },
        data: xLabel
      }],
      yAxis: [{
        name: '人数',
        nameTextStyle: {
          color: "#7ec7ff",
          fontSize: 16,
          padding: 10
        },
        min: 0,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#192a44'
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#233653"
          }

        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#7ec7ff',
            padding: 16
          },
          formatter: function (value: number) {
            if (value === 0) {
              return value
            }
            return value
          }
        },
        axisTick: {
          show: false,
        },
      }],
      series: [{
        name: '人数',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 5,
            color: "rgba(25,163,223,1)", // 线条颜色
          },
          borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
          color: "rgba(25,163,223,1)",
          borderColor: "#646ace",
          borderWidth: 2

        },
        tooltip: {
          show: true
        },
        areaStyle: { //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(25,163,223,.3)"


            },
            {
              offset: 1,
              color: "rgba(25,163,223, 0)"
            }
            ], false),
            shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        data: goToSchool
      }]
  };
  echart.setOption(option);
  window.addEventListener('resize', () => {
		echart.resize()
	})
}
defineExpose({
  getLineChart
})



</script>

<style lang='less' scoped>
.lineChart {
  width: 100%;
  height: calc(100% - 41px);
  background-color: #060e40;
  border-right: 1px solid #212028;
  border-left: 1px solid #212028;
  border-bottom: 1px solid #212028;
  box-shadow: 0 0 5px #212028;
}
</style>