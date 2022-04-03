const htmlTreeSource = {
  name: 'html',
  type: 'tag-internal',
  children: [
    {
      name: 'body',
      type: 'tag-internal',
      children: [
        {
          name: 'h1',
          type: 'tag-internal',
          children: [
            {
              name: '',
              type: 'text',
              content: 'Сообщество',
            },
          ],
        },
        {
          name: 'p',
          type: 'tag-internal',
          children: [
            {
              type: 'text',
              content: 'Общение между пользователями Хекслета',
            },
          ],
        },
        {
          name: 'hr',
          type: 'tag-leaf',
        },
        {
          name: 'input',
          type: 'tag-leaf',
        },
        {
          name: 'div',
          type: 'tag-internal',
          className: 'hexlet-community',
          children: [
            {
              name: 'div',
              type: 'tag-internal',
              className: 'text-xs-center',
              children: [],
            },
            {
              name: 'div',
              type: 'tag-internal',
              className: 'fa fa-spinner',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const changeClass = (tree, classNameFrom, classNameTo) => {
  const iter = (node) => {
    const newClassName = classNameFrom === node.className ? classNameTo : node.className;

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map((child) => iter(child));
      return { ...node, className: newClassName, children: newChildren };
    }
    return { ...node, className: newClassName };
  };

  return iter(tree);
};

const newTree = changeClass(htmlTreeSource, 'hexlet-community', 'new-class');
console.log(newTree);
