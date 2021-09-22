module.exports = {
  title: '跨越高山和大海的小鸟',
  description: '跨越高山和大海的小鸟',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '跨越高山和大海的小鸟' }],
    ['meta', { name: 'KeyWords', content: 'vuepress 介绍, vuepress 说明, 跨越高山和大海的小鸟' }]
  ],
  themeConfig: {
    logo: '/assets/img/bird.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      'about',
      {
        title: '美丽的css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/c-aaa',
          '/css/c-bbb',
          '/css/c-ccc'
        ]
      },
    ],
    lastUpdated: 'Last Updated'
  }

}