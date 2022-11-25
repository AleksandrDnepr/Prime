import React, { Component } from 'react'
import "./gallery.css"
import { ReactComponent as LeftArrow } from "./leftArrow.svg"
import { ReactComponent as RightArrow } from "./rightArrow.svg"


export class Gallery extends Component {
    
    state = {
        currentIndex: 0
    }

    showNext = () => {
        this.setState(prev => ({ currentIndex: prev.currentIndex + 1 }))
    }

    showPrev = () => {
        this.setState(prev => ({ currentIndex: prev.currentIndex - 1 }))
    }

    renderLeftArrow() {
        const { currentIndex } = this.state;
        if (currentIndex <= 0) {return null}
        return <LeftArrow onClick={this.showPrev} className="gallery__arrow-left" />;
    }

    renderRightArrow() {
        const { currentIndex } = this.state;
        const { pictures } = this.props;
        const lastPhotoIndex = pictures.length - currentIndex + 1;
        if (currentIndex >= lastPhotoIndex) {return null}
        return <RightArrow onClick={this.showNext} className="gallery__arrow-right" />;
    }

    render() {
        const { pictures } = this.props;
        const { currentIndex } = this.state;

        return <div className="gallery container__gallery">
                {this.renderLeftArrow()}
                <img className="gallery__img" src={pictures[currentIndex]} alt="First view with the property" />
                {this.renderRightArrow()}
            </div>
    }
}