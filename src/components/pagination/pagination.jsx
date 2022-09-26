import { Component } from "react";
import Button from "../button/button";
import "./pagination.css";

export default class Pagination extends Component {
    state = {
        currentPage: this.props.page,
    };

    pageSeparating(pagesNumber) {
        let collection = [];
        for (let i = 1; i <= pagesNumber; i++) {
        collection.push(i);
        }
        return collection;
    }

    sliceVisiblePages(pages, page) {
        const availablePages = this.pageSeparating(pages);
        const currentPageIndex = availablePages.findIndex((e) => e === page);
        let visiblePages = availablePages.slice();
        if (availablePages.length > 5) {
        if (availablePages.slice(-3).includes(page)) {
            visiblePages = availablePages.slice(-5);
        } else {
            visiblePages =
            currentPageIndex < 3
                ? availablePages.slice(0, 5)
                : availablePages.slice(currentPageIndex - 2, currentPageIndex + 3);
        }
        }
        return visiblePages;
    }

    setPage(direction){
        switch (direction) {
            case "prev": 
                this.setState(prevState => ({
                    currentPage: prevState.currentPage - 1,
                }));
            break;
            case "next":
                this.setState(prevState => ({
                    currentPage: prevState.currentPage + 1,
                }));
            break;
            default: return;
        }
    }

    renderPrevPage() {
        if (this.state.currentPage === 1) {return null;}
        return <Button 
                    className="ShowPrevBtn"
                    handleClick={() => this.setPage("prev")}
                > 
                    {'\u003C'} 
                </Button>;
    }

    renderNextPage(pages) {
        if (this.state.currentPage === pages) {return null;}
        return <Button 
                    className="ShowNextBtn" 
                    handleClick={() => this.setPage("next")}
                > 
                    {'\u003E'} 
                </Button>;
    }
    
    renderButton(button, currentPage, onChange){
        return <Button
                    className="PaginationPageBtn"
                    handleClick={() => onChange(button)}
                    isDisabled={button === currentPage}
                > 
                    {button} 
                </Button>
    }

    render() {
        const { currentPage } = this.state;
        const { pages, onChange } = this.props;
        const visiblePages = this.sliceVisiblePages(pages, currentPage);

        if (pages === 1) {return null;}

        return (
        <nav className="Pagination">
            {this.renderPrevPage()}
            <ol className="PaginationList">
                {visiblePages.map(button => 
                    <li className="PaginationItem" key={button}>
                        {this.renderButton(button, currentPage, onChange)}
                    </li>
                    )}
            </ol>
            {this.renderNextPage(pages)}
        </nav>
        );
    }
}
