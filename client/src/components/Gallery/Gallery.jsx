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

    onSliredClick = () => {
         const { pictures } = this.props;
         const { currentIndex } = this.state;
         this.setState(prev => ( console.log(pictures)))
    // return this.setState(prev => ({ currentIndex: (pictures.length - prev.currentIndex)}))
    }

    renderSlider()   {
        const { pictures } = this.props;
        return pictures.map((picture) => 
       <img className="gallery__slider_img" src={picture} alt="First view with the property" 
       onClick={this.onSliredClick} key={picture}/>)
    }

    render() {
        const { pictures } = this.props;
        const { currentIndex } = this.state;

        return <div className = "gallery">
            <div className = "gallery__main">
                {this.renderLeftArrow()}
                <img className="gallery__main_img" src={pictures[currentIndex]} alt="First view with the property" />
                {this.renderRightArrow()}
            </div>
            <div className="gallery__slider">
              {this.renderSlider()}
            </div>
            </div>
    }
}