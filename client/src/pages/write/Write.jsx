import { useContext, useState } from "react"
import { Context } from "../../context/Context";
import "./write.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  var [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    categories = categories.split(",");
    const newPost = {
      username: user.username,
      title,
      desc, 
      categories
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("could not upload image");
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
      console.log(newPost);
    } catch (err) {}
  };

  return (
    <div className="write">
      <h1>Write you Article:</h1>
      <div className="writeWrap">
          {file &&
            <img
            className="writeImg"
            src={URL.createObjectURL(file)}
            alt=""
          />
          }
      </div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          <input className="writeInput" placeholder="Title" type="text" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText" placeholder="Pen down your knowledge..." type="text" autoFocus={true} onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <div className="writeCategories">
          <input type="text" name="catsW" id="catsW" placeholder="enter cats" onChange={(e)=>setCategories(e.target.value)}/>
        </div>
        <div className="buttonsWrite">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
          <Link to="/"><div className="writeSubmit"> Cancel </div></Link>
        </div>
      </form>
    </div>
  )
}
