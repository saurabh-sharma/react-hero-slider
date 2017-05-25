import React, { Component } from 'react';

class SliderNav extends Component {

    render() {
        const {slideCount} = this.props;
        return (
            <div className="cd-slider-nav">
                <nav>
                    <span className="cd-marker item-1"></span>
                    <ul>
                        {
                            slideCount.map((slide,index) => {
                                return (index==0)?<li className="selected" key={index}><a href="#0"></a></li>
                                :<li key={index}><a href="#0"></a></li>
                            })
                        }
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default SliderNav;