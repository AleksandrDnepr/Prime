import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { flexbox } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';


export class Properties extends Component {
    state = {
        agent: null,
        page: 1,
        pages: null,
        properties: null
    }

    async componentDidMount(){
        await fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`)
        .then(data => data.json())
        .then(data => this.setState({...data}))
        .catch(error => this.setState({error}));
    }

    async showMore() {
        const { page, pages } = this.state;

        if (page < pages) {
            this.setState(state => ({ page: state.page + 1 }))
            await fetch(`/api/properties?agentEmail=${this.props.user.email}&page=${page}`)
            .then(data => data.json())
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

        if(error) {return <p>{error}</p> }

        if (!email) {
            return <Redirect to="/" />;
        }

        if(!properties){ return null }
        
        return (
        <Box
            component="div"
            sx={{
            display: flexbox,
            width: `calc(100vw)`,
            backgroundColor:"#b8bde8ae",
            lineHeight: 30,
            }}  
        >
            
        <Stack direction="row" spacing={1} sx={{p:1}}>
            <Chip
                sx={{p: 2, m: 2}}  
                label={`Hello, ${name}!`}
                variant="outlined"
                color="primary"
            />

            <Button component="a" href="/api/auth/logout" variant="outlined" size="small">Sign out</Button>
        </Stack>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ml: 2 }}>

            {properties.map(property => (
            <Link key={property.id} underline="hover" href={`/properties/${property.id}/messages`}>
                <ListItem key={property.id} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar variant="square" alt={property.title} src={property.images.prewiew} />
                    </ListItemAvatar>
                    <ListItemText primary={property.title}/>
                </ListItem>
                <Divider variant="inset" component="li" />
              </Link>
            ))}
        </List>

        {this.showMoreBtn()}

        </Box>
        );
    }
}
