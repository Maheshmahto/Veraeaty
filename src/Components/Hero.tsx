import { Bell, ChefHat, Sparkles, X } from "lucide-react";
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
  const [isFirstSection2Visit, setIsFirstSection2Visit] = useState(true);
  
  // Popup state
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);

  // Features array moved to top to avoid reference errors
  const features = [
    { image: aiRecipe, title: "AI Recipe Creator", side: "left" },
    { image: automated, title: "Automated Grocery Lists", side: "right" },
    { image: interactiveAI, title: "Interactive AI Chatbot", side: "left" },
    { image: smartMeal, title: "Smart Meal Plans", side: "right" },
  ];

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
  const touchStartRef = useRef<number | null>(null);
  const section2ScrollableRef = useRef<HTMLDivElement | null>(null);
  const isSection2ScrollingRef = useRef<boolean>(false);
  const lastScrollTimeRef = useRef<number>(0);
  const isScrollingRef = useRef<boolean>(false);
  
  // Popup ref for animations
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Function to open waitlist popup
  const openWaitlistPopup = () => {
    setShowWaitlistPopup(true);
    // Reset form state when opening
    setEmail("");
    setSubmitted(false);
    setError("");
  };

  // Function to close waitlist popup
  const closeWaitlistPopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setShowWaitlistPopup(false);
        }
      });
    } else {
      setShowWaitlistPopup(false);
    }
  };

  // Handle popup animations
  useEffect(() => {
    if (showWaitlistPopup && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.2)" }
      );
    }
  }, [showWaitlistPopup]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showWaitlistPopup) {
        closeWaitlistPopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showWaitlistPopup]);

  // Handle backdrop click to close popup
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWaitlistPopup();
    }
  };

  // CRITICAL FIX: Force scroll reset whenever we enter Section 2
  useEffect(() => {
    if (currentSection === 2 && section2ScrollableRef.current) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        if (section2ScrollableRef.current) {
          section2ScrollableRef.current.scrollTop = 0;
        }
      }, 0);
      
      // Also try with a small delay
      setTimeout(() => {
        if (section2ScrollableRef.current) {
          section2ScrollableRef.current.scrollTop = 0;
        }
      }, 100);
      
      // And one more at 300ms
      setTimeout(() => {
        if (section2ScrollableRef.current) {
          section2ScrollableRef.current.scrollTop = 0;
        }
      }, 300);
    }
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === 1 && overlaysVisible) {
      setShowOverlay1(false);
      setShowOverlay2(false);
      setShowOverlay3(false);

      overlayTimeout.current = setTimeout(() => {
        setShowOverlay1(true);
        gsap.fromTo(
          `.overlay-1`,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }
        );

        overlayTimeout.current = setTimeout(() => {
          setShowOverlay2(true);
          gsap.fromTo(
            `.overlay-2`,
            { opacity: 0, x: 20, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }
          );

          overlayTimeout.current = setTimeout(() => {
            setShowOverlay3(true);
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
    setOverlaysVisible(false);
    setShowOverlay1(false);
    setShowOverlay2(false);
    setShowOverlay3(false);
    
    // Set as first visit when coming from Section 1
    setIsFirstSection2Visit(true);

    // Reset scroll position when entering Section 2
    if (section2ScrollableRef.current) {
      section2ScrollableRef.current.scrollTop = 0;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        setCurrentSection(2);
        isSection2ScrollingRef.current = false;
      },
    });

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // Simple fade for mobile - phone becomes static in Section 2
      tl.to(section1Ref.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(phoneRef.current, { opacity: 0, duration: 0.4 }, 0)
        .fromTo(
          section2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          0.4
        );
    } else {
      // Desktop animation (original)
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
    }

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
        setOverlaysVisible(true);
      },
    });

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // Simple fade for mobile
      tl.to(section2Ref.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(phoneRef.current, { opacity: 1, duration: 0.4 }, 0.2)
        .fromTo(
          section1Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          0.4
        );
    } else {
      // Desktop animation (original)
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
    }

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

    const phoneEl = phoneRef.current;
    if (!phoneEl) {
      setIsTransitioning(false);
      return;
    }
    const phoneRect = phoneEl.getBoundingClientRect();
    const currentLeft = phoneRect.left + phoneRect.width / 2;
    const currentTop = phoneRect.top + phoneRect.height / 2;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const translateX = centerX - currentLeft;
    const translateY = centerY - currentTop;

    const isMobile = window.innerWidth < 1024;

    tl.to(section2Ref.current, {
      opacity: 0,
      x: "100vw",
      duration: 0.8,
      ease: "power2.inOut",
    })
      .to(carouselRef.current, { opacity: 1, duration: 0.3 }, 0.3)
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
      .to(
        carouselRef.current,
        { opacity: 0, duration: 0.5, ease: "power2.inOut" },
        1.8
      )
      .call(
        () => {
          gsap.set(section3PhoneRef.current, { opacity: 1 });
          gsap.set(phoneRef.current, { opacity: 0 });
          gsap.set(phoneRef.current, {
            x: isMobile ? "0vw" : "-40vw",
            y: "0%",
          });

          setShowSection3Heading(true);
          setCurrentFeatureIndex(0);
          setIsFeatureVisible(true);
          setIsTextVisible(true);
        },
        [],
        2.3
      )
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
    
    // Set as NOT first visit when coming from Section 3
    setIsFirstSection2Visit(false);
    
    // CRITICAL FIX: Reset scroll IMMEDIATELY before any animation starts
    if (section2ScrollableRef.current) {
      section2ScrollableRef.current.scrollTop = 0;
    }
    
    // Also update the section state early
    setCurrentSection(2);

    const isMobile = window.innerWidth < 1024;
    const phoneXMove = isMobile ? "0vw" : "-40vw";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        // Double-check scroll position after animation
        if (section2ScrollableRef.current) {
          section2ScrollableRef.current.scrollTop = 0;
        }
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
          x: phoneXMove,
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

  useEffect(() => {
    if (currentSection !== 2) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSection, images.length]);

  // Check if Section 2 scrollable content is at bottom
  const isSection2AtBottom = () => {
    const scrollable = section2ScrollableRef.current;
    if (!scrollable) return false;
    
    const { scrollTop, scrollHeight, clientHeight } = scrollable;
    return scrollTop + clientHeight >= scrollHeight - 2;
  };

  // Check if Section 2 scrollable content is at top
  const isSection2AtTop = () => {
    const scrollable = section2ScrollableRef.current;
    if (!scrollable) return true;
    
    return scrollable.scrollTop <= 2;
  };

  // Wheel event handler for desktop
  useEffect(() => {
    const handleWheel = (e: any) => {
      if (isTransitioning || showWaitlistPopup) {
        e.preventDefault();
        return;
      }

      // Handle Section 2 scrolling
      if (currentSection === 2) {
        const scrollable = section2ScrollableRef.current;
        if (scrollable) {
          const delta = e.deltaY;
          const atBottom = isSection2AtBottom();
          const atTop = isSection2AtTop();
          
          // If scrolling down and at bottom, proceed to next section
          if (delta > 0 && atBottom) {
            e.preventDefault();
            if (scrollTimeout.current) {
              clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = setTimeout(() => {
              setCurrentSection(3);
              setCurrentFeatureIndex(0);
              showThirdSection();
            }, 100);
            return;
          }
          
          // If scrolling up and at top, go back to previous section
          if (delta < 0 && atTop) {
            e.preventDefault();
            if (scrollTimeout.current) {
              clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = setTimeout(() => {
              setCurrentSection(1);
              showFirstSection();
            }, 100);
            return;
          }
          
          // Otherwise, allow normal scrolling within Section 2
          return;
        }
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
  }, [currentSection, currentFeatureIndex, isTransitioning, features.length, showWaitlistPopup]);

  // Touch event handler for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (showWaitlistPopup) return;
      touchStartRef.current = e.touches[0].clientY;
      isScrollingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || showWaitlistPopup) return;
      
      const touchCurrent = e.touches[0].clientY;
      const delta = Math.abs(touchStartRef.current - touchCurrent);
      
      // If user has moved more than 10px, they're scrolling
      if (delta > 10) {
        isScrollingRef.current = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || isTransitioning || showWaitlistPopup) {
        touchStartRef.current = null;
        isScrollingRef.current = false;
        return;
      }

      const touchEnd = e.changedTouches[0].clientY;
      const delta = touchStartRef.current - touchEnd;

      // Handle Section 2 scrolling on mobile
      if (currentSection === 2) {
        const scrollable = section2ScrollableRef.current;
        if (scrollable) {
          const atBottom = isSection2AtBottom();
          const atTop = isSection2AtTop();
          
          const now = Date.now();
          const timeSinceLastScroll = now - lastScrollTimeRef.current;
          
          // Check if this is a deliberate swipe (fast movement)
          const swipeSpeed = Math.abs(delta) / (now - (touchStartRef.current || now));
          const isDeliberateSwipe = swipeSpeed > 0.5; // pixels per ms
          
          // Scrolling down and at bottom - allow transition
          if (delta > 80 && atBottom && (isDeliberateSwipe || timeSinceLastScroll > 200)) {
            if (scrollTimeout.current) {
              clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = setTimeout(() => {
              setCurrentSection(3);
              setCurrentFeatureIndex(0);
              showThirdSection();
            }, 50);
            touchStartRef.current = null;
            isScrollingRef.current = false;
            return;
          }
          
          // Scrolling up and at top - allow transition
          if (delta < -80 && atTop && (isDeliberateSwipe || timeSinceLastScroll > 200)) {
            if (scrollTimeout.current) {
              clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = setTimeout(() => {
              setCurrentSection(1);
              showFirstSection();
            }, 50);
            touchStartRef.current = null;
            isScrollingRef.current = false;
            return;
          }
          
          // Otherwise, allow normal scrolling within Section 2
          lastScrollTimeRef.current = now;
          touchStartRef.current = null;
          isScrollingRef.current = false;
          return;
        }
      }

      // Only trigger on significant swipe (more than 80px for better control)
      if (Math.abs(delta) < 80) {
        touchStartRef.current = null;
        isScrollingRef.current = false;
        return;
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (delta > 0) {
          // Swipe down (scroll down)
          if (currentSection === 1) {
            setCurrentSection(2);
            showSecondSection();
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
        } else {
          // Swipe up (scroll up)
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
        touchStartRef.current = null;
        isScrollingRef.current = false;
      }, 50);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
      container.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true });
      container.addEventListener('touchend', handleTouchEnd as EventListener, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart as EventListener);
        container.removeEventListener('touchmove', handleTouchMove as EventListener);
        container.removeEventListener('touchend', handleTouchEnd as EventListener);
      }
    };
  }, [currentSection, currentFeatureIndex, isTransitioning, features.length, showWaitlistPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axiosInstance.post("/api/guest-users/", { email });
      console.log(response);

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
          overflow: ${showWaitlistPopup ? 'hidden' : 'hidden'};
        }
        .overflow-y-auto {
          -webkit-overflow-scrolling: touch;
        }
        .fixed.inset-0.overflow-hidden {
          touch-action: pan-y;
        }
        .popup-overlay {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
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
      
      {/* Waitlist Popup */}
      {showWaitlistPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 popup-overlay"
          onClick={handleBackdropClick}
        >
          <div 
            ref={popupRef}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeWaitlistPopup}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/60 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-200 shadow-lg"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            
            {/* Popup Content */}
            <div className="backdrop-blur-xl w-full mx-auto p-4 sm:p-6 md:p-8 rounded-3xl bg-white/80 border border-white/60 shadow-2xl shadow-orange-500/10 ">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-black text-center">
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
                      className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#EA785B] transition-all duration-300 text-gray-900 placeholder-gray-400 text-base sm:text-lg shadow-md"
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm sm:text-base mb-2 text-center px-2">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#EA785B] to-[#FF9B7D] shadow-orange-500/40 hover:shadow-orange-500/50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Joining...
                      </span>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 sm:py-6 md:py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-4 sm:mb-6 md:mb-8 shadow-lg bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/40">
                    <img src={Heart} alt="" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    Welcome to the revolution!
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Check your inbox for exclusive early access details.
                  </p>
                  <button
                    onClick={closeWaitlistPopup}
                    className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Close
                  </button>
                </div>
              )}
              <div className="mt-4 sm:mt-6 md:mt-8 py-3 sm:py-4 md:py-6">
                <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-2">
                  Be among the first to experience AI-powered food creation.
                </p>
                <h3 className="text-center text-sm sm:text-base md:text-lg font-medium tracking-wide text-gray-800">
                  Get exclusive early access, special features, and lifetime benefits.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

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
        {/* Decorative icons - responsive */}
        <div className="absolute top-100 sm:top-20 left-4 sm:left-10 text-orange-400 opacity-30 animate-pulse-slow">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 text-orange-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 text-orange-400 opacity-30 animate-pulse-slow">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-orange-400 opacity-30 animate-bounce-slow">
          <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </div>

        {/* SECTION 1 & 2 Container */}
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center min-h-[100vh]">
            {/* SECTION 1 Text */}
            <div
              ref={section1Ref}
              className={`space-y-4 md:space-y-6 transition-opacity duration-800 order-1 lg:order-1 pt-20 lg:pt-0 text-center lg:text-left ${
                currentSection === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Say Goodbye to <br />
                <span className="text-[#EA785B]">"Aaj Kya Banaye?"</span>
              </h1>
              <p className="text-black text-base sm:text-lg max-w-md mx-auto lg:mx-0 from-light">
                A smart, personalized AI meal planner for busy households. Made
                for moms, families, and food lovers who want variety without the
                stress.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={openWaitlistPopup}
                  className="bg-[linear-gradient(90deg,#EA785B_0%,#FF8953_100%)] hover:opacity-90 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                >
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5" /> Join Waitlist
                </button>
              </div>
            </div>

            {/* Phone Container - responsive */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-last pb-8 lg:pb-0">
              <div
                ref={phoneRef}
                className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[320px] md:aspect-[13/16] md:mt-16 mx-auto"
              >
                <div className="relative w-full h-full">
                  <span>
                    <img
                      src={phoneimg}
                      alt="VeraEaty App"
                      className="inset-0 w-full h-full object-contain"
                    />

                    {/* Overlay Images - scaled for mobile */}
                    {showOverlay1 && (
                      <img
                        src={img1}
                        alt=""
                        className="overlay-1 w-32 sm:w-40 md:w-48 lg:w-60 h-auto z-100000 top-[-12px] sm:top-[-20px] md:top-[-28px] lg:top-[-32px] left-[-20px] sm:left-[-30px] md:left-[-40px] lg:left-[-45px] absolute bg-transparent"
                      />
                    )}
                    {showOverlay2 && (
                      <img
                        src={img3}
                        alt=""
                        className="overlay-2 w-24 sm:w-30 md:w-36 lg:w-42 h-auto object-contain z-10000 absolute top-50 sm:top-64 md:top-72 lg:top-60 right-[-24px] sm:right-[-35px] md:right-[-50px] lg:right-[-60px]"
                      />
                    )}
                    {showOverlay3 && (
                      <img
                        src={img2}
                        alt=""
                        className="overlay-3 w-24 sm:w-28 md:w-32 lg:w-40 h-auto object-contain absolute top-72 sm:top-80 md:top-90 lg:top-80 left-[-24px] sm:left-[-35px] md:left-[-50px] lg:left-[-60px]"
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

            {/* SECTION 2 Content */}
            <div
              ref={section2Ref}
              className={`absolute inset-0 transition-all duration-800 ${
                currentSection === 2
                  ? "opacity-100 z-20 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="w-full h-full lg:max-w-7xl lg:mx-auto lg:flex lg:items-center lg:px-8">
                {/* Mobile Layout - Fixed Scrolling with Proper Background */}
                <div className="w-full h-full lg:hidden flex flex-col bg-gradient-to-br from-rose-50 via-orange-50 to-white">
                  {/* Scrollable Container */}
                  <div 
                    ref={section2ScrollableRef}
                    className="w-full h-full overflow-y-auto overscroll-contain"
                    style={{
                      WebkitOverflowScrolling: 'touch',
                      touchAction: 'pan-y',
                      scrollBehavior: 'smooth'
                    }}
                  >
                    <div className="min-h-full flex flex-col pt-20 pb-40 px-4">
                      <div className="max-w-md mx-auto space-y-6 flex-shrink-0 flex-1">
                        {/* Phone Image Card */}
                        <div className="relative rounded-3xl pt-4">
                          <div className="relative w-48 h-80 mx-auto">
                            <img
                              src={phoneimg}
                              alt="VeraEaty App"
                              className="w-full h-full object-contain"
                            />
                            {/* Show current carousel image inside phone */}
                            <div className="absolute top-[2px] left-[13px] right-[13px] bottom-[2px] overflow-hidden rounded-[30px]">
                              <img
                                src={images[currentImageIndex]}
                                alt={`VeraEaty feature ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Card with Conditional Padding */}
                        <div className={`${isFirstSection2Visit ? 'pb-8' : 'pb-12'}`}>
                          <h2 className="text-2xl sm:text-3xl font-bold text-[#EA785B] text-center mb-3">
                            What is VeraEaty?
                          </h2>
                          <p className="text-black text-base font-[Poppins] font-light text-center mb-6">
                            VeraEaty is an AI-powered meal planning assistant that helps you:
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex gap-3 items-start bg-orange-50 rounded-2xl p-4 transition-all hover:shadow-md">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                <img src={bg1} alt="" className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-base mb-2 text-[#EA785B]">
                                  Meals Designed for You
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Get personalized meal plans that match your taste, goals, and daily routine.
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 items-start bg-green-50 rounded-2xl p-4 transition-all hover:shadow-md">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                <img src={bg2} alt="" className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-base mb-2 text-[#EA785B]">
                                  Groceries, Perfectly Planned
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Shop smarter with AI-generated lists that save time and prevent overspending.
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 items-start bg-orange-50 rounded-2xl p-4 transition-all hover:shadow-md">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                <img src={bg3} alt="" className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-base mb-2 text-[#EA785B]">
                                  Cook Effortlessly, Waste Nothing
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  Fully stress-free cooking with thoughtful planning that minimizes food waste.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Added extra space at bottom to ensure scrollability */}
                          <div className="h-8"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Side by Side (Original) */}
                <div className="hidden lg:flex w-full items-center px-4">
                  <div className="w-1/2"></div>
                  <div className="w-1/2 space-y-4 pl-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#EA785B]">
                      What is VeraEaty?
                    </h2>
                    <p className="text-black text-2xl font-[Poppins] font-light">
                      VeraEaty is an AI-powered meal planning assistant that helps you:
                    </p>
                    <div className="space-y-6">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                          <img src={bg1} alt="" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                            Meals Designed for You
                          </h3>
                          <p className="text-gray-700">
                            Get personalized meal plans that match your taste, goals, and daily routine.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                          <img src={bg2} alt="" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                            Groceries, Perfectly Planned
                          </h3>
                          <p className="text-gray-700">
                            Shop smarter with AI-generated lists that save time and prevent overspending.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                          <img src={bg3} alt="" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-[#EA785B]">
                            Cook Effortlessly, Waste Nothing
                          </h3>
                          <p className="text-gray-700">
                            Fully stress-free cooking with thoughtful planning that minimizes food waste.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 - responsive */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${currentSection === 3
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative h-full overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-500 ${currentFeature.side === "left" ? "scale-x-[1]" : "scale-x-[-1]"
                }`}
            >
              <img
                src={Ellipse}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-4 sm:mx-6 md:mx-10 relative z-10 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-15">
              <div
                ref={section3HeadingRef}
                className={`text-start transition-opacity duration-800 mb-4 sm:mb-6 ${showSection3Heading ? "opacity-100" : "opacity-0"
                  }`}
              >
                <h2 className="text-[#EA785B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">
                  Everything You Need for Smart Cooking
                </h2>
                <p className="text-[#4B5563] text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl font-inter">
                  Discover the power of AI-driven culinary creativity with features designed to transform your cooking experience.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
                <div className="flex items-center justify-center lg:w-1/2 space-y-6 lg:pl-8 xl:pl-20 relative z-10">
                  {currentFeature.side === "left" && (
                    <div
                      className={`transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <h1
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
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
                  <div className="relative w-[260px] h-[450px] sm:w-[300px] sm:h-[500px] md:w-[296px] md:h-[470px]">
                    <img
                      src={phonemocup}
                      alt="Phone Mockup"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    />
                    <img
                      src={camera}
                      alt="Camera"
                      className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 z-20 h-3 sm:h-4 pointer-events-none"
                    />
                    <div className="absolute top-[5px] sm:top-[6px] left-[19px] sm:left-[32px] right-[20px] sm:right-[32px] bottom-[4px] sm:bottom-[5px] overflow-hidden rounded-[35px] sm:rounded-[40px] z-0">
                      <div
                        className={`w-full h-full transition-opacity duration-1000 ${isFeatureVisible ? "opacity-100" : "opacity-0"
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
                <div className="flex items-center justify-center lg:w-1/2 space-y-6 lg:pl-8 xl:pl-20 relative z-10">
                  {currentFeature.side === "right" && (
                    <div
                      className={`transition-opacity duration-1000 ${isTextVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <h1
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 ${getTextAnimationClass(
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

        {/* SECTION 4 - responsive */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${currentSection === 4
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative h-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-40 h-56 sm:w-50 sm:h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float bg-[#EA785B]"></div>
              <div
                className="absolute top-40 sm:top-60 right-10 sm:right-20 w-48 h-56 sm:w-60 sm:h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 bg-[#FF9B7D]"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-0 w-full h-px opacity-1 bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"
                style={{ animation: "pulse-slow 4s ease-in-out infinite" }}
              ></div>
            </div>
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
              <div className="w-full">
                <div className="text-center">
                  <div className="backdrop-blur-2xl bg-white/60 max-w-5xl rounded-3xl py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-20 border border-white/60 relative overflow-hidden shadow-2xl shadow-orange-500/15 mx-auto">
                    <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                      <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-500/20">
                          <img
                            src={circuitBoard}
                            alt=""
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                          />
                        </div>
                        <div
                          className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-[#EA785B] to-transparent"
                          style={{
                            animation: "pulse-slow 3s ease-in-out infinite",
                          }}
                        ></div>
                      </div>
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-white/80 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                          <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-orange-500" />
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
                          className="absolute top-1/2 -left-4 sm:-left-6 md:-left-8 w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-[#FF9B7D] to-transparent"
                          style={{
                            animation: "pulse-slow 3s ease-in-out infinite",
                            animationDelay: "0.5s",
                          }}
                        ></div>
                        <div
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-300/30"
                          style={{ animationDelay: "1s" }}
                        >
                          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <img src={Zap} alt="" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <img src={Heart} alt="" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 font-inter px-2 sm:px-4 bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3] text-transparent text-center leading-tight">
                      Smarter Meals Are Loading…
                    </h1>

                    <div
                      className="left-0 w-full h-px opacity-1 bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent mb-3 sm:mb-4 md:mb-5"
                      style={{
                        animation: "pulse-slow 4s ease-in-out infinite",
                      }}
                    ></div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-center px-2">
                      From recipes to reality — AI is redefining how we cook, plan, and eat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 - responsive */}
        <div
          className={`absolute inset-0 transition-opacity duration-800 ${currentSection === 5
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
              <div className="w-full max-w-4xl">
                <div className="text-center">
                  <div className="backdrop-blur-xl max-w-3xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl bg-white/80 border border-white/60 shadow-2xl shadow-orange-500/10">
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="relative">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black text-center">
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
                            className="w-full max-w-md px-4 py-3 sm:px-6 sm:py-4 rounded-full mx-auto block bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#EA785B] transition-all duration-300 text-gray-900 placeholder-gray-400 text-base sm:text-lg shadow-md"
                          />
                        </div>
                        {error && (
                          <div className="text-red-500 text-sm sm:text-base mb-2 text-center">
                            {error}
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full max-w-md mx-auto block px-8 py-3 sm:px-12 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#EA785B] to-[#FF9B7D] shadow-orange-500/40 hover:shadow-orange-500/50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Joining...
                            </span>
                          ) : (
                            "Join Waitlist"
                          )}
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-6 sm:py-8 animate-fade-in">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6 sm:mb-8 shadow-lg bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/40">
                          <img src={Heart} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                          Welcome to the revolution!
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg">
                          Check your inbox for exclusive early access details.
                        </p>
                      </div>
                    )}
                    <div className="mt-6 sm:mt-8 py-4 sm:py-6">
                      <p className="text-center text-sm sm:text-base text-gray-600 mb-2">
                        Be among the first to experience AI-powered food creation.
                      </p>
                      <h3 className="text-center text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-800">
                        Get exclusive early access, special features, and lifetime benefits.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;