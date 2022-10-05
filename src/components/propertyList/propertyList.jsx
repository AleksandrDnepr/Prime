import { Component } from 'react';
import ViewModeToggle from '../ViewModeToggle/ViewModeToggle';
import PropertyCard from '../propertyCard/propertyCard';
import Pagination from '../pagination/pagination';
import "./propertyList.css";

export default class PropertyList extends Component {
    state = {
        currentPage: 1,
        currentMode: this.props.defaultView,
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

    
    changePage(page) {
        this.setState({currentPage: page});
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
                <li key={link+i}>
                    <PropertyCard  
                        id={id}
                        picture={images.prewiew}
                        mode={mode}
                        deal={"sale"}
                        type={type}
                        link={link}
                        price={250000}
                        title={title}
                        location={location}
                        description={description} 
                        details={details} 
                    />
                </li> )}
            </ul>
        )
    }
    render() {
        const {properties} = this.props;
        const {currentPage, currentMode} = this.state;
        return (
            <section className="propertyList__section">
                <ViewModeToggle     
                    mode={currentMode} 
                    onChange={(mode) => this.changeMode(mode)}
                />

                {this.propertyListCompiling(currentMode, properties)}
                
                <Pagination 
                    pages={this.avalaiblePages(currentMode, properties)}
                    page={currentPage}
                    onChange={(page) => this.changePage(page)}
                />
            </section>
        )
    }
}




