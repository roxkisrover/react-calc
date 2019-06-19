import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 1,
    };

    this.displayTextRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { scale } = this.state;
    const availableWidth = this.displayTextRef.current.parentNode.offsetWidth;
    const actualWidth = this.displayTextRef.current.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (this.props !== prevProps && scale !== actualScale) {
      this.scaleAdjustment(scale, actualScale);
    }
  }

  scaleAdjustment(scale, actualScale) {
    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { scale } = this.state;
    const { children } = this.props;

    return (
      <div className="display">
        <div
          className="display__text"
          ref={this.displayTextRef}
          style={{
            transform: `scale(${scale}, ${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Display;
