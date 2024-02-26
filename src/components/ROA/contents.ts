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
              text: '一个Q群',
              describe: '钒磷氮'
            },
            '相识。由于有着相同的对MC的喜爱，再加上当时正值生电玩法流行，两人决定一起开服联机。'
          ],
          [
            '后来，他们逐渐认识了更多的MCer，也在',
            {
              href: 'https://jq.qq.com/?_wv=1027&k=CBTFIokL',
              text: '其他服务器',
              describe: 'CSC'
            },
            '遇见过志同道合的人。他们接连开服，从纯净服到mod服、插件服、再到mcdr，还有水桶水龙头等等，逐渐熟悉了开服的点点滴滴。在国内疫情告一段落后，他们相约暑假一起集资，开一个真正的公益服务器。'
          ]
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
      },
      {
        type: 'primary',
        content: '结构升级'
      },
      {
        type: '',
        timestamp: '2020-11',
        title: '成立若谷工作室',
        describe: '在服务器经营如火如荼时，一些问题也在暗处出现...',
        content: [
          '随着无铭服务器的玩家数量越来越多，开服越来越久，服务器面临着两个方面的问题：资金来源，和组织结构。来自玩家们的微薄的捐助通常情况下只是杯水车薪，甚至无法支持电费；而越做越大的服务器也需要一个合理的组织结构。',
          [
            '为此，服务器管理层决定成立一个工作室。这就是',
            {
              href: 'https://www.ruogustudio.net/',
              text: '若谷工作室'
            },
            '。'
          ],
          '工作室下设几个分部，无铭分部是其中最核心的一个。工作室同时还向外提供技术服务，以获取一些资金用来支持服务器。'
        ]
      },
      {
        type: '',
        timestamp: '2021-03',
        title: '元点服务器',
        describe: '旧时代的结束？ 不，新时代的开始！',
        content: [
          [
            '2021年3月，为了彰显服务器崭新的风貌，无铭服务器正式更名为元点服务器。我们重绘了Logo，重写了Slogan，创立了',
            {
              href: '',
              text: '官方账号'
            },
            '，并制作了服务器的专属片头。'
          ],
          '元点改变了名字，深化了内涵，但支撑起元点，见证时代的，还是那群人。'
        ]
      },
      {
        type: 'primary',
        content: '广泛外宣'
      },
      {
        type: '',
        timestamp: '2021-08',
        title: 'B站官号',
        describe: '在服务器一周年之际，我们终于注册了B站官号',
        content: [
          '为什么直到服务器一周年才注册官号？',
          '因为当时几个管理普遍认为服务器官号的入站答题应该以满分为佳，但是反复尝试分数却一直在90~99范围内波动，始终没有满分。后来这个计划就搁浅了。',
          '直到服务器迎来了一周年，由于发布纪念视频的必要性，管理们终于接受了91分的不完美，注册了官号。',
          [
            '虽然',
            {
              href: 'https://www.bilibili.com/video/BV1RA411A7Ho',
              text: '周年宣传视频',
            },
            '只有不到千万的播放量，但是这是属于我们的印记，同时也是服务器正式外宣，从邀请制的半私服转向公开服务器的开始。'
          ]
        ]
      },
      {
        type: '',
        timestamp: '2021-08',
        title: 'MCBBS宣传帖',
        describe: '又过了五天后，MCBBS宣传帖上线',
        content: [
          [
            {
              href: 'https://www.mcbbs.net/thread-1251976-1-1.html',
              text: 'MCBBS宣传贴',
              describe: '永远怀念MCBBS'
            },
            '审核通过的那天，刚好是服务器开服的第370天。'
          ],
          'MCBBS的用户活跃度真的很高，大量进群的新人直接催生出了外服、空岛服和大厅服。',
          '至此，元点服务器几乎就是现在的模样了'
        ]
      },
      {
        type: 'primary',
        content: '服务器联盟与外服自管会'
      },
      {
        type: '',
        timestamp: '2021-02-12',
        title: 'TIMELEAK服务器',
        describe: '第一次服间深度合作',
        content: [
          [
            '2021年新年期间，司沐与',
            {
              href: 'https://jq.qq.com/?_wv=1027&k=ROgB7DNr',
              text: 'Timeleak'
            },
            '腐竹孑染-27在',
            {
              href: 'https://jq.qq.com/?_wv=1027&k=M3v6rOwG',
              text: 'MasaMod汉化群'
            },
            '相识。'
          ],
          [
            '在了解到对方都是腐竹时，司沐和27产生了举办联谊活动的想法。那时候正值Dream的',
            {
              href: 'https://www.bilibili.com/video/BV1aN41197wq',
              text: '猎人游戏'
            },
            '大火，于是元点与沙漏服的联谊活动就定为了猎人游戏——当然，还有必不可少的参观服务器。'
          ],
          '这时候，与元点关系紧密的服务器已经有WC和TL了。三个服务器，每个服务器还认识其他服务器，那为什么不能成立一个服务器联盟呢？',
          '不过可惜的是，Timeleak服务器在当年后半年因为经费原因和腐竹的时间关系而停服了。'
        ]
      },
      {
        type: '',
        timestamp: '2022-01-18',
        title: '第一个真正的“熊”',
        describe: '出来开服，总得被熊的...',
        content: [
          '那天下午14：28分，一位ID为Xiaobole的玩家进入了迎新群。',
          '当时由于腐竹正在做防疫流调，其他几个管理也都临时有事，再加上工作日服里没人，于是就疏忽了对这个“新人”的观察。',
          '当我们发现出事之后，外服和空岛服已经被它熊了。而且熊服之后他还在发图炫耀。',
          [
            '在将它列入黑名单后，为了给其它友服提醒，我们梳理了整个事件的过程，并发布了专栏：',
            {
              href: 'https://www.bilibili.com/read/cv14894480',
              text: '《当腐竹做志愿者时，我们的服务器被熊了... 》'
            }
          ]
        ]
      },
      {
        type: '',
        timestamp: '...',
        title: '',
        describe: '...',
        content: [
          ''
        ]
      }
    ]

export {RoaHistory}
