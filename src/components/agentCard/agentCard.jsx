import { Component } from "react";
import ContactInfo from "../contactInfo/contactInfo";
import { Subtitle } from "../subtitle/subtitle";
import "./agentCard.css";


export default class AgentCard extends Component {
render() {
    const {name, photo, location, phone, email} = this.props;
    return(
        <section className="agent__section">
            <Subtitle>AGENT INFORMATION</Subtitle>
            <ul className="agent__card">
                <li>
                    <img src={photo} alt={`photo_agent_${name}`} className="agent__photo"/>
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
