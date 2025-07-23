import { useState, useMemo, useRef, useEffect } from "react";
import { transactionData } from "../../constants/data";
import {
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const statusConfig = {
  Success: {
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    icon: CheckCircle,
    border: "border-emerald-200 dark:border-emerald-800",
  },
  Pending: {
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: Clock,
    border: "border-amber-200 dark:border-amber-800",
  },
  Failure: {
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
    icon: XCircle,
    border: "border-red-200 dark:border-red-800",
  },
};

const DataTable = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const itemsPerPage = 5;

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredAndSortedData = useMemo(() => {
    let data = [...transactionData];

    // Filter by status
    if (statusFilter !== "All") {
      data = data.filter((item) => item.status === statusFilter);
    }

    // Sort by date
    data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    return data;
  }, [statusFilter, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAndSortedData.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [statusFilter, sortOrder]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleFilterSelect = (filter) => {
    setStatusFilter(filter);
    setIsFilterOpen(false);
  };

  const handleSortSelect = (sort) => {
    setSortOrder(sort);
    setIsSortOpen(false);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-950 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-800 px-3 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-600">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Transaction History
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Recent payment transactions and their status
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* Filter Dropdown */}
            <div className="relative ml-2" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700  transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Filter</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isFilterOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleFilterSelect("All")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        statusFilter === "All"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      All Status
                    </button>
                    <button
                      onClick={() => handleFilterSelect("Success")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        statusFilter === "Success"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      Success
                    </button>
                    <button
                      onClick={() => handleFilterSelect("Pending")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        statusFilter === "Pending"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleFilterSelect("Failure")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        statusFilter === "Failure"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      Failure
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
              >
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Sort</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleSortSelect("newest")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        sortOrder === "newest"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      Newest First
                    </button>
                    <button
                      onClick={() => handleSortSelect("oldest")}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                        sortOrder === "oldest"
                          ? "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      Oldest First
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="max-h-96 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent">
        <table className="min-w-full table-fixed">
          <colgroup>
            <col className="w-[25%]" />
            <col className="w-[25%]" />
            <col className="w-[25%]" />
            <col className="w-[25%]" />
          </colgroup>
          {/* Sticky Header */}
          <thead className="bg-zinc-50 dark:bg-zinc-800 sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="px-4 sm:px-8 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Name</span>
                </div>
              </th>
              <th className="px-4 sm:px-8 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Date</span>
                </div>
              </th>
              <th className="px-4 sm:px-8 py-4 text-right">
                <div className="flex items-center justify-end space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Amount</span>
                </div>
              </th>
              <th className="px-4 sm:px-8 py-4 text-left">
                <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider">
                  <span>Status</span>
                </div>
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {currentData.map((row, idx) => {
              const config = statusConfig[row.status]
              const StatusIcon = config.icon
              return (
                <tr
                  key={idx}
                  className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 ease-in-out"
                >
                  {/* Name */}
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="h-5 w-5 px-2 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center text-white font-semibold text-[8px] sm:text-sm shadow-lg">
                        {row.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-xs sm:text-sm text-zinc-900 dark:text-white transition-colors truncate">
                          {row.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Date */}
                  <td className="px-4 sm:px-8 py-4">
                    <div className="text-xs text-wrap text-zinc-900 dark:text-zinc-100 font-medium">
                      {new Date(row.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </td>
                  {/* Amount */}
                  <td className="px-4 sm:px-8 py-4 text-right">
                    <div className="text-sm sm:text-base text-zinc-900 dark:text-white">{row.amount}</div>
                  </td>
                  {/* Status */}
                  <td className="px-4 sm:px-8 py-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border ${config.bg} ${config.color} ${config.border}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      <span>{row.status}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="bg-zinc-50 dark:bg-zinc-800 px-3 sm:px-6 py-3 border-t border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 text-sm font-medium rounded-md transition-colors ${
                      currentPage === page
                        ? "bg-rose-600 text-white shadow-sm"
                        : "text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
