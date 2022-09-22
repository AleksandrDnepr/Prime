import { Component } from "react";

import Pagination from "../components/pagination/pagination";

export default class ComponentsGallery extends Component {

    render() {
        return <div>


            <Pagination collection={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} currentPage={3}/>
        
        </div>
    }
}