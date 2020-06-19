import React, { Component } from 'react';
import Form from '../components/form/Form.component';
import forest from '../components/img/forest-during-dawn.jpg';
import '../images/Smith_House.png';
import '../assets/styles/contact.styles.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact-div" style={{ backgroundImage:`url(${forest})` }}>
                <h1>Contact Us</h1>
                <p>Phone Number: (812)637-1058</p>
                <Form />
            </div>
        )
    }
}

export default Contact

