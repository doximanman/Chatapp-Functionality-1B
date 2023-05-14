import "./Register.css"
import Input from '../FormsItems/Input';
import Button from '../FormsItems/Button';
import Title from '../FormsItems/Title';
import Background from '../FormsItems/Background';
import BottomMessage from '../FormsItems/BottomMessage';

function Register() {
    return (
        
        <form>
            <div id="register-form">
                <Title title="Register to Message-Manager!"></Title>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Username", divClass: "col-sm-10", type: "text", id: "Username" }}></Input>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Password", divClass: "col-sm-10", type: "password", id: "Password" }}></Input>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Repeat Password", divClass: "col-sm smaller", type: "password", id: "Repeat-Password" }}></Input>
                <Input description={{ labelClass: "col-sm-2 col-form-label name smaller", name: "Display Name", divClass: "col-sm-10", type: "text", id: "Display-Name" }}></Input>
                <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Picture", divClass: "col-sm-10", type: "file", id: "Picture" }}></Input>
                <Button description={{ id: "register-button", name: "Register" }}></Button>
                <BottomMessage description={{ id: "already-registered", question: "Already registered? ", link: "/Login", click: "Click here", goal: " to login" }}></BottomMessage>
            </div>
        </form>
    );
}

export default Register;