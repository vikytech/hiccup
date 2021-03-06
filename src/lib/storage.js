export const saveSettings = (settings) => localStorage.setItem('settings', JSON.stringify(settings));
export const currentSettings = () => {
  const settings = localStorage.getItem('settings');
  if (settings) {
    return JSON.parse(settings);
  }
  return { games: {}, nickname: 'hiccup' };
};
