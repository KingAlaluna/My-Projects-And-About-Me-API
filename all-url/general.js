import {categories, namesUrl, } from './data.js';


function allUrl(name, data, param = '') {
  const arr = [
    {
      names: {
        uk: namesUrl[name].uk, 
        en: namesUrl[name].en, 
      },
      labels: {
        uk: [namesUrl[param]?.uk, ],
        en: [namesUrl[param]?.en, ],
      },
      url: `https://my-projects-and-about-me-api.kvses0417.workers.dev/urls/${name}${param}`,
    },
  ];
  
  for (const category of data) {
    arr.push({
      names: {
        uk: namesUrl[name].uk, 
        en: namesUrl[name].en, 
      },
      labels: {
        uk: [namesUrl[category]?.uk, namesUrl[param]?.uk, ],
        en: [namesUrl[category]?.en, namesUrl[param]?.en, ],
      },
      url: `https://my-projects-and-about-me-api.kvses0417.workers.dev/urls/${name}${category ? `/${category}` : ''}${param}`,
    });
  }
  
  return arr;
}



const projects = [
  ...allUrl('projects', categories.projects, ),
  ...allUrl('projects', categories.projects, '?full=true'),
];

const aboutMe = allUrl('about-me', categories.aboutMe, );


export const dataAllUrl = {
  projects,
  'about-me': aboutMe,
  all: [
    ...projects,
    ...aboutMe,
  ],
};