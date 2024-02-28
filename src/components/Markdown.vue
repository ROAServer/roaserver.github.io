<script setup lang="ts">
import {marked} from "marked";
import {ElMessage} from "element-plus";

const h = ref()

const input_text = ref()

const getAndLoadMarkdownFromURL = () => {
  console.log(input_text.value)
  const xhr = new XMLHttpRequest()
  xhr.open('GET', input_text.value)
  xhr.send()
  xhr.onload = () => {
    h.value = marked(xhr.responseText)
  }
}

</script>

<template>
<div
  class="min-w-300px w-70% max-w-1000px mx-a my-5 p-10 b-rounded-10 b-solid b-1 b-#555 bg-blur"
>
  <el-input v-model="input_text">
    <template #prepend>Markdown URL</template>
    <template #append>
      <el-button @click="getAndLoadMarkdownFromURL">Submit</el-button>
    </template>
  </el-input>

  <div v-html="h" class="b b-black b-solid"></div>
</div>
</template>

<style scoped>

</style>