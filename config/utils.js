export const nameUrl = (name) => name.trim().replace(/\s+/g, '-');
export const apiUrl = (param) => `https://my-projects-and-about-me-api.kvses0417.workers.dev/${param}`;
export const texts = (text) => text.map(e => e.trim().replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'));
