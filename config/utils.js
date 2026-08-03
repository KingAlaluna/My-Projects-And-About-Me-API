const nameUrl = (name) => name.toLowerCase().trim().replace(/\s+/g, '-');


export const apiUrl = (name, param) => `https://${nameUrl(name)}.kvses0417.workers.dev/${param || ''}`;
export const libUrl = (name, param) => `https://cdn.jsdelivr.net/gh/KingAlaluna/${nameUrl(name)}@main/${nameUrl(name)}${param || ''}.js`;
export const gitPagesUrl = (name) => `https://kingalaluna.github.io/${nameUrl(name)}/`;
export const gitCodeUrl = (name) => `https://github.com/KingAlaluna/${nameUrl(name)}.git`;

export const manyUrl = (projectName) => (name, param, tool, ) => {
  return {
    name,
    url: tool(projectName, param, ),
  };
};


export const texts = (text) => text.map(e => e.trim().replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'));
export const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();