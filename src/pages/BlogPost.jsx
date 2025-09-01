import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const { trackEvent } = useAnalytics();
  const navigate = useNavigate();

  const handleBookingClick = () => {
    trackEvent('blog', 'conversion', 'booking_click', 1, { source: 'blog_post' });
    navigate('/booking');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleGalleryClick = () => {
    trackEvent('blog', 'engagement', 'gallery_click', 1, { source: 'blog_post' });
    navigate('/gallery');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // This would typically come from a CMS or API
  const blogPost = {
    title: "5 Spectacular Walking Routes Around Y Felinheli: Your Complete Guide",
    date: "September 1, 2025",
    readTime: "6 min read",
    author: "The Moorings Cottage Team",
    image: "/img/menai-straits-view.jpg",
    content: `
      <p>Y Felinheli, nestled on the shores of the Menai Straits, offers some of North Wales' most spectacular walking routes. From gentle coastal strolls to challenging mountain paths, these five carefully selected walks showcase the very best of this beautiful Welsh village and its surroundings. Each route is easily accessible from The Moorings Cottage, making it your perfect base for exploring on foot.</p>

      <h2>1. Menai Straits Coastal Path</h2>
      <p>The crown jewel of Y Felinheli walking routes, this stunning coastal path offers breathtaking views across the Menai Straits to the Isle of Anglesey. Starting from the village marina, this easy circular walk takes you along the water's edge, past historic slate quays and through peaceful woodland areas.</p>
      
      <p><strong>Distance:</strong> 3 miles (4.8km)<br>
      <strong>Difficulty:</strong> Easy<br>
      <strong>Duration:</strong> 1.5-2 hours<br>
      <strong>Starting Point:</strong> Y Felinheli Marina<br>
      <strong>Highlights:</strong> Menai Bridge views, wildlife spotting, historic slate heritage, marina cafes</p>

      <p>This walk is perfect for families and offers numerous photo opportunities. The path is well-maintained and mostly flat, making it accessible for all fitness levels. Don't forget to bring your camera for the iconic Menai Bridge shots!</p>

      <h2>2. Snowdonia National Park Edge Walk</h2>
      <p>Just minutes from The Moorings Cottage, this moderate walk takes you to the edge of Snowdonia National Park. The route offers spectacular mountain views and connects to longer trails for more adventurous hikers seeking to explore deeper into Wales' most famous national park.</p>
      
      <p><strong>Distance:</strong> 5 miles (8km)<br>
      <strong>Difficulty:</strong> Moderate<br>
      <strong>Duration:</strong> 2.5-3 hours<br>
      <strong>Starting Point:</strong> Village outskirts near A487<br>
      <strong>Highlights:</strong> Mountain panoramas, ancient woodlands, diverse wildlife, Snowdonia views</p>

      <p>This walk rewards you with some of the finest mountain vistas in North Wales. The path gradually ascends through mixed woodland before opening up to reveal stunning views of Snowdonia's peaks. Perfect for intermediate walkers looking for a rewarding challenge.</p>

      <h3>3. Caernarfon Castle Circular Walk</h3>
      <p>A fascinating historical walk that combines coastal scenery with medieval heritage. This route takes you from Y Felinheli to the magnificent Caernarfon Castle, following ancient pathways used for centuries by locals and traders.</p>
      
      <p><strong>Distance:</strong> 6 miles (9.6km)<br>
      <strong>Difficulty:</strong> Moderate<br>
      <strong>Duration:</strong> 3-4 hours<br>
      <strong>Starting Point:</strong> Y Felinheli village center<br>
      <strong>Highlights:</strong> Caernarfon Castle, Roman fort remains, coastal views, historic market town</p>

      <p>This walk combines natural beauty with rich Welsh history. You'll pass through varied landscapes including coastal paths, farmland, and historic settlements. The magnificent Caernarfon Castle provides a perfect halfway point for refreshments and exploration.</p>

      <h2>4. Anglesey Coastal Path via Menai Bridge</h2>
      <p>Cross the iconic Menai Bridge on foot and explore a section of the renowned Anglesey Coastal Path. This walk offers unique perspectives of both mainland Wales and the Isle of Anglesey, with opportunities to spot marine wildlife in the fast-flowing straits below.</p>
      
      <p><strong>Distance:</strong> 4 miles (6.4km)<br>
      <strong>Difficulty:</strong> Easy to Moderate<br>
      <strong>Duration:</strong> 2-3 hours<br>
      <strong>Starting Point:</strong> Menai Bridge town<br>
      <strong>Highlights:</strong> Bridge crossing, Anglesey coastline, tidal races, seabird watching</p>

      <p>Experience the thrill of walking across Thomas Telford's engineering masterpiece before exploring Anglesey's dramatic coastline. The changing tides create spectacular tidal races beneath the bridge, and the coastal path offers excellent opportunities for wildlife photography.</p>

      <h2>5. Llanberis Path via Padarn Country Park</h2>
      <p>For the more adventurous walker, this challenging route takes you through the beautiful Padarn Country Park towards the famous Llanberis Path. While you don't need to tackle Snowdon itself, this walk gives you a taste of Wales' most famous mountain region.</p>
      
      <p><strong>Distance:</strong> 7 miles (11.2km)<br>
      <strong>Difficulty:</strong> Challenging<br>
      <strong>Duration:</strong> 4-5 hours<br>
      <strong>Starting Point:</strong> Llanberis village (20 minutes drive from Y Felinheli)<br>
      <strong>Highlights:</strong> Slate museum, Padarn Lake, mountain railway, dramatic mountain scenery</p>

      <p>This walk showcases the industrial heritage of North Wales alongside its natural beauty. The route takes you past the National Slate Museum and along the shores of Llyn Padarn, with the option to extend your adventure on the lower slopes of Snowdon.</p>

      <h2>Essential Walking Tips for Y Felinheli</h2>

      <h3>What to Bring</h3>
      <ul>
        <li>Sturdy walking boots with good ankle support</li>
        <li>Waterproof jacket and trousers (Welsh weather changes quickly!)</li>
        <li>OS Map Explorer 263 (Anglesey East) and 115 (Snowdon)</li>
        <li>Compass and/or GPS device</li>
        <li>First aid kit and emergency whistle</li>
        <li>Plenty of water and energy snacks</li>
        <li>Camera for capturing the stunning scenery</li>
      </ul>

      <h3>Best Walking Seasons</h3>
      <p>While these walks can be enjoyed year-round, spring through autumn offers the most comfortable conditions. Summer provides the longest days and warmest weather, while autumn brings spectacular colors to the landscape. Winter walks can be magical but require extra preparation and appropriate gear.</p>

      <h2>Your Perfect Walking Base</h2>

      <p>The Moorings Cottage provides the ideal base for exploring these magnificent walking routes. After a day on the trails, return to your comfortable retreat with spectacular views over the Menai Straits. The cottage's location puts you within easy reach of all five walks, while its modern amenities ensure you can relax and recharge for your next adventure.</p>

      <p>Book your stay at The Moorings Cottage and discover why Y Felinheli is considered one of North Wales' premier walking destinations. With these five spectacular routes on your doorstep, your walking holiday in Wales will be truly unforgettable.</p>
    `
  };

  return (
    <div className="blog-post">
      <article className="blog-post__article">
        <header className="blog-post__header">
          <div className="container">
            <div className="blog-post__hero">
              <img src={blogPost.image} alt={blogPost.title} className="blog-post__hero-image" />
              <div className="blog-post__hero-overlay">
                <div className="blog-post__meta">
                  <span className="blog-post__date">{blogPost.date}</span>
                  <span className="blog-post__read-time">{blogPost.readTime}</span>
                  <span className="blog-post__author">By {blogPost.author}</span>
                </div>
                <h1 className="blog-post__title">{blogPost.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="blog-post__content">
          <div className="container">
            <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            
            <div className="blog-post__cta">
              <div className="blog-cta-grid">
                <div className="blog-cta-item card">
                  <h3>Book Your Stay</h3>
                  <p>Experience Y Felinheli from The Moorings Cottage</p>
                  <button className="btn btn--accent" onClick={handleBookingClick}>
                    Check Availability
                  </button>
                </div>
                <div className="blog-cta-item card">
                  <h3>View Gallery</h3>
                  <p>See more of our beautiful cottage and surroundings</p>
                  <button className="btn btn--secondary" onClick={handleGalleryClick}>
                    Browse Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <nav className="blog-post__nav">
        <div className="container">
          <Link to="/blog" className="btn btn--secondary">
            ← Back to Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BlogPost;
