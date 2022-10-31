import { Component } from "react";
import {Subtitle} from "../subtitle/subtitle.jsx";
import "./agentCard.css";
import { ContactForm } from "../contactForm/contactForm.jsx"
import { Loading } from "../loading/loading.jsx";


export class AgentCard extends Component {

statusForm() {
    const { status } = this.props;

    switch (status) {
    case "success": 
        return <p className="agent__form_text"><span className="agent__form_thanks">Thank you!</span>
        Your message was sent succesfully. Our agent will contact you as soon as possible!</p>;
    case "loading": 
        return <Loading />;
    case "default": 
        return <ContactForm />;
    default:
        break;
}
}
render() {
    const {name, photoUrl, location, status } = this.props;
    
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
                    {this.statusForm()}
                </li>
                </ul>
        </section>
    )
}
}
