module.exports = {
  locales: {
    '/': {
      lang: 'ja-JP', // this will be set as the lang attribute on <html>
      selectText: 'Languages',
      label: '日本語',
      title: 'バイア祭り 2021 ',
      description: ''
    },
    '/en/': {
      lang: 'en-US',
      selectText: 'Languages',
      label: 'English',
      title: 'BioMatsuri 2021',
      description: ''
    }
  },
  themeConfig: {
    search: false,
    logo: '/biomatsuri.jpg',
    locales: {
      '/': {
        selectText: 'English',
        label: '日本語',
        nav: [
          { text: 'Preparation', link: '/preparation/' },
          { text: 'What is BioMatsuri?', link: '/about/' },
          { text: 'Workshops', link: '/workshops/' },
        ]
      },
      '/en/': {
        selectText: '日本語',
        label: 'English',
        nav: [
          { text: 'Preparation', link: '/en/preparation/' },
          { text: 'What is BioMatsuri?', link: '/en/about/' },
          { text: 'The Kit', link: '/en/kit/' },
          { text: 'Workshops',
            items: [
                { text: 'Chinese', link: '/en/workshops/' },
                { text: 'Chinese', link: '/en/workshops/' },
              ]
           },


        ]
      }
    }
  }
}
