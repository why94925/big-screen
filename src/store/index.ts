import { defineStore } from "pinia";
import { getList } from '../api/list'
import { RootObject, Children, ChinaAdd, ChinaTotal, LocalCityNCOVDataList } from './type'

export const useStore = defineStore('MSG', {
    state: () => {
        return {
            list: <RootObject>{},
            items: <Children[]>[],
            chinaAdd: <ChinaAdd>{},
            chinaTotal: <ChinaTotal>{},
            localCityNCOVDataList: <LocalCityNCOVDataList[]>[]
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
        }
    }
})