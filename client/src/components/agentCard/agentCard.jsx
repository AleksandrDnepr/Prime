import { Component } from "react";
import {Subtitle} from "../subtitle/subtitle.jsx";
import "./agentCard.css";
import loading from "./loading.webp";


export class AgentCard extends Component {

render() {
    const {name, photoUrl, location } = this.props;
    
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
                <li className="agent__form">
                    {/* <ContactForm /> */}
                    <p className="agent__form_text"><span className="agent__form_thanks">Thank you!</span>
                    Your message was sent succesfully. Our agent will contact you as soon as possible!</p>
                    <img className="agent__loading" src={loading} alt="loading..." />
                </li>
                </ul>
        </section>
    )
}
}
