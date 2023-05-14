import "./Register.css"
import Input from '../FormsItems/Input';
import Button from '../FormsItems/Button';
import Title from '../FormsItems/Title';
import BottomMessage from '../FormsItems/BottomMessage';
import React, { useState } from 'react';


function Register() {
    const [input, setInput] = useState({
        Username: '',
        Password: '',
        RepeatPassword: '',
        DisaplyName: ''
    });

    const [error, setError] = useState({
        Username: '',
        Password: '',
        RepeatPassword: '',
        DisaplyName: ''
    })
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "Username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;
                case "Password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.RepeatPassword && value !== input.RepeatPassword) {
                        stateObj["RepeatPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["RepeatPassword"] = input.RepeatPassword ? "" : error.RepeatPassword;
                    }
                    break;
                case "RepeatPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.Password && value !== input.Password) {
                        stateObj[name] = "Password and Reapeat Password fields does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }



    return (
        <form>
            <div id="register-form">
                <Title title="Register to Message-Manager!"></Title>
                <Input value={input.Username} onChange={onInputChange} description={{ labelClass: "col-sm-2 col-form-label name", ins: "Username", name: "Username", divClass: "col-sm-10", type: "text", id: "Username", value: input.Username, onChange: onInputChange }}></Input>
                {error.Username && <span className='err invalid-feedback'>{error.Username}</span>}
                <Input value={input.Password} onChange={onInputChange} description={{ labelClass: "col-sm-2 col-form-label name", ins: "Password", name: "Password", divClass: "col-sm-10", type: "password", id: "Password", value: input.Password, onChange: onInputChange }}></Input>
                <Input value={input.RepeatPassword} onChange={onInputChange} description={{ labelClass: "col-sm-2 col-form-label name", ins: "Repeat Password", name: "RepeatPassword", divClass: "col-sm smaller", type: "password", id: "Repeat-Password", value: input.RepeatPassword, onChange: onInputChange }}></Input>
                {error.RepeatPassword && <span className='err invalid-feedback'>{error.RepeatPassword}</span>}
                <Input description={{ labelClass: "col-sm-2 col-form-label name smaller", ins: "Display Name", name: "DisplayName", divClass: "col-sm-10", type: "text", id: "Display-Name", value: input.DisaplyName, onChange: onInputChange }}></Input>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Picture", divClass: "col-sm-10", type: "file", id: "Picture" }}></Input>
                <Button description={{ id: "register-button", name: "Register" }}></Button>
                <BottomMessage description={{ id: "already-registered", question: "Already registered? ", link: "/Login", click: "Click here", goal: " to login" }}></BottomMessage>
            </div>
        </form>
    );
}

export default Register;