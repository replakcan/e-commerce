import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "@/redux/actions/productActions";
import { Button } from "./ui/button";

const Pagination = () => {
  const dispatch = useDispatch();
  const limit = useSelector((store) => store.product.limit) || 1; // Varsayılan değer 1
  const offset = useSelector((store) => store.product.offset) || 0; // Varsayılan değer 0
  const total = useSelector((store) => store.product.total) || 0; // Varsayılan değer 0

  // `totalPages`'i `NaN` olmaması için kontrol ediyoruz
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.max(1, Math.floor(offset / limit) + 1);

  const handlePageClick = (pageNumber) => {
    const newOffset = limit * (pageNumber - 1);
    dispatch(setOffset(newOffset));
  };

  const handleFirstClick = () => handlePageClick(1);
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const getDisplayedPages = () => {
    if (currentPage === 1) {
      return [1, 2, 3].slice(0, totalPages); // Sadece mevcut sayfalar kadar göster
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages].filter(
        (page) => page > 0
      );
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  return (
    <div className="flex items-center justify-center pt-5">
      <Button
        size="pagination"
        variant="paginationFirst"
        onClick={handleFirstClick}
        disabled={currentPage === 1}
        className="disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        First
      </Button>
      {getDisplayedPages().map((page) => (
        <Button
          size="pagination"
          key={page}
          variant={
            page === currentPage ? "paginationOther" : "paginationCurrent"
          }
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        size="pagination"
        variant="paginationNext"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
