import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark to-dark/90 text-light">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/predictors" element={<ProductsPage />} />
                <Route path="/predictors/:category" element={<ProductsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                } />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;