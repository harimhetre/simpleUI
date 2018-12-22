import React from 'react';
import './Reviews.css';

const Reviews = ({ topScore, totalReviews }) => {
    return (
        <div className="reviews">
          <h1>Total Reviews: {totalReviews}</h1>
            {
                  topScore.map((user, i) => {
                    return (
                        <ul key={i} className="rating">
                            <h2 className="rating-topic">{user.topic}:</h2>
                            <span className="fa fa-star fa-2x checked"></span>
                            <span className="fa fa-star fa-2x checked"></span>
                            <span className="fa fa-star fa-2x checked"></span>
                            <span className="fa fa-star fa-2x checked"></span>
                            <span className="fa fa-star-half-o fa-2x fa_custom"></span>
                            <span className="fa-2x">{user.score} </span>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Reviews;