type TextWithLink = {
      text: string,
      href: string
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

const RoaHistory: TimelineLine[] =
    [
      {
        type: 'primary',
        content: '服务器初成长'
      },
      {
        type: '',
        timestamp: '2020-03',
        title: '一个约定',
        describe: '一群人在疫情期间有了开服的想法',
        content: [
          [
            '疫情伊始。刚学会开服的腐竹和现在的一名管理在',
            {
              href: 'https://jq.qq.com/?_wv=1027&k=2rCAJ4r8',
              text: '一个Q群'
            },
            '相识。由于有着相同的对MC的喜爱，再加上当时正值生电玩法流行，两人决定一起开服联机。'
          ],
          '后来，他们逐渐认识了更多的MCer，也在其他服务器遇见过志同道合的人。他们接连开服，从纯净服到mod服、插件服、再到mcdr，还有水桶水龙头等等，逐渐熟悉了开服的点点滴滴。在国内疫情告一段落后，他们相约暑假一起集资，开一个真正的公益服务器。'
        ]
      },
      {
        type: 'primary',
        content: '正式开服'
      },
      {
        type: '',
        timestamp: '2020-07',
        title: '购置设备',
        describe: '那个小约定，实现了',
        content: [
            '2020年暑假，为了兑现当时买服务器开服的约定，我找到了当初约定好一起开服的人。',
            '在所有人的共同努力下，我们终于拥有了属于大家的专业服务器主机。'
        ]
      },
      {
        type: '',
        timestamp: '2020-08',
        title: '无铭服务器',
        describe: '2020年8月22日，无铭服务器正式开服',
        content: [
            '八月中旬，服务器开始试运行，并在几天后正式开启。这时候，为了继承当初在无铭群开服游戏的体验，在我们的共同商议下，新的服务器定名为无铭服务器。'
        ]
      }
    ]

export {RoaHistory}
