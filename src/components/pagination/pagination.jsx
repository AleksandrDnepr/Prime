import { Component } from "react";
import "./pagination.css";

export default class Pagination extends Component {
    pageChanged() {
        console.log("change current page in parents state")
    }
    render() {
        const {pages, currentPage} = this.props;

        return <div>
            {pages.map((page, index) => {
                
                return <button 
                            className="" 
                            onClick={this.pageChanged}
                            disabled={index === currentPage}
                        >
                            {index + 1}
                        </button>
            })}
        </div>
    }
}


