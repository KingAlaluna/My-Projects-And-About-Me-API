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
      url: `https://my-projects-and-about-me-api.kvses0417.workers.dev/${name}${param}`,
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
      url: `https://my-projects-and-about-me-api.kvses0417.workers.dev/${name}${category ? `/${category}` : ''}${param}`,
    });
  }
  
  return arr;
}



const projects = [
  ...allUrl('projects', categories.projects, ),
  ...allUrl('projects', categories.projects, '?full=true'),
];

const aboutMe = allUrl('about-me', categories.aboutMe, );
const urls = allUrl('urls', categories.urls, );


export const dataAllUrl = {
  projects,
  'about-me': aboutMe,
  urls,
  all: [
    ...projects,
    ...aboutMe,
    ...urls,
  ],
};