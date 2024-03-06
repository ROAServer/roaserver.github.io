type TextWithLink = {
      text: string,
      href: string,
      describe?: string
    }

type ParaWithLink = TextWithLink | string

type Paragraph = ParaWithLink[] | string

type HistoryTitle = {
      type: 'primary',
      content: string
    }

type HistoryContent = {
      type: '',
      timestamp: string,
      title: string
      describe: string,
      content: Paragraph[]
    }

type TimelineLine = HistoryTitle | HistoryContent

export {TimelineLine}
