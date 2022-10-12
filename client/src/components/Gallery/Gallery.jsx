import React, { Component } from 'react'
import "./gallery.css"
import { ReactComponent as LeftArrow } from "./leftArrow.svg"
import { ReactComponent as RightArrow } from "./rightArrow.svg"


export class Gallery extends Component {
    
    state = {
        currentPhoto: 0
    }

    showNext() {
        if(this.state.currentPhoto>this.props.pictGalery.length-this.state.currentPhoto+1){
            return;
        }
        else{
        this.setState(prev => ({ currentPhoto: prev.currentPhoto + 1 }))
        }
    }

    showPrev() {
        if(this.state.currentPhoto<=0){
            return;
        }
        this.setState(prev => ({ currentPhoto: prev.currentPhoto - 1 }))
    }

    renderLeftArrow() {
        if (this.state.currentPhoto <= 0) {return null}
        return <LeftArrow onClick={() => this.showPrev()} className="gallery__arrow-left" />;
    }

    renderRightArrow() {
        if (this.state.currentPhoto >= this.props.pictGalery.length-this.state.currentPhoto+1) {return null}
        return  <RightArrow onClick={() => this.showNext()} className="gallery__arrow-right" />;
    }

    render() {
        const { pictGalery } = this.props;
        const { currentPhoto } = this.state;
        return (
            <div className="gallery container__gallery">
                {this.renderLeftArrow()}
                <img className="gallery__img" src={pictGalery[currentPhoto]} alt="First view with the property" />
                {this.renderRightArrow()}
            </div>
        )
    }
}