import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByUserChoices, setOffset } from '@/redux/actions/productActions';

const Pagination = () => {
    const { categoryId, sort, filter } = useParams();
    const dispatch = useDispatch();
    const limit = useSelector(store => store.product.limit);
    const offset = useSelector(store => store.product.offset);
    const total = useSelector(store => store.product.total);
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    const handlePageClick = (pageNumber) => {
        const newOffset = limit * (pageNumber - 1);
        dispatch(setOffset(newOffset));
        dispatch(fetchProductsByUserChoices(categoryId, sort, filter, limit, newOffset));
    };

    const handleFirstClick = () => handlePageClick(1);
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            handlePageClick(currentPage + 1);
        }
    };

    const getDisplayedPages = () => {
        if (currentPage === 1) {
            return [1, 2, 3];
        } else if (currentPage === totalPages) {
            return [totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-5">
            <button
                onClick={handleFirstClick}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                First
            </button>
            {getDisplayedPages().map(page => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-1 border rounded ${
                        page === currentPage
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
