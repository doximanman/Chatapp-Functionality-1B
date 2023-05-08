import "./Login.css"
import logo from "../Pictures/logo.png"

function Login() {
    return (
        <>
            <form>
                <div id="login-form">
                    <div id="open" className="col-12">
                        <img id="logo" src={logo} alt="logo"></img>
                            <h1 className="col-10">Login to Message-Manager!</h1>
                    </div>
                    <div className="col-11 row ">
                        <label className="col-sm-2 col-form-label name">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="Username" required></input>
                        </div>
                    </div>
                    <div className="col-11 row">
                        <label className="col-sm-2 col-form-label name">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="Password" required></input>
                        </div>
                    </div>
                    <button id="login-button" type="submit" className="btn btn-primary">Login</button>
                    <div id="not-registered">Not registered? <a href="../Register/Register.html">Click here</a> to
                        register
                    </div>
                </div>
            </form>
        </>
);
}

export default Login