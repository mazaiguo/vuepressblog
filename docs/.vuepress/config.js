module.exports = {
  base:'/vuepressblog/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/Italy.png',
    nav: require('./nav/zh'),
    sidebar: require('./sidebar/zh'),
  },
  displayAllHeaders: false, // 显示所有页面的标题链接
  sidebar: 'auto', // 侧边栏配置
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    extractHeaders: [ 'h2', 'h3', 'h4' ],
  },
  search: true,
  searchMaxSuggestions: 10,
  sidebarDepth: 2,
  plugins: ['@vuepress/back-to-top', ['vuepress-plugin-code-copy', true]]
}