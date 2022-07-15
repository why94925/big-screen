<template>
	<div id="china-map">
	</div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { nextTick, onMounted, toRaw } from 'vue';
import '../assets/china.js'
import { useStore } from '../store/index'
import { geoCoordMap } from '../assets/chinaCity'
import 'animate.css'



onMounted(async () => {
	const store = useStore()
	await store.getListData()
	const data = store.list.diseaseh5Shelf.areaTree[0].children.map(v => {
		return {
			name: v.name,
			value: geoCoordMap[v.name].concat(v.total.confirm),
			children: v.children
		}
	})
	const e = echarts.init(document.querySelector('#china-map') as HTMLElement);
	const option = {
		geo: {
			map: "china",
			aspectScale: 0.8,
			layoutCenter: ["50%", "50%"],
			layoutSize: "120%",
			itemStyle: {
				// normal: {
				areaColor: {
					type: "linear-gradient",
					x: 0,
					y: 1200,
					x2: 1000,
					y2: 0,
					colorStops: [
						{
							offset: 0,
							color: "#152E6E", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "#0673AD", // 50% 处的颜色
						},
					],
					global: true, // 缺省为 false
				},
				shadowColor: "#0f5d9d",
				shadowOffsetX: 0,
				shadowOffsetY: 15,
				opacity: 0.5,
				// },
			},

			emphasis: {
				areaColor: "#0f5d9d",
			},

			regions: [
				{
					name: "南海诸岛",
					itemStyle: {
						areaColor: "rgba(0, 10, 52, 1)",
						borderColor: "rgba(0, 10, 52, 1)",
						// normal: {
						opacity: 0,
						label: {
							show: false,
							color: "#009cc9",
							// },
						},
					},
					label: {
						show: false,
						color: "#FFFFFF",
						fontSize: 12,
					},
				},
			],
		},
		series: [
			{
				type: "map",
				map: "china",
				aspectScale: 0.8,
				layoutCenter: ["50%", "50%"], //地图位置
				layoutSize: "120%",
				zoom: 1, //当前视角的缩放比例
				// roam: true, //是否开启平游或缩放
				scaleLimit: {
					//滚轮缩放的极限控制
					min: 1,
					max: 2,
				},
				label: {
					show: true,
					color: "#FFFFFF",
					fontSize: 12,
				},
				itemStyle: {
					// normal: {
					areaColor: "#0c3653",
					borderColor: "#1cccff",
					borderWidth: 1.8,
					// },
				},
				emphasis: {
					areaColor: "#56b1da",
					label: {
						show: true,
						color: "#fff",
					},
				},
				data: data,
			},
			{
				name: 'Top 5',
				type: 'scatter',
				coordinateSystem: 'geo',
				//   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
				// symbolSize: [30,120],
				// symbolOffset:[0, '-40%'] ,
				symbol: 'pin',
				symbolSize: [45, 45],
				label: {
					// normal: {
					show: true,
					color: '#fff',
					formatter(value: any) {
						return value.data.value[2]
					}
					// }
				},
				itemStyle: {
					// normal: {
					color: '#D8BC37', //标志颜色
					// }
				},
				data: data,
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				zlevel: 1
			},
		]
	};

	nextTick(() => {
		e.setOption(option);
		getItems(store.list.diseaseh5Shelf.areaTree[0].children[11].children)
	})
	e.on('click', (a: any) => {
		getItems(a.data.children)
	})
	console.log(store.list.diseaseh5Shelf.areaTree[0].children[0], 888888)
	const getItems = (a: any) => {
		store.getItemDetails(a)
	}
	window.addEventListener('resize', () => {
		e.resize()
	})
})


</script>

<style lang='less' scoped>
#china-map {
	width: 100%;
	height: 600px;
}
</style>