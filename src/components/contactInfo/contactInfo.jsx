
import { Component } from 'react';
import { ReactComponent as PhoneIcon } from './icon-phone.svg';
import { ReactComponent as EmailIcon } from './icon-email.svg';
import { ReactComponent as AdressIcon } from "./icon-address.svg";


export default class ContactInfo extends Component {
customizeContact(type, info){
const createLinkHref = (type) => {
    switch (type) {
        case "tel":
            return `tel:${info}`;
        case "mail":
            return `mailto:${info}`;
        case "adress":
            const searchParam = info.toLowerCase();
            const regex = /[^\w\s]/gi;
            const newstr = searchParam.replaceAll(regex, '').replaceAll(/\s/gi, "+");
            return `https://www.google.com/maps/place/${newstr}`;   
        default:
        break;
    }
}
const chooseImage = (type) => {
    switch (type) {
        case "tel":
            return <PhoneIcon/>;
        case "mail":
            return <EmailIcon/>;
        case "adress":
            return <AdressIcon/>;
        default:
        break;
    }
}
    return <a href={createLinkHref(type)} 
                className="contact-info__item"
                target="_blank"
                rel="noreferrer">
                {chooseImage(type)}
                    
                {info}
            </a>
}

  render() {
    const {type, children} = this.props;
    return (
            <li className="contact-info__text">
                {this.customizeContact(type, children)}
            </li>
        )
  }
}
