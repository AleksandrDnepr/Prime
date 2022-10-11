import { Component } from "react";
import ContactInfo from "../contactInfo/contactInfo";
import Subtitle from "../subtitle/subtitle";
import "./agentCard.css";


export default class AgentCard extends Component {
render() {
    const {name, photoUrl, location, phone, email} = this.props;
    return(
        <section className="agent-card">
            <Subtitle>AGENT INFORMATION</Subtitle>
            <ul className="agent-card__block">
                <li className="agent-card__photo">
                    <img src={photoUrl} alt={`photo_agent_${name}`} className="agent-card__img"/>
                </li>
                <li className="agent-card__name">
                    {name}
                </li>
                <li className="agent-card__location">
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
