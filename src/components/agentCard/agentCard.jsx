import { Component } from "react";
import "./agentCard.css";
import agentPhoto from "./agent-001.png";
import ContactInfo from "../contactInfo/contactInfo";


export default class AgentCard extends Component {
render() {
    const {name, AgentPhoto, location, phone, email} = this.props;
    return(
        <section className="AgentSection">
            {/* <Subtitle>AGENT INFORMATION</Subtitle> */}
            <ul className="AgentCard">
                <li>
                    <img src={agentPhoto} alt={`photo_agent_${name}`} className="AgentPhoto"/>
                </li>
                <li className="AgentName">
                    {name}
                </li>
                <li className="AgentLocation">
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
