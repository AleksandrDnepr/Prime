import { Component } from "react";
import Button from "../button/button";
import "./pagination.css";

export default class Pagination extends Component {

    pageSeparating(pagesNumber) {
        let collection = [];
        for (let i = 1; i <= pagesNumber; i++) {
            collection.push(i);
        } 
        return collection;
    }
    sliceVisiblePages(pages, page) {
        const availablePages = this.pageSeparating(pages);
        const currentPageIndex = availablePages.findIndex(e => e === page);
        let visiblePages = availablePages.slice();
        if(availablePages.length > 5) {
            if(availablePages.slice(-3).includes(page)) {
                visiblePages = availablePages.slice(-5);
            } else {
                visiblePages = currentPageIndex < 3 ? availablePages.slice(0, 5) : availablePages.slice(currentPageIndex - 2, currentPageIndex + 3);
            }
        }
        return visiblePages;
    }

    render() {
        const {pages, page, onChange} = this.props;
        const visiblePages = this.sliceVisiblePages(pages, page);

        if (pages === 1) {return null};
        return (
            <nav className="Pagination">
                {page !== 1 && 
                    <Button 
                    className="ShowPrevBtn"
                    children="<"
                    handleClick={()=> console.log("Show previos")}/>}
                <ol className="PaginationList">
                    {visiblePages.map((button) => (
                        <li className="PaginationItem" key={button}>
                            <Button 
                                className="PaginationPageBtn" 
                                handleClick={onChange}
                                isDisabled={button === page}
                                children={button}
                            />
                        </li>
                        )
                    )}
                </ol>
                {page !== pages && 
                    <Button className="ShowNextBtn"
                            children=">"
                            handleClick={()=> console.log("Show next")}
                    />
                }
            </nav>
        )
    }
}




