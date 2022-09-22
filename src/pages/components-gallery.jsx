import { Component } from "react";

import Pagination from "../components/pagination/pagination";

export default class ComponentsGallery extends Component {

    render() {
        return <div>


            <Pagination pages={[1, 2, 3, 4, 5, 6, 7]} currentPage={3}/>
        
        </div>
    }
}