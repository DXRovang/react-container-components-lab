// Code MovieReviews Here
import React from 'react'
// import { ProgressPlugin } from 'webpack'

const MovieReviews = (props) =>{
 
  return (
    <div className="review-list">{
      props.latest.map(review => <li>{review.display_title}</li>)
      }</div>)
}


 
  
export default MovieReviews