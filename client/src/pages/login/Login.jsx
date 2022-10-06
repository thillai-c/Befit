import "./login.css"
import loginImg from "../../assets/login.png"
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            console.log("logged in successfully");
            res.data && window.location.replace("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
  return (
    <div className="wrapLogin">
        <div className="leftLogin">
            <img src={loginImg} alt="" />
        </div>
        <div className="rightLogin">
            <div className="wrapL">
                <h1>Log In</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="fieldL">
                            <input type="text" name="Luname" id="Luname" placeholder="Username" required  ref={userRef}/>
                        </div>
                        <div className="fieldL">
                            <input type="password" name="Lpwd" id="Lpwd" placeholder="Password" required ref={passwordRef}/>
                        </div>
                        <div className="buttonsL">
                            <button className="gglL">or Sign in with Google</button>
                            <button className="gglLL" type="submit" disabled={isFetching}>Log in</button>
                        </div>
                        <div className="suL">
                            Don't have an account? <Link to="/signup">Sign Up</Link>!
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
