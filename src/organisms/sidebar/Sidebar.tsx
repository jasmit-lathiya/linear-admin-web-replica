import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import linearAdmin from '../../assets/icons/linearAdmin.svg';

import { ChevronLeft, Ellipsis } from 'lucide-react';

import { SIDEBAR_MENU_ITEMS } from '../../constants/sidebarConfig';
import { useLocation, useNavigate } from 'react-router-dom';

const toCamelCase = (str: string) => {
  return str.toLowerCase().replace(/\s+(.)/g, (_, char) => char.toUpperCase());
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        fixed
        left-0
        top-0
        h-screen
        backdrop-blur-md
        transition-all
        duration-300
        ease-in-out
        pt-3
        pl-2
        ${expanded ? 'w-64 overflow-auto backdrop-blur-md' : 'w-16 overflow-hidden'}
        rounded-r-xl
      `}
    >
      <div className="flex flex-row p-4 h-12 gap-4">
        <img src={logo} alt="Logo" />
        {expanded && <img src={linearAdmin} alt="linearAdmin" />}
      </div>

      <nav className="px-2">
        {SIDEBAR_MENU_ITEMS.map((menuData) => {
          return (
            <div key={menuData.header} className="flex flex-col">
              <div className="flex items-center w-full p-1 mt-4 border-4 border-transparent">
                <span className="text-xs text-secondaryColor whitespace-nowrap">
                  {expanded ? (
                    menuData.header
                  ) : (
                    <Ellipsis className="h-3 w-4" />
                  )}
                </span>
              </div>
              {menuData.items.map((item) => {
                const Icon = item.icon;
                const [isListExpanded, setIsListExpanded] = useState(false);

                return (
                  <div key={item.label}>
                    <button
                      key={item.label}
                      className={`flex items-center w-full rounded-full border-4 border-transparent hover:border-white/10 p-1 hover:bg-white/20 hover:backdrop-blur-xl transition-all cursor-pointer ${pathname === '/' + toCamelCase(item.label) ? 'text-ternaryColor' : 'text-primaryColor'}`}
                      onClick={() => {
                        item?.list && item?.list?.length > 0
                          ? setIsListExpanded((prev) => !prev)
                          : navigate('/' + toCamelCase(item.label));
                      }}
                    >
                      <Icon className="h-[18px] w-[18px] shrink-0" />
                      <div
                        className={`
                        flex
                        flex-row
                        justify-between
                        items-center
                        w-full
                        ${
                          expanded
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-2 w-0'
                        }`}
                      >
                        <span
                          className={`
                              ml-3
                              whitespace-nowrap
                              overflow-hidden
                              transition-all
                              duration-300
                              text-md
                        `}
                        >
                          {item.label}
                        </span>

                        {item?.list && item.list.length > 0 && (
                          <ChevronLeft
                            className={`${isListExpanded ? '-rotate-90' : 'rotate-180'} h-4 w-4 shrink-0`}
                          />
                        )}
                      </div>
                    </button>
                    {expanded && isListExpanded && (
                      <div className="flex flex-col bg-gradient-to-b from-white/10 to-white/60 justify-center text-sm border-transparent rounded-xl p-4 m-4 my-0 cursor-pointer">
                        {item?.list?.map((listItem) => (
                          <span className="hover:bg-white rounded-full py-1 px-2">
                            {listItem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
