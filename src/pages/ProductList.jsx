import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductList.css';

function ProductList() {
  return (
    <div className="product-list">
      <h2>All Products ({products.length})</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description.substring(0, 60)}...</p>
            <Link to={`/products/${product.id}`} className="details-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;