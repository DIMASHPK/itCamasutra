import React from 'react'
import s from "./Paginator.module.css";


export const Paginator = ({
                              setPage,
                              currentPage,
                              counter,
                              pagesCount
                          }) => (
    <div className={s.pages}>
        <button
            onClick={e => setPage(e)}
            disabled={currentPage === 1}
            className={currentPage === 1 ? s.disabled : s.prev}
        >
            prev
        </button>
        <span>{counter}</span>
        <button
            onClick={e => setPage(e)}
            disabled={currentPage === pagesCount}
            className={currentPage === pagesCount ? s.disabled : s.next}
        >
            next
        </button>
    </div>
)