import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Unlock the Power of Prediction
                <span className="text-accent block mt-2">Tools by Zexx</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 text-lg mb-8"
              >
                Access advanced prediction tools for WinGo, Mines, and more. 
                Gain the edge with our cutting-edge AI-powered predictors.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/predictors" 
                  className="bg-accent hover:bg-accent/80 text-dark font-bold py-3 px-8 rounded-md shadow-neon transition duration-300"
                >
                  Get Predictors
                </Link>
                <a 
                  href="https://t.me/zexxmatrix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-primary/20 text-white border border-primary font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Join Telegram
                </a>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src="/hero-image.png" 
                alt="Zexx Predictor Tools" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose ZexxMatrix</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our prediction tools are designed to give you the edge with advanced algorithms and real-time data analysis.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High Accuracy",
                description: "Our predictors use advanced algorithms to provide high-accuracy predictions for various games.",
                icon: "📊"
              },
              {
                title: "Easy to Use",
                description: "Simple interface designed for both beginners and experienced users.",
                icon: "🔍"
              },
              {
                title: "Multiple Platforms",
                description: "Available as APK for Android and EXE for Windows devices.",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/70 p-6 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-neon"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Predictors Section */}
      <section className="py-16 bg-gradient-to-br from-dark to-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Predictors</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover our most-used prediction tools and start winning today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "WinGo Predictor",
                description: "Predict winning patterns for WinGo with high accuracy.",
                image: "/wingo-predictor.png",
                format: "APK & EXE",
                rating: 4.8
              },
              {
                name: "Mines Predictor",
                description: "Identify safe cells in Mines games with our advanced algorithm.",
                image: "/mines-predictor.png",
                format: "APK & EXE",
                rating: 4.7
              },
              {
                name: "Aviator Predictor",
                description: "Maximize your profits with our Aviator game prediction tool.",
                image: "/aviator-predictor.png",
                format: "EXE Only",
                rating: 4.9
              }
            ].map((predictor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/70 rounded-xl overflow-hidden border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-neon group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={predictor.image} 
                    alt={predictor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{predictor.name}</h3>
                    <span className="text-accent flex items-center">
                      <span className="mr-1">⭐</span>
                      {predictor.rating}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{predictor.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-primary/30 text-white text-sm py-1 px-3 rounded-full">
                      {predictor.format}
                    </span>
                    <Link 
                      to="/predictors" 
                      className="text-accent hover:text-white transition-colors duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/predictors" 
              className="bg-accent hover:bg-accent/80 text-dark font-bold py-3 px-8 rounded-md shadow-neon transition duration-300 inline-block"
            >
              View All Predictors
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get started with ZexxMatrix predictors in just a few simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create Account",
                description: "Sign up using your email or Google account.",
                icon: "👤"
              },
              {
                step: "2",
                title: "Choose Predictor",
                description: "Browse our collection and select the tool you need.",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Complete Task",
                description: "Watch a short ad to unlock your download.",
                icon: "📺"
              },
              {
                step: "4",
                title: "Download & Win",
                description: "Install the predictor and start winning!",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-dark/70 p-6 rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-neon h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4 mt-2">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 text-accent text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram Community Section */}
      <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark/80 p-8 md:p-12 rounded-2xl border border-primary/30 shadow-neon">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Telegram Community</h2>
                <p className="text-gray-300 mb-6">
                  Stay updated with the latest predictor tools, get exclusive access to beta releases, 
                  and connect with other users in our growing community.
                </p>
                <a 
                  href="https://t.me/zexxmatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/80 text-dark font-bold py-3 px-8 rounded-md shadow-neon transition duration-300 inline-flex items-center"
                >
                  <span className="mr-2">Join Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                  </svg>
                </a>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/telegram-community.png"
                  alt="Zexx Telegram Community"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Zexx Section */}
      <section className="py-16 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="/zexx-profile.png"
                alt="Zexx - Creator"
                className="w-full max-w-xs mx-auto rounded-full border-4 border-accent shadow-neon"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-4"
              >
                About Zexx
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                Hi, I'm Zexx — Creator of Smart AI Tools. I specialize in developing prediction algorithms 
                that help users gain an edge in various online games. My mission is to create accessible, 
                powerful tools that anyone can use to improve their chances of winning.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="https://t.me/zexxmatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                  </svg>
                  Telegram
                </a>
                <a 
                  href="https://instagram.com/zexxmatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                  Instagram
                </a>
                <a 
                  href="https://youtube.com/zexxmatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  YouTube
                </a>
                <a 
                  href="https://twitter.com/zexxmatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                  Twitter
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/30 to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Start Winning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join thousands of users who are already using ZexxMatrix predictors to gain an edge.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/register"
              className="bg-accent hover:bg-accent/80 text-dark font-bold py-3 px-8 rounded-md shadow-neon transition duration-300"
            >
              Create Account
            </Link>
            <Link 
              to="/predictors"
              className="bg-transparent hover:bg-primary/20 text-white border border-primary font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Browse Predictors
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;