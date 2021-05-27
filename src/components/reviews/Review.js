import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewList from "./ReviewList";

const Review = () => {

    const [review, setReview] = useState(null)

    useEffect( () => {
        fetch("http://localhost:8000/reviews")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <div>
        <h2 className="review-title">Product Ratings</h2>
            <div className="review-box-button">
                <Link to="/create">
                    <button className="review-button">Write a review</button>
                </Link>
            </div>

            <div className="review-content">
                {review && <ReviewList review={review} />}
            </div>

        </div>
    );
}
 
export default Review;