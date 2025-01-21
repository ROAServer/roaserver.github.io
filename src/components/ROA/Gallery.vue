<script setup lang="ts">
import {Ref, ref} from "vue";

import {ImageTag, ImageWithTags} from "~/components/ROA/data/Gallery";

const TagChoose: Ref<ImageTag | '所有'> = ref('所有')

let GalleryImages: Ref<ImageWithTags[]> = ref([])
let ImageTagList: Ref<ImageTag[]> = ref([])

const galleryRepoUrl: string = function (): string {
  const isDev = import.meta.env.MODE == 'development'
  if (isDev) {
    return 'https://raw.githubusercontent.com/ROAServer/ROAServerWebsite-Datas/refs/heads/master/gallery/gallery_images.json'
  } else {
    return 'https://roa.ruogustudio.net/webROA/res/data/gallery_images.json'
  }
} ()

const galleryTagsRepoUrl: string = function (): string {
  const isDev = import.meta.env.MODE == 'development'
  if (isDev) {
    return 'https://raw.githubusercontent.com/ROAServer/ROAServerWebsite-Datas/refs/heads/master/gallery/gallery_tags.json'
  } else {
    return 'https://roa.ruogustudio.net/webROA/res/data/gallery_tags.json'
  }
} ()

function getGalleryImages() {
  const url = galleryRepoUrl
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.timeout = 3000
  xhr.onload = () => {
    const r = xhr.responseText
    GalleryImages.value = JSON.parse(r)
  }
  xhr.send()
}

function getImageTagList() {
  const url = galleryTagsRepoUrl
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.timeout = 3000
  xhr.onload = () => {
    const r = xhr.responseText
    ImageTagList.value = JSON.parse(r)
  }
  xhr.send()

}

getGalleryImages()

getImageTagList()

</script>

<template>
  <div class="section_div px-1em">
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit mx-5.5 mb-4 bottom-line"
  >
    精彩截图
  </el-text>

  <div class="w-fit mx-a">
    <el-button-group>
      <el-button
        @click="TagChoose = '所有'"
      >
        所有
      </el-button>

      <el-button
        v-for="tag in ImageTagList"
        :key="tag"
        @click="TagChoose = tag"
      >
        {{ tag }}
      </el-button>
    </el-button-group>
  </div>

  <el-space
    direction="horizontal"
    :size="0"
    wrap
    class="pt-4 mx-5"
  >
    <el-card
      v-show="TagChoose === '所有' || image.tags.indexOf(TagChoose) !== -1"
      v-for="image in GalleryImages"
      class="w-300px m-1"
      :body-style="{padding: '0px'}"
    >
      <a :href="image.src" target="_blank">
        <el-image
          :src="image.smallSizeSrc? image.smallSizeSrc:image.src"
          fit="cover"
          class="w-full min-h-100px"
          :alt="'['+image.title+']'"
          loading="lazy"
        />
      </a>
      <div>
        <el-text
          type="primary"
          tag="p"
          class="p-3 font-size-24px"
        >
          {{ image.title }}
        </el-text>

        <el-text
          v-if="image.describe"
          type="info"
          tag="p"
          class="p-3 italic"
        >
          {{ image.describe }}
        </el-text>

        <el-tag
            v-for="tag in image.tags"
            type="info"
            class="mb-2 ml-2"
        >
          {{ tag }}
        </el-tag>

        <el-text
          v-if="image.date"
          type="info"
          tag="p"
          class="p-1"
        >
          {{ image.date }}
        </el-text>
      </div>
    </el-card>
  </el-space>
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


</style>