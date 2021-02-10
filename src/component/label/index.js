import React, { Component } from 'react';


class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {label}=this.props
        return ( 
            <div className="col-25">
                <label>{label}</label>
            </div>
         );
    }
}
 
export default Label;
