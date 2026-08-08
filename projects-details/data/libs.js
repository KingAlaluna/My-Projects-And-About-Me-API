import {Project, } from '../templates.js';
import {texts, libUrl, } from '../../config/utils.js';


export const libs = {
  name: 'Бібліотеки',
  key: 'libs',
  note: texts([
    'Оскільки в більшості бібліотек є **декілька версій** ("min", "browser", тощо), посилань на бібліотеки може бути **декілька**.',
  ]),
  data: [
    new Project({
      name: 'Alive',
      details: [
        '**Призначення**:  Простий та легковісний аналог React.',
        '**Функціонал**: Компоненти, хуки, ефекти, реактивний html.',
        '**Примітка**: Відсутні майже всі обмеження React (наприклад, хуки можна використовувати не тільки в компонентах а **де завгодно**, тощо).',
        
      ],
      urlProject: (url) => [
        url(
          'alive', 
          '',
          libUrl,
        ),
        url(
          'alive.min', 
          '.min',
          libUrl,
        ),
        url(
          'alive.browser', 
          '.browser',
          libUrl,
        ),
        url(
          'alive.browser.min', 
          '.browser.min',
          libUrl,
        ),
      ],
    }),
  ],
};
