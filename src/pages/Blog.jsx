import { Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import SEOHead from '../components/SEOHead';
import './Blog.css';

const Blog = () => {
  const { trackEvent } = useAnalytics();

  const handleReadMoreClick = (postTitle) => {
    trackEvent('blog', 'engagement', 'read_more', 1, { post: postTitle });
  };

  const blogPosts = [
    {
      id: 1,
      title: "5 Spectacular Walking Routes Around Y Felinheli: Your Complete Guide",
      excerpt: "Discover five carefully selected walking routes around Y Felinheli, from gentle coastal strolls to challenging mountain paths. Each walk is easily accessible from The Moorings Cottage.",
      date: "September 1, 2025",
      readTime: "6 min read",
      image: "/snowdon.jpg",
      slug: "walking-routes-attractions-y-felinheli"
    }
  ];

  return (
    <div className="blog">
      <SEOHead 
        title="Blog - Walking Routes & Local Area Guide | The Moorings Cottage Y Felinheli"
        description="Discover the best walking routes around Y Felinheli and North Wales. Expert guides to Snowdonia, Anglesey coastal paths, and local attractions near The Moorings Cottage."
        keywords="y felinheli walks, north wales walking routes, snowdonia walks, anglesey coastal path, menai straits walks, caernarfon walks, north wales hiking, walking holidays wales"
        url="https://themooringscottage.co.uk/blog"
      />
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <h1>The Moorings Cottage Blog</h1>
            <p>Discover the best of Y Felinheli, North Wales, and make the most of your stay at The Moorings Cottage</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card card">
                <div className="blog-card__image">
                  <img src={post.image} alt={post.title} className="img-cover" />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span className="blog-card__date">{post.date}</span>
                    <span className="blog-card__read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="btn btn--secondary"
                    onClick={() => handleReadMoreClick(post.title)}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--small">
        <div className="container">
          <div className="blog-cta card">
            <h3>Planning Your Stay?</h3>
            <p>Ready to experience Y Felinheli and all it has to offer? Book your stay at The Moorings Cottage today.</p>
            <Link to="/booking" className="btn btn--accent">
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
