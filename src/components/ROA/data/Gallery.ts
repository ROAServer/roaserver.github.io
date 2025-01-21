type ImageTag = string

type ImageWithTags = {
  title: string,
  tags: ImageTag[],
  src: string,
  smallSizeSrc?: string
  describe?: string,
  date?: string
}

export {ImageWithTags, ImageTag}
