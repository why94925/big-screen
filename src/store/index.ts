import { defineStore } from "pinia";
import { getList } from '../api/list'
import { RootObject, Children, ChinaAdd, ChinaTotal, LocalCityNCOVDataList } from './type'


type LineData = {
    dataList: string[],
    thisYear: number[]
}
export const useStore = defineStore('MSG', {
    state: () => {
        return {
            list: <RootObject>{},
            items: <Children[]>[],
            chinaAdd: <ChinaAdd>{},
            chinaTotal: <ChinaTotal>{},
            localCityNCOVDataList: <LocalCityNCOVDataList[]>[],
            lineData: <LineData> {}
        }
    },

    getters: {},

    actions: {
        async getListData() {
            const res = await getList();
            this.list = res.data.data.data;
            this.chinaAdd = res.data.data.data.diseaseh5Shelf.chinaAdd
            this.chinaTotal = res.data.data.data.diseaseh5Shelf.chinaTotal
        },
        getItemDetails(children: Children[]) {
            this.items = children
        },
        async getLocalCityNCOVDataList () {
            const res = await getList();
            this.localCityNCOVDataList = res.data.data.data.localCityNCOVDataList.slice(0, 10)
            this.lineData.dataList = this.localCityNCOVDataList.map(v => v.city)
            this.lineData.thisYear = this.localCityNCOVDataList.map(v => v.mediumRiskAreaNum);
        }
    }
})