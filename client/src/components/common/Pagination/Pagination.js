import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = (props) => {
    const [presentPage, setPage] = useState(props.initialPage || 1);
    const { pages, onPageChange } = props;

    const changePage = (newPage) => {
        setPage(newPage);
        onPageChange(newPage);
    }

    const getNextPage = () => {
        const nextPage = presentPage + 1;
        setPage(nextPage);
        onPageChange(nextPage);
    }

    const getPrevPage = () => {
        const prevPage = presentPage - 1;
        setPage(prevPage);
        onPageChange(prevPage);
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                { presentPage > 1 && 
                    <li 
                        className="pagination__list__item" 
                        onClick={() => getPrevPage()} >
                        <IoIosArrowBack/>
                    </li>
                } 
                {[...Array(pages)].map((el, page) =>
                <li
                    key={++page}
                    onClick={() => { changePage(page) }}
                    className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                    {page}
                </li>
                )}
                {presentPage < pages && 
                <li 
                    className="pagination__list__item"
                    onClick={() => getNextPage()} >
                    <IoIosArrowForward/>
                </li>}
            </ul>
        </div>
    );
};

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;