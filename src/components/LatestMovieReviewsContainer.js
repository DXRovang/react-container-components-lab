import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviews extends Component{
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=97htVyH23LxGLLg6lSseATti1oWywLSQ')
    .then(r => r.json())
    .then(reviews => this.setState({
                            reviews: reviews.results}))
  }

  // renderMovies = () => {
  //   return this.state.reviews.map(review =>{
  //      return(
  //         <div>
  //           {review.display_title}
  //         </div>
  //     )
  //   })
  // }
  // fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=97htVyH23LxGLLg6lSseATti1oWywLSQ&query=<search_term>')
  // .then(r => r.json())
  // .then(reviews => console.log(reviews))

  render(){
    return <div className='latest-movie-reviews'><MovieReviews latest={this.state.reviews}/></div>
  }
}