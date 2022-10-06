import './settings.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";


export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [about, setAbout] = useState("");
    const [works, setWorks] = useState("");
    const [firstname, setFirstName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [designation, setDesignation] = useState("");
    const [interests, setInterests] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [tagline, setTagline] = useState("");

    const [file, setFile] = useState(null);
    const [updateMode, setUpdateMode] = useState(false);
    const [success, setSuccess] = useState(false);
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            about,
            firstname,
            tagline,
            birthday,
            designation,
            interests,
            pronouns,
            works,
        };
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePic = filename;
          try {
            await axios.post("/upload", data);
            console.log("imgage updated");
          } catch (err) {
              console.log(err);
          }
        }
        console.log(updatedUser)
        try {
            console.log("before sending")
          const res = await axios.put("/users/" + user._id, updatedUser);
          setSuccess(true);
          setUpdateMode(false);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
          console.log(res);
          return;
        } catch (err) {
            console.log("error")
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
            { updateMode ?
                <div className="buttons">
                    <div className="btnSet colR" onClick={()=>setUpdateMode(false)}>Cancel</div>
                    <button type="submit">Submit</button>
                </div>
            :
                <div className="btnSet colG" onClick={()=>setUpdateMode(true)}>Edit Account</div>
            }
        </div>
            <div className="outerWrapSet">
                <div className="leftWrapSet">
                    {updateMode ?
                    <>
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="Please Upload a Picture!"/>
                    <div className="nameSet">
                        <div className='inNameSet'>
                            <label htmlFor="fileIn"><i class="fa-regular fa-circle-user fa-xl"></i></label>
                            <input type="file" name="fileIn" id="fileIn" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                            <input type="text" name="name" id="name" defaultValue={user.firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <input type="text" name="slogan" id="slogan" defaultValue={user.tagline} onChange={(e) => setTagline(e.target.value)}/>    
                    </div>
                    </>
                    :
                    <>
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="Please Upload a Picture!"/>
                    <div className="nameSet">
                       <b><div className="name">{user.firstname}</div></b>
                        <div className="tagline">{user.tagline}</div>    
                    </div>
                    </>
                    }
                    
                </div>
                <div className="rightWrapSet">
                    <div className="aboutSet">
                        <div className="titleSet">ABOUT ME</div>
                        {updateMode ?
                            <textarea name="about" id="about" cols="30" rows="7" defaultValue={user.about} onChange={(e) => setAbout(e.target.value)}>
                            </textarea>
                        :
                            <p>{user.about}</p>
                        }                       
                    </div>
                    <div className="basicSet">
                        <div className="titleSet">BASIC INFORMATION</div>
                        {updateMode ?
                            <div>
                                <div className="basicContentSet">
                                    <div className="innerSet">
                                        <label htmlFor="bday">Birthday:</label>
                                        <input type="text" name="bday" id="bday" defaultValue={user.birthday} onChange={(e) => setBirthday(e.target.value)}/>
                                    </div>
                                    <div className="innerSet">
                                        <label htmlFor="desig">Designation:</label>
                                        <input type="text" name="desig" id="desig" defaultValue={user.designation} onChange={(e) => setDesignation(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="basicContentSet">
                                    <div className="innerSet">
                                        <label htmlFor="prused">Pronouns Used:</label>
                                        <input type="text" name="prused" id="prused" defaultValue={user.pronouns} onChange={(e) => setPronouns(e.target.value)}/>
                                    </div>
                                    <div className="innerSet">
                                        <label htmlFor="interests">Interests:</label>
                                        <input type="text" name="interests" id="interests" defaultValue={user.interests} onChange={(e) => setInterests(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        :
                            <div>
                                <div className="basicContentSet">
                                    <div className="innerSet">
                                        <div className="labels">Birthday:</div>
                                        <div className="details">{user.birthday}</div>
                                    </div>
                                    <div className="innerSet">
                                        <div className="labels">Designation:</div>
                                        <div className="details">{user.designation}</div>
                                    </div>
                                </div>
                                <div className="basicContentSet">
                                    <div className="innerSet">
                                        <div className="labels">Pronouns Used:</div>
                                        <div className="details">{user.pronouns}</div>
                                    </div>
                                    <div className="innerSet">
                                        <div className="labels">Interests:</div>
                                        <div className="details">{user.interests}</div>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
            {updateMode ?
                <div className="worksSet">
                    <div className="titleSet">NOTABLE WORKS</div>
                    <textarea name="notWorks" id="" cols="30" rows="7" defaultValue={user.works} onChange={(e) => setWorks(e.target.value)}>
                    </textarea>
                </div>
            :
            <div className="worksSet">
                <div className="titleSet">NOTABLE WORKS</div>
                <div>{user.works}</div>
            </div>
            }
            
        </form>
    </div>
  )
}

