import React, { Component } from 'react';

class SliderNav extends Component {
    render() {
        return (
            <div className="cd-slider-nav">
                <nav>
                    <span className="cd-marker item-1"></span>
                    
                    <ul>
                        <li className="selected"><a href="#0"></a></li>
                        <li><a href="#0"></a></li>
                        <li><a href="#0"></a></li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default SliderNav;