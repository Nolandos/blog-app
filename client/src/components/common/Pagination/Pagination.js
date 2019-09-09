import React, { useState } from 'react';
import './Pagination.scss';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = (props) => {
    const [presentPage, setPage] = useState(props.initialPage || 1);
    const { pages } = props;

    const changePage = (newPage) => {
        const { onPageChange } = props;

        setPage(newPage);
        onPageChange(newPage);
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                { presentPage > 1 && <li className="pagination__list__item"><IoIosArrowBack/></li> } 
                {[...Array(pages)].map((el, page) =>
                <li
                    key={++page}
                    onClick={() => { changePage(page) }}
                    className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                    {page}
                </li>
                )}
                {presentPage < pages && <li className="pagination__list__item"><IoIosArrowForward/></li>}
            </ul>
        </div>
    );
};

export default Pagination;