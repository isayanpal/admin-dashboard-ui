import { useState, useEffect } from "react";
import { Bell, ChevronsLeft, Moon, Search, Sun, X } from "lucide-react";
import useTheme from "../../contexts/theme-context";
import Dropdown from "../private/dropdown";

export const Header = ({ collapsed, setCollapsed }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const changeBtn = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
  };
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeSearchModal();
    };
    if (isSearchModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchModalOpen]);

  return (
    <>
      <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-2 sm:px-4 shadow-md transition-colors dark:bg-zinc-950 w-full">
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <button
            className="btn-ghost size-10 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronsLeft className={collapsed ? "rotate-180" : ""} />
          </button>
          <button
            onClick={openSearchModal}
            className="btn-ghost flex items-center gap-x-2 px-2 sm:px-3"
            aria-label="Open search"
          >
            <Search size={20} className="text-zinc-500" />
            <span className="hidden xs:inline text-zinc-500 dark:text-zinc-400">
              Search...
            </span>
          </button>
        </div>
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <Dropdown />
          <button
            className="btn-ghost size-10 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]"
            onClick={changeBtn}
          >
            <Sun size={20} className="dark:hidden" />
            <Moon size={20} className="hidden dark:block" />
          </button>
          <button className="btn-ghost size-10 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]">
            <Bell size={20} />
          </button>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="search-modal fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-24 px-2">
          {/* Backdrop with blur effect */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeSearchModal}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div className="relative w-full max-w-2xl rounded-lg bg-white p-3 sm:p-4 shadow-2xl dark:bg-zinc-900 mx-0 sm:mx-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-3 dark:border-zinc-700">
              <Search className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="flex-1 bg-transparent text-base sm:text-lg text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-50 dark:placeholder:text-zinc-500"
                autoComplete="off"
              />
              <button
                onClick={closeSearchModal}
                className="rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close search"
              >
                <X className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </button>
            </div>

            {searchQuery && (
              <div className="mt-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {searchQuery.length < 2
                    ? "Type at least 2 characters to search"
                    : "No results found for your search"}
                </p>

                {/* Search results would go here */}
                <div className="mt-2 space-y-1 py-2">
                  {/* This is just a placeholder for demonstration */}
                  {searchQuery.length >= 2 && (
                    <div className="rounded-md p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">
                        Sample result for "{searchQuery}"
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        This is a placeholder result to demonstrate the search
                        modal
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 border-t border-zinc-200 pt-3 dark:border-zinc-700">
              <div className="flex flex-wrap gap-2">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Try searching for:
                </p>
                {["dashboard", "users", "settings", "reports", "analytics"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="rounded-full bg-zinc-100 px-2 sm:px-3 py-1 text-xs text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
