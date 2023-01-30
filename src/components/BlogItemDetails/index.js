// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogDataItem()
  }

  getBlogDataItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const update = {
      title: data.title,
      author: data.author,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({
      blogData: update,
      isLoader: false,
    })
  }

  render() {
    const {blogData, isLoader} = this.state
    const {title, author, topic, avatarUrl, imageUrl, content} = blogData
    return (
      <div>
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="container">
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={author} className="avatar-image" />
              <p className="author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image_url_topic" />
            <p className="description">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
