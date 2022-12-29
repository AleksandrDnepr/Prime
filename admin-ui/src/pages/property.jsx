import { Component } from "react";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { TabsBlock} from "../components/tabsBlock.jsx";
import {Switch, Route} from "react-router-dom";

export class PropertyPage extends Component {
    
    
    render() {
        const { user } = this.props;

        return (
            <FullScreenPage user={user}>
                <p>Left and right scroll buttons are never 
                be presented with scrollButtons={false}. 
                All scrolling must be initiated through user agent scrolling 
                mechanisms (e.g. left/right swipe, shift mouse wheel, etc.)</p>

                <TabsBlock/>
                    <Switch>
                        <Route path="/properties/:property_id/images">images</Route>
                        <Route path="/properties/:property_id/floor_plans">floor_plans</Route>
                        <Route path="/properties/:property_id/features">features</Route>
                        <Route path="/properties/:property_id/amenities">amenities</Route>
                        <Route path="/properties/:property_id/messages">messages</Route>
                    </Switch>

            </FullScreenPage>
        )            
        
    }
}