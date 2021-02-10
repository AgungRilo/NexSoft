import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {type, name, id, className, placeholder, onChange} = this.props
        return ( 
            <div className="col-75">
                <input type={type} id={id} name={name} className={className} placeholder={placeholder} onChange={onChange} />
            </div>
         );
    }
}
 
export default Input;