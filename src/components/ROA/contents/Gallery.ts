type ImageTag = '其他' | '联谊活动' | '新春活动' | '日常照片' | '风景'

const ImageTagList: ImageTag[] = ['联谊活动','新春活动','日常照片','风景','其他']

type ImageWithTags = {
  title: string,
  tags: ImageTag[],
  src: string,
  smallSizeSrc?: string
  describe?: string,
  date?: string
}

export {ImageTagList, ImageWithTags, ImageTag}
