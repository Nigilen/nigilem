

export const useColorMode = () => {
  const colorMode = useState<'light' | 'dark' | 'auto'>('colorMode', () => 'auto');

  const applyTheme = (mode: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.classList.toggle('light', mode === 'light');
  };

  const getCurrentTheme = (): 'light' | 'dark' => {
    if (colorMode.value === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      return colorMode.value;
    };
  };

  const updateTheme = () => {
    applyTheme(getCurrentTheme());
  };

  const setTheme = (mode: 'light' | 'dark') => {
    colorMode.value = mode;
    localStorage.setItem('color-mode', mode);
    updateTheme();
  };

  const setAuto = () => {
    colorMode.value = 'auto';
    localStorage.removeItem('color-mode');
    updateTheme();
  };

  const toggleTheme = () => {
    if (colorMode.value === 'auto') {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemIsDark ? 'light' : 'dark');
    } else {
      setTheme(colorMode.value === 'light' ? 'dark' : 'light');
    };
  };

  if (import.meta.client) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (colorMode.value === 'auto') {
        updateTheme();
      };
    };

    // Инициализация
    const saved = localStorage.getItem('color-mode');
    if (saved === 'light' || saved === 'dark') {
      colorMode.value = saved;
    } else {
      colorMode.value = 'auto';
    };

    updateTheme();

    mediaQuery.addEventListener('change', handleSystemChange);
  };

  return {
    colorMode,
    setTheme,
    setAuto,
    toggleTheme,
    getCurrentTheme
  };
};