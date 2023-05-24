import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function ToggleButton() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  const [darkMode, setDarkMode] = useState(theme === 'dark' ? true : false);

  const switchMode = () => {
    setDarkMode(p => !p);
    setTheme(theme !== 'dark' ? 'dark' : 'light');
  };

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <div className="">
      <Switch
        checked={darkMode}
        onChange={switchMode}
        className={`${darkMode ? 'bg-black' : 'bg-white'}
          relative inline-flex h-[32px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            darkMode ? 'translate-x-9 bg-white' : 'translate-x-0 bg-black'
          }
            pointer-events-none inline-block h-[26px] translate-y-0.5 w-[26px] transform rounded-full shadow-lg ring-0 transition duration-300 ease-in-out `}
        />
      </Switch>
    </div>
  );
}
