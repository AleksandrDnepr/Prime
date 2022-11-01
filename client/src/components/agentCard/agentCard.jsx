import { Component } from "react";
import { Subtitle } from "../subtitle/subtitle.jsx";
import "./agentCard.css";
import loading from "../loading/loading.webp";
import { ContactForm } from "../contactForm/contactForm.jsx";

export class AgentCard extends Component {
    state = {
        status: "default",
        isLoading: true,
    };

    componentDidMount() {
        const { agentId } = this.props;

        fetch(`api/agents/${agentId}/`)
        .then((res) => res.json())
        .then((data) => this.setState({ agent: data.agent }))
        .finally(() => {
            this.setState({
            isLoading: false,
            });
        });
    }

    async sendMail(info) {
    const { agentId } = this.props;

    this.setState({ status: "loading", });

    await fetch(`api/agents/${agentId}/send-mail`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ info }),
        })
        .then((response) => response.json())
        .then(() => {this.setState({status: "success",});

            setTimeout(() => {
                this.setState({
                    status: "default",
                });
            }, 2000)
        })
        .catch((err) => {
            this.setState({
            status: "error",
            });
        });
    }

    statusForm() {
        const { status } = this.state;

        switch ( status ) {
        case "success":
            return (
            <p className="agent__form_text">
                <span className="agent__form_thanks">Thank you!</span>
                Your message was sent succesfully. Our agent will contact you as
                soon as possible!
            </p>
            );
        case "loading":
            return (
            <img className="agent__loading" src={loading} alt="loading..." />
            );
        case "default":
            return <ContactForm onSubmit={(info) => this.sendMail(info)} />;
        case "error":
            return (
            <>
                <ContactForm onSubmit={(info) => this.sendMail(info)} />
                <div>Something went wrong</div>
            </>
            );
        default:
            break;
        }
    }

    render() {
        const { isLoading, agent } = this.state;

        if ( isLoading ) { return "loading..."; }

        if ( !agent ) { return null; }

        const { name, photo, location } = agent;

        return (
        <section className="agent__section">
            <Subtitle>AGENT INFORMATION</Subtitle>
            <ul className="agent__card">
                <li className="agent__photo">
                    <img
                    src={photo}
                    alt={`photo_agent_${name}`}
                    className="agent__photo--img"
                    />
                </li>
                <li className="agent__name">{name}</li>
                <li className="agent__location">{location}</li>
                <li className="agent__form">{ this.statusForm() }</li>
            </ul>
        </section>
        );
    }
}