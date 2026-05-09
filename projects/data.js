import {GitHub} from './templates.js';


export const dataAllProject = [
  {
    name: 'Сайти',
    data: [
      new GitHub('AnimePotik-SPA', 'аніме'),
      new GitHub('AnimePotik-MPA', 'аніме'),
      new GitHub('AnimeHub-MPA', 'аніме', 'alpha'),
      new GitHub('AnimeHub-SPA', 'аніме', 'alpha'),
      new GitHub('AniMe-DOM', 'аніме'),
      new GitHub('GameHub', 'ігри', 'alpha'),
    ]
  },
  
  {
    name: 'Ігри',
    data: [
      new GitHub('Flappy UFO-DOM'),
      new GitHub('Dino-DOM'),
    ]
  },
];
