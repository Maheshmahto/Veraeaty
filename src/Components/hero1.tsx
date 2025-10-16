// import { Bell, Calendar, ChefHat, Sparkles } from "lucide-react";

// import { useState, useEffect, useRef } from "react";
// import aiRecipe from "../assets/ai_recepi.png";
// import automated from "../assets/automated.png";
// import interactiveAI from "../assets/interactiveai.png";
// import smartMeal from "../assets/smartmeal.png";
// import group from "../assets/Group1.png";
// import group1 from "../assets/Group2.png";
// import group2 from "../assets/Group3.png";
// import group3 from "../assets/Group3.png";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SmartMeal from "./SmartMeal";
// import phoneimg from "../assets/HeroImg.png";
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [group, group1, group2, group3];

//   const phoneRef = useRef<HTMLDivElement>(null);
//   const targetPhoneRef = useRef<HTMLDivElement>(null);
//   const heroSectionRef = useRef<HTMLDivElement>(null);
//   const aboutSectionRef = useRef<HTMLDivElement>(null);
//   const [hasReachedTarget, setHasReachedTarget] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   useEffect(() => {
//     if (
//       !phoneRef.current ||
//       !targetPhoneRef.current ||
//       !heroSectionRef.current ||
//       !aboutSectionRef.current
//     )
//       return;

//     const ctx = gsap.context(() => {
//       const phoneElement = phoneRef.current;
//       const targetElement = targetPhoneRef.current;

//       if (!phoneElement || !targetElement) return;

//       const phoneRect = phoneElement.getBoundingClientRect();
//       const targetRect = targetElement.getBoundingClientRect();

//       const xDiff = targetRect.left - phoneRect.left;
//       const yDiff = targetRect.top - phoneRect.top;

//       gsap.to(phoneRef.current, {
//         scrollTrigger: {
//           trigger: heroSectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           onUpdate: (self) => {
//             if (self.progress > 0.9 && !hasReachedTarget) {
//               setHasReachedTarget(true);
//             } else if (self.progress <= 0.9 && hasReachedTarget) {
//               setHasReachedTarget(false);
//             }
//           },
//         },
//         x: xDiff,
//         y: yDiff,
//         scale: 1,
//         rotation: 0,
//         ease: "power2.inOut",
//         zIndex: 9999,
//       });
//     });

//     return () => ctx.revert();
//   }, [hasReachedTarget]);
//   const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
//   const [isFeatureVisible, setIsFeatureVisible] = useState(true);
//   const [isTextVisible, setIsTextVisible] = useState(true);

//   const features = [
//     {
//       image: aiRecipe,
//       title: "AI Recipe Creator",
//       side: "left",
//     },
//     {
//       image: automated,
//       title: "Automated Grocery Lists",
//       side: "right",
//     },
//     {
//       image: interactiveAI,
//       title: "Interactive AI Chatbot",
//       side: "left",
//     },
//     {
//       image: smartMeal,
//       title: "Smart Meal Plans",
//       side: "right",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Feature carousel synchronization
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFeatureVisible(false);
//       setIsTextVisible(false);

//       setTimeout(() => {
//         setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
//         setTimeout(() => {
//           setIsFeatureVisible(true);
//           setIsTextVisible(true);
//         }, 50);
//       }, 1000);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   // Update the getTextAnimationClass function to handle both in and out animations
//   const getTextAnimationClass = (side: string, isVisible: boolean) => {
//     if (isVisible) {
//       return side === "left" ? "animate-slideInLeft" : "animate-slideInRight";
//     } else {
//       return side === "left" ? "animate-slideOutLeft" : "animate-slideOutRight";
//     }
//   };

//   // Then update the text sections in your JSX:
//   {
//     features[currentFeatureIndex].side === "left" && (
//       <div
//         className={`transition-opacity duration-1000 ${
//           isTextVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <h1
//           className={`text-4xl lg:text-8xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
//             "left",
//             isTextVisible
//           )}`}
//         >
//           {features[currentFeatureIndex].title}
//         </h1>
//       </div>
//     );
//   }

//   {
//     features[currentFeatureIndex].side === "right" && (
//       <div
//         className={`transition-opacity duration-1000 ${
//           isTextVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <h1
//           className={`text-4xl lg:text-8xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
//             "right",
//             isTextVisible
//           )}`}
//         >
//           {features[currentFeatureIndex].title}
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <style>{`
//   @keyframes slideInRight {
//     from {
//       transform: translateX(-100px);
//       opacity: 0;
//     }
//     to {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }
  
//   @keyframes slideInLeft {
//     from {
//       transform: translateX(100px);
//       opacity: 0;
//     }
//     to {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   @keyframes slideOutRight {
//     from {
//       transform: translateX(0);
//       opacity: 1;
//     }
//     to {
//       transform: translateX(100px);
//       opacity: 0;
//     }
//   }
  
//   @keyframes slideOutLeft {
//     from {
//       transform: translateX(0);
//       opacity: 1;
//     }
//     to {
//       transform: translateX(-100px);
//       opacity: 0;
//     }
//   }
  
//   .animate-slideInRight {
//     animation: slideInRight 0.4s ease-out forwards;
//   }
  
//   .animate-slideInLeft {
//     animation: slideInLeft 0.4s ease-out forwards;
//   }

//   .animate-slideOutRight {
//     animation: slideOutRight 0.4s ease-out forwards;
//   }

//   .animate-slideOutLeft {
//     animation: slideOutLeft 0.4s ease-out forwards;
//   }
        
//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
        
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0px);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//   }
        
//   @keyframes pulse-slow {
//     0%, 100% {
//       opacity: 0.3;
//     }
//     50% {
//       opacity: 0.6;
//     }
//   }
        
//   @keyframes bounce-slow {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//   }
        
//   .animate-fadeInUp {
//     animation: fadeInUp 0.8s ease-out forwards;
//   }
        
//   .animate-float {
//     animation: float 3s ease-in-out infinite;
//   }
        
//   .animate-pulse-slow {
//     animation: pulse-slow 3s ease-in-out infinite;
//   }
        
//   .animate-bounce-slow {
//     animation: bounce-slow 2s ease-in-out infinite;
//   }
// `}</style>

//       {/* Section 1: Main Hero with Background */}
//       <section
//         ref={heroSectionRef}
//         className=" bg-white pt-16 pb-24 px-8"
//         style={{
//           backgroundImage: "url(/Background.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Decorative Icons */}
//         <div className="absolute top-20 left-10 text-coral-400 opacity-30 animate-pulse-slow">
//           <Bell className="w-8 h-8" />
//         </div>
//         <div className="absolute top-40 right-20 text-coral-400 opacity-30 animate-bounce-slow">
//           <ChefHat className="w-8 h-8" />
//         </div>
//         <div className="absolute bottom-40 left-20 text-coral-400 opacity-30 animate-pulse-slow">
//           <Sparkles className="w-8 h-8" />
//         </div>
//         <div className="absolute bottom-20 right-10 text-coral-400 opacity-30 animate-bounce-slow">
//           <ChefHat className="w-8 h-8" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6 animate-fadeInUp">
//               <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
//                 Say Goodbye to
//                 <br />
//                 <span className="text-[#EA785B]">"Aaj Kya Banaye?"</span>
//               </h1>

//               <p className="text-gray-600 text-lg max-w-md">
//                 A smart, personalized AI meal planner for busy housewife. Made
//                 for moms, families, and food lovers who want variety without the
//                 stress.
//               </p>

//               <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                 <Bell className="w-5 h-5" />
//                 Join Waitlist
//               </button>
//             </div>

//             <div
//               ref={phoneRef}
//               className="relative w-[320px] aspect-[9/16] mx-auto z-[9999] transition-opacity duration-500"
//               // style={{ opacity: 1 }}
//               style={{ opacity: hasReachedTarget ? 0 : 1 }}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={phoneimg}
//                   alt="VeraEaty App"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 2: What is VeraEaty - with ref for pinning */}
//       <section
//         ref={aboutSectionRef}
//         className="bg-gradient-to-br from-pink-50 via-white to-coral-50 py-24 px-8 relative overflow-hidden bg-transparent z-0"
//         id="about"
//       >
//         {/* Background Decorative Shape */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-coral-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

//         <div className="max-w-7xl mx-auto relative ">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="relative order-2 lg:order-1 animate-fadeInUp">
//               <div className="relative mx-auto max-w-sm">
//                 <div className="">
//                   <>
//                     <div
//                       ref={targetPhoneRef}
//                       className="relative w-[320px] aspect-[9/16] mx-auto"
//                     >
//                       {hasReachedTarget && (
//                         <>
//                           {images.map((image, index) => (
//                             <img
//                               key={index}
//                               src={image}
//                               alt={`VeraEaty feature ${index + 1}`}
//                               className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
//                                 index === currentImageIndex
//                                   ? "opacity-100"
//                                   : "opacity-0"
//                               }`}
//                             />
//                           ))}
//                         </>
//                       )}
//                     </div>
//                   </>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-8 order-1 lg:order-2 animate-fadeInUp">
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//                 What is <span className="text-coral-500">VeraEaty?</span>
//               </h2>

//               <p className="text-gray-600 text-lg">
//                 VeraEaty is an AI-powered meal planning assistant that helps
//                 you:
//               </p>

//               <div className="space-y-6">
//                 <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center">
//                     <Sparkles className="w-6 h-6 text-coral-500" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-1 text-gray-900">
//                       Meals Designed for You
//                     </h3>
//                     <p className="text-gray-600">
//                       Get personalized meal plans that match your taste, goals,
//                       and daily routine.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
//                     <Calendar className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-1 text-gray-900">
//                       Groceries, Perfectly Planned
//                     </h3>
//                     <p className="text-gray-600">
//                       Shop smarter with AI-generated lists that save time and
//                       prevent overspending.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
//                     <ChefHat className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-1 text-gray-900">
//                       Cook Effortlessly, Waste Nothing
//                     </h3>
//                     <p className="text-gray-600">
//                       Fully stress-free cooking with thoughtful planning that
//                       minimizes food waste.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Features - UNCHANGED */}

//       <section className="bg-white py-24 px-8" id="features">
//         <div className=" mx-10">
//           <div className="text-start mb-16 animate-fadeInUp">
//             <h2 className="text-orange-500 text-4xl lg:text-6xl font-bold mb-4">
//               Everything You Need for Smart Cooking
//             </h2>
//             <p className="text-gray-600 text-2xl max-w-4xl">
//               Discover the power of AI-driven culinary creativity with features
//               designed to transform your cooking experience.
//             </p>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
//             {/* Left Text Column - Only visible when feature is on left side */}
//             <div className="lg:w-1/2 space-y-6">
//               {features[currentFeatureIndex].side === "left" && (
//                 <div
//                   className={`transition-opacity duration-1000 ${
//                     isTextVisible ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <h1
//                     className={`text-4xl lg:text-8xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
//                       "left",
//                       isTextVisible
//                     )}`}
//                   >
//                     {features[currentFeatureIndex].title}
//                   </h1>
//                 </div>
//               )}
//             </div>

//             {/* Center Image Container - Fixed in center */}
//             <div className="relative animate-fadeInUp flex-shrink-0">
//               <div className="relative mx-auto w-[330px]">
//                 <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
//                   <div className="bg-white rounded-[2.5rem] overflow-hidden">
//                     <div
//                       className={`transition-opacity duration-1000 ${
//                         isFeatureVisible ? "opacity-100" : "opacity-0"
//                       }`}
//                     >
//                       <img
//                         src={features[currentFeatureIndex].image}
//                         className="w-full h-[590px] object-contain"
//                         alt={features[currentFeatureIndex].title}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Text Column - Only visible when feature is on right side */}
//             <div className="lg:w-1/2 space-y-6">
//               {features[currentFeatureIndex].side === "right" && (
//                 <div
//                   className={`transition-opacity duration-1000 ${
//                     isTextVisible ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <h1
//                     className={`text-4xl lg:text-8xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
//                       "right",
//                       isTextVisible
//                     )}`}
//                   >
//                     {features[currentFeatureIndex].title}
//                   </h1>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <SmartMeal />
//     </>
//   );
// };

// export default Hero;