<script setup lang="ts">

import {ArrowRightBold} from "@element-plus/icons-vue";
</script>

<template>
  <div
      class="min-w-300px w-70% max-w-1000px h-fix mx-a my-5 p-10 b-rounded-10  b-solid b-1 b-#555 bg-blur"
  >
    <el-text
        type="primary"
        tag="h1"
        class="px-3 w-fit bottom-line"
    >
      关于我们
    </el-text>

    <el-text tag="p" class="mt-4 indent-2em">
      这里是【元点】服务器：Result Of All，简称ROA，成立于2020年8月22日。
    </el-text>
    <el-text tag="p" class="mt-2 indent-2em">
      服务端版本目前为 1.20.1，支持 1.7.2-1.20.x 范围内的所有版本进入。
    </el-text>

    <div
        style="
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: stretch;
"
    >

    <el-card
        class="min-w-200px w-30% mt h-full b-rounded-5"
        body-class="p-0"
    >
      <img src="/image/ROA_mirror.png" alt="[ROA Logo]" class="w-full" />
    </el-card>

    <el-card class="min-w-250px w-66% mt h-full b-rounded-5">
      <template #header>
        <el-text tag="h2" type="primary">
          元点服务器简介
        </el-text>

        <el-text tag="p" class="italic mt-3 indent-2em line-height-1.5em">
          一个致力于以科学（生电）技术为核心，发展生产力,并以此来建设成一个生产力高度发展，科技水平持续进步，劳动生产率空前提高，劳动时间大大缩短，产品极大丰富的环境的综合性服务器。
        </el-text>
      </template>

      <div
          style="
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
"
      >
        <div
            class="min-w-190px w-48% mt-1"
        >
          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">成立日期: </span>
            22 August 2020
          </el-text>
          <br>

          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">官网: </span>
            <a href="http://roa.ruogustudio.net">
                roa.ruogustudio.net
            </a>
          </el-text>
          <br>

          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">QQ迎新群:</span>
            <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=bWMWisyTHKaWPnYMI5AOaOw5xFZ5nUqI&authKey=ua%2FKTqz542WNh%2B7cq7rszgmiq%2FlWo9N7Hc8r7ODnccdLT8%2FjQpCNkSYQr585ub0O&noverify=0&group_code=736141633">
              736141633
            </a>
          </el-text>
          <br>

          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">IP地址: </span>
            在迎新群审核获取
          </el-text>
          <br>
        </div>

        <div
            class="min-w-190px w-48% mt-1"
        >
          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">运营模式: </span>
            公益服务器
          </el-text>
          <br>

          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">主机类型: </span>
            专业服务器
          </el-text>
          <br>

          <el-text tag="p">
            <el-icon color="#409EFF"><ArrowRightBold /></el-icon>
            <span class="font-bold">电子邮箱: </span>
            ruoguteam@163.com
          </el-text>
          <br>
        </div>
      </div>

      <template #footer>
        <p class="indent-2em my-0.5em line-height-1.5em">
          元点服务器具有内外服制度。
        </p>

        <p class="indent-2em my-0.5em line-height-1.5em">
          区分开内外服的不是金钱与关系，而是品格与能力！
        </p>

        <p class="indent-2em my-0.5em line-height-1.5em">
          玩家可以在加入审核群接受审核并通过后进入外服。在进入外服三天后，可以申请进入内服。这时，如果这三天里你在外服的表现与风评良好，且在内服审核试题获得的成绩优异，那么恭喜，你从这一刻起就是内服成员了。
        </p>

        <p class="indent-2em my-0.5em line-height-1.5em">
          不过，内服成员并不意味着更多特权，而是意味着更多的责任与权利。这二者是对立统一的。
        </p>
      </template>
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
