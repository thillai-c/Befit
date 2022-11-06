import "./settings.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  //   const PF = "http://localhost:5000/images/";
  const [firstname, setFirstName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [exercise, setExercise] = useState("");
  const [points, setPoints] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      firstname,
      birthday,
      exercise,
      points,
    };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   updatedUser.profilePic = filename;
    //   try {
    //     await axios.post("/upload", data);
    //     console.log("imgage updated");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    console.log(updatedUser);
    try {
      console.log("before sending");
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      setUpdateMode(false);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log(res);
      return;
    } catch (err) {
      console.log("error");
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(err);
      return;
    }
  };

  return (
    <div className="coverSettings">
      <form onSubmit={handleSubmit}>
        <div className="iniSet">
          <div className="welSet">Welcome back, {user.username}!</div>
          {updateMode ? (
            <div className="buttons">
              <div className="btnSet colR" onClick={() => setUpdateMode(false)}>
                Cancel
              </div>
              <button type="submit">Submit</button>
            </div>
          ) : (
            <div className="btnSet colG" onClick={() => setUpdateMode(true)}>
              Edit Account
            </div>
          )}
        </div>
        <img className="useri" src="./image1.png" alt="" />
        {/* <div className="useri"></div> */}
        <div className="outerWrapSet">
          <div className="leftWrapSet">
            {updateMode ? (
              <>
                {/* <img
                  src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                  alt="Please Upload a Picture!"
                /> */}
                <div className="nameSet">
                  <div className="inNameSet">
                    {/* <label htmlFor="fileIn">
                      <i class="fa-regular fa-circle-user fa-xl"></i>
                    </label> */}
                    {/* <input
                      type="file"
                      name="fileIn"
                      id="fileIn"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    /> */}

                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={user.firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <img
                  src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                  alt="Please Upload a Picture!"
                /> */}
                <div className="nameSet">
                  <b>
                    <div className="name">{user.firstname}</div>
                  </b>
                </div>
              </>
            )}
          </div>
          <br />
          <div className="rightWrapSet">
            <div className="basicSet">
              <div className="titleSet">BASIC INFORMATION</div>
              {updateMode ? (
                <div>
                  <div className="basicContentSet">
                    <div className="innerSet">
                      <label htmlFor="desig">Birthday:</label>
                      <input
                        type="text"
                        name="desig"
                        id="desig"
                        defaultValue={user.birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                    </div>
                    <div className="innerSet">
                      <label htmlFor="desig">Favourite Exercise:</label>
                      <input
                        type="text"
                        name="desig"
                        id="desig"
                        defaultValue={user.exercise}
                        onChange={(e) => setExercise(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="innerSet">
                      <label htmlFor="desig">Points:</label>
                      <input
                        type="text"
                        name="desig"
                        id="desig"
                        defaultValue={user.points}
                        onChange={(e) => setPoints(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="basicContentSet">
                    <div className="innerSet">
                      <div className="labels">Birthday:</div>
                      <div className="details">{user.birthday}</div>
                    </div>
                    <div className="innerSet">
                      <div className="labels">Favourite Exercise:</div>
                      <div className="details">{user.exercise}</div>
                    </div>
                    <div className="innerSet">
                      <div className="labels">Points:</div>
                      <div className="details">{user.points}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
