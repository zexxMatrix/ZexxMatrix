import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductContext';
import UnlockModal from '../products/UnlockModal';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const { currentUser } = useAuth();
  const { unlockProduct } = useProducts();

  const handleUnlock = async () => {
    if (!currentUser) {
      // Redirect to login or show login modal
      alert("Please login to unlock this predictor");
      return;
    }

    setShowModal(true);
  };

  const handleAdComplete = async () => {
    try {
      const unlockedProduct = await unlockProduct(product.id);
      setIsUnlocked(true);
      setDownloadUrl(unlockedProduct.downloadUrl);
      setShowModal(false);
    } catch (error) {
      console.error("Error unlocking product:", error);
      alert("Failed to unlock product. Please try again.");
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-dark/50 backdrop-blur-md rounded-xl overflow-hidden shadow-glass border border-accent/20"
      >
        <div className="relative">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.format}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{product.description}</p>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-500"}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-xs ml-2">({product.reviewCount} reviews)</span>
          </div>
          
          {isUnlocked ? (
            <a 
              href={downloadUrl} 
              download
              className="w-full block text-center bg-accent hover:bg-accent/80 text-dark font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Download Now
            </a>
          ) : (
            <button 
              onClick={handleUnlock}
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-md transition duration-300 shadow-neon"
            >
              Unlock Download
            </button>
          )}
        </div>
      </motion.div>

      {showModal && (
        <UnlockModal 
          onClose={() => setShowModal(false)} 
          onComplete={handleAdComplete}
          product={product}
        />
      )}
    </>
  );
};

export default ProductCard;