import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList';
import Loading from './Loading';


function CocktailReviews({ cocktailID, updateReviews }) {
  const [cocktail, setCocktail] = useState({});
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        // fetch cocktail data from db.json
        const cocktailResponse = await fetch(`/api/cocktails/${cocktailID}`);
        const cocktailData = await cocktailResponse.json();
        setCocktail(cocktailData);

        // fetch reviews data from db.json
        const reviewsResponse = await fetch('http://localhost:8000/reviews');
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    getData();
  }, [cocktailID]);


  useEffect(() => {
    async function getData() {
      try {
        // fetch cocktail data from db.json
        const cocktailResponse = await fetch(`/api/cocktails/${cocktailID}`);
        const cocktailData = await cocktailResponse.json();
        setCocktail(cocktailData);

        // fetch reviews data from db.json
        const reviewsResponse = await fetch('http://localhost:8000/reviews');
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (err) {
        console.error(err);
      }
    }
    
    getData();
  }, [cocktailID]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { name, cocktail: cocktail.strDrink, rating, comment };

    try {
      // post review data to Express server at http://localhost:8000/reviews
      await fetch('http://localhost:8000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setName('');
      setComment('');
      setRating(0);

      // update reviews in parent component
      updateReviews();

    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      // delete review data from Express server at http://localhost:8000/reviews/:id
      await fetch(`http://localhost:8000/reviews/${id}`, { method: 'DELETE' });

      // update reviews in parent component
      updateReviews();

    } catch (err) {
      console.error(err);
    }
  }

  async function handleEdit(review, newComment, newRating) {
    const data = { comment: newComment, rating: newRating };

    try {
      // update review data in Express server at http://localhost:8000/reviews/:id
      await fetch(`http://localhost:8000/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // update reviews in parent component
      updateReviews();

    } catch (err) {
      console.error(err);
    }
  }

    return (
      <div>
        <h2>{cocktail.strDrink}</h2>
  
        <h3>Reviews:</h3>
        {loading ? (
          <Loading />
        ) : reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          <ReviewsList reviews={reviews} handleDelete={handleDelete} handleEdit={handleEdit} />
        )}

      <h3>Write a Review:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CocktailReviews;