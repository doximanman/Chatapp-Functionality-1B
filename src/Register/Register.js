import "./Register.css"
import Input from '../FormsItems/Input';
import Button from '../FormsItems/Button';
import Title from '../FormsItems/Title';
import BottomMessage from '../FormsItems/BottomMessage';
import React, { useState } from 'react';


function Register() {
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const usernameRegExp = /^[a-zA-Z0-9-_!.]{4,20}$/;
    
    const [input, setInput] = useState({
        Username: '',
        Password: '',
        RepeatPassword: '',
        DisplayName: '',
        Picture: ''
    });

    const [error, setError] = useState({
        Username: '',
        Password: '',
        RepeatPassword: '',
        DisplayName: '',
        Picture: ''
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
                    if (!value || !usernameRegExp.test(value)) {
                        stateObj[name] = "Username must contain 4-20 characters, can include letters, digits and _-!.";
                    }
                    break;
                case "Password":
                    if (!value || !passwordRegExp.test(value)) {
                        stateObj[name] = "The passwors must contain 8-20 characters, at least one uppercase and lowercase leters, special character and digit.";
                    }
                    break;
                case "RepeatPassword":
                    if (!value || (input.Password && value !== input.Password)) {
                        stateObj[name] = "Password and reapeated Password does not match.";
                    }
                    break;
                case "DisplayName":
                    if (!value) {
                        stateObj[name] = "Please enter display name.";
                    } else if (input.DisplayName && value === input.Username) {
                        stateObj[name] = "Please don't use your real name for the displayed name.";
                    }
                    break;
                case "Picture":
                    if (!e.target.files[0]) {
                        console.log("hey");
                        stateObj[name] = "Please choode a picture."
                        break;
                    }
                default:
                    break;
            }
            return stateObj;
        });
    }

    const handleRegister = () => {
        const username = input.Username;
        const password = input.Password;
        const displayName = input.DisplayName;
        const picture = input.Picture;
        const userData = { username, password, displayName, picture };
        const storedUsers = localStorage.getItem('users');
        let users = [];
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    };



    return (
        <form>
            <div id="register-form">
                <Title title="Register to Message-Manager!"></Title>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Username", name: "Username", divClass: "col-sm-10", type: "text", id: "Username", value: input.Username, onChange: onInputChange, className: error.Username ? "is-invalid form-control" : "form-control" }}></Input>
                {error.Username && <span className='err invalid-feedback small'>{error.Username}</span>}
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Password", name: "Password", divClass: "col-sm-10", type: "password", id: "Password", value: input.Password, onChange: onInputChange, className: error.Password ? "is-invalid form-control" : "form-control" }}></Input>
                {error.Password && <span className='err invalid-feedback small'>{error.Password}</span>}
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Repeat Password", name: "RepeatPassword", divClass: "col-sm-10 smaller", type: "password", id: "Repeat-Password", value: input.RepeatPassword, onChange: onInputChange, className: error.RepeatPassword ? "is-invalid form-control" : "form-control" }}></Input>
                {error.RepeatPassword && <span className='err invalid-feedback small'>{error.RepeatPassword}</span>}
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Display Name", name: "DisplayName", divClass: "col-sm-10", type: "text", id: "Display-Name", value: input.DisplayName, onChange: onInputChange, className: error.DisplayName ? "is-invalid form-control" : "form-control" }}></Input>
                {error.DisplayName && <span className='err invalid-feedback small'>{error.DisplayName}</span>}
                <Input description={{ labelClass: "col-sm-2 col-form-label name", ins: "Picture", divClass: "col-sm-10", type: "file", id: "Picture" }}></Input>
                {error.Picture && <span className='err invalid-feedback small'>{error.Picture}</span>}
                <Button description={{ id: "register-button", name: "Register", onClick: handleRegister }}></Button>
                <BottomMessage description={{ id: "already-registered", question: "Already registered? ", link: "/Login", click: "Click here", goal: " to login" }}></BottomMessage>
            </div>
        </form>
    );
}

export default Register;