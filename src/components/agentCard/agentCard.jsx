// picture="http://example.com/.../name.png"
// name="Adam Conover"
// location={['California', 'Los Angeles']}
// description="Lorem ipsum...."
// contacts={{ tel: "+0 123-456-7890", email: "adam@example.com"}}

import { Component } from "react";
import "./agentCard.css";
import agentPhoto from "./agent-001.png";
import ContactInfo from "../contactInfo/contactInfo";


export default class AgentCard extends Component {
render(){
    return(
        <section>
            {/* <Subtitle>AGENT INFORMATION</Subtitle> */}
        <figure className="AgentCard">
            <img src={agentPhoto} alt="agents_pic" className="AgentPhoto"/>
            <figcaption className="AgentInfo">
                <p className="AgentName">Adam Conover</p>
                <p className="AgentLocation">Los Angeles, California</p>
                <div className="DividerDecor"></div>
                <ContactInfo type="tel"/>
            </figcaption>
        </figure>
        </section>
    )
}
}
