import React, {useState} from "react";
import style from "./pagination.module.css";

export const Pagination = ( {perPage,totalItems,paginate,portionSize=10, currentPage} ) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / perPage); i++){
        pageNumbers.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    const portionCount = Math.ceil((totalItems/perPage) / portionSize);

    return <div className={style.pagination__container}>
        <ul>
            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}> Назад </button> }
            {pageNumbers
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(number => (
                <li key={number}><a className={currentPage === number ? style.pagination__currentPage : null} onClick={()=>paginate(number)} href="#">{number}</a></li>
            ))}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}> Вперед </button> }
        </ul>
    </div>
}