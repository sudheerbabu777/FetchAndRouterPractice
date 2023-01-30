// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogItemDetails

  return (
    <Link to={`/blogs/${id}`}>
      <li className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="image-url" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
