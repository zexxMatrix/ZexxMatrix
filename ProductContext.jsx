import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, 'predictors');
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  async function unlockProduct(productId) {
    if (!currentUser) {
      throw new Error("You must be logged in to unlock products");
    }

    try {
      // Update user's download history
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        downloads: arrayUnion({
          productId,
          downloadedAt: new Date()
        }),
        taskHistory: arrayUnion({
          type: "ad_watch",
          productId,
          completedAt: new Date()
        })
      });

      // Return the product details
      return products.find(product => product.id === productId);
    } catch (error) {
      throw error;
    }
  }

  function getProductsByCategory(category) {
    if (!category || category === 'all') {
      return products;
    }
    return products.filter(product => product.format.toLowerCase() === category.toLowerCase());
  }

  const value = {
    products,
    loading,
    unlockProduct,
    getProductsByCategory
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}