import {nameUrl, apiUrl, texts} from '../config/utils.js';


class Technology {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
}



class ProjectDetails {
  constructor(name, details, techs = {}, ) {
    const techsTemplates = {
      base: {
        architectures: [], 
        renderings: [], 
        hostings: [], 
        onlinePlatforms: ['GitHub'],
        langsProgrammings: ['JavaScript'], 
        langsMarkings: [], 
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
    };
    
    
    const finaleTechs = mergerArrays(
      techsTemplates.base, 
      techsTemplates[techs.type], 
      techs,
    );
    
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
    } = finaleTechs;
    
    
    this.name = name;
    this.status = techs.status || 'release';
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
    
    this.urlProject = techs.type != 'api' ? `https://kingalaluna.github.io/${nameUrl(name)}/` : techs.apiUrl;
    this.urlCode = `https://github.com/KingAlaluna/${nameUrl(name)}.git`;
  }
}


export class Website {
  constructor(name, details, techs = {}, ) {
    const techsAndType = {...techs, type: 'website'};
    return new ProjectDetails(name, details, techsAndType, );
  }
}

export class Game {
  constructor(name, details, techs = {}, ) {
    const techsAndType = {...techs, type: 'game'};
    return new ProjectDetails(name, details, techsAndType, );
  }
}


export class API {
  constructor(name, details, techs = {}, ) {
    const techsAndType = {...techs, type: 'api'};
    return new ProjectDetails(name, details, techsAndType, );
  }
}


export class APIUrl {
  constructor(name, param) {
    this.name = name;
    this.url = apiUrl(param);
  }
}


function mergerArrays(obj1, obj2 = {}, obj3 = {}) {
  const result = {...obj1};
  
  for (const key in obj1) {
    result[key] = [...result[key], ...(obj2[key] || []), ...(obj3[key] || [])];
  }
  
  return result;
}

