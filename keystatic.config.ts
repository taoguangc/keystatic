import { config, collection, singleton, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'cloud'
  },
  cloud: {
    project: 'emptyarea/keystatic'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: {
            label: 'SEO-friendly slug',
            description: 'This will define the file/folder name for this entry'
          }
        }),
        description: fields.text({
          label: '描述',
          multiline: true
        }),
        pubDate: fields.date({
          label: '发布日期',
          description: '发布的日期'
        }),
        updatedDate: fields.date({
          label: '更新日期',
          description: '更新的日期'
        }),
        heroImage: fields.image({
          label: '大图',
          directory: './'
        }),
        content: fields.mdx({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true
        })
      }
    })
  },
  singletons: {
    settings: singleton({
      label: 'Settings',
      path: 'custom/content/path/settings',
      schema: {}
    })
  }
})
