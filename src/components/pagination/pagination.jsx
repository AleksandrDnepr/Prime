import { Component } from "react";
import "./pagination.css";

export default class Pagination extends Component {
    pageChanged(e) {
        console.log(`change current page in parent's state into ${e.target.innerText}`)
    }
    pageSeparating(collection){
        const perPage = 2;
        const pagesNumber = Math.ceil(collection.length/perPage);
        let pages = [];
        for (let i = 1; i <= pagesNumber; i++) {
            pages.push(i);
        } 
        return pages;
    }

    render() {
        const {collection, currentPage} = this.props;
        const pages = this.pageSeparating(collection);
        return (
        <div className="Pagination">
            <div className="PaginationWrapper">
                {pages.map((page, index) => (
                    <button 
                        className="PaginationPageBtn" 
                        onClick={this.pageChanged}
                        disabled={(index + 1) === currentPage}
                        key={page}
                    >
                        {index + 1}
                    </button>)
                )}
            </div>
            <button className="ShowNextBtn PaginationPageBtn">&#62;</button>
        </div>
    )}
}


