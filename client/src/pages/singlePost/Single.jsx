import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlepost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="postContent">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}


