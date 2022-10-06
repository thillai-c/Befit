import "./sidebar.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Sidebar() { 
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="sidebar">
      <div className="sbwrap">
        <div className="sidebarItem">
        <i class="fa-solid fa-dove"></i>
              <div className="sidebarTitle">ABOUT THE WRITER</div>
              <div className="sidebarContent">
                  <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"/>
                  <p>
                <b>User Name : </b> <Link to={`/?user=${post.username}`}>{post.username}</Link> <br />
                  <b>About : </b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, illo ipsam? 
                  
                  </p>
              </div>
        </div>
        <div className="sidebarItem">
              <div className="sidebarTitle">CLICK <b><Link to={`/?user=${post.username}`}>HERE</Link></b> FOR MORE FROM {post.username}</div>
        </div>
      </div>
        
    </div>
  )
}
