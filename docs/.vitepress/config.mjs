import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dutch B1 Curriculum",
  description: "A comprehensive Dutch language learning curriculum from A0 to B1",
  base: '/dutch/',
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Dutch Curriculum',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'A0 (Foundations)', link: '/A0/' },
      { text: 'Docs', link: '/README.html' }
    ],
    
    sidebar: {
      '/A0/': [
        {
          text: 'A0 - Foundations',
          items: [
            { text: 'Overview', link: '/A0/' },
            {
              text: 'Competency 1: Understanding Sounds',
              collapsed: false,
              items: [
                { text: 'Lesson A0-01', link: '/A0/Competency-1-Understanding-Sounds/A0-01' }
              ]
            },
            {
              text: 'Competency 2: Introducing Yourself',
              collapsed: false,
              items: [
                { text: 'Lesson A0-02', link: '/A0/Competency-2-Introducing-Yourself/A0-02' }
              ]
            },
            {
              text: 'Competency 3: Describing People and Family',
              collapsed: false,
              items: [
                { text: 'Lesson A0-03', link: '/A0/Competency-3-Describing-People-and-Family/A0-03' }
              ]
            },
            {
              text: 'Competency 4: Greeting and Politeness',
              collapsed: false,
              items: [
                { text: 'Lesson A0-04', link: '/A0/Competency-4-Greeting-and-Politeness/A0-04' }
              ]
            },
            {
              text: 'Competency 5: Counting and Quantities',
              collapsed: false,
              items: [
                { text: 'Lesson A0-05', link: '/A0/Competency-5-Counting-and-Quantities/A0-05' }
              ]
            }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/Dutch-B1-Curriculum' }
    ]
  }
})
