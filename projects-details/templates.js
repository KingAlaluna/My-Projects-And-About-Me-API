import {
  gitPagesUrl, 
  gitCodeUrl,
  manyUrl,
  texts,
  getType,
} from '../config/utils.js';


const techsTemplates = {
  base: {
    architectures: [], 
    renderings: [], 
    hostings: [], 
    onlinePlatforms: ['GitHub'],
    langsProgrammings: ['JavaScript'], 
    langsMarkings: ['Markdown'], 
    langsStyles: [], 
    langsDatas: [],
    langsVectorGraphics: [], 
    frameworks: [], 
    libs: [], 
    apis: [],
  },
  
  website: {
    renderings: ['DOM'], 
    hostings: ['Статичний'], 
    langsMarkings: ['HTML'], 
    langsStyles: ['CSS'], 
    langsDatas: ['JSON'],
    langsVectorGraphics: ['SVG'], 
    apis: ['My Projects And About Me API'],
  },
  
  game: {
    architectures: ['SPA'],
    renderings: ['DOM'], 
    hostings: ['Статичний'], 
    langsMarkings: ['HTML'], 
    langsStyles: ['CSS'], 
  },
  
  api: {
    hostings: ['Динамічний'], 
    onlinePlatforms: ['Cloudflare'],
    langsDatas: ['TOML'],
  },
  
  lib: {
    hostings: ['Статичний', ], 
    onlinePlatforms: ['GitHub', 'jsDelivr', ],
    langsDatas: ['JSON', ],
  },
};


const finaleTechs = (type, techs, ) => mergerArrays(
  techsTemplates.base, 
  techsTemplates[type], 
  techs,
);


class Technology {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
}



export class Project {
  constructor({
    name, 
    type = 'website', 
    status = 'release', 
    details, 
    techs = {}, 
    urlProject = gitPagesUrl(name), 
    urlCode = gitCodeUrl(name), 
  }) {
    const {
      architectures, 
      renderings, 
      hostings, 
      onlinePlatforms,
      langsProgrammings, 
      langsMarkings, 
      langsStyles, 
      langsDatas,
      langsVectorGraphics, 
      frameworks, 
      libs, 
      apis,
    } = finaleTechs(type, techs);
    
    
    this.name = name;
    this.status = status;
    this.details = texts(details);
    
    this.technologies = [
      new Technology('Архітектура', architectures),
      new Technology('Рендеринг', renderings),
      new Technology('Хостинг', hostings),
      new Technology('Онлайн-платформи', onlinePlatforms),
      new Technology('Мови програмування', langsProgrammings),
      new Technology('Мови розмітки', langsMarkings),
      new Technology('Мови стилів', langsStyles),
      new Technology('Формати даних', langsDatas),
      new Technology('Формати векторної графіки', langsVectorGraphics),
      new Technology('Фреймворки', frameworks),
      new Technology('Бібліотеки', libs),
      new Technology('API', apis),
    ];
    
    this.urlProject = getType(urlProject) === 'function' ? urlProject(manyUrl(name)) : urlProject;
    this.urlCode = urlCode;
  }
}



function mergerArrays(obj1, obj2 = {}, obj3 = {}) {
  const result = {...obj1};
  
  for (const key in obj1) {
    result[key] = [...result[key], ...(obj2[key] || []), ...(obj3[key] || [])];
  }
  
  return result;
}

