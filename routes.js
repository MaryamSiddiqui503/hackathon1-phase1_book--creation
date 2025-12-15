import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-textbook/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug', '1b0'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/config', '4ef'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/content', '02c'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/globalData', '58f'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/metadata', '647'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/registry', '125'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/routes', 'aa1'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog',
    component: ComponentCreator('/physical-ai-textbook/blog', 'a89'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/archive',
    component: ComponentCreator('/physical-ai-textbook/blog/archive', '23c'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors',
    component: ComponentCreator('/physical-ai-textbook/blog/authors', 'db7'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/physical-ai-textbook/blog/authors/all-sebastien-lorber-articles', 'abc'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors/yangshun',
    component: ComponentCreator('/physical-ai-textbook/blog/authors/yangshun', 'c53'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/first-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/first-blog-post', '1c9'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/long-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/long-blog-post', '309'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/mdx-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/mdx-blog-post', 'da9'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags',
    component: ComponentCreator('/physical-ai-textbook/blog/tags', '87b'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/docusaurus',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/docusaurus', '735'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/facebook',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/facebook', '736'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/hello',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/hello', '137'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/hola',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/hola', 'da4'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/welcome',
    component: ComponentCreator('/physical-ai-textbook/blog/welcome', '983'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/markdown-page',
    component: ComponentCreator('/physical-ai-textbook/markdown-page', '0c3'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/docs',
    component: ComponentCreator('/physical-ai-textbook/docs', 'aad'),
    routes: [
      {
        path: '/physical-ai-textbook/docs',
        component: ComponentCreator('/physical-ai-textbook/docs', '8e4'),
        routes: [
          {
            path: '/physical-ai-textbook/docs',
            component: ComponentCreator('/physical-ai-textbook/docs', '77b'),
            routes: [
              {
                path: '/physical-ai-textbook/docs/',
                component: ComponentCreator('/physical-ai-textbook/docs/', '259'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/intro',
                component: ComponentCreator('/physical-ai-textbook/docs/intro', 'fa2'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module1/1.1',
                component: ComponentCreator('/physical-ai-textbook/docs/module1/1.1', '696'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module1/1.2',
                component: ComponentCreator('/physical-ai-textbook/docs/module1/1.2', '010'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module1/1.3',
                component: ComponentCreator('/physical-ai-textbook/docs/module1/1.3', '6ea'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module2/2.1',
                component: ComponentCreator('/physical-ai-textbook/docs/module2/2.1', '033'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module2/2.2',
                component: ComponentCreator('/physical-ai-textbook/docs/module2/2.2', 'ef2'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module2/2.3',
                component: ComponentCreator('/physical-ai-textbook/docs/module2/2.3', '24d'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module3/3.1',
                component: ComponentCreator('/physical-ai-textbook/docs/module3/3.1', 'dc1'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module3/3.2',
                component: ComponentCreator('/physical-ai-textbook/docs/module3/3.2', '5ed'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module3/3.3',
                component: ComponentCreator('/physical-ai-textbook/docs/module3/3.3', '9cd'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module4/4.1',
                component: ComponentCreator('/physical-ai-textbook/docs/module4/4.1', 'e2c'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module4/4.2',
                component: ComponentCreator('/physical-ai-textbook/docs/module4/4.2', '79f'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/module4/4.3',
                component: ComponentCreator('/physical-ai-textbook/docs/module4/4.3', '0e2'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/preface',
                component: ComponentCreator('/physical-ai-textbook/docs/preface', '6db'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/references',
                component: ComponentCreator('/physical-ai-textbook/docs/references', '642'),
                exact: true,
                sidebar: "textbookSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-textbook/',
    component: ComponentCreator('/physical-ai-textbook/', '94f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
