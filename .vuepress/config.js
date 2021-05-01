const base = process.env.BASE || '/';

module.exports = {
  base,
  title: 'VuePress howto',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  extend: '@vuepress/theme-default',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    repo: 'daggerok/vuepress-diagrams',
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
    },
  },
};
