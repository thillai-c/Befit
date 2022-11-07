import "./navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  // const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">BeFit</Link>
      </div>
      <div className="center">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/bmi">BMI</Link>
        </div>
        <div>
          <Link to="/news">News</Link>
        </div>
        <div>
          <Link to="/mlmodel">Exercise-Tracker</Link>
        </div>
        <div>
          <Link to="/research">Videos</Link>
        </div>
        <div>
          <Link to="/recipe">Healthy-Diet</Link>
        </div>
        <div>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="right">
        {user ? (
          <>
            <div className="signup">
              <Link to="/settings">{user && "VIEW PROFILE"}</Link>
            </div>
            <div className="signup">
              <Link onClick={handleLogout}>{user && "LOGOUT"}</Link>
            </div>
          </>
        ) : (
          <>
            <div className="login">
              <Link to="/login">LOGIN</Link>
            </div>
            <div className="signup">
              <Link to="/signup">SIGN UP</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
