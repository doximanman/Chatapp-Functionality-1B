import "./Login.css"
import Input from '../FormsItems/Input';
import Button from '../FormsItems/Button';
import Title from '../FormsItems/Title';
import Background from '../FormsItems/Background';
import BottomMessage from '../FormsItems/BottomMessage';

function Login() {
    return (
        <>
            <Background></Background>
            <form>
                <div id="login-form">
                    <Title title="Login to Message-Manager!"></Title>
                    <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Username", divClass: "col-sm-10", type: "text", id: "Username" }}></Input>
                    <Input description={{ labelClass: "col-sm-2 col-form-label name", name: "Password", divClass: "col-sm-10", type: "password", id: "Password" }}></Input>
                    <Button description={{ id: "login-button", name: "Login" }}></Button>
                    <BottomMessage description={{id:"not-registered", question:"Not regitered? ",link:"..\Register\Register.html", click:"Click here", goal:" to register"}}></BottomMessage>
                </div>
            </form >
        </>
    );
}

export default Login;
