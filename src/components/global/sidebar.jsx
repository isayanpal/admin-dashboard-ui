import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "../../constants/data";
import { cn } from "../../utils/cn";
import { LayoutDashboard } from "lucide-react";


export const Sidebar = forwardRef(({ collapsed }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "app-sidebar fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-zinc-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-zinc-700 dark:bg-zinc-950",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <LayoutDashboard size={24} className="text-rose-600"/> 
        {!collapsed && (
          <p className="text-lg font-medium text-zinc-950 transition-colors dark:text-zinc-50">
            Admin
          </p>
        )}
      </div>
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
        {navbarLinks.map((navbarLink) => (
          <nav
            key={navbarLink.links[0].label}
            className={cn("sidebar-group", collapsed && "md:items-center")}
          >
            {navbarLink.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
              >
                <link.icon size={22} className="flex-shrink-0" />
                {!collapsed && (
                  <p className="whitespace-nowrap">{link.label}</p>
                )}
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});
