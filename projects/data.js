import {GitHub} from './templates.js';


export const dataAllProject = {
  websites: [
    new GitHub('AnimePotik-SPA', 'аніме'),
    new GitHub('AnimePotik-MPA', 'аніме'),
    new GitHub('AnimeHub-MPA', 'аніме', 'alpha'),
    new GitHub('AnimeHub-SPA', 'аніме', 'alpha'),
    new GitHub('AniMe-DOM', 'аніме'),
    new GitHub('GameHub', 'ігри', 'alpha'),
  ],
  
  games: [
    new GitHub('Flappy UFO-DOM'),
    new GitHub('Dino-DOM'),
  ],
};
