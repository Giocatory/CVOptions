import React, {Component} from 'react';
import "./IPAddress.css";

class IPAddress extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.ip}</h1>
                <p>Это ваш IP адресс в сети</p>
            </div>
        )
    }
}

export default IPAddress;