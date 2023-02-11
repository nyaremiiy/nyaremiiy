const settings = {
  colorTag: '#80183b',
  colorAttr: '#dabf00',
  colorDataAttr: '#04dfe1',
  colorText: '#aee4d7',
};
const arrayWords = [
  {
    text: '<!-- Salute ^_~ I will rewrite this code later... -->',
    style: {
      fontSize: 'clamp(0.75rem, 0.434rem + 1.58vw, 1.875rem)',
      color: 'silver',
    },
  },
  {
    text: '<h1 ',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      fontWeight: settings.fontWeightBold,
      color: settings.colorTag,
    },
  },
  {
    text: 'class',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      fontWeight: settings.fontWeightBold,
      color: settings.colorAttr,
    },
  },
  {
    text: '=',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      fontWeight: settings.fontWeightBold,
      color: settings.colorTag,
    },
  },
  {
    text: '"title"',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorDataAttr,
    },
  },
  {
    text: '>',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
  {
    text: 'Hello there! My name is Nazar and I am Web Developer!:)',
    style: {
      paddingLeft: 'clamp(1.25rem, 1.075rem + 0.88vw, 1.875rem)',
      fontSize: 'clamp(0.875rem, 0.068rem + 4.04vw, 3.75rem)',
      width: '100%',
      color: settings.colorText,
    },
  },
  {
    text: '</h1>',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
  {
    text: '<div ',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
  {
    text: 'class',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorAttr,
    },
  },
  {
    text: '=',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
  {
    text: '"text"',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorDataAttr,
    },
  },
  {
    text: '>',
    el: 'span',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
  {
    text: 'This site is written using the React library and many other libraries that I will write here later. May...',
    style: {
      fontSize: 'clamp(0.75rem, 0.259rem + 2.46vw, 2.5rem)',
      paddingLeft: 'clamp(1.25rem, 1.075rem + 0.88vw, 1.875rem)',
      color: settings.colorText,
      fontWeight: 400
    },
  },
  {
    text: '</div>',
    style: {
      fontSize: 'clamp(1rem, 0.491rem + 2.54vw, 2.813rem)',
      color: settings.colorTag,
    },
  },
];

export default arrayWords;
