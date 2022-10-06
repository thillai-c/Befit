import Post from "../post/Post.jsx"
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      <div className="postsHeader">
        <div className="content">
          <h1>Share your views with us!</h1>
          <p>Write an Article TODAY!</p>
        </div>
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i> Search
        </div>
      </div>
        {posts.map((p)=>(
          <Post post = {p}/>
        ))}
    </div>
  )
}
