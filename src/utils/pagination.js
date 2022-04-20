import { useState } from "react";
import Pagination from "react-js-pagination";

export default function MyPagination(props){
    const [activePage , setActivePage] = useState(5);
    function handlePageChange(pageNumber) {
        setActivePage(pageNumber)
    }
    return(
        <Pagination
            activePage={activePage}
            itemsCountPerPage={props.itemsCount? props.itemsCount:10}
            totalItemsCount={props.totalItems? props.totalItems:0}
            pageRangeDisplayed={props.pageRange? props.pageRange:5}
            itemClass="page-item"
            linkClass="page-link"
            hideDisabled={true}
            innerClass={`pagination ourPagination ${props.className?props.className:''}`}
            onChange={(e)=>handlePageChange(e)}
        />
    );
}