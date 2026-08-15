/* ========== Portfolio Data (v2 预览版) ========== */
const portfolioData = {
  /* 1. 游戏运营 · 内容推广（核心卖点，前置） */
  gameops: {
    id: 'gameops',
    name: '游戏运营 · 内容推广',
    icon: '🎮',
    desc: '游戏内容运营与整合营销：从动漫漫剪到游戏宣发，单平台浏览量突破 600万+。',
    featured: {
      title: '网易游戏线上推广',
      desc: '单平台浏览量 600万+，独立负责宣推全流程',
      type: 'image',
      src: 'assets/images/marketing/m1.png',
      thumb: ''
    },
    groups: [
      {
        label: '动漫漫剪 & 游戏切片',
        items: [
          { title: '狐妖小红娘漫剪', desc: '单条播放 30万+ · 动漫推广向剪辑全案', src: 'https://zhangkaili.xyz/assets/videos/狐妖漫剪.mp4', type: 'video' },
          { title: '竹业漫剪', desc: '动漫 IP 混剪创作', src: 'https://zhangkaili.xyz/assets/videos/竹业漫剪.mp4', type: 'video' },
          { title: '世界之外混剪', desc: '游戏向混剪创作', src: 'https://zhangkaili.xyz/assets/videos/世界之外混剪.mp4', type: 'video' },
          { title: '游戏切片', desc: '游戏高光切片', src: 'https://zhangkaili.xyz/assets/videos/游戏切片.mp4', type: 'video' },
          { title: '真人舞台切片', desc: '舞台表演切片', src: 'https://zhangkaili.xyz/assets/videos/真人舞台切片.mp4', type: 'video' }
        ]
      },
      {
        label: '游戏营销短视频',
        items: [
          { title: '世外营销', desc: '游戏营销短视频', src: 'https://zhangkaili.xyz/assets/videos/世外营销.mp4', type: 'video' },
          { title: '世外营销 2', desc: '游戏营销短视频', src: 'https://zhangkaili.xyz/assets/videos/世外营销2.mp4', type: 'video' },
          { title: '世外营销 3', desc: '游戏营销短视频', src: 'https://zhangkaili.xyz/assets/videos/世外营销3.mp4', type: 'video' },
          { title: 'BW 合作推广', desc: 'BilibiliWorld 品牌合作推广', src: 'https://zhangkaili.xyz/assets/videos/bw合作推广.mp4', type: 'video' }
        ]
      },
      {
        label: '营销数据分析',
        items: [
          { title: '游戏营销数据总览', desc: '含15张营销数据截图，点击翻阅', type: 'gallery', thumb: 'assets/images/marketing/m1.png',
            gallery: [
              { title: '游戏营销数据 1', src: 'assets/images/marketing/m1.png' },
              { title: '游戏营销数据 2', src: 'assets/images/marketing/m2.png' },
              { title: '游戏营销数据 3', src: 'assets/images/marketing/m3.png' },
              { title: '游戏营销数据 4', src: 'assets/images/marketing/m4.png' },
              { title: '游戏营销数据 5', src: 'assets/images/marketing/m5.png' },
              { title: '游戏营销数据 6', src: 'assets/images/marketing/m6.png' },
              { title: '游戏营销数据 7', src: 'assets/images/marketing/m7.png' },
              { title: '游戏营销数据 8', src: 'assets/images/marketing/m8.png' },
              { title: '游戏营销数据 9', src: 'assets/images/marketing/m9.png' },
              { title: '游戏营销数据 10', src: 'assets/images/marketing/m10.png' },
              { title: '游戏营销数据 11', src: 'assets/images/marketing/m11.png' },
              { title: '游戏营销数据 12', src: 'assets/images/marketing/m12.png' },
              { title: '游戏营销数据 13', src: 'assets/images/marketing/m13.png' },
              { title: '游戏营销数据 14', src: 'assets/images/marketing/m14.png' },
              { title: '游戏营销数据 15', src: 'assets/images/marketing/m15.png' }
            ]
          },
          { title: 'BW活动推广数据', desc: '活动推广数据', src: 'assets/images/marketing/mbw.png', type: 'image' },
          { title: '狐妖漫剪数据', desc: '漫剪推广数据', src: 'assets/images/marketing/mhy.png', type: 'image' },
          { title: '软件推广数据', desc: '软件推广数据', src: 'assets/images/marketing/msoft.png', type: 'image' }
        ]
      }
    ]
  },

  /* 2. 英雄游戏 · 创意运营实习（硬核经历，正确标注） */
  internship: {
    id: 'internship',
    name: '英雄游戏 · 创意运营实习',
    icon: '💼',
    desc: '英雄游戏实习期间：雇主品牌推广、社群内容策划、海报设计与整合调研，产出 50+ 条内容。',
    featured: {
      title: '实习海报设计合集',
      desc: '10张创意海报 + 整合调研 + 实习视频作品',
      type: 'image',
      src: 'assets/images/posters/p8.jpg',
      thumb: ''
    },
    groups: [
      {
        label: '海报设计',
        items: [
          { title: '实习海报设计合集', desc: '含10张创意海报作品，点击翻阅', type: 'gallery', thumb: 'assets/images/posters/p8.jpg', viewMode: 'grid',
            gallery: [
              { title: '机车海报', src: 'assets/images/posters/p8.jpg' },
              { title: '放风筝', src: 'assets/images/posters/p1.jpg' },
              { title: '忧郁', src: 'assets/images/posters/p10.png' },
              { title: '游戏图标动态效果', src: 'assets/images/posters/p7.jpg' },
              { title: '66抬头海报', src: 'assets/images/posters/p6.png' },
              { title: '1280海报', src: 'assets/images/posters/p2.png' },
              { title: '1.3海报', src: 'assets/images/posters/1.pp5.jpg' },
              { title: '2.2海报', src: 'assets/images/posters/ppp5.jpg' },
              { title: '3号海报', src: 'assets/images/posters/pp5.jpg' },
              { title: '4号海报', src: 'assets/images/posters/p5.jpg' }
            ]
          }
        ]
      },
      {
        label: '整合调研',
        items: [
          { title: '66周边衍生', desc: 'IP周边衍生设计', src: 'assets/images/research/r1.png', type: 'image' },
          { title: '抽象大赛', desc: '活动设计', src: 'assets/images/research/r2.png', type: 'image' },
          { title: '雇主向帐号调研', desc: '用户调研分析', src: 'assets/images/research/r3.png', type: 'image' },
          { title: '四月社招海报（整活）', desc: '创意招聘海报 · 10MB', src: 'https://zhangkaili.xyz/assets/docs/四月社招海报(整活）.docx', type: 'doc', icon: '📄' },
          { title: '愚人节活动', desc: '节日活动策划', src: 'https://zhangkaili.xyz/assets/docs/愚人节活动.docx', type: 'doc', icon: '📄' },
          { title: '爆梗集结号', desc: '社交媒体内容策划', src: 'https://zhangkaili.xyz/assets/docs/爆梗🍉集结号.docx', type: 'doc', icon: '📄' }
        ]
      },
      {
        label: '实习视频作品',
        items: [
          { title: '开场视频', desc: '英雄游戏实习开场视频作品', src: 'assets/videos/intern/开场5.mp4', type: 'video' },
          { title: '3月16日作品', desc: '实习期间视频作品', src: 'https://zhangkaili.xyz/assets/videos/intern/3月16日 (5).mp4', type: 'video' },
          { title: '1月12日作品', desc: '实习期间视频作品', src: 'https://zhangkaili.xyz/assets/videos/intern/1月12日 (2)(1) (1) (1).mp4', type: 'video' },
          { title: '4月9日作品', desc: '实习期间视频作品', src: 'https://zhangkaili.xyz/assets/videos/intern/4月9日.mp4', type: 'video' },
          { title: '4月10日作品', desc: '实习期间视频作品', src: 'https://zhangkaili.xyz/assets/videos/intern/4月10日(1).mp4', type: 'video' },
          { title: '专辑封面挑战', desc: '实习期间视频作品', src: 'https://zhangkaili.xyz/assets/videos/intern/专辑封面挑战 (1).mp4', type: 'video' }
        ]
      }
    ]
  },

  /* 3. 策划方案（保留游戏/产品/活动相关） */
  planning: {
    id: 'planning',
    name: '策划方案',
    icon: '📋',
    desc: '游戏产品分析、短视频方案与社交媒体活动策划——从策略到落地的完整思考。',
    featured: {
      title: '《误入历史名场面》短视频策划',
      desc: '短视频系列策划方案 · 22MB PPTX',
      type: 'image',
      src: 'assets/images/covers/planning.png',
      thumb: ''
    },
    items: [
      { title: '《误入历史名场面》', desc: '短视频系列策划方案 · 22MB', src: 'https://zhangkaili.xyz/assets/docs/《误入历史名场面》短视频策划案.pptx', type: 'doc', icon: '📹' },
      { title: 'EDCC 模型', desc: '产品分析模型文档 · 1MB', src: 'https://zhangkaili.xyz/assets/docs/EDCC模型.docx', type: 'doc', icon: '📊' },
      { title: '无尽冬日产品模型解析', desc: '游戏产品深度分析', src: 'https://zhangkaili.xyz/assets/docs/无尽冬日产品模型解析.docx', type: 'doc', icon: '🎮' },
      { title: '圣诞节微博策划案', desc: '社交媒体活动策划', src: 'https://zhangkaili.xyz/assets/docs/圣诞节微博策划案.docx', type: 'doc', icon: '🎄' },
      { title: '四月社招海报（整活）', desc: '创意招聘海报设计 · 10MB', src: 'https://zhangkaili.xyz/assets/docs/四月社招海报(整活）.docx', type: 'doc', icon: '🎨' },
      { title: '愚人节活动', desc: '节日活动策划方案', src: 'https://zhangkaili.xyz/assets/docs/愚人节活动.docx', type: 'doc', icon: '🎉' },
      { title: '爆梗集结号', desc: '社交媒体内容策划', src: 'https://zhangkaili.xyz/assets/docs/爆梗🍉集结号.docx', type: 'doc', icon: '🍉' }
    ]
  },

  /* 4. 其他作品（弱相关，弱化收纳） */
  others: {
    id: 'others',
    name: '其他作品',
    icon: '✨',
    desc: '分镜头脚本、小说剧本、综艺 / 网络剧策划等延伸创作。',
    featured: {
      title: '分镜头 & 小说剧本',
      desc: '3张分镜头 + 5页小说剧本 + 综艺/网络剧策划',
      type: 'image',
      src: 'assets/images/storyboard/s1.png',
      thumb: ''
    },
    groups: [
      {
        label: '分镜头脚本',
        items: [
          { title: '分镜头脚本 1', desc: '原创分镜头设计', src: 'assets/images/storyboard/s1.png', type: 'image' },
          { title: '分镜头脚本 2', desc: '原创分镜头设计', src: 'assets/images/storyboard/s2.png', type: 'image' },
          { title: '分镜头脚本 3', desc: '原创分镜头设计', src: 'assets/images/storyboard/s3.png', type: 'image' }
        ]
      },
      {
        label: '小说剧本',
        items: [
          { title: '小说剧本 1', desc: '原创小说剧本页', src: 'assets/images/scripts/c1.jpg', type: 'image' },
          { title: '小说剧本 2', desc: '原创小说剧本页', src: 'assets/images/scripts/c2.jpg', type: 'image' },
          { title: '小说剧本 3', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本pp5.jpg', type: 'image' },
          { title: '小说剧本 4', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本p5.jpg', type: 'image' },
          { title: '小说剧本 5', desc: '原创小说剧本页', src: 'assets/images/scripts/c5.jpg', type: 'image' }
        ]
      },
      {
        label: '综艺 & 网络剧策划',
        items: [
          { title: '《再见 朋友》策划案', desc: '综艺节目完整策划方案 · 33MB', src: 'https://zhangkaili.xyz/assets/docs/《再见 朋友》策划案22.pptx', type: 'doc', icon: '📚' },
          { title: '网络剧策划《偷命》', desc: '网络剧完整策划方案 · 14MB', src: 'https://zhangkaili.xyz/assets/docs/网络剧策划《偷命》.pptx', type: 'doc', icon: '🎬' }
        ]
      }
    ]
  }
};
