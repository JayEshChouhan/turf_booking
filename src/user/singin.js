import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../api/userSignup";
import soccer from "../images/login/soccer.webp"

export default function SigningIn() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.LoginAuth.userAthantication)
    // console.log(auth);

    // console.log(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email);
    console.log(password);

    let item = {
        email: email,
        password: password
    }

    async function login(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");


        // console.log(item)

        const user_login = await userLogin(item);

        if (user_login.status) {
            dispatch({ type: "LOGINATHANTICATION", payload: { userAthantication: true } });
        }


        //     await axios.post("https://turfbooks.herokuapp.com/login", item)
        //         .then((res) => {
        //             console.log(res);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })

    }


    return (
        <>

            <div className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="main_form">
                                <div className="row">
                                    <div className="logincontain">
                                        <div className="loginimg">
                                            <div className="text_style">
                                                <h1 className="img_text">Hello, Friend!</h1>
                                                <p className="img_text">Enter your Email & Password and start journey with us</p>
                                            </div>
                                        </div>
                                        <div className="fields">
                                            <div className="titlepage">
                                                <h3>Login {console.log(auth)}</h3>
                                            </div>

                                            <div className="form-body">
                                                <form className="form-content">
                                                    <div className="field">
                                                        <input type="email" id="email" name="email" value={email} placeholder="youremail@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
                                                        <label htmlFor="email">Email</label>
                                                    </div>
                                                    <div className="field">
                                                        <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                                        <label htmlFor="password">Password</label>
                                                    </div>

                                                    <div className="form-footer">
                                                        <button type="submit" className="main_btn send-btn" onClick={login} >
                                                            <span className="btn-text">Send</span>
                                                        </button>
                                                        <br />
                                                        <a className="forgot" href="#">Forgot Password?</a>
                                                        <p className="P_tag">Don't have an account?
                                                            <a href="#">Sign Up</a>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SigningUp() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    let item = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password
    }
    console.log(item);

    function userRegister(e) {
        e.preventDefault();

        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");

        userSignup(item);
    }

    return (
        <>
            <div className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="main_form">
                                <div className="row">
                                    <div className="logincontain">
                                        <div className="loginimg">
                                            <div className="text_style">
                                                <h1 className="img_text">Hello, Friend!</h1>
                                                <p className="img_text">Enter your Email & Password and start journey with us</p>
                                            </div>
                                        </div>
                                        <div className="fields">
                                            <div className="titlepage">
                                                <h3>SignUp</h3>
                                            </div>
                                            <div className="container">

                                                <div className="form-body">

                                                    <form className="form-content">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="field">
                                                                    <input type="text" id="First Name" name="First Name" value={firstname} required onChange={(e) => setFirstname(e.target.value)} />
                                                                    <label htmlFor="First Name">First name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="field">
                                                                    <input type="text" id="Last Name" name="Last Name" value={lastname} required onChange={(e) => setLastname(e.target.value)} />
                                                                    <label htmlFor="Last Name">Last Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <input type="email" id="email" name="email" value={email} placeholder="youremail@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
                                                                <label htmlFor="email">Email</label>
                                                            </div>
                                                            <div className="field">
                                                                <input type="text" id="phone" name="phone" value={phone} required onInput={(e) => setPhone(e.target.value = e.target.value.slice(0, 10))} />
                                                                <label htmlFor="phone">Phone no.</label>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="field">
                                                                    <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                                                    <label htmlFor="password">Password</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="field">
                                                                    <input type="password" id="re-type password" name="re-type password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} />
                                                                    <label htmlFor="re-type password">Confirm Password</label>
                                                                </div>
                                                            </div>
                                                            <div className="form-footer">
                                                                <button type="submit" className="main_btn send-btn" onClick={userRegister}>

                                                                    <span className="btn-text">Send</span>
                                                                </button>
                                                                <br />
                                                                <a className="forgot" href="#">Forgot Password?</a>
                                                                <p className="P_tag">Already have an account?
                                                                    <a href="#">Login</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 