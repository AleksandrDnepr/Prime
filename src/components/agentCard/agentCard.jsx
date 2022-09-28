import { Component } from "react";
import "./agentCard.css";
import agentPhoto from "./agent-001.png";
import ContactInfo from "../contactInfo/contactInfo";


export default class AgentCard extends Component {
render() {
    return(
        <section className="AgentSection">
            {/* <Subtitle>AGENT INFORMATION</Subtitle> */}
            <ul className="AgentCard">
                <li>
                    <img src={agentPhoto} alt="agents_pic" className="AgentPhoto"/>
                </li>
                <li className="AgentName">
                    Adam Conover
                </li>
                <li className="AgentLocation">
                    Los Angeles, California
                </li>
                {/* <ContactInfo 
                    type="adress" 
                    border={false}>
                    24th Street, New York, USA
                </ContactInfo> */}
                <ContactInfo 
                    type="tel" 
                    border={false}>
                    +0 123-456-7890
                </ContactInfo>
                <ContactInfo 
                    type="mail" 
                    border={false}>
                    adam@example.com
                </ContactInfo>
            </ul>
        </section>
    )
}
}
