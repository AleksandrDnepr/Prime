import React, { Component } from 'react'
import "./gallery.css"
import { ReactComponent as LeftArrow } from "./leftArrow.svg"
import { ReactComponent as RightArrow } from "./rightArrow.svg"

let sectionIndex = 0;

export class Gallery extends Component {
    
    state = {
        currentIndex: 0,
    }

    showNext = () => {
        const { pictures } = this.props;
        let track = document.querySelector('.gallery__slider_container'); 

        if (sectionIndex < pictures.length-3) {
            track.style.transform = `translateX(${sectionIndex*(-273)}px)`}
        if ((pictures.length === 5 && sectionIndex === 2) || 
            (pictures.length === 6 && sectionIndex === 3))
            {track.style.transform = `translateX(${(sectionIndex-1)*(-273)}px)`}
        if (pictures.length === 5 && sectionIndex === 3)
            {track.style.transform = `translateX(${(sectionIndex-2)*(-273)}px)`}

        sectionIndex++ ; 
        if (sectionIndex-1 === pictures.length) {sectionIndex --}

        this.setState(prev => ({ currentIndex: prev.currentIndex + 1 }));        
    }

    showPrev = () => {
        const { pictures } = this.props;
        const track = document.querySelector('.gallery__slider_container');
        sectionIndex--;      

        if (sectionIndex <= pictures.length-3 || sectionIndex >= 2) {
            track.style.transform = `translateX(${(sectionIndex-2)*(-273)}px)`}
        if (sectionIndex === 1 ) {track.style.transform = `translateX(${(sectionIndex-1)*(-273)}px)`}
        if (sectionIndex === 0) {track.style.transform = `translateX(${(sectionIndex)*(-273)}px)`}

        this.setState(prev => ({ currentIndex: prev.currentIndex - 1 }));
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
        let { currentIndex } = this.state;
    
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
        sectionIndex = index;
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
                        <div className='gallery__slider_container'>
                        {this.renderSlider()}
                        </div>
                    </div>
                </div>
    }
}
