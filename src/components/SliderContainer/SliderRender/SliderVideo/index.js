import React, { Component } from 'react';

class SliderVideo extends Component {
    render() {
        return (
            <li className={`cd-bg-video ${this.props.select}`}>
                <div className="cd-full-width">
                    <h2>{this.props.SlideConfig.slideTitle}</h2>
                    <p>{this.props.SlideConfig.slideDescription}</p>
                    <a href="#0" className="cd-btn">Learn more</a>
                </div>

                <div className="cd-bg-video-wrapper" data-video="assets/video/video">
                </div>
            </li>
        );
    }
}

export default SliderVideo;