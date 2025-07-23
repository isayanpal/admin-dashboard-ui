import { UserRound } from "lucide-react";

const Dropdown = () => {
  return (
    <details className="relative" role="menu" aria-label="User menu">
      <summary
        className="cursor-pointer list-none rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 flex items-center gap-2"
        tabIndex="0"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <UserRound size={20} />
      </summary>
      <div
        className="absolute mt-2 w-28 rounded-md border border-zinc-200 bg-white py-2 shadow-lg dark:bg-zinc-900 dark:border-zinc-700"
        role="menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          role="menuitem"
          tabIndex="0"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          role="menuitem"
          tabIndex="0"
        >
          Activity
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          role="menuitem"
          tabIndex="0"
        >
          Logout
        </a>
      </div>
    </details>
  );
};

export default Dropdown;
