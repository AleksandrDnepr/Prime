
import { Component } from 'react'
import icon_address from "./icon-address.svg";
import icon_email from "./icon-email.svg";
import icon_phone from "./icon-phone.svg";



export default class ContactInfo extends Component {
customizeContact(type, info){
const customHref = (type) => {
    switch (type) {
        case "tel":
            return `tel:${info}`;
        case "mail":
            return `mailto:${info}`;
        default:
        break;
    }
}
const customImg = (type) => {
    switch (type) {
        case "tel":
            return icon_phone;
        case "mail":
            return icon_email;
        default:
        break;
    }
}
    return <a href={customHref(type)} className="contact-info__item">
                <img
                    className="contact-info__icon"
                    src={customImg(type)}
                    alt="icon"
                    width="16px"
                />
                <span>{info}</span>
            </a>
}

  render() {
    const {type} = this.props;
    return (
            <div>{this.customizeContact("mail", "+0 123-456-7890")}</div>
        )
  }
}
