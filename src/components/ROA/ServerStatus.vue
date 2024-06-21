<script setup lang="ts">

import {ComputedRef, computed, Ref, ref} from "vue";

const totalPhysicalMemory: Ref<number> = ref(0);
const usedPhysicalMemory: Ref<number> = ref(0);
const logicalCpuCount: Ref<number> = ref(0);
const systemLoadAvg: Ref<number[3]> = ref(0);
const cpuTemp: Ref<number> = ref(0);
const systemDescription: Ref<String> = ref("UNKNOWN");
const lastUpdate: Ref<Date> = ref(new Date(0));

const memoryUsagePercentage: ComputedRef<number> = computed(() => {
  return (usedPhysicalMemory.value * 100 / totalPhysicalMemory.value)
      .toFixed(2);
})

const cpuUsagePercentage: ComputedRef<number> = computed(() => {
  return (systemLoadAvg.value * 100 / logicalCpuCount.value)
      .toFixed(2);
})

function getServerStatus() {
  const url = "https://roa.ruogustudio.net/status/system";
  let xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.timeout = 3000;
  const handel = () => {
    const s = xhr.status
    if (s !== 200) {
      return
    }
    const r = JSON.parse(xhr.responseText)
    systemDescription.value = r.systemDescription
    lastUpdate.value = new Date(parseInt(r.queryTimeMillis))
    totalPhysicalMemory.value = parseInt(r.memoryTotal);
    usedPhysicalMemory.value = parseInt(r.memoryUsed);
    logicalCpuCount.value = parseInt(r.logicalProcessorCount);
    systemLoadAvg.value = parseFloat(r.loadAvg[0]);
    cpuTemp.value = parseFloat(r.processorTemperature);
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
          {{systemLoadAvg}} / {{logicalCpuCount}}
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
      <el-divider></el-divider>
      <div>
        <el-text
          type="info"
        >
          {{systemDescription}}
        </el-text>
        <br/>
        <el-text
          type="info"
        >
          更新时间：{{ lastUpdate }}
        </el-text>
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