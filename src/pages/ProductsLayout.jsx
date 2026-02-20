import { Outlet } from 'react-router-dom';
import './ProductsLayout.css';

function ProductsLayout() {
  return (
    <div className="products-layout">
      <div className="products-header">
        <h1>Afghan Products</h1>
        <p>Discover the finest products from Afghanistan</p>
        <div className="filter-placeholder">
          🔍 Category filter coming soon...
        </div>
      </div>
      
      <div className="products-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductsLayout;