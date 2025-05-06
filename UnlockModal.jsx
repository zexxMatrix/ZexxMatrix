import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UnlockModal = ({ onClose, onComplete, product }) => {
  const [adWatched, setAdWatched] = useState(false);
  const [countdown, setCountdown] = useState(15); // 15 second ad simulation

  useEffect(() => {
    if (!adWatched && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setAdWatched(true);
    }
  }, [countdown, adWatched]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-dark rounded-xl max-w-md w-full p-6 shadow-glass border border-accent/30"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Unlock {product.name}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            {!adWatched ? (
              <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white mb-2">Ad will complete in:</p>
                  <div className="text-3xl font-bold text-accent">{countdown}s</div>
                  <p className="text-gray-400 text-sm mt-2">Please wait to unlock your download</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Ad Completed!</h4>
                <p className="text-gray-400">You can now download {product.name}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            {adWatched ? (
              <button
                onClick={onComplete}
                className="bg-accent hover:bg-accent/80 text-dark font-bold py-2 px-6 rounded-md shadow-neon"
              >
                Download Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-700 text-gray-400 font-bold py-2 px-6 rounded-md cursor-not-allowed"
              >
                Please Wait...
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UnlockModal;