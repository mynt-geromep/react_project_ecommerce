const ReviewList = ({review}) => {
    return (
        <div className="review-list">
            {review.map(rev => (
                <div className="review-preview" key={rev.id} >
                    <h2>{rev.title}</h2>
                    <p className="review-rating">{ rev.rating }</p>
                    <p>{rev.body}</p>
                </div>
            ))}
        </div>
    );
}
 
export default ReviewList;