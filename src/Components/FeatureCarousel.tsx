import { useState, useEffect } from "react";
import aiRecipe from "../assets/ai_recepi.png";
import automated from "../assets/automated.png";
import interactiveAI from "../assets/interactiveai.png";
import smartMeal from "../assets/smartmeal.png";
import phonemocup from "../assets/phone_moc_up.png";
import camera from "../assets/Camera.png";
import Ellipse from "../assets/Ellipse.png";

const FeatureCarousel = () => {
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
  }, []);

  // Update the getTextAnimationClass function to handle both in and out animations
  const getTextAnimationClass = (side: string, isVisible: boolean) => {
    if (isVisible) {
      return side === "left" ? "animate-slideInLeft" : "animate-slideInRight";
    } else {
      return side === "left" ? "animate-slideOutLeft" : "animate-slideOutRight";
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(-40vw);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(40vw);
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
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100vw);
            opacity: 0;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
          z-index: 10;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
          z-index: 10;
        }

        .animate-slideOutRight {
          animation: slideOutRight 0.5s ease-out forwards;
          z-index: 10;
        }

        .animate-slideOutLeft {
          animation: slideOutLeft 0.5s ease-out forwards;
          z-index: 10;
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.2s ease-out forwards;
        }
      `}</style>

      <section className="relative py-24 px-8 overflow-hidden" id="features">
        {/* Ellipse Background Image - Orange part opposite to text */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ${
            features[currentFeatureIndex].side === "left"
              ? "scale-x-[-1]"
              : "scale-x-[1]"
          }`}
        >
          <img
            src={Ellipse}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mx-10 overflow-hidden relative z-10">
          <div className="text-start mb-16 animate-fadeInUp">
            <h2 className="text-orange-500 text-4xl lg:text-6xl font-bold mb-4">
              Everything You Need for Smart Cooking
            </h2>
            <p className="text-gray-600 text-2xl max-w-4xl">
              Discover the power of AI-driven culinary creativity with features
              designed to transform your cooking experience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
            {/* Left Text Column */}
            <div className="flex items-center justify-center lg:w-1/2 space-y-6 pl-20 relative z-10">
              {features[currentFeatureIndex].side === "left" && (
                <div
                  className={`transition-opacity duration-1000 ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  } relative z-10`}
                >
                  <h1
                    className={`text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
                      "left",
                      isTextVisible
                    )}`}
                  >
                    {features[currentFeatureIndex].title}
                  </h1>
                </div>
              )}
            </div>

            {/* Center Phone Mockup Container */}
            <div className="relative animate-fadeInUp flex-shrink-0">
              <div className="relative w-[330px] h-[660px]">
                {/* Phone Mockup Image - Replace with your mockup path */}
                <img
                  src={phonemocup}
                  alt="Phone Mockup"
                  className="absolute inset-0 w-full h-full object-contain  pointer-events-none"
                />

                {/* Camera Image on top - Replace with your camera image path */}
                <img
                  src={camera}
                  alt="Camera"
                  className="absolute top-7 left-1/2 transform -translate-x-1/2 w-24 z-20 h-7  pointer-events-none"
                />

                {/* Screen Content - Feature Images */}
                <div className="absolute top-[20px] left-[10px] right-[10px] bottom-[20px] overflow-hidden rounded-[40px] z-0 bg-gradient-to-b from-pink-50 via-blue-50 to-cyan-50">
                  <div
                    className={`w-full h-full transition-opacity duration-1000 ${
                      isFeatureVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={features[currentFeatureIndex].image}
                      className="w-full h-full"
                      alt={features[currentFeatureIndex].title}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="flex items-center justify-center lg:w-1/2 space-y-6 pl-20 relative z-10">
              {features[currentFeatureIndex].side === "right" && (
                <div
                  className={`transition-opacity duration-1000 ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  } relative z-10`}
                >
                  <h1
                    className={`text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
                      "right",
                      isTextVisible
                    )}`}
                  >
                    {features[currentFeatureIndex].title}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCarousel;
