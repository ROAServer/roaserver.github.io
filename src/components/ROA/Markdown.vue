<script setup lang="ts">
import {marked} from "marked";
import {ElMessage} from "element-plus";

const props = defineProps<{
  href: string
}>()

const h = ref()

const getAndLoadMarkdownFromURL = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', props.href)
  xhr.send()
  xhr.onload = () => {
    h.value = marked(xhr.responseText)
  }
}

getAndLoadMarkdownFromURL()

</script>

<template>
  <div v-html="h" class="b b-black b-solid"></div>
</template>

<style scoped>
pre {
  border: 1px solid #555;
  border-radius: 1rem;
  background-color: #333;
  padding: 1rem;
}

pre::before {
  content: 'code<br/>';
  color: #555;
  font-style: italic;
}
</style>