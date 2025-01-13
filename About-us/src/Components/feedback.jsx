import React from 'react';

[
    {
      "id": 1,
      "name": "John Doe",
      "feedback": "Great service! Highly satisfied with my purchase.",
      "rating": 5,
      "image": "path/to/profile.jpg"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "feedback": "Amazing quality and fast delivery!",
      "rating": 4,
      "image": "path/to/profile.jpg"
    }
  ]

  const Testimonials = () => {
    const [feedbacks, setFeedbacks] = useState([]);
  
    useEffect(() => {
      // Simulated API call
      fetch("/api/feedbacks") // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => setFeedbacks(data))
        .catch((error) => console.error("Error fetching feedbacks:", error));
    }, []);
}
function feedback() {
  return (
    <div className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="feedback-card">
          <img src={feedback.image} alt={`${feedback.name}'s profile`} />
          <h3>{feedback.name}</h3>
          <p>{feedback.feedback}</p>
          <span>Rating: {feedback.rating}⭐</span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default feedback