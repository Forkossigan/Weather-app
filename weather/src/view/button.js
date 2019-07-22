import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange() {
       
        this.props.handleClick();
      }
    render() {
        return (
            <div> <button onClick = {this.handleChange}>{this.props.content}</button></div>
        );

    }
}