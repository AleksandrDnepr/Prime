import { Component } from "react";

import Pagination from "../components/pagination/pagination";

export default class ComponentsGallery extends Component {

    render() {
        return <div>


            <Pagination pages={15} page={4} onChange={page => console.log(`Page changed to ${page}`)}/>
        
        </div>
    }
}