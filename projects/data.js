import {Project, } from './templates.js';
import {
  apiUrl,
  libUrl,
} from '../config/utils.js';


const websites = {
  name: 'Сайти',
  data: [
    new Project({
      name: 'Calculator',
      type: 'інструменти',
    }),
    new Project({
      name: 'Texture Altas Creator',
      type: 'інструменти',
    }),
    new Project({
      name: 'GameHub',
      type: 'ігри',
      status: 'alpha',
    }),
    new Project({
      name: 'PortfolioHub',
      type: 'персональний хаб',
    }),
    new Project({
      name: 'AniMe-DOM',
      type: 'аніме',
    }),
    new Project({
      name: 'AnimeHub-MPA',
      type: 'аніме',
      status: 'alpha',
    }),
    new Project({
      name: 'AnimeHub-SPA',
      type: 'аніме',
      status: 'alpha',
    }),
    new Project({
      name: 'AnimePotik-MPA',
      type: 'аніме',
    }),
    new Project({
      name: 'AnimePotik-SPA', 
      type: 'аніме',
    }),
  ]
};


const games = {
  name: 'Ігри',
  data: [
    new Project({
      name: 'Dino-DOM',
    }),
    new Project({
      name: 'Flappy UFO-DOM',
    }),
  ]
};


const libs = {
  name: 'Бібліотеки',
  data: [
    new Project({
      name: 'Alive',
      urlProject: libUrl,
      param: '.min',
    }),
  ]
};


const apis = {
  name: 'API',
  data: [
    new Project({
      name: 'My Projects and About Me API',
      urlProject: apiUrl,
      param: 'urls',
    }),
  ]
};




export const dataProjects = {
  websites,
  games,
  libs,
  apis,
  all: [
    websites,
    games,
    libs,
    apis,
  ],
};