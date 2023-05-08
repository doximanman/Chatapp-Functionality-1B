import logo from "../Pictures/logo.png"
import "./Register.css"

function Register(){
    return(
        <>
            <form>
                <div id="register-form">
                    <div id="open" className="col-12">
                        <img id="logo" src={logo} alt="logo"/>
                            <h1 className="col-10">Register to Message-Manager!</h1>
                    </div>
                    <div className="col-11 row ">
                        <label className="col-sm-2 col-form-label name">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="Username" required />
                        </div>
                    </div>
                    <div className="col-11 row">
                        <label className="col-sm-2 col-form-label name">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="Password" required />
                        </div>
                    </div>
                    <div className="col-11 row">
                        <label className="col-sm-2 col-form-label name">Repeat Password</label>
                        <div className="col-sm smaller">
                            <input type="password" className="form-control" id="Repeat-Password" required />
                        </div>
                    </div>
                    <div className="col-11 row">
                        <label className="col-sm-2 col-form-label name smaller">Display Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="Display-Name" required />
                        </div>
                    </div>
                    <div className="col-11 row">
                        <label className="col-sm-2 col-form-label name">Picture</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="file" id="Picture" required />
                        </div>
                    </div>
                    <button id="register-button" type="submit" className="btn btn-primary">Register</button>
                    <div id="already-registered">Already registered? Click here to
                        login
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;