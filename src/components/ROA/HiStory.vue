<script setup lang="ts">
import {ref, Ref} from 'vue'

import {TimelineLine} from "~/components/ROA/contents/History";

let History: Ref<TimelineLine[]> = ref([])

const historyRepoUrl = function (): string {
  const isDev = import.meta.env.DEV
  if (isDev) {
    return 'https://raw.githubusercontent.com/ROAServer/ROAServerWebsite-Datas/refs/heads/master/history/history_timeline.json'
  } else {
    return 'https://roa.ruogustudio.net/webROA/res/data/history_timeline.json'
  }
} ()

function getHistory() {
  const url = historyRepoUrl
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.timeout = 3000
  xhr.onload = () => {
    const r = xhr.responseText
    History.value = JSON.parse(r)
  }
  xhr.send()
}

getHistory()

function getDateNow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0'+(now.getMonth()+1)).slice(-2);
  const date = ('0'+now.getDate()).slice(-2);
  return `${year}-${month}-${date}`;
}
</script>

<template>
  <div class="section_div">
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit mb-4 bottom-line"
  >
    历史发展
  </el-text>

  <el-text tag="p" size="large" class="indent-2em mt-2">
    公元二零二零年，肆虐的病毒，让那个寒假变得陌生。
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    而一种奇特的计算机程序，让一些本或许会擦肩而过的人，走在了一起。
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    这或许是一种另类的塞翁失马。
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    与此同时，新冠疫情似乎携带着让世界重新洗牌的力量，一步一步的向我们走来。
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    天道轮回，周而复始....真的是这样吗？
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    不，这一切都应该有个原因，有个源头。
  </el-text>
  <el-text tag="p" size="large" class="indent-2em mt-2">
    我们所要追寻的，就是这个元点，万物之由——
  </el-text>
  <br>
  <el-text tag="p" class="italic font-bold font-size-24px">
    The [Result Of All]
  </el-text>

  <el-timeline class="mt-8 p-0">
    <el-timeline-item
      v-for="item in History"
      :type="item.type"
      :center="item.type === 'primary'"
      :size="item.type === 'primary' ? 'large' : 'normal'"
      :timestamp="item.type === 'primary' ? '' : item.timestamp"
      placement="top"
    >
      <el-text
          v-if="item.type === 'primary'"
          type="primary"
          tag="h2"
          class="mb-1.5"
      >
        {{ item.content }}
      </el-text>

      <el-card v-else class="b-rounded-5">
        <el-text tag="h2">
          {{ item.title }}
        </el-text>

        <el-text type="info" size="large" tag="p" class="mt-1em italic">
          {{ item.describe }}
        </el-text>

        <template v-for="line in item.content">
          <el-text size="large" tag="p" class="indent-2em mt-0.5em line-height-1.5em">
            <template v-if="typeof line === 'string'">
              {{ line }}
            </template>

            <template v-else v-for="item in line">
              <template v-if="typeof item === 'string'">
                {{ item }}
              </template>

              <template v-else>
                <el-tooltip :content="item.describe?item.describe:item.text">
                  <a :href="item.href" target="_blank">
                    {{ item.text }}
                  </a>
                </el-tooltip>
              </template>
            </template>

          </el-text>
        </template>

      </el-card>
    </el-timeline-item>

    <el-timeline-item
        type="success"
        size="large"
        :timestamp="getDateNow()"
        placement="top"
    >
      <el-text type="success" tag="h2">
        你来到了这里
      </el-text>
    </el-timeline-item>
  </el-timeline>

</div>
</template>

<style scoped>
.bottom-line {
  border-bottom: var(--el-color-primary) solid 3px;
}

a {
  border-bottom: 2px dotted var(--el-color-primary);
}

a:hover {
  color: var(--el-color-primary);
}

h1 {
  font-size: xx-large;
}

h2 {
  font-size: x-large;
}

</style>