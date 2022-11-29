import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Box, ListItem, Link } from '@mui/material';

import HeaderAdmin from "../components/header";
import Breadcrumps from "../components/breadcrumbs";
import { PropertyList } from "../components/propertyList.jsx";
import { Error } from "../components/error.jsx"


export class Properties extends Component {
    state = {
        page: 1,
        pages: null,
        properties: null,
        error: "You are srtanger"
    }

    componentDidMount(){
        fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`)
        .then(data => data.json())
        .then(data => this.setState({...data}))
        .catch(error => this.setState({error}));
    }

    showMore(){
        const { page, pages } = this.state;

        if (page < pages) {
            this.setState(state => ({ page: state.page + 1 }))
            fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${page}`)
            .then((data) => data.json())
            .then(data => this.setState(state => ({properties: [...state.properties, ...data.properties]})))
            .catch(error => this.setState({error}));
        }
    }

    showMoreBtn() {
        const {page, pages, properties} = this.state;
        if(pages === 1) {return null}
        if(properties.length === 0) {return null}
        if(page !== pages) {
            return <ListItem>
                <Button 
                variant="contained" 
                size="medium" 
                onClick={() => {this.showMore()}}
                sx={{position:"sticky"}}>
                    {"Show more"}
                </Button>
            </ListItem>
        }
    }

    render() {
        const { properties, error } = this.state;
        const { name, email } = this.props.user;

        if(error) {
            return <> 
            <Error errorTitle="Error 401">{error}</Error>
            <Button variant="contained" size="lg" sx={{margin: "20px 40px"}}>
                <Link underline="hover" href={`/api/auth/logout`} color="#ffffff">
                Try again
                </Link>
            </Button>
        </>
        }

        if(!properties){return null}

        if (!email) {
            return <Redirect to="/" />;
        }

        if(!properties){ return null }
        
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
            
            <HeaderAdmin user={this.props.user} />

            <Breadcrumps title="Properties" breadcrumbs={[]} lastBreadcrumbs="true" />

            <PropertyList properties={ properties }/>

            {this.showMoreBtn()}

        </Box>
        );
    }
}
