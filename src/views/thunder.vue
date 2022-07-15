<template>
    <div id="thunder" class="thunder">
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
    const echart = echarts.init(document.querySelector('#thunder') as HTMLElement);
    await store.getLocalCityNCOVDataList();
    var data = props.dataList.slice(5, 10).map(v => {
        return {
            name: v,
            max: Math.max.apply(null, props.dataList.slice(5, 10).map(v => + v))
        }
    });
    var className = props.thisYear.slice(5, 10);
    var dataArr = [
        {
            value: className,
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4BFFFC',
                        // shadowColor: '#4BFFFC',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4BFFFC',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'radial',
                        x: 0.5, //右
                        y: 0.5, //下
                        r: 1,
                        colorStops: [{
                            offset: 1,
                            color: '#4BFFFC'
                        }, {
                            offset: 0,
                            color: 'rgba(0,0,0,0)'
                        }],
                        globalCoord: false
                    },
                    opacity: 0.8 // 区域透明度
                }
            }
        }
    ];
    var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
    const option = {
        backgroundColor: '#101736',
        title: {
            show: false,
            text: "数学薄弱知识点分析",
            x: "4%",

            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        color: colorArr,
        radar: {
            top: 20,
            shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
            },
            label: {
                distance: 10,
            },
            indicator: data,
            splitNumber: 3,
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(24,60,108,.5)', 'rgba(15,36,80,.5)', 'rgba(12,25,59,.5)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
        },
        series: [{
            type: 'radar',
            symbolSize: 8,
            // symbol: 'angle',
            data: dataArr
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
.thunder {
    width: 100%;
    height: calc(100% - 41px);
    background-color: #060e40;
    border-right: 1px solid #212028;
    border-left: 1px solid #212028;
    border-bottom: 1px solid #212028;
    box-shadow: 0 0 5px #212028;
}
</style>