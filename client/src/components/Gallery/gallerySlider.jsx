import React, { Component } from 'react'

class GallerySliderItem extends Component {

    className() {
        const { current } = this.props;
      return current ? 
            "gallery__slider_img gallery__slider_img_active" : 
            "gallery__slider_img gallery__slider_img_disabled"
    }

    render() {
        const { picture, onClick } = this.props;
       return <img className={this.className()}
            src={picture}  
            alt="Slider with apartment's images" 
            onClick={onClick} />
    }
}


export class GallerySlider extends Component {

    containerOffset() {
        let highligthted;
        const {currentIndex, pictures} = this.props;
        if (currentIndex === 0) {highligthted = 0} else 
        if (currentIndex === pictures.length -1) {highligthted = pictures.length -1} 

    }
    render() {
    const { pictures, currentIndex } = this.props;

    return  <div className="gallery__slider">
     <div className='gallery__slider_container' style={this.containerOffset()}>
        {pictures.map((picture,index) =>
            <GallerySliderItem key={picture} picture={picture} current={currentIndex === index} 
            onClick={() => this.props.onChange(index)}/>)  
            }
              </div>
                    </div>
}
}