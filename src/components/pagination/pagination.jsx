import { Component } from "react";
import "./pagination.css";

export default class Pagination extends Component {
    pageChanged(e) {
        console.log(`change current page in parents state into ${e.target.innerText}`)
    }
    render() {
        const {pages, currentPage} = this.props;

        return <div>
            {pages.map((page, index) => {
                
                return <button 
                            className="" 
                            onClick={this.pageChanged}
                            disabled={(index + 1) === currentPage}
                            key={index}
                        >
                            {index + 1}
                        </button>
            })}
        </div>
    }
}


