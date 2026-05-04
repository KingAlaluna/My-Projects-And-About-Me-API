import {Website, Game} from './templates.js';


export const dataProjectDetails = {
  websites: [
    new Website('AnimePotik-MPA', 
      [
        '**Архітектура:** AnimePotik-MPA побудований на архітектурі **MPA** (детальніше про різницю архітектур **читати на AnimeHub-SPA**).',
        '**Інше:** В іншому AnimePotik-MPA схожий на AnimePotik-SPA (детальніше читати нижче у розділі "AnimePotik-SPA", або переконатися особисто, перейшовши за посиланням нижче).',
      ],
      {
        architectures: ['MPA'],
        apis: ['Jikan'],
      },
    ),
    
    new Website('AnimeHub-MPA', 
      [
        '**Архітектура:** AnimeHub-MPA на архітектурі **MPA**, тоді як AnimeHub-SPA — на архітектурі **SPA**.',
        '**Інше:** Крім невеличких функціональних покращень (наприклад, запам\'ятовування вибраної теми в AnimeHub-MPA), в іншому суттєвої різниці немає.',
      ],
      {
        architectures: ['MPA'],
        frameworks: ['Preact'],
        libs: ['Font Awesome'],
        apis: ['Jikan'],
        status: 'alpha',
      },
    ),
    
    new Website('AnimeHub-SPA', 
      [
        '**Архітектура:** AnimeHub-SPA має архітектуру **SPA (1 .html файл)**, а AnimeHub-MPA має архітектуру **MPA (окремий .html файл для кожної сторінки)**.',
        '**Переваги AnimeHub-MPA над AnimeHub-SPA:** SEO-просування, автоматизація правильного функціонування системної кнопки "назад", автоматичне збереження поточної сторінки навіть при закритті браузера.',
        '**Недоліки:** Перезавантаження при переході на іншу сторінку, складніша взаємодія між різними сторінками, більше дублювань у коді.',
      ],
      {
        architectures: ['SPA'],
        frameworks: ['React'],
        libs: ['Font Awesome', 'React Router'],
        apis: ['Jikan'],
        status: 'alpha',
      },
    ),
    
    new Website('AnimePotik-SPA', 
      [
        '**React та додаткові бібліотеки:** AnimeHub-MPA написаний з використанням фреймворку **React** для сучасної архітектури та бібліотек **Font Awesome** для іконок і **Marked** для транслювання мови розмітки **Markdown в HTML**. AnimePotik-SPA написаний на **Vanilla JavaScript**, без використання фреймворків та бібліотек.',
        '**Інформація:** AnimeHub-MPA, крім стандартної інформації про аніме, також підтримує **детальну інформацію** про **персонажів** аніме та **акторів/актрис**, які озвучували даного персонажа. AnimePotik-SPA підтримує **тільки** стандартну інформацію.',
        '**Улюблені аніме:** AnimeHub-MPA має можливість **додати аніме** в улюблене завдяки **localStorage**. AnimePotik-SPA такої можливості **не має**.',
        '**Фільтри:** AnimeHub-MPA дозволяє вибирати **декілька фільтрів** одночасно, залежно від можливостей **Jikan API**. AnimePotik-SPA дозволяє одночасно вибрати **тільки 1** фільтр.',
        '**Підтримуваність:** AnimeHub-MPA набагато легше **підтримувати та розширювати**, ніж AnimePotik-SPA, завдяки сучасному фреймворку **React** та бібліотекам **Font Awesome** і **Marked**.',
      ],
      {
        architectures: ['SPA'],
        apis: ['Jikan'],
      },
    ),
    
    new Website('AniMe-DOM',
      [
        '',
      ],
      {
        architectures: ['SPA'],
        libs: ['Hls.js', 'Plyr.js', 'Navigo'],
        apis: ['Static Libria', 'AniLiberty', 'AniLibria'],
      },
    ),
    
    new Website('GameHub',
      [
        '',
      ],
      {
        architectures: ['SPA'],
        frameworks: ['Preact', 'Tailwind.css', ],
        libs: ['', 'Navigo'],
        apis: ['CORS Proxy', 'FreeToGame', ],
        status: 'alpha',
      },
    ),
    
  ],
  
  
  games: [
    new Game('Flappy UFO-DOM', 
      [
        '**Архітектура:** SPA, DOM, Vanilla JavaScript. Дана комбінація технологій була обрана **свідомо, розуміючи всі недоліки**, її мета показати **глибоке розуміння** "чистих" технологій та DOM маніпуляцій.',
        '**Механіки:** Схожі на Flappy Bird, але замість птаха **НЛО (космічна тарілка)**. Можливо, в майбутньому буде значне розширення механік з додаванням **скінів, рівнів, та інших** можливостей.',
      ],
      {
        architectures: ['SPA'],
      },
    ),
    
    new Game('Dino-DOM', 
      [
        '**Архітектура:** SPA, DOM, Vanilla JavaScript. Дана комбінація технологій була обрана **свідомо, розуміючи всі недоліки**, її мета показати **глибоке розуміння** "чистих" технологій та DOM маніпуляцій.',
        '**Механіки:** Схожі на Google Dino, але з оригінальними **асетами та іншими відміностями**. Можливо, в майбутньому буде значне розширення механік з додаванням **скінів, рівнів, та інших** можливостей.',
      ],
      {
        architectures: ['SPA'],
      },
    ),
  ],
};


