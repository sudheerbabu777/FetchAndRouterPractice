// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogListItem: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const update = data.map(each => ({
      id: each.id,
      author: each.author,
      title: each.title,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      imageUrl: each.image_url,
    }))
    this.setState({
      blogListItem: update,
      isLoader: false,
    })
  }

  render() {
    const {blogListItem, isLoader} = this.state
    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogListItem.map(each => (
              <BlogItem blogItemDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
