import { useState } from "react";
import { useScreenSize } from "../../../../lib/hooks/useScreenSize";

import { useLocation, useNavigate } from "react-router-dom";
import { CONTACT_SIDEBAR_MENU_ITEMS } from "../../../../constants/contactSidebarConfig";

const ContactSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  //   const { isSmallScreen } = useScreenSize();

  return (
    <div className="w-64 min-w-64 p-2 h-full overflow-y-auto">
      {CONTACT_SIDEBAR_MENU_ITEMS.map((menuData) => {
        return (
          <div key={menuData.header} className="flex flex-col gap-0.5">
            <div className="flex items-center w-full pt-4 border-4 border-transparent">
              <span className="text-xs font-medium text-secondaryColor whitespace-nowrap">
                {menuData.header}
              </span>
            </div>
            {menuData.items.map((item) => {
              const Icon = item.icon;
              //   const [isListExpanded, setIsListExpanded] = useState(false);

              return (
                <div key={item.label}>
                  <button
                    key={item.label}
                    className={`flex items-center w-full rounded-md py-1.5 px-2 hover:bg-highlight transition-all cursor-pointer ${item.label === "All Contacts" && "bg-selected"}`}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: item?.iconColor }}
                    />

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
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ContactSidebar;
