import React from 'react';

function Review(props) {
  const { name, cocktail, rating, comment } = props.review;

  return (
    <div>
      <p>{name} - {cocktail}</p>
      <p>Rating: {rating}</p>
      <p>{comment}</p>
    </div>
  );
}

function ReviewsList(props) {
  const { reviews } = props;

  return (
    <div>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewsList;