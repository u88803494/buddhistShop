"use client";

import clsx from "clsx";
import Image from "next/image";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BUTTON_BASE_CLASSES =
  "w-8 h-8 flex items-center justify-center border transition-colors duration-200 rounded-[2px]";

const ProductPagination: React.FC<ProductPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = (currentPage: number, totalPages: number): (number | "...")[] => {
    // 如果總頁數小於等於 7，直接顯示所有頁碼
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // 根據當前頁面位置，決定中間顯示的頁碼
    if (currentPage <= 4) {
      // 當前頁在前四頁
      return [1, 2, 3, 4, 5, "...", totalPages];
    } else if (currentPage >= totalPages - 3) {
      // 當前頁在最後四頁
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      // 當前頁在中間
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* 上一頁按鈕 */}
      <button
        className={clsx(BUTTON_BASE_CLASSES, {
          "text-[#D5D5D5]": currentPage === 1,
          "text-[#545454]": currentPage !== 1,
        })}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.83962 2.06621V1.03094C8.83962 0.941211 8.73649 0.891658 8.66685 0.946568L2.62935 5.66219C2.57805 5.70209 2.53655 5.75317 2.50799 5.81154C2.47944 5.86992 2.4646 5.93404 2.4646 5.99902C2.4646 6.06401 2.47944 6.12813 2.50799 6.18651C2.53655 6.24488 2.57805 6.29596 2.62935 6.33585L8.66685 11.0515C8.73783 11.1064 8.83962 11.0568 8.83962 10.9671V9.93184C8.83962 9.86621 8.80882 9.80326 8.75792 9.76309L3.93649 5.99969L8.75792 2.23496C8.80882 2.19478 8.83962 2.13184 8.83962 2.06621Z"
            fill={currentPage === 1 ? "#D5D5D5" : "#545454"}
          />
        </svg>
      </button>

      {/* 頁碼 */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <Image
            key={`ellipsis-${index}`}
            src="/images/icons/pagination_item_ellipsis.png"
            alt="ellipsis"
            width={32}
            height={32}
          />
        ) : (
          <button
            key={`page-${page}-${index}`}
            className={clsx(BUTTON_BASE_CLASSES, {
              "border-[#88745C] bg-[#E4D9CC] text-[#88745C]": page === currentPage,
              "border-[#D5D5D5] text-[#545454]": page !== currentPage,
            })}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </button>
        )
      )}

      {/* 下一頁按鈕 */}
      <button
        className={clsx(BUTTON_BASE_CLASSES, {
          "text-[#D5D5D5]": currentPage === totalPages,
          "text-[#545454]": currentPage !== totalPages,
        })}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.39777 5.66281L3.36027 0.947189C3.34449 0.934768 3.32553 0.92705 3.30557 0.924919C3.2856 0.922788 3.26544 0.926332 3.2474 0.935143C3.22936 0.943955 3.21417 0.957676 3.20357 0.974732C3.19298 0.991787 3.18741 1.01149 3.1875 1.03156V2.06683C3.1875 2.13246 3.2183 2.1954 3.2692 2.23558L8.09063 6.00031L3.2692 9.76505C3.21697 9.80522 3.1875 9.86817 3.1875 9.9338V10.9691C3.1875 11.0588 3.29063 11.1083 3.36027 11.0534L9.39777 6.33781C9.44908 6.29779 9.4906 6.24658 9.51915 6.1881C9.5477 6.12962 9.56254 6.06539 9.56254 6.00031C9.56254 5.93523 9.5477 5.87101 9.51915 5.81253C9.4906 5.75404 9.44908 5.70284 9.39777 5.66281Z"
            fill={currentPage === totalPages ? "#D5D5D5" : "#545454"}
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductPagination;
