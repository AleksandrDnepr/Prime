import React, { Component } from 'react'
import "./gallery.css"
import { ReactComponent as LeftArrow } from "./leftArrow.svg"
import { ReactComponent as RightArrow } from "./rightArrow.svg"


export default class Gallery extends Component {
    state = {
        currentPhoto: 0
    }

    showNext() {
        this.setState(prev => ({ currentPhoto: prev.currentPhoto + 1 }))
    }

    showPrev() {
        this.setState(prev => ({ currentPhoto: prev.currentPhoto - 1 }))
    }

    render() {
        const { pictGalery } = this.props
        const { currentPhoto } = this.state
        return (
            <div className="gallery container__gallery">
                <LeftArrow onClick={() => this.showPrev()} className="gallery__arrow-left" />
                <img className="gallery__img" src={pictGalery[currentPhoto]} alt="First view with the property" />
                <RightArrow onClick={() => this.showNext()} className="gallery__arrow-right" />
            </div>
        )
    }
}
