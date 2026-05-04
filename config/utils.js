export const nameUrl = (name) => name.trim().replace(/\s+/g, '-');
export const texts = (text) => text.map(e => e.trim().replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'));
