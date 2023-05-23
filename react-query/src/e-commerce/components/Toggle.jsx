import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function ToggleButton() {
  const [enabled, setEnabled] = useState(true);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const switchMode = () => {
    setEnabled(p => !p);
    setTheme(theme === 'light' ? 'dark' : 'light');
    // setTheme
  };

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={switchMode}
        className={`${enabled ? 'bg-white' : 'bg-black'}
          relative inline-flex h-[32px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? 'translate-x-0 bg-black' : 'translate-x-9 bg-white'
          }
            pointer-events-none inline-block h-[26px] translate-y-0.5 w-[26px] transform rounded-full shadow-lg ring-0 transition duration-300 ease-in-out `}
        />
      </Switch>
    </div>
  );
}
