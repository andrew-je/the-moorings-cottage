import './Review.css';

const Review = () => {
  const reviews = [
    {
      text: "Spotlessly clean and very comfortable rooms with a balcony accessed from the lounge and one from the master bedroom. The kitchen contained all you would need with an amazing fridge/freezer that dispensed cold water and ice. There was a lovely welcome pack to greet us that made us feel spoilt. The accommodation was centrally situated with easy access to all the attractions on offer in Snowdon and Anglesey.",
      author: "Wilson Family"
    },
    {
      text: "Thoughtful, quality items throughout, there wasn't a single thing we could have asked for that wasn't included by such thoughtful owners. All furniture was of a high spec, and made our stay so comfortable. The property is so well placed for Snowdonia, Anglesey and wider exploration. Shopping and eating options within walking distance, or a short journey away. All in all outstanding, and hope to return.",
      author: "Canning Family"
    },
    {
      text: "The thoughtful owners had provided everything we were likely to need and even left a welcome box which was a lovely touch on arrival. A beautifully clean property and one I am certainly able to recommended. A quiet location in the village but very handy for a range of activities, pubs and shops. Plenty of pleasant walks and places to explore, a place we would love to return to.",
      author: "Mr Croft"
    },
    {
      text: "We had a wonderful stay at The Moorings Cottage. The property is beautifully presented and has everything you need for a comfortable holiday. The location is perfect for exploring North Wales and the views are spectacular. We would definitely recommend and hope to return.",
      author: "Sarah & John"
    },
    {
      text: "Absolutely stunning cottage with amazing views. The attention to detail is incredible and the welcome pack was a lovely touch. Perfect location for exploring Snowdonia and Anglesey. We can't wait to come back!",
      author: "The Davies Family"
    },
    {
      text: "What a gem! The cottage is immaculate and the views are breathtaking. Everything you need is provided and the location is perfect. We had a fantastic week exploring the local area and would highly recommend.",
      author: "Mike & Lisa"
    }
  ];

  return (
    <div className="review__wrapper">
      <div className="container">
        <div className="outer__review">
          <div className="top__">
            <h2>Guest Reviews</h2>
            <p>See what our guests have to say about their stay at The Moorings Cottage</p>
          </div>
          <div className="reviews__grid">
            {reviews.map((review, index) => (
              <div key={index} className="review__item">
                <div className="review__content">
                  <p>"{review.text}"</p>
                  <span className="review__author">- {review.author}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="review__logo">
            <img src="/img/reviewslogo.svg" alt="Reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
