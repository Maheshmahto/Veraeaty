import { Bell, Calendar, ChefHat, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import circuitBoard from "../assets/CircuitBoard.png";
import Zap from "../assets/Zap.png";
import Heart from "../assets/Heart.png";
import aiRecipe from "../assets/ai_recepi.png";
import group from "../assets/Group1.png";
import group1 from "../assets/Group2.png";
import group2 from "../assets/Group3.png";
import group3 from "../assets/Group4.png";
import phoneimg from "../assets/12.png";
import smartMeal from "../assets/smartmeal.png";
import automated from "../assets/automated.png";
import interactiveAI from "../assets/interactiveai.png";
import phonemocup from "../assets/phone_moc_up.png";
import camera from "../assets/Camera.png";
import Ellipse from "../assets/Ellipse.png";
import img1 from "../assets/Overlay+Shadow+OverlayBlur.png";
import img2 from "../assets/Overlay+Shadow+OverlayBlur2.png";
import img3 from "../assets/Overlay+Shadow+OverlayBlur3.png";
import bg1 from "../assets/Bg1.png";
import bg2 from "../assets/Bg2.png";
import bg3 from "../assets/Bg3.png";
import "../fonts/font.css";
import Footer from "./Footer";
import gsap from "gsap";
import axiosInstance from "../Helper/Axios";

const Hero1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [group, group1, group2, group3];
  const [currentSection, setCurrentSection] = useState(1);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFeatureVisible, setIsFeatureVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [showSection3Heading, setShowSection3Heading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // New states for overlay images
  const [showOverlay1, setShowOverlay1] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);
  const [showOverlay3, setShowOverlay3] = useState(false);
  const [overlaysVisible, setOverlaysVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const section3PhoneRef = useRef<HTMLDivElement | null>(null);
  const section3HeadingRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<number | null>(null);
  const overlayTimeout = useRef<number | null>(null);

  // Effect to show overlay images one by one
  useEffect(() => {
    if (currentSection === 1 && overlaysVisible) {
      // Reset all overlays
      setShowOverlay1(false);
      setShowOverlay2(false);
      setShowOverlay3(false);

      // Show first overlay after a small delay
      overlayTimeout.current = setTimeout(() => {
        setShowOverlay1(true);
        // Animate first image
        gsap.fromTo(
          `.overlay-1`,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }
        );

        // Show second overlay
        overlayTimeout.current = setTimeout(() => {
          setShowOverlay2(true);
          // Animate second image
          gsap.fromTo(
            `.overlay-2`,
            { opacity: 0, x: 20, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }
          );

          // Show third overlay
          overlayTimeout.current = setTimeout(() => {
            setShowOverlay3(true);
            // Animate third image
            gsap.fromTo(
              `.overlay-3`,
              { opacity: 0, x: -20, scale: 0.9 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)",
              }
            );
          }, 300);
        }, 400);
      }, 500);

      return () => {
        if (overlayTimeout.current) {
          clearTimeout(overlayTimeout.current);
        }
      };
    }
  }, [currentSection, overlaysVisible]);

  // Hide overlays when scrolling starts
  useEffect(() => {
    if (currentSection !== 1) {
      setOverlaysVisible(false);
      setShowOverlay1(false);
      setShowOverlay2(false);
      setShowOverlay3(false);
    } else {
      setOverlaysVisible(true);
    }
  }, [currentSection]);

  useEffect(() => {
    gsap.fromTo(
      section1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.3 }
    );
  }, []);

  const showSecondSection = () => {
    if (isTransitioning || currentSection === 2) return;
    setIsTransitioning(true);
    // Hide overlays immediately when scrolling starts
    setOverlaysVisible(false);
    setShowOverlay1(false);
    setShowOverlay2(false);
    setShowOverlay3(false);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        setCurrentSection(2);
      },
    });

    tl.to(section1Ref.current, {
      opacity: 0,
      y: -50,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .to(
        phoneRef.current,
        { x: "-40vw", duration: 1.2, ease: "power2.inOut" },
        0.2
      )
      .fromTo(
        section2Ref.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        0.8
      )
      .fromTo(
        carouselRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        1
      );

    gsap.to(containerRef.current, {
      backgroundImage:
        "linear-gradient(to bottom right, #FFF1F2, #FFF7ED, #FFFFFF)",
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const showFirstSection = () => {
    if (isTransitioning || currentSection === 1) return;
    setIsTransitioning(true);
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        setCurrentSection(1);
        // Show overlays again when returning to first section
        setOverlaysVisible(true);
      },
    });

    tl.to(section2Ref.current, {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .to(
        carouselRef.current,
        { opacity: 0, duration: 0.3, ease: "power2.inOut" },
        0
      )
      .to(
        phoneRef.current,
        { x: "0%", duration: 1.2, ease: "power2.inOut" },
        0.2
      )
      .fromTo(
        section1Ref.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.8
      );

    gsap.to(containerRef.current, {
      backgroundImage: "linear-gradient(to bottom right, #FFF5F3, #FFFFFF)",
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const showThirdSection = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowSection3Heading(false);
    setIsFeatureVisible(false);
    setIsTextVisible(false);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    // Get current position of phoneRef
    const phoneEl = phoneRef.current;
    if (!phoneEl) {
      // If the phone element is not available, abort the transition gracefully
      setIsTransitioning(false);
      return;
    }
    const phoneRect = phoneEl.getBoundingClientRect();
    const currentLeft = phoneRect.left + phoneRect.width / 2;
    const currentTop = phoneRect.top + phoneRect.height / 2;

    // Calculate center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the translation needed from current position to center
    const translateX = centerX - currentLeft;
    const translateY = centerY - currentTop;

    // Slide Section 2 content to the right smoothly and completely off screen
    tl.to(section2Ref.current, {
      opacity: 0,
      x: "100vw", // Move completely off screen to the right
      duration: 0.8,
      ease: "power2.inOut",
    })
      // Make carousel fully visible
      .to(carouselRef.current, { opacity: 1, duration: 0.3 }, 0.3)
      // Smoothly animate phone from its current position to center
      .to(
        phoneRef.current,
        {
          x: `+=${translateX}`,
          y: `+=${translateY}`,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0.6
      )
      // Fade out the carousel after centering
      .to(
        carouselRef.current,
        { opacity: 0, duration: 0.5, ease: "power2.inOut" },
        1.8
      )
      // At the end of carousel fade, swap the content
      .call(
        () => {
          // Show phone mockup and feature image
          gsap.set(section3PhoneRef.current, { opacity: 1 });
          // Hide the original phone with carousel
          gsap.set(phoneRef.current, { opacity: 0 });
          // Reset phoneRef position for future transitions
          gsap.set(phoneRef.current, {
            x: "-40vw",
            y: "0%",
          });

          setShowSection3Heading(true);
          setCurrentFeatureIndex(0); // Start with first feature
          setIsFeatureVisible(true);
          setIsTextVisible(true);
        },
        [],
        2.3
      )
      // Show heading and paragraph
      .fromTo(
        section3HeadingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        2.3
      );

    gsap.to(containerRef.current, {
      backgroundImage:
        "linear-gradient(to bottom right, #FEF3C7, #FEE2E2, #FFFFFF)",
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const showSecondSectionFromThird = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowSection3Heading(false);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    tl.to(section3HeadingRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .call(
        () => {
          gsap.set(section3PhoneRef.current, { opacity: 0 });
          gsap.set(phoneRef.current, {
            opacity: 1,
            x: "0%",
            y: "calc(50vh - 275px)",
            width: "330px",
            height: "550px",
          });
        },
        undefined,
        0.4
      )
      .to(
        phoneRef.current,
        {
          x: "-40vw",
          y: "0%",
          width: "320px",
          height: "auto",
          duration: 1.2,
          ease: "power2.inOut",
        },
        0.5
      )
      .to(
        carouselRef.current,
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        1.0
      )
      .fromTo(
        section2Ref.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        1.2
      );

    gsap.to(containerRef.current, {
      backgroundImage:
        "linear-gradient(to bottom right, #FFF1F2, #FFF7ED, #FFFFFF)",
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const features = [
    { image: aiRecipe, title: "AI Recipe Creator", side: "left" },
    { image: automated, title: "Automated Grocery Lists", side: "right" },
    { image: interactiveAI, title: "Interactive AI Chatbot", side: "left" },
    { image: smartMeal, title: "Smart Meal Plans", side: "right" },
  ];

  useEffect(() => {
    if (currentSection !== 2) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSection, images.length]);

  useEffect(() => {
    const handleWheel = (e: any) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }
      const delta = e.deltaY;
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        if (delta > 0) {
          if (currentSection === 1) {
            setCurrentSection(2);
            showSecondSection();
          } else if (currentSection === 2) {
            setCurrentSection(3);
            setCurrentFeatureIndex(0);
            showThirdSection();
          } else if (currentSection === 3) {
            if (currentFeatureIndex < features.length - 1) {
              setIsTransitioning(true);
              setIsFeatureVisible(false);
              setIsTextVisible(false);
              setTimeout(() => {
                setCurrentFeatureIndex((prev) => prev + 1);
                setTimeout(() => {
                  setIsFeatureVisible(true);
                  setIsTextVisible(true);
                  setIsTransitioning(false);
                }, 100);
              }, 500);
            } else {
              setIsTransitioning(true);
              setCurrentSection(4);
              setTimeout(() => setIsTransitioning(false), 1200);
            }
          } else if (currentSection === 4) {
            setIsTransitioning(true);
            setCurrentSection(5);
            setTimeout(() => setIsTransitioning(false), 1200);
          }
        } else if (delta < 0) {
          if (currentSection === 5) {
            setIsTransitioning(true);
            setCurrentSection(4);
            setTimeout(() => setIsTransitioning(false), 1200);
          } else if (currentSection === 4) {
            setIsTransitioning(true);
            setCurrentSection(3);
            setCurrentFeatureIndex(features.length - 1);
            setIsFeatureVisible(true);
            setIsTextVisible(true);
            setTimeout(() => setIsTransitioning(false), 1200);
          } else if (currentSection === 3) {
            if (currentFeatureIndex > 0) {
              setIsTransitioning(true);
              setIsFeatureVisible(false);
              setIsTextVisible(false);
              setTimeout(() => {
                setCurrentFeatureIndex((prev) => prev - 1);
                setTimeout(() => {
                  setIsFeatureVisible(true);
                  setIsTextVisible(true);
                  setIsTransitioning(false);
                }, 100);
              }, 500);
            } else {
              setCurrentSection(2);
              showSecondSectionFromThird();
            }
          } else if (currentSection === 2) {
            setCurrentSection(1);
            showFirstSection();
          }
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
      if (overlayTimeout.current) {
        clearTimeout(overlayTimeout.current);
      }
    };
  }, [currentSection, currentFeatureIndex, isTransitioning, features.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axiosInstance.post("/api/guest-users/", { email });
      console.log(response);

      // Check for successful status codes (2xx)
      if (response.status >= 200 && response.status < 300) {
        setSubmitted(true);
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.detail?.includes("Email already submitted")
        ) {
          setError("This email is already on our waitlist!");
        } else {
          setError(
            error.response.data.detail || "Failed to submit. Please try again."
          );
        }
      } else if (error.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentFeature = features[currentFeatureIndex];

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
        body {
          overflow: hidden;
        }
        @keyframes slideInRight {
          from { transform: translateX(-40vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(40vw); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100vw); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideInRight { animation: slideInRight 0.5s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.5s ease-out forwards; }
        .animate-slideOutRight { animation: slideOutRight 0.5s ease-out forwards; }
        .animate-slideOutLeft { animation: slideOutLeft 0.5s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
      `}</style>
      <section
        ref={containerRef}
        className="fixed inset-0 bg-white overflow-hidden"
        style={{
          backgroundImage:
            currentSection === 1
              ? "linear-gradient(to bottom right, #FFF5F3, #FFFFFF)"
              : currentSection === 2
              ? "linear-gradient(to bottom right, #FFF1F2, #FFF7ED, #FFFFFF)"
              : currentSection === 3
              ? "linear-gradient(to bottom right, #FEF3C7, #FEE2E2, #FFFFFF)"
              : currentSection === 4
              ? "linear-gradient(to bottom right, #DBEAFE, #F3E8FF, #FFFFFF)"
              : "linear-gradient(to bottom right, #FFFFFF, #FFF5F3, #FFFFFF)",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[100vh]">
            <div
              ref={section1Ref}
              className={`space-y-6 transition-opacity duration-800 ${
                currentSection === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-6xl lg:text-6xl  font-semibold leading-tight">
                Say Goodbye to <br />
                <span className="text-[#EA785B]">"Aaj Kya Banaye?"</span>
              </h1>
              <p className="text-black text-lg max-w-md from-light">
                A smart, personalized AI meal planner for busy households. Made
                for moms, families, and food lovers who want variety without the
                stress.
              </p>
              <button className="bg-[linear-gradient(90deg,#EA785B_0%,#FF8953_100%)] hover:opacity-90 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Bell className="w-5 h-5" /> Join Waitlist
              </button>
            </div>
            <div className="relative flex justify-center lg:justify-start">
              <div
                ref={phoneRef}
                className="relative w-[320px] aspect-[9/16] mx-auto"
              >
                <div className="relative w-full h-full">
                  <span>
                    <img
                      src={phoneimg}
                      alt="VeraEaty App"
                      className="inset-0 w-full h-full object-contain"
                    />

                    {/* Overlay Images with GSAP animations */}
                    {showOverlay1 && (
                      <img
                        src={img1}
                        alt=""
                        className="overlay-1 w-60 h-20 z-100000 top-[-32px] left-[-45px] absolute bg-transparent"
                      />
                    )}
                    {showOverlay2 && (
                      <img
                        src={img3}
                        alt=""
                        className="overlay-2 w-42 h-15 object-contain z-10000 absolute top-86 right-[-60px]"
                      />
                    )}
                    {showOverlay3 && (
                      <img
                        src={img2}
                        alt=""
                        className="overlay-3 w-40 h-15 object-contain absolute top-110 left-[-60px]"
                      />
                    )}
                  </span>

                  <div ref={carouselRef} className="absolute inset-0 opacity-0">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`VeraEaty feature ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
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
            <div
              ref={section2Ref}
              className={`absolute inset-0 transition-all duration-800 ${
                currentSection === 2
                  ? "opacity-100 z-20 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              background: ;
              <div className="max-w-7xl mx-auto h-full flex items-center">
                <div className="w-full lg:w-1/2"></div>
                <div className="w-full lg:w-1/2 space-y-4 pl-4">
                  <h2
                    className="text-4xl lg:text-5xl font-bold text-[#EA785B]
"
                  >
                    What is VeraEaty?
                  </h2>
                  <p className="text-black text-2xl font-[Poppins] font-light">
                    VeraEaty is an AI-powered meal planning assistant that helps
                    you:
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-3 ">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <img src={bg1} alt="" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                          Meals Designed for You
                        </h3>
                        <p className="text-gray-700">
                          Get personalized meal plans that match your taste,
                          goals, and daily routine.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        {/* <Calendar className="w-6 h-6 text-green-600" /> */}
                        <img src={bg2} alt="" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                          Groceries, Perfectly Planned
                        </h3>
                        <p className="text-gray-700">
                          Shop smarter with AI-generated lists that save time
                          and prevent overspending.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        {/* <ChefHat className="w-6 h-6 text-orange-600" /> */}
                        <img src={bg3} alt="" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                          Cook Effortlessly, Waste Nothing
                        </h3>
                        <p className="text-gray-700">
                          Fully stress-free cooking with thoughtful planning
                          that minimizes food waste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${
            currentSection === 3
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-500 ${
                currentFeature.side === "left" ? "scale-x-[1]" : "scale-x-[-1]"
              }`}
            >
              <img
                src={Ellipse}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-10 relative z-10 h-full flex flex-col justify-end pb-15">
              <div
                ref={section3HeadingRef}
                className={`text-start  transition-opacity duration-800 ${
                  showSection3Heading ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-[#EA785B] text-4xl lg:text-6xl font-bold mb-4">
                  Everything You Need for Smart Cooking
                </h2>
                <p className="text-[#4B5563] text-2xl max-w-4xl font-inter">
                  Discover the power of AI-driven culinary creativity with
                  features designed to transform your cooking experience.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex items-center justify-center lg:w-1/2 space-y-6 pl-20 relative z-10">
                  {currentFeature.side === "left" && (
                    <div
                      className={`transition-opacity duration-1000 ${
                        isTextVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h1
                        className={`text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
                          "left",
                          isTextVisible
                        )}`}
                      >
                        {currentFeature.title}
                      </h1>
                    </div>
                  )}
                </div>
                <div
                  ref={section3PhoneRef}
                  className="relative flex-shrink-0 opacity-0"
                >
                  <div className="relative w-[330px] h-[550px]">
                    <img
                      src={phonemocup}
                      alt="Phone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    />
                    <img
                      src={camera}
                      alt="Camera"
                      className="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 z-20 h-4 pointer-events-none"
                    />
                    <div className="absolute top-[6px] left-[32px] right-[32px] bottom-[5px] overflow-hidden rounded-[40px] z-0">
                      <div
                        className={`w-full h-full transition-opacity duration-1000 ${
                          isFeatureVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={currentFeature.image}
                          className="w-full h-full object-cover"
                          alt={currentFeature.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2 space-y-6 pl-20 relative z-10">
                  {currentFeature.side === "right" && (
                    <div
                      className={`transition-opacity duration-1000 ${
                        isTextVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h1
                        className={`text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
                          "right",
                          isTextVisible
                        )}`}
                      >
                        {currentFeature.title}
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 4 */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${
            currentSection === 4
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-50 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float bg-[#EA785B]"></div>
              <div
                className="absolute top-60 right-20 w-60 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-[#FF9B7D]"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-0 w-full h-px opacity-1 bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"
                style={{ animation: "pulse-slow 4s ease-in-out infinite" }}
              ></div>
            </div>
            <div className="relative z-10 h-full flex items-center justify-center px-8 py-12 mt-42">
              <div className="w-full">
                <div className="text-center">
                  <div className="relative mb-12 flex justify-center">
                    <div className="backdrop-blur-2xl bg-white/60 max-w-7xl rounded-3xl py-30 p-20 border border-white/60 relative overflow-hidden shadow-2xl shadow-orange-500/15 mx-auto">
                      <div className="relative flex items-center justify-center gap-8 mb-8">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-500/20">
                            <img
                              src={circuitBoard}
                              alt=""
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                          <div
                            className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-[#EA785B] to-transparent"
                            style={{
                              animation: "pulse-slow 3s ease-in-out infinite",
                            }}
                          ></div>
                        </div>
                        <div className="relative">
                          <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-white/80 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                            <ChefHat className="w-16 h-16 text-orange-500" />
                            <div
                              className="absolute inset-0 rounded-3xl border-2 border-[#EA785B] opacity-10"
                              style={{
                                animation: "pulse-slow 3s ease-in-out infinite",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="relative">
                          <div
                            className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-l from-[#FF9B7D] to-transparent"
                            style={{
                              animation: "pulse-slow 3s ease-in-out infinite",
                              animationDelay: "0.5s",
                            }}
                          ></div>
                          <div
                            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-300/30"
                            style={{ animationDelay: "1s" }}
                          >
                            <Sparkles className="w-12 h-12 text-orange-500" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <img src={Zap} alt="" className="w-6 h-6" />
                      </div>
                      <div
                        className="absolute bottom-8 right-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                        style={{ animationDelay: "1.5s" }}
                      >
                        <img src={Heart} alt="" className="w-6 h-6" />
                      </div>
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-inter px-4 bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3] text-transparent text-center">
                        Smarter Meals Are Loading…
                      </h1>
                      <div
                        className="left-0 w-full h-px opacity-1 bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent mb-5"
                        style={{
                          animation: "pulse-slow 4s ease-in-out infinite",
                        }}
                      ></div>
                      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10 mx-auto leading-relaxed text-center">
                        From recipes to reality — AI is redefining how we cook,
                        plan, and eat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 5 */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${
            currentSection === 5
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center py-6 px-8">
                <div className="w-full max-w-4xl mt-20">
                  <div className="text-center mb-8">
                    <div className="backdrop-blur-xl max-w-3xl mx-auto p-10 rounded-3xl bg-white/80 border border-white/60 shadow-2xl shadow-orange-500/10">
                      {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="relative">
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black bg-clip-text text-center">
                              Join the{" "}
                              <span className="bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3] text-transparent">
                                Veraeaty
                              </span>{" "}
                              Revolution
                            </h1>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                              className="w-full max-w-xl px-6 py-4 rounded-full mx-auto block bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#EA785B] transition-all duration-300 text-gray-900 placeholder-gray-400 text-lg shadow-md"
                            />
                          </div>
                          {error && (
                            <div className="text-red-500 text-base mb-2 text-center">
                              {error}
                            </div>
                          )}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full max-w-xl mx-auto block px-12 py-4 rounded-full text-white font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#EA785B] to-[#FF9B7D] shadow-orange-500/40 hover:shadow-orange-500/50"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Joining...
                              </span>
                            ) : (
                              "Join Waitlist"
                            )}
                          </button>
                        </form>
                      ) : (
                        <div className="text-center py-8 animate-fade-in">
                          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-lg bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/40">
                            <img src={Heart} alt="" className="w-10 h-10" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Welcome to the revolution!
                          </h3>
                          <p className="text-gray-600 text-lg">
                            Check your inbox for exclusive early access details.
                          </p>
                        </div>
                      )}
                      <div className="mt-8 py-6">
                        <p className="text-center text-base text-gray-600 mb-2">
                          Be among the first to experience AI-powered food
                          creation.
                        </p>
                        <h3 className="text-center text-xl font-medium tracking-wide text-gray-800">
                          Get exclusive early access, special features, and
                          lifetime benefits.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
