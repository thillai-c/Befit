import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./home.css";
import Posts from "../../components/posts/Posts";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const currentUser = true;
  return (
    <div className="home">
      <Posts posts={posts} />
    </div>
  );
}
