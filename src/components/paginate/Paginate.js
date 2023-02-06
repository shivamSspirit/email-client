import React, { useEffect, useState } from 'react'
import './paginate.css'
import { useDispatch } from 'react-redux'
import { getpagedemails } from '../../actions/email';
import { resetFilters } from '../../actions/email';

function Paginate() {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const changePage = (pageNumber) => {
        dispatch(resetFilters())
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getpagedemails(currentPage))
    }, [currentPage])

    return (
        <div className='paginate-block'>
            <ul className='pagination-list'>
                <li className='page-list'>
                    <button onClick={() => changePage(1)} className={`page-btn ${currentPage === 1 && 'activepage'}`}>1</button>
                </li>
                <li className='page-list'>
                    <button onClick={() => changePage(2)} className={`page-btn ${currentPage === 2 && 'activepage'}`}>2</button>
                </li>
            </ul>
        </div>
    )
}

export default Paginate
