import { Component } from "react";
import { Box, Button } from "@mui/material";
import { Error } from "../components/error.jsx";




export class StoleMessageError extends Component {
    
    render() {
        const {error} = this.props;
        return(
            <Box>
                
                <Error errorTitle={"Error 403"}>{error}</Error>

            </Box>
        )
    }
} 