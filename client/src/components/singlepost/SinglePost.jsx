import "./singlePost.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  var [categories, setCategories] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // console.log("this is "+typeof categories);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      if(typeof categories == "string"){
        console.log(typeof categories);
        categories = categories.split(",");
      }
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        categories
      });
      setUpdateMode(false);
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div className='singlePostWrap'>
      <div className="sptitle">
        <div className="sptitleout">
          {updateMode ?
            <>
              <div className="spCats">
                <i>Categories:</i> 
                <input type="text" name="spCats" id="spCats" value={categories} onChange={(e) => setCategories(e.target.value)}/>
              </div>
            </>
            :
            <>
            {post.categories ?
              <div className="spCats">
                <i>Categories:</i> 
                {post.categories.map((c) => (
                  <span className="postCategory">{c}</span>
                ))}
              </div>
              :
              <></>
            }
              
            </>
          }
          <div className="spi">
              {updateMode ?  
              <>
                <i onClick={()=>setUpdateMode(false)}>Cancel</i>
                <i className="spupbtn" onClick={handleUpdate}>Update</i>
              </>
              :(
                <i className="spdate">{new Date(post.updatedAt).toDateString()}</i>
              )}
              
              {post.username === user?.username && (
              <>
                <i class="fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                <i class="fa-solid fa-trash" onClick={handleDelete}></i>
              </>
              )}
          </div>
        </div>
          
        {updateMode? <input type="text" value={title} className="sptitleinput" autoFocus onChange={(e) => setTitle(e.target.value)}/> :(
          <div className="titlewraps">
            <h2>{post.title}</h2>
          </div>

        ) }
      </div>
      { post.photo && (
        <img src={PF + post.photo} alt="article img" />
      )}
      {updateMode ? 
      <textarea className="spdescrinput" value={desc} onChange={(e) => setDesc(e.target.value)} />
      : (
      <div className="spdescr">
          {post.desc}
      </div>
      )}
    </div>
  )
}
