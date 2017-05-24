import React, { Component } from 'react';

class SliderVideo extends Component {
    render() {
        return (
            <li className="cd-bg-video selected">
                <div className="cd-full-width">
                    <h2>Slide title here</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo.</p>
                    <a href="#0" className="cd-btn">Learn more</a>
                </div>

                <div className="cd-bg-video-wrapper" data-video="assets/video/video">
                </div>
            </li>
        );
    }
}

export default SliderVideo;