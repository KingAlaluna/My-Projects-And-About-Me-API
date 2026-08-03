import {dataAllUrl} from '../all-url/general.js';


export const html = ({
  status, 
  title,
  message, 
}, data = dataAllUrl.all) => {
  let content = '';
  
  for (let el of data) {
    const {names, labels, url, } = el;
    const labelsEn = String(labels.en.filter(Boolean).join(', '));
    
    content += `<li>
      <p>${names.en}${labelsEn ? ` (${labelsEn})` : ''}</p>
      <a href="${url}">${url}</a>
    </li>`;
  }
  
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>${title}</title>
  
<!-- Custom Styles -->
<style>
/*general theme*/
:root {
  --dark-900: hsl(240, 10%, 10%);
  --white-50: hsl(240, 10%, 95%);
  --blue-500-a50: hsla(225, 90%, 50%, 0.5);
}

/*light theme*/
:root {
  --color-scheme: light;
  --main-bg: var(--white-50);
  --text-color: var(--dark-900);
}

/*dark theme*/
@media (prefers-color-scheme: dark) {
  :root {
    --color-scheme: dark;
    --main-bg: var(--dark-900);
    --text-color: var(--white-50);
  }
}


/*config*/
:root {
  --padding: 1rem;
}

@media (orientation: landscape), (min-width: 720px) {
  :root {
    --padding: 2rem;
  }
}


* {
  box-sizing: border-box;
  color: var(--text-color);
  color-scheme: var(--color-scheme);
  word-break: break-word;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  background: var(--main-bg);
  padding: 1rem var(--padding);
}

.status {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: 4px solid var(--blue-500-a50);
}
</style>
</head>

<body>
<main>
<p class="status">Status: ${status}</p>
<h1>${title}</h1>
<h2>${message}</h2>
<ul>
${content}
</ul>
</main><br>
</body>
</html>
`
};