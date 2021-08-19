module.exports = {
  locales: {
    '/': {
      lang: 'ja-JP', // this will be set as the lang attribute on <html>
      title: 'バイア祭り 2021 ',
      description: '',
    },
    '/en/': {
      lang: 'en-US',
      title: 'BioMatsuri 2021',
      description: '',
    }
  },
  themeConfig: {
    search: false,
    logo: '/biomatsuri.jpg',
    locales: {
      '/': {
        selectText: 'Language',
        label: '日本語',
        nav: [
          { text: '準備', link: '/preparation/' },
          { text: '時刻表', link: '/timetable/' },
          { text: 'ザ・キット', link: '/kit/' },
          { text: 'ワークショップ',
            items: [
                { text: 'DNAの抽出', link: '/workshops/dna-extraction/' },
                { text: '人工細胞', link: '/workshops/artificial-cells/' },
                { text: 'バクテリアの培養', link: '/workshops/cultivating-bacteria/' },
                { text: '顕微鏡', link: '/workshops/microscopy/' }
              ]
           },
        ]
      },
      '/en/': {
        selectText: 'Language',
        label: 'English',
        nav: [
          { text: 'Preparation', link: '/en/preparation/' },
          { text: 'Timetable', link: '/en/timetable/' },
          { text: 'The Kit', link: '/en/kit/' },
          { text: 'Workshops',
            items: [
                { text: 'DNA Extraction', link: '/en/workshops/dna-extraction/' },
                { text: 'Artificial Cells', link: '/en/workshops/artificial-cells/' },
                { text: 'Cultivating Bacteria', link: '/en/workshops/cultivating-bacteria/' },
                { text: 'Microscopy', link: '/en/workshops/microscopy/' }
              ]
           }
        ]
      }
    }
  }
}
