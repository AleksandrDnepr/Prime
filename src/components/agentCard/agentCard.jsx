import { Component } from "react";
import "./agentCard.css";
import ContactInfo from "../contactInfo/contactInfo";


export default class AgentCard extends Component {
render() {
    const {name, photo, location, phone, email} = this.props;
    return(
        <section className="AgentSection">
            {/* <Subtitle>AGENT INFORMATION</Subtitle> */}
            <ul className="AgentCard">
                <li>
                    <img src={photo} alt={`photo_agent_${name}`} className="AgentPhoto"/>
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
