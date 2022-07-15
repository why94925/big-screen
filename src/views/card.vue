<template>
    <div class="card">
        <section>
            <div>较昨日+{{store.chinaAdd.localConfirmH5}}</div>
            <div>{{store.chinaTotal.localConfirm}}</div>
            <div>本土现有确诊</div>
        </section>
        <section>
            <div>较昨日{{store.chinaAdd.nowConfirm}}</div>
            <div>{{store.chinaTotal.nowConfirm}}</div>
            <div>现有确诊</div>
        </section>
        <section>
            <div>较昨日{{store.chinaAdd.confirm}}</div>
            <div>{{store.chinaTotal.confirm}}</div>
            <div>累计确诊</div>
        </section>
        <section>
            <div>较昨日{{store.chinaAdd.noInfect}}</div>
            <div>{{store.chinaTotal.noInfect}}</div>
            <div>无症状感染者</div>
        </section>
        <section>
            <div>较昨日+{{store.chinaAdd.importedCase}}</div>
            <div>{{store.chinaTotal.importedCase}}</div>
            <div>境外输入</div>
        </section>
        <section>
            <div>较昨日+{{store.chinaAdd.dead}}</div>
            <div>{{store.chinaTotal.dead}}</div>
            <div>累计死亡</div>
        </section>
    </div>
</template>

<script setup lang='ts'>
import { useStore } from '../store';

const store = useStore()
</script>

<style lang='less' scoped>
.card{
    display: flex;
    width: calc(((100% - 6px) / 3) * 3) ;
    flex-wrap: wrap;
    background-color: #060e40;
    box-shadow: 0 0 10px #060e40;
    section{
        border: 1px solid #212028;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: calc((100% - 6px) / 3);
        div:nth-child(2) {
            font-size: 20px;
            margin: 10px 0;
            font-weight: bold;
            color: #41b0db;
        }
    }
}
</style>