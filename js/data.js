/* ========== Portfolio Data ========== */
const portfolioData = {
  video: {
    id: 'video',
    name: '视频剪辑',
    icon: '🎬',
    desc: '混剪切片、微电影、宣传片——用镜头语言传达创意与情感。',
    featured: {
      title: '狐妖小红娘漫剪',
      desc: '单条播放量 30万+，独立完成脚本、精剪、配乐全流程',
      type: 'video',
      src: 'assets/videos/狐妖漫剪.mp4',
      thumb: ''
    },
    groups: [
      {
        label: '混剪 & 切片',
        items: [
          { title: '狐妖漫剪', desc: '单条播放30万+ · 动漫推广向剪辑全案', src: 'assets/videos/狐妖漫剪.mp4', type: 'video' },
          { title: '竹业漫剪', desc: '动漫混剪创作', src: 'assets/videos/竹业漫剪.mp4', type: 'video' },
          { title: '狐妖竹业漫剪', desc: '动漫混剪创作', src: 'assets/videos/狐妖竹业漫剪.mp4', type: 'video' },
          { title: '世界之外混剪', desc: '游戏混剪创作', src: 'assets/videos/世界之外混剪.mp4', type: 'video' },
          { title: '游戏切片', desc: '游戏精彩切片', src: 'assets/videos/游戏切片.mp4', type: 'video' },
          { title: '真人舞台切片', desc: '舞台表演切片', src: 'assets/videos/真人舞台切片.mp4', type: 'video' }
        ]
      },
      {
        label: '微电影',
        items: [
          { title: '《勇气》微电影', desc: '原创微电影 · 导演/剪辑/后期 · 365MB', src: '', type: 'placeholder', size: '365 MB' },
          { title: '心理微电影', desc: '心理健康主题 · 导演/剪辑 · 787MB', src: '', type: 'placeholder', size: '787 MB' },
          { title: '《长缨》微电影', desc: '原创微电影 · 导演/剪辑/后期 · 1.2GB', src: '', type: 'placeholder', size: '1.2 GB' }
        ]
      },
      {
        label: '地区宣传片',
        items: [
          { title: '《大美河北》宣传片', desc: '地区形象宣传片', src: 'assets/videos/大美河北宣传片.mp4', type: 'video' }
        ]
      }
    ]
  },

  marketing: {
    id: 'marketing',
    name: '营销推广',
    icon: '📈',
    desc: '游戏营销与品牌推广案例，单平台浏览量突破 600万+。',
    featured: {
      title: '网易游戏线上推广',
      desc: '单平台浏览量 600万+，独立负责宣推全流程',
      type: 'image',
      src: 'assets/images/marketing/游戏营销数据1.png',
      thumb: 'assets/images/marketing/游戏营销数据1.png'
    },
    groups: [
      {
        label: '游戏营销推广',
        items: [
          { title: '世外营销', desc: '游戏营销短视频', src: 'assets/videos/世外营销.mp4', type: 'video' },
          { title: '世外营销 2', desc: '游戏营销短视频', src: 'assets/videos/世外营销2.mp4', type: 'video' },
          { title: '世外营销 3', desc: '游戏营销短视频', src: 'assets/videos/世外营销3.mp4', type: 'video' },
          { title: '世外营销 4', desc: '游戏营销短视频', src: 'assets/videos/世外营销4.mp4', type: 'video' },
          { title: '世外营销 5', desc: '游戏营销短视频', src: 'assets/videos/世外营销5.mp4', type: 'video' },
          { title: '世外营销 6', desc: '游戏营销短视频', src: 'assets/videos/世外营销6.mp4', type: 'video' }
        ]
      },
      {
        label: '软件 & 活动推广',
        items: [
          { title: '软件推广', desc: '软件产品推广视频', src: 'assets/videos/软件推广.mp4', type: 'video' },
          { title: '软件推广 2', desc: '软件产品推广视频', src: 'assets/videos/软件推广2.mp4', type: 'video' },
          { title: '软件推广 3', desc: '软件产品推广视频', src: 'assets/videos/软件推广3.mp4', type: 'video' },
          { title: 'BW 合作推广', desc: 'BilibiliWorld 品牌合作推广', src: 'assets/videos/bw合作推广.mp4', type: 'video' }
        ]
      },
      {
        label: '营销数据分析',
        items: [
          { title: '游戏营销数据总览', desc: '含15张营销数据截图，点击翻阅', type: 'gallery', thumb: 'assets/images/marketing/游戏营销数据1.png',
            gallery: [
              { title: '游戏营销数据 1', src: 'assets/images/marketing/游戏营销数据1.png' },
              { title: '游戏营销数据 2', src: 'assets/images/marketing/游戏营销数据2.png' },
              { title: '游戏营销数据 3', src: 'assets/images/marketing/游戏营销数据3.png' },
              { title: '游戏营销数据 4', src: 'assets/images/marketing/游戏营销数据4.png' },
              { title: '游戏营销数据 5', src: 'assets/images/marketing/游戏营销数据5.png' },
              { title: '游戏营销数据 6', src: 'assets/images/marketing/游戏营销数据6.png' },
              { title: '游戏营销数据 7', src: 'assets/images/marketing/游戏营销数据7.png' },
              { title: '游戏营销数据 8', src: 'assets/images/marketing/游戏营销数据8.png' },
              { title: '游戏营销数据 9', src: 'assets/images/marketing/游戏营销数据9.png' },
              { title: '游戏营销数据 10', src: 'assets/images/marketing/游戏营销数据10.png' },
              { title: '游戏营销数据 11', src: 'assets/images/marketing/游戏营销数据11.png' },
              { title: '游戏营销数据 12', src: 'assets/images/marketing/游戏营销数据12.png' },
              { title: '游戏营销数据 13', src: 'assets/images/marketing/游戏营销数据13.png' },
              { title: '游戏营销数据 14', src: 'assets/images/marketing/游戏营销数据14.png' },
              { title: '游戏营销数据 15', src: 'assets/images/marketing/游戏营销数据15.png' }
            ]
          },
          { title: 'BW活动推广数据', desc: '活动推广数据', src: 'assets/images/marketing/bw活动推广数据.png', type: 'image' },
          { title: '狐妖漫剪数据', desc: '漫剪推广数据', src: 'assets/images/marketing/狐妖漫剪数据.jpg', type: 'image' },
          { title: '软件推广数据', desc: '软件推广数据', src: 'assets/images/marketing/软件推广数据.png', type: 'image' }
        ]
      }
    ]
  },

  planning: {
    id: 'planning',
    name: '策划方案',
    icon: '📋',
    desc: '综艺策划、短视频方案、产品模型解析——从策略到落地的完整思考。',
    featured: {
      title: '《再见 朋友》综艺策划案',
      desc: '完整综艺节目策划方案 · 33MB PPTX',
      type: 'doc',
      src: 'assets/docs/《再见 朋友》策划案22.pptx',
      thumb: ''
    },
    items: [
      { title: '《再见 朋友》策划案', desc: '综艺节目完整策划方案 · 33MB', src: 'assets/docs/《再见 朋友》策划案22.pptx', type: 'doc', icon: '📚' },
      { title: '网络剧策划《偷命》', desc: '网络剧完整策划方案 · 14MB', src: 'assets/docs/网络剧策划《偷命》.pptx', type: 'doc', icon: '🎬' },
      { title: '《误入历史名场面》', desc: '短视频系列策划方案 · 22MB', src: 'assets/docs/《误入历史名场面》短视频策划案.pptx', type: 'doc', icon: '📹' },
      { title: 'EDCC 模型', desc: '产品分析模型文档 · 1MB', src: 'assets/docs/EDCC模型.docx', type: 'doc', icon: '📊' },
      { title: '无尽冬日产品模型解析', desc: '游戏产品深度分析', src: 'assets/docs/无尽冬日产品模型解析.docx', type: 'doc', icon: '🎮' },
      { title: '圣诞节微博策划案', desc: '社交媒体活动策划', src: 'assets/docs/圣诞节微博策划案.docx', type: 'doc', icon: '🎄' },
      { title: '四月社招海报（整活）', desc: '创意招聘海报设计 · 10MB', src: 'assets/docs/四月社招海报(整活）.docx', type: 'doc', icon: '🎨' },
      { title: '愚人节活动', desc: '节日活动策划方案', src: 'assets/docs/愚人节活动.docx', type: 'doc', icon: '🎉' },
      { title: '爆梗集结号', desc: '社交媒体内容策划', src: 'assets/docs/爆梗🍉集结号.docx', type: 'doc', icon: '🍉' }
    ]
  },

  internship: {
    id: 'internship',
    name: '实习成果',
    icon: '💼',
    desc: '英雄游戏实习期间的海报设计、整合调研与视频创作。',
    featured: {
      title: '实习海报设计合集',
      desc: '10张创意海报 + 整合调研 + 18支视频作品',
      type: 'image',
      src: 'assets/images/posters/机车.jpg',
      thumb: 'assets/images/posters/机车.jpg'
    },
    groups: [
      {
        label: '海报设计',
        items: [
          { title: '实习海报设计合集', desc: '含10张创意海报作品，点击翻阅', type: 'gallery', thumb: 'assets/images/posters/机车.jpg', viewMode: 'grid',
            gallery: [
              { title: '机车海报', src: 'assets/images/posters/机车.jpg' },
              { title: '放风筝', src: 'assets/images/posters/放风筝66.jpg' },
              { title: '忧郁', src: 'assets/images/posters/忧郁.png' },
              { title: '游戏图标动态效果', src: 'assets/images/posters/生成游戏图标环绕人物的动态效果图片.jpg' },
              { title: '66抬头海报', src: 'assets/images/posters/66抬头.png' },
              { title: '1280海报', src: 'assets/images/posters/1280X1280.PNG' },
              { title: '1.3海报', src: 'assets/images/posters/1.3.jpg' },
              { title: '2.2海报', src: 'assets/images/posters/2.2.jpg' },
              { title: '3号海报', src: 'assets/images/posters/3.jpg' },
              { title: '4号海报', src: 'assets/images/posters/4.jpg' }
            ]
          }
        ]
      },
      {
        label: '整合调研',
        items: [
          { title: '66周边衍生', desc: 'IP周边衍生设计', src: 'assets/images/research/66周边衍生.png', type: 'image' },
          { title: '抽象大赛', desc: '活动设计', src: 'assets/images/research/抽象大赛 (2).png', type: 'image' },
          { title: '雇主向帐号调研', desc: '用户调研分析', src: 'assets/images/research/雇主向帐号调研.png', type: 'image' },
          { title: '四月社招海报（整活）', desc: '创意招聘海报 · 10MB', src: 'assets/docs/四月社招海报(整活）.docx', type: 'doc', icon: '📄' },
          { title: '愚人节活动', desc: '节日活动策划', src: 'assets/docs/愚人节活动.docx', type: 'doc', icon: '📄' },
          { title: '爆梗集结号', desc: '社交媒体内容策划', src: 'assets/docs/爆梗🍉集结号.docx', type: 'doc', icon: '📄' }
        ]
      },
      {
        label: '实习视频作品',
        items: [
          { title: '开场视频', desc: '实习期间视频作品', src: 'assets/videos/intern/开场5.mp4', type: 'video' },
          { title: '1月12日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/1月12日 (2)(1) (1) (1).mp4', type: 'video' },
          { title: '1月13日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/1月13日 (1) (1).mp4', type: 'video' },
          { title: '3月4日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/3月4日(1).mp4', type: 'video' },
          { title: '3月16日作品 A', desc: '实习期间视频作品', src: 'assets/videos/intern/3月16日 (5).mp4', type: 'video' },
          { title: '3月16日作品 B', desc: '实习期间视频作品', src: 'assets/videos/intern/3月16日 (6).mp4', type: 'video' },
          { title: '4月9日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/4月9日.mp4', type: 'video' },
          { title: '4月10日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/4月10日(1).mp4', type: 'video' },
          { title: '4月17日作品', desc: '实习期间视频作品', src: 'assets/videos/intern/4月17日(2).mp4', type: 'video' },
          { title: '专辑封面挑战', desc: '实习期间视频作品', src: 'assets/videos/intern/专辑封面挑战 (1).mp4', type: 'video' },
          { title: '佛子66', desc: '实习期间视频作品', src: 'assets/videos/intern/佛子66.mp4', type: 'video' },
          { title: '哈喽哈喽', desc: '实习期间视频作品', src: 'assets/videos/intern/哈喽哈喽.mp4', type: 'video' },
          { title: '我对你何止半分真心', desc: '实习期间视频作品', src: 'assets/videos/intern/我对你何止半分真心.mp4', type: 'video' },
          { title: '耶咦', desc: '实习期间视频作品', src: 'assets/videos/intern/耶咦4 (1).mp4', type: 'video' },
          { title: '镜头一拉', desc: '实习期间视频作品', src: 'assets/videos/intern/镜头一拉.mp4', type: 'video' },
          { title: '1087487388', desc: '实习期间视频作品', src: 'assets/videos/intern/1087487388 (1).mp4', type: 'video' }
        ]
      }
    ]
  },

  storyboard: {
    id: 'storyboard',
    name: '分镜头脚本',
    icon: '🎞️',
    desc: '原创分镜头设计，展现叙事能力与视觉想象力。',
    featured: {
      title: '分镜头脚本设计',
      desc: '3张分镜头脚本图',
      type: 'image',
      src: 'assets/images/storyboard/分镜头脚本1.png',
      thumb: 'assets/images/storyboard/分镜头脚本1.png'
    },
    items: [
      { title: '分镜头脚本 1', desc: '原创分镜头设计', src: 'assets/images/storyboard/分镜头脚本1.png', type: 'image' },
      { title: '分镜头脚本 2', desc: '原创分镜头设计', src: 'assets/images/storyboard/分镜头脚本2.png', type: 'image' },
      { title: '分镜头脚本 3', desc: '原创分镜头设计', src: 'assets/images/storyboard/分镜头脚本3.png', type: 'image' }
    ]
  },

  script: {
    id: 'script',
    name: '小说剧本',
    icon: '✍️',
    desc: '原创小说与剧本创作，用文字构建世界。',
    featured: {
      title: '小说剧本创作',
      desc: '5页原创小说剧本',
      type: 'image',
      src: 'assets/images/scripts/小说剧本1.jpg',
      thumb: 'assets/images/scripts/小说剧本1.jpg'
    },
    items: [
      { title: '小说剧本 1', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本1.jpg', type: 'image' },
      { title: '小说剧本 2', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本2.jpg', type: 'image' },
      { title: '小说剧本 3', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本3.jpg', type: 'image' },
      { title: '小说剧本 4', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本4.jpg', type: 'image' },
      { title: '小说剧本 5', desc: '原创小说剧本页', src: 'assets/images/scripts/小说剧本5.jpg', type: 'image' }
    ]
  }
};
