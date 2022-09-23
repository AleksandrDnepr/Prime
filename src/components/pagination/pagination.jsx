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

    render() {
        const {pages, page, onChange} = this.props;
        const availablePages = this.pageSeparating(pages);
        const lastPage = availablePages[availablePages.length - 1];
        
        if (availablePages.length === 1) {return null};
        return (
            <nav className="Pagination">
                {page !== 1 && <button className="ShowPrevBtn PaginationPageBtn">&#60;</button>}
                <ol className="PaginationList">
                    {availablePages.map((button) => (
                        <li>
                            <Button 
                                className="PaginationPageBtn" 
                                handleClick={onChange}
                                disabled={(button) === page}
                                key={button}
                                children={button}
                            />
                        </li>
                        )
                    )}
                </ol>
                {page !== lastPage && <button className="ShowNextBtn PaginationPageBtn">&#62;</button>}
            </nav>
        )
    }
}




