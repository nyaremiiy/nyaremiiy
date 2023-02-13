const settings = {
  colorRedDark: '#ef2e79',
  colorRedLight: '#ff2cf1',
  colorBlue: '#167bc8',
  colorYellow: '#ffaf1a',
};
const skillCode = [
  {
    text: 'skills',
    el: 'span',
    style: {
      color: settings.colorBlue,
    },
  },
  {
    text: '.',
    el: 'span',
    style: {
      color: settings.colorRedLight,
    },
  },
  {
    text: 'map(',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: '(',
    el: 'span',
    style: {
      color: settings.colorRedLight,
    },
  },
  {
    text: 'skill, index',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: ') => {',
    el: 'span',
    style: {
      display: 'inline-block',
      color: settings.colorRedLight,
    },
  },
  {
    text: '',
    style: {},
  },
  {
    text: 'return ',
    el: 'span',
    style: {
      paddingLeft: '2%',
      color: settings.colorRedLight,
    },
  },
  {
    text: '(',
    el: 'span',
    style: {
      color: settings.colorBlue,
    },
  },
  {
    text: '',
    style: {},
  },
  {
    text: '<',
    el: 'span',
    style: {
      paddingLeft: '4%',
      color: settings.colorRedDark,
    },
  },
  {
    text: 'SkillItem ',
    el: 'span',
    style: {
      color: settings.colorRedLight,
    },
  },
  {
    text: 'key',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: '=',
    el: 'span',
    style: {
      color: settings.colorRedLight,
    },
  },
  {
    text: '{',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: 'index',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: '}',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: '>',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: '',
    style: {},
  },
  {
    text: '<div>',
    el: 'span',
    style: {
      paddingLeft: '6%',
      color: settings.colorRedDark,
    },
  },
  {
    text: '{',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: 'skill',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: '}',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: '</div>',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: '</SkillItem>',
    style: {
      paddingLeft: '4%',
      color: settings.colorRedLight,
    },
  },
  {
    text: ')',
    el: 'span',
    style: {
      paddingLeft: '2%',
      color: settings.colorBlue,
    },
  },
  {
    text: ';',
    el: 'span',
    style: {
      color: settings.colorRedDark,
    },
  },
  {
    text: '',
    style: {},
  },
  {
    text: '}',
    el: 'span',
    style: {
      color: settings.colorRedLight,
    },
  },
  {
    text: ')',
    el: 'span',
    style: {
      color: settings.colorYellow,
    },
  },
  {
    text: `C:\\Users\\nazar\\skills> node skills.js`,
    style: {
      marginTop: '30px',
      color: '#f8f8f8',
    },
  },
];

export default skillCode;
