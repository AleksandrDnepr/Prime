import { Component } from 'react';
import { ViewModeToggle } from '../ViewModeToggle/ViewModeToggle.jsx';
import { PropertyCard } from '../propertyCard/propertyCard.jsx';
import { Pagination } from '../pagination/pagination.jsx';
import "./propertyList.css";

export class PropertyList extends Component {
    
    showToggle() {
        const { properties, changeMode } = this.props;
        if(properties.length === 0) {return null}

        return <ViewModeToggle 
                    mode={this.props.mode} 
                    onChange={(mode) => changeMode(mode)}
                />
    }
    
    render() {
        const { properties, pages, page, mode, changePage } = this.props;
        if (!properties) {return null}

        return (
            <section className="propertyList__section">

                {this.showToggle()}

                <ul className={`propertyList__list ${mode}`}>
                { properties.map(({ id, images, deal, type, link, price, title, location, description, details }) => 
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

                <Pagination 
                    pages={pages}
                    page={page}
                    onChange={(page) => changePage(page)}
                />

            </section>
        )
    }
}





