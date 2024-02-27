<script setup lang="ts">
import {CountTo} from 'vue3-count-to'

const SubServerNum = 6
const TechSupportAgentNum = 3
function calcHoursSupported(): number {
  const start = new Date("2020/8/22")
  const end = new Date()
  const diff = end.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60))
}
const HoursSupported = calcHoursSupported()
const PlayerNum = 100
</script>

<template>
<div
  class="min-w-300px w-70% max-w-1000px mx-a my-5 p-10 b-rounded-10 b-solid b-1 b-#555 bg-blur"
>
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit bottom-line"
  >
    子服介绍
  </el-text>

  <el-text size="large" tag="p" class="indent-2em p-4 pb-0 line-height-1.5em">
    服务器为Velocity群组服，不含有任何原版（vanilla）没有的特性。没有圈地、金钱、tpa等等元素。你可以在服务器中体验到与纯原版单人档相同的体验。
  </el-text>

  <el-text size="large" tag="p" class="indent-2em p-4 pb-0 line-height-1.5em">
    在这里，懂得生电知识的“技术员”们可以尽情的建造各类生电机器来提高生产力，量产一切；而懂得建筑、地形的“建筑师”们也可以在这里利用极其充裕的物资进行创作。
  </el-text>

  <el-text type="info" tag="p" class="indent-2em p-4 pb-0 italic">
    具体介绍: 敬请期待
  </el-text>

  <div
        style="
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: stretch;
"
    class="mt-4"
  >
    <el-card class="w-128px h-128px mt-1 b-rounded-5">
      <span class="material-symbols-outlined color-#409EFF ">
        database
      </span>
      <count-to :startVal="0" :endVal="SubServerNum"/>
      <br>
      <el-text type="primary" size="small" class="font-bold">
        Minecraft Servers and more
      </el-text>
    </el-card>

    <el-card class="w-128px h-128px mt-1 b-rounded-5">
      <span class="material-symbols-outlined color-#409EFF ">
        support_agent
      </span>
      <count-to :startVal="0" :endVal="TechSupportAgentNum"/>
      <br>
      <el-text type="primary" size="small" class="font-bold">
        Technicians maintain anytime
      </el-text>
    </el-card>

    <el-card class="w-128px h-128px mt-1 b-rounded-5">
      <span class="material-symbols-outlined color-#409EFF ">
        timer
      </span>
      <count-to :startVal="0" :endVal="HoursSupported"/>
      <br>
      <el-text type="primary" size="small" class="font-bold">
        Hours Of Support for players
      </el-text>
    </el-card>

    <el-card class="w-128px h-128px mt-1 b-rounded-5">
      <span class="material-symbols-outlined color-#409EFF ">
        group
      </span>
      <count-to :startVal="0" :endVal="PlayerNum"/>
      <br>
      <el-text type="primary" size="small" class="font-bold">
        Players looking forward you
      </el-text>
    </el-card>
  </div>
</div>
</template>

<style scoped>
.bottom-line {
  border-bottom: var(--el-color-primary) solid 3px;
}

h1 {
  font-size: xx-large;
}
</style>