import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import bgImg from '../../assets/images/body.jpeg';
import Sidebar from '../../organisms/sidebar';
import EnglandFlag from '../../assets/icons/england.svg';
import currentUser from '../../assets/images/currentUser.jpeg';

import { Search, BellDot, CircleCheck, Moon, Sun } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative flex flex-row h-screen w-full p-4 custom-scrollbar">
      {darkMode ? (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-[linear-gradient(180deg,#071d33_0%,#04172b_100%)]"
          //       style={{
          //         background: `
          //   radial-gradient(circle at top, rgba(76, 29, 149, 0.18), transparent 45%),
          //   radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 40%),
          //   #0b1120
          // `,
          //         backgroundAttachment: 'fixed',
          //       }}
        />
      ) : (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat dark:bg-none"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      )}

      <main className="h-full w-full overflow-auto pl-12">
        <Outlet />
      </main>

      {/* Right Panel */}
      <div className="flex flex-col items-center pl-4 pr-2 py-1 gap-4">
        <img
          src={currentUser}
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="user"
        />

        <img
          src={EnglandFlag}
          className="w-6 h-6 my-4 rounded-full cursor-pointer"
          alt="flag"
        />

        <div className="hover:bg-white p-2 cursor-pointer rounded-md hover:ring-4 ring-white/20">
          <Search className="w-5 h-5" />
        </div>

        <div className="relative hover:bg-white p-2 cursor-pointer rounded-md hover:ring-4 ring-white/20">
          <span className="absolute h-5 w-5 rounded-full border border-red-500 opacity-75 animate-ping" />
          <BellDot className="relative w-5 h-5 cursor-pointer" />
        </div>

        <div className="hover:bg-white p-2 cursor-pointer rounded-md hover:ring-4 ring-white/20">
          <CircleCheck className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Dark mode toggle */}
        <div
          onClick={() => setDarkMode((prev) => !prev)}
          className="hover:bg-white p-2 cursor-pointer rounded-md hover:ring-4 ring-white/20"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 cursor-pointer" />
          ) : (
            <Moon className="w-5 h-5 cursor-pointer" />
          )}
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default MainLayout;
