import './Booking.css';

const Booking = () => {
  return (
    <div className="booking__wrapper">
      <div className="container">
        <div className="outer__booking">
          <div className="top__">
            <h2>Booking & Availability</h2>
            <p>Check our availability and book your stay at The Moorings Cottage</p>
          </div>
          <div className="booking__calendar">
            <div className="calendar__info">
              <h6>Important Information</h6>
              <ul>
                <li>Change-over days are Friday, with the exception of Christmas and New Year</li>
                <li>Check-in time: 5pm onwards</li>
                <li>Check-out time: 9am</li>
                <li>Minimum stay: 3 nights</li>
                <li>Maximum occupancy: 4 guests</li>
              </ul>
            </div>
            <div className="calendar__iframe">
              <iframe 
                src="https://secure.bookalet.co.uk/widget?id=da8ebdf5-2f4a-47cb-8c92-f84032b16f5b&amp;property=17263&amp;monthcount=1" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                allowTransparency="true" 
                title="Booking Calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
