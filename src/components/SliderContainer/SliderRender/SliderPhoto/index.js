import React, { Component } from 'react';

class SliderPhoto extends Component {
    render() {
        const { SlideConfig } = this.props;
        //Style Definition
        const background = {
            backgroundImage: `url(${SlideConfig.backgroundURL})`,
        };

        return (
            <li className={this.props.select} style={background} >
                <div className="cd-half-width">
                    <h2>{SlideConfig.slideTitle}</h2>
                    <p>{SlideConfig.slideDescription}</p>
                        {(SlideConfig.sliderBtn.buttonPresent)
                            ?<a href={SlideConfig.sliderBtn.buttonURL} target={SlideConfig.sliderBtn.openinNewTab} className="cd-btn">{SlideConfig.sliderBtn.buttonTitle}</a>
                            : ''
                        }
                </div>
            </li>
        );
    }
}

export default SliderPhoto;