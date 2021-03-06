import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // independent of this.props.handleClick
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, locked, val, disabled, isRolling } = this.props;

    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if(locked) classes += 'Die-locked ';
    if(isRolling) classes += 'Die-rolling';

    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
