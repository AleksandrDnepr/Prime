import { Component } from 'react';
import ViewModeToggle from '../ViewModeToggle/ViewModeToggle';
import {PropertyCard} from '../propertyCard/propertyCard.jsx';
import {Pagination} from '../pagination/pagination.jsx';
import "./propertyList.css";

export class PropertyList extends Component {
    state = {
        currentPage: this.props.page,
        currentMode: this.props.defaultView,
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentMode !== prevState.currentMode) {
            const maxPage = Math.ceil(prevProps.properties.length/12)
            if(maxPage < this.state.currentPage) {
                this.setState({currentPage: maxPage});
            };
        }
    }

    changeMode(mode) {  
        switch (mode) {
            case "grid":
            this.setState({currentMode: "list"});
            break;
            case "list":

            this.setState({currentMode: "grid"});
            break;
        default: return;
        }
    }

    avalaiblePages(mode, properties) {
        switch (mode) {
            case "grid":
                return Math.ceil(properties.length/12);
            case "list":
                return Math.ceil(properties.length/8);
            default: return;
        }
    }
    
    
    async changePage(page) {
        window.scrollTo(0, 0);

        // fetchProperties().then(this.setState({currentPage: data.page})) 
    }

    showCurrentPage(mode, properties){
        const perPage = mode === "grid" ? 12 : 8;
        const firstOnCurrentPage = (this.state.currentPage - 1) * perPage;
        return properties.slice(firstOnCurrentPage, (firstOnCurrentPage + perPage))
    }

    propertyListCompiling(mode, properties) {
        const visibleProperties = this.showCurrentPage(mode, properties);
        return (
            <ul className={`propertyList__list ${mode}`}>
                { visibleProperties.map(({ id, images, deal, type, link, price, title, location, description, details }, i) => 
                <li key={id}>
                    <PropertyCard  
                        id={id}
                        picture={images.prewiew}
                        mode={mode}
                        deal={deal}
                        type={type}
                        link={link}
                        price={price}
                        title={title}
                        location={location}
                        description={description} 
                        details={details} 
                    />
                </li> )}
            </ul>
        )
    }

    showToggle() {
        const { properties } = this.props;
        const { currentMode } = this.state;

        if(properties.length === 0) {return null}
        return <ViewModeToggle 
                    mode={currentMode} 
                    onChange={(mode) => this.changeMode(mode)}
                />
    }
    
    render() {
        const { properties, pages, page, mode, handleChange } = this.props;
        if (!properties) {return null}
        const { currentPage, currentMode } = this.state;
        return (
            <section className="propertyList__section">
                {this.showToggle()}
                {this.propertyListCompiling(currentMode, properties)}
                
                <Pagination 
                    pages={pages}
                    page={page}
                    onChange={(page) => handleChange(page)}
                />
            </section>
        )
    }
}




