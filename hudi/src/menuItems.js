export const menuItems = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    submenu: [
      {
        title: 'web design',
      },
      {
        title: 'web development',
        submenu: [
          {
            title: 'Frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                submenu: [
                  {
                    title: 'Vanilla JS',
                    url: 'node',
                  },
                  {
                    title: 'Express',
                    url: 'php',
                    submenu: [
                      {
                        title: 'framework',
                        url: 'node',
                      },
                      {
                        title: 'library',
                        url: 'php',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'PHP',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
      },
    ],
  },
  {
    title: 'About',
    submenu: [
      {
        title: 'Who we are',
      },
      {
        title: 'Our values',
      },
    ],
  },
];
