<script setup lang="ts">
import {marked} from "marked";
import {ElMessage} from "element-plus";

const props = defineProps<{
  href: string
}>()

const loaded = ref(false)
const loading = ref(true)
const failed = ref(false)

const h = ref()

const getAndLoadMarkdownFromURL = () => {
  loading.value = true
  const xhr = new XMLHttpRequest()
  xhr.open('GET', props.href)
  xhr.send()
  xhr.onerror = () => {
    console.log('F')
    failed.value = true
    loading.value = false
  }
  xhr.onload = () => {
    h.value = marked(xhr.responseText)
    loaded.value = true
    loading.value = false
  }
}

getAndLoadMarkdownFromURL()

</script>

<template>
  <div v-show="failed">
    <el-result
      icon="error"
      title="加载失败"
    >
      <template #extra>
        <el-button
            type="primary"
            @click="getAndLoadMarkdownFromURL"
            :loading="loading">
          重试
        </el-button>
      </template>
    </el-result>
  </div>

  <div
      v-show="loaded"
      v-html="h"
      class="markdown b b-#555 b-solid b-rounded-4 p-4"
  ></div>
</template>

<style>

.markdown {
  font-family: 'Noto Sans Mono', 'Noto Sans SC', sans-serif;
}

.markdown time {
  font-style: italic;
  color: #aaa;
}

.markdown blockquote {
  margin-right: 0;
  margin-left: 1.4em;
  border-left: 0.2em solid var(--el-color-primary);
  padding-left: 0.4rem;
}

.markdown pre {
  border: 1px solid #555;
  border-radius: 1rem;
  background-color: #333;
  padding: 1rem;
  overflow-x: scroll;
  color: #aaa;
}

.markdown p code {
  background-color: #333;
  color: #aaa;
}

.markdown p,b,i {
  line-height: 1.5em;
}

.markdown pre code {
  padding: 0 !important;
}

.markdown code,pre {
  font-family: 'JetBrains Mono', 'Noto Sans SC', sans-serif !important;
}
</style>