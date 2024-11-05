import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByUserChoices, setOffset } from '@/redux/actions/productActions';
import { Button } from './ui/button';

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
    //TODO border'ları ayarla
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
            {getDisplayedPages().map(page => (
                <Button
                    size="pagination"
                    key={page}
                    variant={page === currentPage ? "paginationOther" : "paginationCurrent"}
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
