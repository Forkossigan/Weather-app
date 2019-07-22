import React from 'react';


export class Search extends React.Component { 
    constructor(props) {
        super(props);
        
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue() {
        const city = document.querySelector('input').value
    this.props.changeValue(city);
    }
    render(){
    return (
        <div>
            <input id= 'search' type='text' onChange={this.changeValue}  />
           
        </div>
    

    );
    }
}
