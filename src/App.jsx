import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsLayout from './pages/ProductsLayout';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductList />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer with proper container */}
        <footer className="footer">
          <div className="footer-container">
            <p>Designed & Developed by <span className="footer-name">Farahnaz Fazl</span> © 2026</p>
            <p className="footer-tagline">✨ Crafted with love in Afghanistan ✨</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;