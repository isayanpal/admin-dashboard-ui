import { Bell, ChevronsLeft, Moon, Search, Sun, UserRound } from "lucide-react";
import useTheme from "../../contexts/theme-context";


export const Header = ({ collapsed, setCollapsed }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

const changeBtn = () => {
  if (themeMode === "light") {
    darkTheme();
  } else {
    lightTheme();
  }
};

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-zinc-950">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="input">
          <Search size={20} className="text-zinc-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-zinc-950 outline-0 placeholder:text-zinc-300 dark:text-zinc-50"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={changeBtn}
        >
          <Sun size={20} className="dark:hidden" />
          <Moon size={20} className="hidden dark:block" />
        </button>
        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <button className="btn-ghost overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700">
          <UserRound size={20}/>
        </button>
      </div>
    </header>
  );
};
