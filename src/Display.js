import React, { Component } from 'react';
import './Display.scss';

class Display extends Component {
    state = {
        scale: 1
    };

    componentDidUpdate(prevProps) {
        const { scale } = this.state;
        const node = this.node;
        const availableWidth = node.parentNode.offsetWidth;
        const actualWidth = node.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (this.props !== prevProps && scale !== actualScale) {
            if (actualScale < 1) {
                this.setState({ scale: actualScale });
            }
            else if (scale < 1) {
                this.setState({ scale: 1 });
            }
        }
    }

    render() {
        return (
            <div className="display">
                <div
                    className="display__text"
                    ref={node => (this.node = node)}
                    style={{ transform: `scale(${this.state.scale}, ${this.state.scale})` }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Display;
