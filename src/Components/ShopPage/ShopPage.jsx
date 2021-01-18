import React, {useState} from "react";
import {Pagination} from "../Pagination/Pagination";
import styles from "./shoppage.module.css"

export const ShopPage = (props) => {
    const [inputText, setInputText] = useState("");
    const [byLowestSize, setByLowestSize] = useState(false);


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const indexOfLastEvent = currentPage * itemsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filteredTVs = props.tvList
        .sort((a,b) => {
            return byLowestSize ? parseInt(a.Size) - parseInt(b.Size) : parseInt(b.Size) - parseInt(a.Size)
        })
        .filter(field => {
        return field.Name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
    });

    const changeText = (e) => {
        setInputText(e.target.value)
    };

    return <>
        <div className={styles.shopPage__searchBlock}>
            <div><input type="text" value={inputText} onChange={changeText}  placeholder="Поиск телевизора"/></div>
            <div><button onClick={ ()=> setByLowestSize((prevState)=>!prevState)}>По {byLowestSize ? "убыванию диагонали" : "возрастанию диагонали"}</button></div>
        </div>
        <div className={styles.container}>
            {filteredTVs
                .slice(indexOfFirstEvent, indexOfLastEvent)
                .map(field => <div key={field.Name} className={styles.shopPage__items}>
                <div style={{textAlign:"center"}}><img src={field.Picture} alt="pic"/></div>
                <div className={styles.shopPage__itemText}>
                    <span>{field.Name}</span>
                    <p>Диагональ: {field.Size} inch</p>
                    <p>Подробное описание: {field.Specifications}</p>
                    <p>Цена: <b>{field.Price}</b></p>
                </div>
            </div>)}
        </div>
        <Pagination paginate={paginate} perPage={itemsPerPage} totalItems={filteredTVs.length-1} currentPage={currentPage} />
    </>
}