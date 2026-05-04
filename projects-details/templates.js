import {nameUrl, texts} from '../config/utils.js';


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
        renderings: ['DOM'], 
        hostings: ['Статичний'], 
        onlinePlatforms: ['GitHub'],
        langsProgrammings: ['JavaScript'], 
        langsMarkings: ['HTML'], 
        langsStyles: ['CSS'], 
        langsDatas: [],
        langsVectorGraphics: [], 
        frameworks: [], 
        libs: [], 
        apis: [],
        
      },
      
      website: {
        langsDatas: ['JSON'],
        langsVectorGraphics: ['SVG'], 
        apis: ['my-projects-list-data-api'],
        
      },
      
      game: {
        
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
      new Technology('Онлайн платформи', onlinePlatforms),
      new Technology('Мови програмування', langsProgrammings),
      new Technology('Мови розмітки', langsMarkings),
      new Technology('Мови стилів', langsStyles),
      new Technology('Мови даних', langsDatas),
      new Technology('Мови векторноі графіки', langsVectorGraphics),
      new Technology('Фреймворки', frameworks),
      new Technology('Бібліотеки', libs),
      new Technology('API', apis),
    ];
    
    this.urlProject = `https://kingalaluna.github.io/${nameUrl(name)}/`;
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


function mergerArrays(obj1, obj2 = {}, obj3 = {}) {
  const result = {...obj1};
  
  for (const key in obj1) {
    result[key] = [...result[key], ...(obj2[key] || []), ...(obj3[key] || [])];
  }
  
  return result;
}

