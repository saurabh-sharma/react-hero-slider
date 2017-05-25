import React, { Component } from 'react';
import SliderVideo from './SliderVideo';
import SliderPhoto from './SliderPhoto';


class SliderRender extends Component {
    render() {
        const {SlideConfig} = this.props; 
        return (
            <ul className={`cd-hero-slider ${(SlideConfig.autoplay)?'autoplay':''}`} >
                {
                    SlideConfig.slide.map((slide,index) => {
                        return (slide.slideType === 'photo')
                        ?(index==0)
                            ?<SliderPhoto SlideConfig={slide} key={index} select="selected" />
                            :<SliderPhoto key={index} SlideConfig={slide} />
                        :(index==0)
                            ?<SliderVideo key={index} select="selected" SlideConfig={slide} />
                            :<SliderVideo key={index} SlideConfig={slide} />
                    })
                }
            </ul> 
        );
    }
}

export default SliderRender;