import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Box } from '@mui/material';

import { HeaderAdmin } from "../components/header.jsx";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { PropertyList } from "../components/propertyList.jsx";
import { AuthError } from "../components/authError.jsx";


import { LoadMoreBtn } from "../components/loadMoreBtn.jsx";

export class Properties extends Component {
    state = {
        page: 1,
        pages: null,
        properties: [],
    }

    componentDidMount() {
        fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`)
        .then(data => data.json())
        .then(data => this.setState({...data}))
        .catch(error => this.setState({error}));
    }

    showMore = async() => {
        const { page, pages } = this.state;

        if (page < pages) {
            await this.setState(state => ({ page: state.page + 1 }))

            await fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`)
            .then((data) => data.json())
            .then(data => this.setState(state => ({properties: [...state.properties, ...data.properties]})))
            .catch(error => this.setState({error}));
        }
    }

    loadMoreBtn() {
        const {page, pages, properties} = this.state;
        if(pages === 1) {return null}
        if(properties.length === 0) {return null}
        if(page !== pages) {
            return <LoadMoreBtn handleClick={this.showMore}/>
        }
    }

    render() {
        const { properties, error } = this.state;
        const { user } = this.props;

        if(error) {
            return <AuthError error={error}/>
        }

        if(!properties) { return null }

        if (!user.email) {
            return <Redirect to="/" />;
        }
        
        return (
        <Box
            component="div"
            sx={{
                minWidth: `100%`,
                backgroundColor: `#94c5e6`,
                textAlign: "center",
                lineHeight: 30,
                padding: 4,
            }}  
        >
            
            <HeaderAdmin user={user} />

            <Breadcrumps title="Properties" breadcrumbs={[]} lastBreadcrumbs="true" />

            <PropertyList properties={properties}/>

            {this.loadMoreBtn()}

        </Box>
        );
    }
}
