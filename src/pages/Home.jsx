import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to AFG Market</h1>
        <p>Discover authentic Afghan products with modern elegance</p>
        <Link to="/products" className="shop-now-btn">
          Explore Collection
        </Link>
      </div>
      
      <div className="features-section">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚚 Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="feature-card">
            <h3>💰 Best Prices</h3>
            <p>Direct from artisans</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>
          <div className="feature-card">
            <h3>📞 24/7 Support</h3>
            <p>We're here to help</p>
          </div>
          <div className="feature-card">
            <h3>✨ Authentic</h3>
            <p>Genuine Afghan products</p>
          </div>
          <div className="feature-card">
            <h3>🎁 Gift Ready</h3>
            <p>Beautiful packaging</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;