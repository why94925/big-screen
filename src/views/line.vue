<template>
  <div id="lineChart" class="lineChart">
  </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'


// 获取折线图
const getLineChart= () => {
  const lineChartData  = reactive({});
  const echart = echarts.init(document.querySelector('#lineChart') as HTMLElement);
  const option = {
    title: {
      textStyle: {
        rich: {
          a: {
            fontSize: 16,
            fontWeight: 600
          },
          b: {
            fontSize: 12,
            color: 'gray'
          }
        }
      },
      top: '3%',
      left: '2%'
    },
    legend: {
      data: ['当年', '去年'],
      textStyle: {
        align: 'right'
      },
      x: 'right',
      y: '2%',
      icon: 'rect'
    },

    tooltip: {
      trigger: 'axis'
    },

    grid: {
      top: '18%',
      left: '6%',
      right: '3%',
      bottom: '10%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true
        },
        splitArea: {
          // show: true,
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          margin: 10
        },
        boundaryGap: false,
        data: lineChartData.dataList
      }
    ],

    yAxis: [
      {
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#e3e3e3'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          margin: 20
        },
        axisTick: {
          show: false
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#7AA1FF'
          },
          trigger: 'item'
        }
      }
    ],
    series: [
      {
        name: '当年',
        type: 'line',
        smooth: true, // 是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
          normal: {
            color: '#7AA1FF'
          }
        },

        itemStyle: {
          color: '#7AA1FF',
          borderWidth: 3,
          borderColor: '#f3f3f3'
        },
        tooltip: {
          formatter: '{a}'
        },
        data: this.lineChartData.thisYear
      },
      {
        name: '去年',
        type: 'line',
        smooth: true, // 是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
          normal: {
            color: '#00ca95'
          }
        },
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#00ca95'
          },
          formatter: '{c}'
        },

        itemStyle: {
          color: '#00ca95',
          borderColor: '#fff',
          borderWidth: 3
        },

        data: this.lineChartData.lastYear
      }
    ]
  };
  echart.setOption(option);
},



</script>

<style lang='less' scoped>
.lineChart{
    width: 100%;
    height: 220px;
}
</style>