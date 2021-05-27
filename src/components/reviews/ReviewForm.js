import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const ReviewForm = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState('★')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, rating}
        
        setLoading(true)

        fetch("http://localhost:8000/reviews", { //fetch is an asynchronous process - use then
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog) // json to string
        }).then(() => {
            setLoading(false)
            history.push("/reviews")
        })

    }

    return (
        <div className="create">
            <h2>Review Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Rating:</label>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    <option value="★">★</option>
                    <option value="★★">★★</option>
                    <option value="★★★">★★★</option>
                    <option value="★★★★">★★★★</option>
                    <option value="★★★★★">★★★★★</option>
                </select>
                <label>Feedback:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                { !loading && <button>Submit</button> }
                { loading && <button disabled>Submitting...</button> }
                <Link to="/reviews">
                    <p>Back</p>
                </Link>
            </form>
        </div>
    );
}
 
export default ReviewForm;