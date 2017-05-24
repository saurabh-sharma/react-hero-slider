import React, { Component } from 'react';
import SliderRender from './SliderRender';
import SliderNav from './SliderNav';

class Slider extends Component {
    render() {
        return (
        <section className="cd-hero">
            <SliderRender />
            <SliderNav />
        </section>
        );
    }
}

export default Slider;