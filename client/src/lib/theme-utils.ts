// Theme utility functions

/**
 * Apply theme-specific styles to the document
 * This is called when the theme changes to handle any JavaScript-dependent styling
 */
export function applyThemeStyles(theme: string | undefined) {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  }
}

/**
 * Get the current theme from localStorage or system preference
 */
export function getInitialTheme(): string {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // Default dark theme
  return 'dark';
}