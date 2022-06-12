// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/zh/features/personality
const BLOG = {
  AUTHOR: 'Zhuolin Wu', // 作者
  BIO: '一个怯懦的爱好者', // 作者简介
  LINK: 'https://blog-zhuolin-w.vercel.app/', // 网站地址
  KEYWORDS: 'Notion, 博客', // 网站关键词 英文逗号隔开
  NOTION_PAGE_ID:
  process.env.NOTION_PAGE_ID || '80ccd707ae9345d6b74d98bf567854d2', // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE:
    process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE:
    process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // 主题， 支持 ['next','hexo',"fukasawa','medium','example'] @see https://preview.tangly1024.com
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  HOME_BANNER_IMAGE: './bg_image.jpg', // 首页背景大图，默认文件：/public/bg_image.jpg 。会被Notion中的封面图覆盖。
  SINCE: '', // e.g if leave this empty, current year will be used.
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX
  APPEARANCE: 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  FONT: 'font-serif tracking-wider subpixel-antialiased', // 文章字体 ['font-sans', 'font-serif', 'font-mono'] @see https://www.tailwindcss.cn/docs/font-family
  FONT_AWESOME_PATH:
    'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.4/css/all.min.css', // 图标库CDN ，国内推荐BootCDN，国外推荐 CloudFlare https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css
  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_LIST_STYLE: 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: 12, // 预览博客行数
  POST_RECOMMEND_COUNT: 6, // 推荐文章数量
  POSTS_PER_PAGE: 6, // post counts per page
  POSTS_SORT_BY: 'date', // 排序方式 'date'按时间,'notion'由notion控制

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: 'zl_w00@163.com',
  CONTACT_WEIBO: '',
  CONTACT_TWITTER: '',
  CONTACT_GITHUB: '',
  CONTACT_TELEGRAM: '',

  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 鼠标点击烟花特效

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: true, // 点击宠物挂件切换博客主题

  // 评论互动 可同时开启多个支持 GISCUS CUSDIS UTTERRANCES GITALK

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '3878a1c6-87f2-4d92-a458-81cd1acddbc6', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
  process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
  process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
  'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version

  // 站点统计
  ANALYTICS_BUSUANZI_ENABLE: true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.net/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.net , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx

  // 无关紧要的配置
  AVATAR: '/avatar.png', // 作者头像，被notion中的ICON覆盖。如果没有ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // 站点标题 ，被notion中的页面标题覆盖
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
