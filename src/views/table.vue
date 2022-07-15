<template>
    <div>
        <table class="table" border="1" cellspacing="0">
            <thead>
                <th>地区</th>
                <th>新增确诊</th>
                <th>累计确诊</th>
                <th>治愈</th>
                <th>死亡</th>
            </thead>
            <transition-group enter-active-class="animate_animated animate_flipInY" tag="tbody">
                <tr v-for="item in store.items" :key="item.name">
                    <td align="center">{{ item.name }}</td>
                    <td align="center">{{ item.today.confirm }}</td>
                    <td align="center">{{ item.total.confirm }}</td>
                    <td align="center">{{ item.total.heal }}</td>
                    <td align="center">{{ item.total.dead }}</td>
                </tr>
            </transition-group>
        </table>
    </div>
</template>

<script setup lang='ts'>
import { useStore } from '../store';
const store = useStore()

</script>

<style lang='less' scoped>
.table {
    width: 100%;
    border: 1px solid #212028;
    background-color: #060e40;
}

th,
tr td {
    padding: 3px;
    white-space: nowrap;
}

</style>