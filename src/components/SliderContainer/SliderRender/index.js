import React, { Component } from 'react';
import SliderVideo from './SliderVideo';
import SliderPhoto from './SliderPhoto';


class SliderRender extends Component {
    render() {
        return (
            <ul className="cd-hero-slider">
                <SliderVideo />
                <SliderPhoto />
                <SliderPhoto />
            </ul> 
        );
    }
}

export default SliderRender;