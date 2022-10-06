import "./post.css"
import { Link } from 'react-router-dom';

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  console.log(post.categories[0])
  return (
    <div className="post">
      {post.photo && 
        <img className="postImg"
        src={PF + post.photo} alt="" />
      }
        
      <div className="postInfo">
        <div className="postHeader">
          <Link to={`/post/${post._id}`} className="link"><span className="postTitle">{post.title}</span></Link>
          <div className="postCategories">
            {post.categories.map((c) => (
              <span className="postCategory">{c}</span>
            ))}
          </div>
        </div>

        <div className="postDesc">
          {post.desc}
        </div>

        <div className="postTail">
          <span className="postDate">{new Date(post.createdAt).toDateString()} - <Link to={`/?user=${post.username}`}>{post.username}</Link></span>
          <Link to={`/post/${post._id}`} className="link"><span className="readMore">Read More <i class="fa-solid fa-angles-right"></i></span></Link>
        </div>
       
      </div>
    </div>
  )
}
