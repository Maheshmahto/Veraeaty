import { Bell, Calendar, ChefHat, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import aiRecipe from "../assets/ai_recepi.png";
import group from "../assets/Group1.png";
import group1 from "../assets/Group2.png";
import group2 from "../assets/Group3.png";
import group3 from "../assets/Group4.png";
import phoneimg from "../assets/HeroImg.png";
import smartMeal from "../assets/smartmeal.png";
import automated from "../assets/automated.png";
import interactiveAI from "../assets/interactiveai.png";
import FeatureCarousel from "./FeatureCarousel";
// Mock images - replace with your actual imports

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [group, group1, group2, group3];

  const [showSection2, setShowSection2] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle scroll within the container
  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce scroll events
      scrollTimeout.current = setTimeout(() => {
        if (delta > 0 && !showSection2) {
          // Scrolling down - show section 2
          setIsTransitioning(true);
          setShowSection2(true);
          setTimeout(() => setIsTransitioning(false), 1200);
        } else if (delta < 0 && showSection2) {
          // Scrolling up - show section 1
          setIsTransitioning(true);
          setShowSection2(false);
          setTimeout(() => setIsTransitioning(false), 1200);
        }
      }, 50);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [showSection2, isTransitioning]);

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isFeatureVisible, setIsFeatureVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const features = [
    {
      image: aiRecipe,
      title: "AI Recipe Creator",
      side: "left",
    },
    {
      image: automated,
      title: "Automated Grocery Lists",
      side: "right",
    },
    {
      image: interactiveAI,
      title: "Interactive AI Chatbot",
      side: "left",
    },
    {
      image: smartMeal,
      title: "Smart Meal Plans",
      side: "right",
    },
  ];

  // Feature carousel synchronization
  useEffect(() => {
    if (!showSection2) return;

    const interval = setInterval(() => {
      setIsFeatureVisible(false);
      setIsTextVisible(false);

      setTimeout(() => {
        setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
        setTimeout(() => {
          setIsFeatureVisible(true);
          setIsTextVisible(true);
        }, 50);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [showSection2]);

  const getTextAnimationClass = (side, isVisible) => {
    if (isVisible) {
      return side === "left" ? "animate-slideInLeft" : "animate-slideInRight";
    } else {
      return side === "left" ? "animate-slideOutLeft" : "animate-slideOutRight";
    }
  };

  return (
    <>
      <style>{`
  /* Hide scrollbar */
  body {
    overflow: hidden;
  }

  @keyframes slideInRight {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInLeft {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100px);
      opacity: 0;
    }
  }
  
  @keyframes slideOutLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100px);
      opacity: 0;
    }
  }

  @keyframes contentFadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes contentFadeInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes contentFadeOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.4s ease-out forwards;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.4s ease-out forwards;
  }

  .animate-slideOutRight {
    animation: slideOutRight 0.4s ease-out forwards;
  }

  .animate-slideOutLeft {
    animation: slideOutLeft 0.4s ease-out forwards;
  }

  .animate-content-fade-out {
    animation: contentFadeOut 0.6s ease-out forwards;
  }

  .animate-content-fade-in {
    animation: contentFadeIn 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-content-fade-in-left {
    animation: contentFadeInFromLeft 0.8s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-content-fade-out-right {
    animation: contentFadeOutRight 0.6s ease-out forwards;
  }

  .phone-right {
    transform: translateX(0);
  }

  .phone-left {
    transform: translateX(calc(-100vw + 100% + 32rem));
  }

  @media (max-width: 1024px) {
    .phone-left {
      transform: translateX(0);
    }
  }
        
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
        
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
        
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }
        
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
        
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
        
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
        
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
        
  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }
`}</style>

      {/* Combined Section Container */}
      <section
        ref={containerRef}
        className="fixed inset-0 bg-white pt-16 pb-24 px-8 overflow-hidden"
        style={{
          backgroundImage: showSection2
            ? "linear-gradient(to bottom right, #FFF1F2, #FFF7ED, #FFFFFF)"
            : "linear-gradient(to bottom right, #FFF5F3, #FFFFFF)",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        {/* Decorative Icons */}
        <div className="absolute top-20 left-10 text-orange-400 opacity-30 animate-pulse-slow">
          <Bell className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-orange-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-20 text-orange-400 opacity-30 animate-pulse-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-20 right-10 text-orange-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-8 h-8" />
        </div>

        {/* Background Decorative Shapes for Section 2 */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
          style={{ opacity: showSection2 ? 0.2 : 0 }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2 transition-opacity duration-1000"
          style={{ opacity: showSection2 ? 0.2 : 0 }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Section 1 Content - Left Side */}
            <div
              className={`space-y-6 ${
                !showSection2 ? "animate-fadeInUp" : "animate-content-fade-out"
              }`}
              style={{
                display: showSection2 ? "none" : "block",
              }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Say Goodbye to
                <br />
                <span className="text-[#EA785B]">"Aaj Kya Banaye?"</span>
              </h1>

              <p className="text-gray-600 text-lg max-w-md">
                A smart, personalized AI meal planner for busy housewife. Made
                for moms, families, and food lovers who want variety without the
                stress.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Bell className="w-5 h-5" />
                Join Waitlist
              </button>
            </div>

            {/* Section 2 Content - Left Side */}
            <div
              className={`space-y-6 ${
                showSection2 ? "animate-content-fade-in-left" : ""
              }`}
              style={{
                display: showSection2 ? "block" : "none",
              }}
            >
              <div className="relative w-[320px] aspect-[9/16] mx-auto lg:mx-0">
                <div className="absolute inset-0  shadow-2xl">
                  <div className="w-full h-full overflow-hidden">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`VeraEaty feature ${index + 1}`}
                        className={`absolute inset-0 w-full h-150 object-cover transition-opacity duration-500 ease-in-out ${
                          index === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone - Right Side (moves to left) */}
            <div className="relative">
              {/* Section 1 Phone - Right Side */}
              <div
                className={`relative w-[320px] aspect-[9/16] mx-auto transition-all duration-1200 ease-in-out ${
                  showSection2
                    ? "phone-left opacity-0 pointer-events-none"
                    : "phone-right opacity-100"
                }`}
                style={{
                  transitionProperty: "transform, opacity",
                }}
              >
                <div className="absolute inset-0  ">
                  <div className="w-full h-full bg-white  overflow-hidden">
                    <img
                      src={phoneimg}
                      alt="VeraEaty App"
                      className="w-full h-150 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 Content - Right Side */}
              <div
                className={`absolute top-0 left-0 w-full space-y-8 ${
                  showSection2 ? "animate-content-fade-in" : "opacity-0"
                }`}
                style={{
                  display: showSection2 ? "block" : "none",
                }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  What is <span className="text-orange-500">VeraEaty?</span>
                </h2>

                <p className="text-gray-600 text-lg">
                 VeraEaty is an AI-powered meal planning assistant that helps you:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4  p-4 ">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">
                        Meals Designed for You
                      </h3>
                      <p className="text-gray-600">
                        Get personalized meal plans that match your taste,
                        goals, and daily routine.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4   p-4 ">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">
                        Groceries, Perfectly Planned
                      </h3>
                      <p className="text-gray-600">
                        Shop smarter with AI-generated lists that save time and
                        prevent overspending.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 ">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                      <ChefHat className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">
                        Cook Effortlessly, Waste Nothing
                      </h3>
                      <p className="text-gray-600">
                        Fully stress-free cooking with thoughtful planning that
                        minimizes food waste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* <FeatureCarousel /> 
        <SmartMeal/>
        */}
      
    </>
  );
};

export default Hero;
