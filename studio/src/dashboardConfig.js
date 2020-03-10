export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e67ce54cec5f862fb69a40b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kccbd3f6',
                  apiId: '253bf935-fa88-4092-a451-0977d39adfe2'
                },
                {
                  buildHookId: '5e67ce55cec5f862fb69a40c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mn2cb4o4',
                  apiId: '11d0efc3-90a3-4c51-abb5-0fb01d0e06b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marijorg/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mn2cb4o4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
