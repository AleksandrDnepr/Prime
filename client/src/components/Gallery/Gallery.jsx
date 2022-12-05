import React, { Component } from "react";
import "./gallery.css";
import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as RightArrow } from "./rightArrow.svg";

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
        const lastPhotoIndex = pictures.length - currentIndex;
        if (lastPhotoIndex <= 1) {return null}
        return <RightArrow onClick={this.showNext} className="gallery__arrow-right" />;
    }

    renderSlider() {
        const { pictures } = this.props;
        const { currentIndex } = this.state;
        return pictures.map((picture,index) => 
            <img className={index === currentIndex ? 
            "gallery__slider_img gallery__slider_img_active" : 
            "gallery__slider_img gallery__slider_img_disabled"} 
            src={picture} 
            key={index} 
            alt="Slider with apartment's images" 
            onClick={() => this.onPicClick(index)}
            />)
    }

    onPicClick(index) {
        this.setState({currentIndex:index});
    }

    render() {
        const { pictures } = this.props;
        const { currentIndex } = this.state;

        return <div className="gallery">
                    <div className="gallery__main">
                        {this.renderLeftArrow()}

                        <img className="gallery__main_img" 
                        src={pictures[currentIndex]} 
                        alt="First view with the property" />
                        
                        {this.renderRightArrow()}
                    </div>
                    <div className="gallery__slider">
                        {this.renderSlider()}
                    </div>
                </div>
    }
}
