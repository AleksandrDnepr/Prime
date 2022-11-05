import { Component } from 'react';
import ViewModeToggle from '../ViewModeToggle/ViewModeToggle';
import {PropertyCard} from '../propertyCard/propertyCard.jsx';
import {Pagination} from '../pagination/pagination.jsx';
import "./propertyList.css";

export class PropertyList extends Component {
    state = {
        currentPage: this.props.page,
        currentMode: this.props.mode,
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentMode !== prevState.currentMode) {
            const maxPage = Math.ceil(prevProps.properties.length/12)
            if(maxPage < this.state.currentPage) {
                this.setState({currentPage: maxPage});
            };
        }
    }

    // changeMode(mode) {  
    //     switch (mode) {
    //         case "grid":
    //         this.setState({currentMode: "list"});
    //         break;
    //         case "list":

    //         this.setState({currentMode: "grid"});
    //         break;
    //     default: return;
    //     }
    // }

    
    propertyListCompiling(mode, properties) {
        return (
            <ul className={`propertyList__list ${mode}`}>
                { properties.map(({ id, images, deal, type, link, price, title, location, description, details }, i) => 
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

        if(properties.length === 0) {return null}
        return <ViewModeToggle 
                    mode={this.props.mode} 
                    onChange={(mode) => this.props.changeMode(mode)}
                />
    }
    
    render() {
        const { properties, pages, page, mode, changePage } = this.props;
        if (!properties) {return null}
        return (
            <section className="propertyList__section">
                {this.showToggle()}
                {this.propertyListCompiling(mode, properties)}
                
                <Pagination 
                    pages={pages}
                    page={page}
                    onChange={(page) => changePage(page)}
                />
            </section>
        )
    }
}




