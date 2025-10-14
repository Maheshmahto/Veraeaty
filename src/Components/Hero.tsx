import { Bell, Calendar, ChefHat, Sparkles, Zap } from 'lucide-react';
import group from '../assets/Group1.png';
import group1 from '../assets/Group2.png';
import group2 from '../assets/Group3.png';
import group3 from '../assets/Group4.png';
import { useState, useEffect } from 'react';
import SmartMeal from './SmartMeal';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [group, group1, group2, group3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Section 1: Main Hero with Background - UNCHANGED */}
      <section
        className="relative bg-white pt-16 pb-24 px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(/Background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Decorative Icons */}
        <div className="absolute top-20 left-10 text-coral-400 opacity-30 animate-pulse-slow">
          <Bell className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-coral-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-20 text-coral-400 opacity-30 animate-pulse-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 right-10 text-coral-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-8 h-8" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Say Goodbye to<br />
                <span className="text-coral-500">"Aaj Kya Banaye?"</span>
              </h1>

              <p className="text-gray-600 text-lg max-w-md">
                A smart, personalized AI meal planner for busy housewife.
                Made for moms, families, and food lovers who want variety without the stress.
              </p>

              <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Bell className="w-5 h-5" />
                Join Waitlist
              </button>
            </div>

            <div className="relative animate-float">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute top-0 right-0 w-20 h-20 bg-coral-300 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral-300 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>

                {/* Notification Badge - Top Right */}
                <div className="absolute -top-4 -right-2 z-20 bg-coral-500 text-white rounded-2xl px-3 py-2 shadow-lg text-xs animate-bounce-slow">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold">A</span>
                    </div>
                    <div>
                      <p className="font-semibold leading-tight">All-Recipe Generated!</p>
                      <p className="text-[10px] opacity-90">Let's Plan Good Food</p>
                    </div>
                  </div>
                </div>

                {/* Notification Badge - Bottom Left */}
                <div className="absolute -bottom-2 -left-2 z-20 bg-coral-500 text-white rounded-2xl px-3 py-2 shadow-lg text-xs animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-1">
                    <Bell className="w-4 h-4" />
                    <div>
                      <p className="font-semibold leading-tight">Visual Generator</p>
                      <p className="text-[10px] opacity-90">Daily Meal Planned</p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center text-white font-bold">
                          A
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Good Morning Meenu!</p>
                          <p className="text-xs text-gray-500">Let's Plan Your Menu</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-sm">
                        <p className="font-semibold mb-4">What do you feel like eating?</p>
                        <div className="flex gap-3 mb-4">
                          <button className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center text-white transform hover:scale-110 transition-transform">😊</button>
                          <button className="w-10 h-10 rounded-full bg-coral-100 flex items-center justify-center hover:bg-coral-200 transition-colors">🙂</button>
                          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">😐</button>
                          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">😕</button>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 rounded-xl p-2 hover:shadow-md transition-shadow">
                            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Average meal" className="rounded-lg h-24 w-full object-cover mb-2" />
                            <p className="text-xs font-medium text-center">Average meal</p>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-2 hover:shadow-md transition-shadow">
                            <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Pizza" className="rounded-lg h-24 w-full object-cover mb-2" />
                            <p className="text-xs font-medium text-center">Pizza</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-coral-500 text-white rounded-2xl p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-coral-400 to-coral-600 opacity-50"></div>
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">Visual Generator</p>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <Sparkles className="w-4 h-4" />
                            </div>
                          </div>
                          <p className="text-xs opacity-90 mb-2">Daily Meal Moods Predicted</p>
                          <div className="flex items-end gap-1">
                            <div className="w-1.5 h-4 bg-white/60 rounded"></div>
                            <div className="w-1.5 h-6 bg-white/80 rounded"></div>
                            <div className="w-1.5 h-8 bg-white rounded"></div>
                            <div className="w-1.5 h-5 bg-white/70 rounded"></div>
                            <div className="w-1.5 h-7 bg-white/90 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is VeraEaty - UPDATED with smooth transition */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-coral-50 py-24 px-8 relative overflow-hidden" id="about">
        {/* Background Decorative Shape */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 animate-fadeInUp">
              <div className="relative mx-auto max-w-sm">
                <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Image container with smooth fade transition */}
                    <div className="relative w-full h-full aspect-[9/16]">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`VeraEaty feature ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2 animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                What is <span className="text-coral-500">VeraEaty?</span>
              </h2>

              <p className="text-gray-600 text-lg">
                VeraEaty is an AI-powered meal planning assistant that helps you:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Meals Designed for You</h3>
                    <p className="text-gray-600">Get personalized meal plans that match your taste, goals, and daily routine.</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Groceries, Perfectly Planned</h3>
                    <p className="text-gray-600">Shop smarter with AI-generated lists that save time and prevent overspending.</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Cook Effortlessly, Waste Nothing</h3>
                    <p className="text-gray-600">Fully stress-free cooking with thoughtful planning that minimizes food waste.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Features - UNCHANGED */}
      <section className="bg-white py-24 px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-coral-500 text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need for Smart Cooking
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the power of AI-driven culinary creativity with features designed to transform your cooking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1 animate-fadeInUp">
              <div className="relative mx-auto max-w-sm">
                <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="p-6 space-y-4">
                      <div className="bg-coral-50 rounded-2xl p-4">
                        <h4 className="font-semibold mb-3">Good Morning Aisha!</h4>
                        <p className="text-xs text-gray-500 mb-2">Today's Meal</p>
                        <div className="bg-white rounded-xl p-3 mb-2">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="rounded-lg overflow-hidden">
                              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Meal 1" className="w-full h-16 object-cover" />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Meal 2" className="w-full h-16 object-cover" />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                              <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Meal 3" className="w-full h-16 object-cover" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3">
                          <p className="text-xs font-medium text-gray-500 mb-1">Today's Meal Calories</p>
                          <div className="flex items-center justify-between">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">402</div>
                                <div className="text-[8px] text-white/80">Kcal</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <span>Carbs: 45g</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span>Protein: 22g</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Fats: 18g</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 animate-fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-coral-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-coral-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="w-7 h-7 text-coral-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Smart Meal Plans</h3>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-coral-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Integrated AI Chatbot</h3>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-coral-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Automated Grocery Lists</h3>
                </div>

                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-coral-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ChefHat className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI Recipe Creator</h3>
                </div>
              </div>

              {/* Floating icons */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center animate-bounce-slow">
                  <Zap className="w-6 h-6 text-coral-500" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <ChefHat className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Launch Section */}
          <div className="  p-12 text-center  animate-fadeInUp">
            <h2 className="text-coral-500 text-4xl lg:text-5xl font-bold mb-4">
              Launching Soon
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join the <span className="text-coral-500">Veraeaty</span> Revolution
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Be among the first to experience AI-powered food creation.<br />
              <span className="font-semibold">Get exclusive early access, special features, and lifetime benefits.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-coral-500 focus:outline-none transition-colors"
              />
              <button className="w-full sm:w-auto bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
      <SmartMeal/>
    </>
  );
};

export default Hero;