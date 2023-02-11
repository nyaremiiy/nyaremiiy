import instLoginCopy from './../assets/images/projects/inst-login-copy.JPG';
import rentiz from './../assets/images/projects/rentiz.JPG';
import yunmei from './../assets/images/projects/yunmei.JPG';
import calculator from './../assets/images/projects/calculator.JPG';

const projects = [
  {
    img: instLoginCopy,
    title: 'Instagram Login Copy',
    description:
      'A copy of the Instagram login page. Written with the help of technologies: html, css, javascript. The project is compiled using gulp.',
    links: {
      linkGit: 'https://github.com/nyaremiy/instagram-login-page-COPY',
      linkPage: 'https://nyaremiy.github.io/instagram-login-page-COPY/',
    },
  },
  {
    img: rentiz,
    title: 'Rentiz - Construction company',
    description:
      'Construction company page layout. Written with html, Scss preprocessor and JavaScript technologies. I added a slider using the Swiper.js library, and the GSAP library is responsible for the animation on the page. Compiled using Gulp.',
    links: {
      linkGit: 'https://github.com/nyaremiy/Rentiz',
      linkPage: 'https://nyaremiy.github.io/Rentiz/',
    },
  },
  {
    img: yunmei,
    title: 'Yunmei Poles - reinforced poles',
    description:
      'The site of the company that manufactures reinforced concrete pillars. Written with Pug and Scss preprocessor, Javascript. The slider is written in Swiper.js. The project is compiled using gulp.',
    links: {
      linkGit: 'https://github.com/nyaremiy/yunmei-polis',
      linkPage: 'https://nyaremiy.github.io/yunmei-polis/',
    },
  },
  {
    img: calculator,
    title: 'Calculator JS',
    description:
      'The calculator is written in JavaScript. The project is compiled using Gulp',
    links: {
      linkGit: 'https://github.com/nyaremiy/js-calculator',
      linkPage: 'https://nyaremiy.github.io/js-calculator/',
    },
  },
];

export default projects;

// {
//   img: '',
//   title: '',
//   description: '',
//   links: {
//     linkGit: '',
//     linkPage: ''
//   }
// }
