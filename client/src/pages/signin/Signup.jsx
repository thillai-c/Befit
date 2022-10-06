import "./signup.css";
import loginImg from "../../assets/signUp.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/signup", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="wrapLogin">
      <div className="leftLogin">
        <img src={loginImg} alt="" />
      </div>
      <div className="rightLogin">
        <div className="wrapL">
          <h1>Sign Up</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fieldL ">
                <input
                  type="text"
                  name="Sfname"
                  id="Sfname"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="fieldL ">
                <input
                  type="text"
                  name="Slname"
                  id="Slname"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
              <div className="fieldL">
                <input
                  type="text"
                  name="Suname"
                  id="Suname"
                  placeholder="Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="fieldL">
                <input
                  type="email"
                  name="Semail"
                  id="Semail"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="fieldL">
                <input
                  type="password"
                  name="Spwd"
                  id="Spwd"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="buttonsL">
                <button className="gglL">or Sign in with Google</button>
                <button className="gglLL" type="submit">
                  Sign Up
                </button>
              </div>
              <div className="suL">
                Already have an account? <Link to="/login">Login</Link>!
              </div>
              <br />
              {error && (
                <h3 style={{ color: "red", textAlign: "center" }}>
                  Something went wrong! Please try again...
                </h3>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
