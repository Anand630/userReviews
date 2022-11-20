import {Component} from 'react'
import './index.css'

export default class extends Component {
  state = {presentReviewNo: 0}

  onBackwardClick = () => {
    // const {reviewsList} = this.props
    const {presentReviewNo} = this.state
    if (presentReviewNo - 1 >= 0) {
      this.setState({presentReviewNo: presentReviewNo - 1})
    }
  }

  onForwardClick = () => {
    const {reviewsList} = this.props
    const {presentReviewNo} = this.state
    if (presentReviewNo < reviewsList.length - 1) {
      this.setState({presentReviewNo: presentReviewNo + 1})
    }
  }

  render() {
    const {presentReviewNo} = this.state
    console.log(`present index: ${presentReviewNo}`)
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      presentReviewNo
    ]

    return (
      <div className="home-container">
        <div className="review-container">
          <h1 className="reviews-heading">Reviews</h1>
          <img className="profile-pic" src={imgUrl} alt={username} />
          <div className="arrows-and-name-container">
            <button onClick={this.onBackwardClick} type="button">
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button onClick={this.onForwardClick} type="button">
              <img
                className="arrows"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
