import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './form.styles.css';

const initialState = {
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: ''
}

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render(){
        return(
            <div className="form-container">
                <form id="contact-form" 
                      onSubmit={this.handleSubmit.bind(this)} 
                      // method="POST"
                >

                    <table>
                        <tr>
                            <td style={{textAlign: 'right'}}>
                                <label htmlFor="name" 
                                       className="form-label-name"
                                       >Name: 
                                </label>
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <input type="text" 
                                       className="form-control"
                                       placeholder="John Smith" 
                                       value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)}
                                />
                            </td>
                            <td className="error-message" style={{ color: "red", float: "right" }}>
                                {this.state.nameError}
                            </td>
                        </tr>

                        <tr>
                            <td style={{textAlign: 'right'}}>
                                <label htmlFor="email" 
                                       className="form-label-email"
                                       >Email address: 
                                </label>
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <input type="email" 
                                       className="form-control"
                                       placeholder="johnsmith@email.com" 
                                       aria-describedby="emailHelp" 
                                       value={this.state.email} 
                                       onChange={this.onEmailChange.bind(this)} 
                                />
                            </td>
                            <td className="error-message" style={{ color: "red", float: "right" }}>
                                {this.state.emailError}
                            </td>
                        </tr>

                    
                        <tr>
                            <td style={{textAlign: 'right'}}>
                                <label htmlFor="message" 
                                       className="form-label-message"
                                       >Message: 
                                </label>
                            </td>
                            <td style={{textAlign: 'left'}}>
                                <textarea className="form-control" 
                                          rows="5"
                                          placeholder="Leave a message" 
                                          value={this.state.message} 
                                          onChange={this.onMessageChange.bind(this)} 
                                />
                            </td>
                            <td className="error-message" style={{ color: "red", float: "right" }}>
                                {this.state.messageError}
                            </td>
                        </tr>
                    </table>

                    <button type="submit" className="btn_btn-primary">Submit</button>
                     
                </form>

            </div>

        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";

        if(!this.state.name){
            nameError = "name cannot be blank";
        }

        if(!this.state.email.includes('@')){
            emailError = "invalid email";
        }

        if(!this.state.email.includes('.')){
            emailError = "invalid email";
        }

        if(nameError || emailError || messageError){
            this.setState({nameError, emailError, messageError});
            return false;
        }

        return true;
    };

    handleSubmit(event) {
        const isValid = this.validate();

        if(isValid){
            emailjs.sendForm(
                'huffmanryan2@gmail.com', 
                'pleasanthomesformemail', 
                event.target, 
                'user_IIGtfOX6EJ2c0GxjRdyac'
            ).then((result) => {
                // console.log(event.target);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            this.setState(initialState);
        }
        console.log(event.target);
    }
}

export default Form;

/*
// ORIGINAL <form> TAG:
<form id="contact-form" 
      onSubmit={this.handleSubmit.bind(this)} 
      method="POST"
>
*/