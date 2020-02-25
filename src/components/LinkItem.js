import React, { Component } from 'react';

class LinkItem extends Component {
    render () {
        return (
            <a href={this.props.href} target={this.props.wnd}>
                <img className="icons" src={this.props.icon} alt={this.props.alt}/>
            </a>
        )
    }
}

export default LinkItem;