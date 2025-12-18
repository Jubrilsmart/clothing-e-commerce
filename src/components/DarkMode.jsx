import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative w-8 h-8">
      <FiSun
        onClick={toggleTheme}
        className={`absolute inset-0 text-[var(--primary)] cursor-pointer transition-opacity duration-300 
          ${theme === 'light' ? 'opacity-100' : 'opacity-0'}
        `}
        size={30}
      />

      <FiMoon
        onClick={toggleTheme}
        className={`absolute text-gray-900 inset-0 cursor-pointer transition-opacity duration-300 
          ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
        `}
        size={30}
      />
    </div>
  );
}

export default DarkMode;
