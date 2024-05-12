<script setup lang="ts">

import {ComputedRef, computed, Ref, ref} from "vue";

const totalPhysicalMemory: Ref<number> = ref(0);
const usedPhysicalMemory: Ref<number> = ref(0);
const logicalCpuCount: Ref<number> = ref(0);
const systemLoadAvg: Ref<number[3]> = ref([0, 0, 0]);
const cpuTemp: Ref<number> = ref(0);

const memoryUsagePercentage: ComputedRef<number> = computed(() => {
  return (usedPhysicalMemory.value * 100 / totalPhysicalMemory.value)
      .toFixed(2);
})

const cpuUsagePercentage: ComputedRef<number> = computed(() => {
  return (systemLoadAvg.value[0] * 100 / logicalCpuCount.value)
      .toFixed(2);
})

function getServerStatus() {
  const url = "http://119.91.248.61:14900/query/status/ruogu-server-main?fromTime=0&countLimit=1&reverse=true";
  let xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.timeout = 3000;
  const handel = () => {
    const s = xhr.status
    if (s !== 200) {
      return
    }
    const r = JSON.parse(xhr.responseText)
    totalPhysicalMemory.value = parseFloat(r.data[0].systemInfo.memoryInfo.totalPhysicalMemory);
    usedPhysicalMemory.value = parseFloat(r.data[0].systemInfo.memoryInfo.usedPhysicalMemory);
    logicalCpuCount.value = parseFloat(r.data[0].systemInfo.processorInfo.logicalCpuCount);
    systemLoadAvg.value = parseFloat(r.data[0].systemInfo.systemLoadAvg);
    cpuTemp.value = parseFloat(r.data[0].systemInfo.processorInfo.cpuTemp);
  }
  xhr.onload = handel
  xhr.onerror = handel
  xhr.send()
}

getServerStatus()

</script>

<template>
  <div class="section_div">
    <el-text
        type="primary"
        tag="h1"
        class="px-3 w-fit mb bottom-line"
    >
      设备状态
    </el-text>

    <el-card
      class="b-rounded-5 pb-2"
    >
      <div>
        <el-text
          type="primary"
          class="font-bold font-size-32px"
        >
          CPU
        </el-text>

        <span class="material-symbols-outlined mx-2">
          memory
        </span>

        <el-text
          class="font-size-24px"
        >
          {{systemLoadAvg[0]}}
        </el-text>

        <span class="material-symbols-outlined mx-2 ml-8">
          device_thermostat
        </span>

        <el-text
          class="font-size-24px"
        >
          {{cpuTemp}}℃
        </el-text>

        <el-progress
          :text-inside="true"
          :stroke-width="32"
          :percentage="cpuUsagePercentage"
          class="mt"
        />
      </div>

      <el-divider/>

      <div>
        <el-text
          type="primary"
          class="font-bold font-size-32px"
        >
          MEMORY
        </el-text>

        <span class="material-symbols-outlined mx-2">
          memory_alt
        </span>

        <el-text
          class="font-size-24px"
        >
          {{(usedPhysicalMemory / 1024 / 1024/ 1024).toFixed(2)}}
          GB /
          {{(totalPhysicalMemory / 1024 / 1024 / 1024).toFixed(0) + '.00'}}
          GB
        </el-text>

        <el-progress
          :text-inside="true"
          :stroke-width="32"
          :percentage="memoryUsagePercentage"
          class="mt"
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.bottom-line {
  border-bottom: var(--el-color-primary) solid 3px;
}

h1 {
  font-size: xx-large;
}

h2 {
  font-size: x-large;
}

a {
  border-bottom: 1px dotted var(--el-color-primary);
}

a:hover {
  color: var(--el-color-primary);
}
</style>