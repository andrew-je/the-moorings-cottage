import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { usePageTracking } from './hooks/useAnalytics';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cottage from './pages/Cottage';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Review from './pages/Review';
import Area from './pages/Area';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

// Analytics wrapper component
const AnalyticsWrapper = ({ children }) => {
  usePageTracking();
  return children;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsWrapper>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cottage" element={<Cottage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/review" element={<Review />} />
                <Route path="/area" element={<Area />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AnalyticsWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
