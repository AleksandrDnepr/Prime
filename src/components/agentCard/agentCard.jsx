import { Component } from "react";
import {ContactInfo} from "../contactInfo/contactInfo.jsx";
import {Subtitle} from "../subtitle/subtitle.jsx";
import "./agentCard.css";


export class AgentCard extends Component {

render() {
    const {name, photoUrl, location, phone, email} = this.props;
    
    return(
        <section className="agent__section">
            <Subtitle>AGENT INFORMATION</Subtitle>
            <ul className="agent__card">
                <li className="agent__photo">
                    <img src={photoUrl} alt={`photo_agent_${name}`} className="agent__photo--img"/>
                </li>
                <li className="agent__name">
                    {name}
                </li>
                <li className="agent__location">
                    {location}
                </li>
                <ContactInfo 
                    type="tel" 
                    border={false}>
                    {phone}
                </ContactInfo>
                <ContactInfo 
                    type="mail" 
                    border={false}>
                    {email}
                </ContactInfo>
            </ul>
        </section>
    )
}
}
