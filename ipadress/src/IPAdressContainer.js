import React from "react";
import IPAddress from "./IPAddress";

class IPAddressContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_adress: "...",
        }

    }

    componentDidMount() {
        fetch('https://api.ipify.org?format=json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            this.setState({ip_adress: data.ip})
          })
          .catch(error => {
            console.error('Error fetching IP address:', error);
          });
      }
      
    
    render() {
        return (
            <IPAddress ip={this.state.ip_adress}/>
        )
    }
}

export default IPAddressContainer;