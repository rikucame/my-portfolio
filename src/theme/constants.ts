export const COLOR = {
  REBECCA_PURPLE: '#663399',
  BLUE: '#1a58cc',
  BLACK: '#191919',
  GRAY: '#8B8B8B',
  WHITE: '#FCFCFC',
};

export const PHOTOGRAPHER_NAV_ITEMS = [
  { path: '/portrait', label: 'Portrait' },
  { path: '/snap', label: 'Snap' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export const SP = '@media screen and (max-width: 1024px)';

export const transformPagePathToLabel = (text: string) => {
  const label = text.slice(1).replace('/', '');
  if (label.includes('_')) {
    const wordsArray = label.split('_').map(word => {
      const firstCharUpperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
      return firstCharUpperCaseWord;
    });
    return wordsArray.join(' ');
  } else {
    const firstCharUpperCaselabel = label.charAt(0).toUpperCase() + label.slice(1);
    const removeUnderBar = firstCharUpperCaselabel.replace('_', ' ');
    return removeUnderBar;
  }
};
