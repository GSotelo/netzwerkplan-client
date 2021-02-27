const treeData = [
  {
    title: 'Project structure',
    key: 'm1',
    children: [
      {
        title: 'Area 1 ',
        key: 'm1-sb1',
        isLeaf: false,
        children: [
          {
            title: 'Drawing 20210201',
            key: 'm1-sb1-f1',
            isLeaf: true,
          },
          {
            title: 'Drawing 20210327',
            key: 'm1-sb1-f2',
            isLeaf: true,
          },
          {
            title: 'Drawing 20210419',
            key: 'm1-sb1-f3',
            isLeaf: true,
          }
        ]
      },
      {
        title: 'Area 2 ',
        key: 'm2-sb1',
        isLeaf: false,
        children: [
          {
            title: 'Drawing 20170201',
            key: 'm2-sb1-f1',
            isLeaf: true,
          },
          {
            title: 'Drawing 20170327',
            key: 'm2-sb1-f2',
            isLeaf: true,
          },
          {
            title: 'Drawing 20170419',
            key: 'm2-sb1-f3',
            isLeaf: true,
          }
        ]
      },
      {
        title: 'Area 3 ',
        key: 'm3-sb1',
        isLeaf: false,
        children: [
          {
            title: 'Drawing 20200901',
            key: 'm3-sb1-f1',
            isLeaf: true,
          },
          {
            title: 'Drawing 20200927',
            key: 'm3-sb1-f2',
            isLeaf: true,
          },
          {
            title: 'Drawing 20200919',
            key: 'm3-sb1-f3',
            isLeaf: true,
          }
        ]
      },
      {
        title: 'Area 4 ',
        key: 'm4-sb1',
        isLeaf: false,
        children: [
          {
            title: 'Drawing 20140201',
            key: 'm4-sb1-f1',
            isLeaf: true,
          },
          {
            title: 'Drawing 20140327',
            key: 'm4-sb1-f2',
            isLeaf: true,
          },
          {
            title: 'Drawing 20140419',
            key: 'm4-sb1-f3',
            isLeaf: true,
          }
        ]
      }
    ]
  }
];

export default treeData;