import { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Readonly<PaginationProps>) {
  const maxVisiblePages = 4;
  const [startPage, setStartPage] = useState(1);

  const handleEllipsisClick = () => {
    if (startPage + maxVisiblePages <= totalPages) {
      setStartPage(startPage + maxVisiblePages);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-1 mb-2">
      {startPage > 1 && (
        <button
          className="cursor-pointer flex text-base items-center font-bold justify-center px-3 py-1 border border-transparent rounded-full shadow-sm text-black bg-gray-200 hover:bg-gray-300"
          onClick={() => setStartPage(1)}
        >
          1 ...
        </button>
      )}

      {[...Array(maxVisiblePages)].map((_, index) => {
        const page = startPage + index;
        if (page > totalPages) return null;
        return (
          <button
            key={page}
            className={
              page === currentPage
                ? "cursor-pointer flex text-base items-center font-bold justify-center my-1 px-3 py-1 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                : "cursor-pointer flex text-base items-center font-bold justify-center my-1 px-3 py-1 border border-transparent rounded-full shadow-sm text-black bg-white hover:bg-gray-300"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      {startPage + maxVisiblePages <= totalPages && (
        <button
          className="cursor-pointer flex text-base items-center font-bold justify-center my-1 px-3 py-1 border border-transparent rounded-full shadow-sm text-black bg-gray-200 hover:bg-gray-300"
          onClick={handleEllipsisClick}
        >
          ...
        </button>
      )}
    </div>
  );
}
