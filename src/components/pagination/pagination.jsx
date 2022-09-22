import { Component } from "react";
import "./pagination.css";

export default class Pagination extends Component {
    pageChanged() {

    }
    render() {
        const {pages, currentPage} = this.props;

        return <div>
            {pages.map((page, index) => {
                
                return <button 
                            className="PaginationPageBtn" 
                            onClick={this.pageChanged}
                            disabled={index === currentPage}
                        >
                            {index + 1}
                        </button>
            })}
        </div>
    }
}


