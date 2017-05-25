import React, { Component } from 'react';
import SliderRender from './SliderRender';
import SliderNav from './SliderNav';

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    
    SliderConfig = {
        autoplay: true,
        slide: [{
            slideType: 'photo', //photo/video
            backgroundURL: '../../assets/tech-1-mobile.jpg',
            slideTitle: 'Slide Title 1',
            slideDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.',
            sliderBtn: {
                buttonTitle:'Button 1',
                buttonPresent: true, //true/false
                buttonURL:'#', //URL that button holds
                openinNewTab: true, //whether url is opened in new tab or not
            }
        },
        {
            slideType: 'photo', //photo/video
            backgroundURL: '../../assets/tech-2-mobile.jpg',
            slideTitle: 'Slide Title 2',
            slideDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.',
            sliderBtn: {
                buttonTitle: 'Button 2',
                buttonPresent: true, //true/false
                buttonURL:'#', //URL that button holds
                openinNewTab: true, //whether url is opened in new tab or not
            }
        }]
    }

    // countSlide = () => {
    //     return this.SliderConfig.slide;
    // }

    render() {
        return (
            <section className="cd-hero">
                <SliderRender SlideConfig={this.SliderConfig} />
                <SliderNav slideCount={this.SliderConfig.slide} />
            </section>
        );
    }
}

export default Slider;