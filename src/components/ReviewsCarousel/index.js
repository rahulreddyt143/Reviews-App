// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  review = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[activeId]

    return (
      <div className="card-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeId} = this.state

    if (activeId > 0) {
      this.setState(prevState => ({activeId: prevState.activeId - 1}))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeId} = this.state

    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({activeId: prevState.activeId + 1}))
    }
  }

  render() {
    const reviewsList = this.props
    const {activeId} = this.state
    console.log(activeId)
    return (
      <div className="app-container">
        <div className="container">
          <button
            data-testid="leftArrow"
            className="button"
            type="button"
            onClick={this.onLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          {this.review(reviewsList)}

          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.onRight}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
