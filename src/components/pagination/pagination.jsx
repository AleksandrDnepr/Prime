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
                {page !== 1 && 
                    <Button 
                    className="ShowPrevBtn"
                    children="<"
                    handleClick={()=> console.log("Show previos")}/>}
                <ol className="PaginationList">
                    {availablePages.map((button) => (
                        <li className="PaginationItem">
                            {console.log(button === page)}
                            <Button 
                                className="PaginationPageBtn" 
                                handleClick={onChange}
                                isDisabled={button === page}
                                key={button}
                                children={button}
                            />
                        </li>
                        )
                    )}
                </ol>
                {page !== lastPage && 
                    <Button className="ShowNextBtn"
                            children={">"}
                            handleClick={()=> console.log("Show next")}
                    />
                }
            </nav>
        )
    }
}




