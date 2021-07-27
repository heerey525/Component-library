module.exports = {
    lang: 'zh-CN',
    title: '基础组件库',
    description: '一个收集起来的基础组件库',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    base: '/',
    // 注入到当前页面的 HTML <head> 中的标签
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: 'Gitee', link: 'https://gitee.com/hlshare' }, // 外部链接
        // 下拉列表
        {
          text: 'GitHub',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/heerey525' },
          ]
        }        
      ],
      sidebar: [
        '/guide/',
        '/components/ScrollNum'
      ]
    },
    plugins: [
      ['vuepress-plugin-code-copy', true]
    ]
  }