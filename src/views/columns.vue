<template>
  <div id="column" class="column">
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
  const echart = echarts.init(document.querySelector('#column') as HTMLElement);
  await store.getLocalCityNCOVDataList();
  console.log(props.dataList, 8888)
  console.log(props.thisYear, 9999)
  var data = props.dataList.slice(0, 6);
  var className= props.thisYear.slice(0, 6);
  const option = {
    tooltip: { show: false },
    grid: { left: 10, top: 10, bottom: 20, right: 10, containLabel: true },
    xAxis: {
        type: 'value',
        boundaryGap: false,
        max: 20, // Math.ceil(max / 4) * 5 || 10
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { show: false },
        axisLabel: { color: '#999' },
        splitLine: { lineStyle: { color: ['#CEEDFF'], type: [5, 8], dashOffset: 3 } },
    },
    yAxis: {
        type: 'category',
        data: data,
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { fontSize: 14, color: '#666', margin: 16, padding: 0 },
        inverse: true,
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            showBackground: true,
            backgroundStyle: { color: 'rgba(82, 168, 255, 0.1)', borderRadius: [0, 8, 8, 0] },
            itemStyle: {
                color: '#52A8FF',
                normal: {
                    borderRadius: [0, 8, 8, 0],
                    color: function (params: any) {
                        // 定义一个颜色集合
                        let colorList = [
                            '#52A8FF',
                            '#00B389',
                            '#FFA940',
                            '#FF5A57',
                            '#29EFC4',
                            '#F8AEA4',
                            '#FFC53D',
                            '#009982',
                            '#C099FC',
                            '#F5855F',
                        ];
                        // 对每个bar显示一种颜色
                        return colorList[params.dataIndex];
                    },
                },
            },
            barMaxWidth: 16,
            label: { show: true, position: 'insideRight', offset: [-5, 2], color: '#fff' },
            data: className
        },
    ],
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
.column {
  width: 100%;
  height: calc(100% - 41px);
  background-color: #060e40;
  border-right: 1px solid #212028;
  border-left: 1px solid #212028;
  border-bottom: 1px solid #212028;
  box-shadow: 0 0 5px #212028;
}
</style>