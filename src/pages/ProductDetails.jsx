import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="not-found">
        <h2>❌ Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      
      <div className="product-info">
        <h2>{product.name}</h2>
        <div className="detail-item">
          <span className="detail-label">Category:</span>
          <span>{product.category}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Price:</span>
          <span className="price">{product.price}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Description:</span>
          <p className="description">{product.description}</p>
        </div>
        
        <Link to="/products" className="back-to-products">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;