import { Component } from "react";
import {Subtitle} from "../subtitle/subtitle.jsx";
import "./agentCard.css";
import loading from "../loading/loading.webp";
import { ContactForm } from "../contactForm/contactForm.jsx"


export class AgentCard extends Component {

    async sendMail(info, email) {
        await  fetch('api/agents/001/send-mail', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({info, email}),
        })
          .then((response) => response.json())
          .then((info) => {console.log(info);})
          .catch((err) => {console.log(err.message);})
      }

statusForm() {
    const { status, email } = this.props;

    switch (status) {
    case "success": 
        return <p className="agent__form_text"><span className="agent__form_thanks">Thank you!</span>
        Your message was sent succesfully. Our agent will contact you as soon as possible!</p>;
    case "loading": 
        return <img className="agent__loading" src={loading} alt="loading..." />;
    case "default": 
        return <ContactForm onSubmit={info => this.sendMail(info, email)}/>;
    default:
        break;
}
}

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
                    {this.statusForm()}
                </li>
                </ul>
        </section>
    )
}
}
