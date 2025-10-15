// import { useState } from "react";
// // import { Zap, Heart } from "lucide-react";
// import circuitBoard from "../assets/CircuitBoard.png"
// import ChefHat from "../assets/ChefHat.png"
// import SParkles from "../assets/Sparkles.png"
// import Zap from "../assets/Zap.png"
// import Heart from "../assets/Heart.png"

// function SmartMeal() {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     setSubmitted(true);
//     setIsSubmitting(false);
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen  relative overflow-hidden">
//       {/* Floating background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-50 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float bg-[#EA785B]"></div>
//         <div className="absolute top-60 right-20 w-60 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed bg-[#FF9B7D]"></div>
//         {/* <div className="absolute bottom-32 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow bg-[#EA785B]"></div> */}
//       </div>

//       {/* AI Circuit Lines */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Horizontal flowing lines */}
//         {/* <div className="absolute top-1/4 left-0 w-full h-px opacity-10 animate-pulse-slow bg-gradient-to-r from-transparent via-[#EA785B] to-transparent"></div> */}
//         <div className="absolute top-1/2 left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"></div>
//         {/* <div
//           className="absolute top-3/4 left-0 w-full h-px opacity-10 animate-pulse-slow bg-gradient-to-r from-transparent via-[#EA785B] to-transparent"
//           style={{ animationDelay: "1s" }}
//         ></div> */}

//         {/* Vertical circuit accents */}
//         {/* <div className="absolute left-1/4 top-0 w-px h-full opacity-8 animate-pulse-slower bg-gradient-to-b from-transparent via-[#EA785B] to-transparent"></div>
//         <div
//           className="absolute right-1/3 top-0 w-px h-full opacity-8 animate-pulse-slow bg-gradient-to-b from-transparent via-[#FF9B7D] to-transparent"
//           style={{ animationDelay: "0.5s" }}
//         ></div> */}
//       </div>

//       {/* Circuit nodes */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* <div
//           className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping bg-[#EA785B]"
//           style={{ animationDuration: "3s" }}
//         ></div> */}
//         {/* <div
//           className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full animate-ping bg-[#FF9B7D]"
//           style={{ animationDuration: "4s", animationDelay: "1s" }}
//         ></div> */}
//         {/* <div
//           className="absolute top-3/4 left-2/3 w-2 h-2 rounded-full animate-ping bg-[#EA785B]"
//           style={{ animationDuration: "3.5s", animationDelay: "2s" }}
//         ></div> */}
//       </div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-12">
//         <div className="w-full">
//           {/* Hero Section with Central Visual */}
//           <div className="text-center mb-16">
//             <div className="relative mb-12 flex justify-center">
//               <div className="backdrop-blur-2xl bg-white/60 max-w-7xl rounded-3xl p-6 border border-white/60 relative overflow-hidden shadow-2xl shadow-orange-500/15 mx-auto">
//                 <div className="absolute inset-0 opacity-30 ">
//                   <div
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-radial-gradient from-[#EA785B]/30 to-transparent animate-pulse"
//                     style={{ animationDuration: "4s" }}
//                   ></div>
//                 </div>

//                 <div className="relative flex items-center justify-center gap-8 mb-8">
//                   <div className="relative">
//                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-500/20">
//                       <img src={circuitBoard} alt="" />
//                     </div>
//                     <div
//                       className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-[#EA785B] to-transparent animate-pulse"
//                       style={{ animationDuration: "3s" }}
//                     ></div>
//                   </div>
//                   <div className="relative">
//                     <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-white/80 flex items-center justify-center shadow-2xl shadow-orange-500/40">
//                       <img src={ChefHat} alt="" />
//                       <div
//                         className="absolute inset-0 rounded-3xl animate-ping border-2 border-[#EA785B] opacity-10"
//                         style={{ animationDuration: "3s" }}
//                       ></div>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <div
//                       className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-l from-[#FF9B7D] to-transparent animate-pulse"
//                       style={{
//                         animationDuration: "3s",
//                         animationDelay: "0.5s",
//                       }}
//                     ></div>
//                     <div
//                       className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-300/30"
//                       style={{ animationDelay: "1s" }}
//                     >
//                       <img src={SParkles} alt="" />
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
//                   style={{ animationDelay: "0.5s" }}
//                 >
//                   {/* <Zap className="w-6 h-8 text-[#EA785B]" /> */}
//                   <img src={Zap} alt="" />
//                 </div>
//                 <div
//                   className="absolute bottom-8 right-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
//                   style={{ animationDelay: "1.5s" }}
//                 >
//                   {/* <Heart className="w-6 h-8 text-[#FF9B7D]" /> */}
//                   <img src={Heart} alt="" />
//                 </div>

//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-inter px-4  bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3]  text-transparent text-center">
//                   Smarter Meals Are Loading…
//                 </h1>
//                       <div className=" left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent mb-5"></div>

//                 <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10 mx-auto leading-relaxed text-center">
//                   From recipes to reality — AI is redefining how we cook, plan,
//                   and eat.
//                 </p>
//               </div>
//             </div>

//             <div className="backdrop-blur-xl mt-20   max-w-6xl mx-auto ">
//               {!submitted ? (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="relative">
//                     {/* <h1>Join the Veraeaty Revolution</h1> */}
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-black bg-clip-text text-center">
//                       Join the <span className="bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3]  text-transparent ">Veraeaty</span>{" "}
//                       Revolution
//                     </h1>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email"
//                       required
//                       className="w-3/6 px-6 py-4 rounded-4xl bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#EA785B] transition-all duration-300 text-gray-900 placeholder-gray-400 text-lg shadow-sm"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-3/6 px-12 py-4 rounded-4xl text-white font-semibold text-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#EA785B] to-[#FF9B7D] shadow-orange-500/40 hover:shadow-orange-500/50"
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                         Joining...
//                       </span>
//                     ) : (
//                       "Join Waitlist"
//                     )}
//                   </button>
//                 </form>
//               ) : (
//                 <div className="text-center py-8 animate-fade-in">
//                   <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-12 shadow-lg bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/40">
//                     {/* <Heart className="w-10 h-10 text-white" /> */}
//                     <img src={Heart} alt="" />
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-3">
//                     Welcome to the revolution!
//                   </h3>
//                   <p className="text-gray-600 text-lg">
//                     Check your inbox for exclusive early access details.
//                   </p>
//                 </div>
//               )}

//               {/* Trust indicators */}
//               <div className="mt-6 py-6 ">
//                 <p className="text-center text-base">
//                   Be among the first to experience AI-powered food creation.
//                 </p>
//                 <h3 className="text-center text-xl font-medium tracking-wide ">
//                   Get exclusive early access,special features, and lifetime
//                   benefits.
//                 </h3>
//               </div>
//                       <div className=" left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"></div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SmartMeal;

import { useState } from "react";
import axiosInstance from "../Helper/Axios";
import circuitBoard from "../assets/CircuitBoard.png"
import ChefHat from "../assets/ChefHat.png"
import SParkles from "../assets/Sparkles.png"
import Zap from "../assets/Zap.png"
import Heart from "../assets/Heart.png"

function SmartMeal() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Make POST request to the API without the problematic header
      await axiosInstance.post('/api/guest-users/', {
        email: email
      });

      // If successful, set submitted state
      setSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting email:', error);
      
      // If it's a CORS error, try alternative approach
      if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
        try {
          // Fallback: try without axios, using fetch with minimal headers
          const response = await fetch('https://veraeaty.ai/api/guest-users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({ email: email }),
          });

          if (response.ok) {
            setSubmitted(true);
          } else {
            setError("Failed to submit. Please try again.");
          }
        } catch (fetchError) {
          setError("Network error. Please check your connection and try again.");
        }
      } else {
        setError("Failed to submit. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
      if (!submitted) {
        setEmail("");
      }
    }
  };

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-50 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float bg-[#EA785B]"></div>
        <div className="absolute top-60 right-20 w-60 h-70 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed bg-[#FF9B7D]"></div>
        {/* <div className="absolute bottom-32 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow bg-[#EA785B]"></div> */}
      </div>

      {/* AI Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal flowing lines */}
        {/* <div className="absolute top-1/4 left-0 w-full h-px opacity-10 animate-pulse-slow bg-gradient-to-r from-transparent via-[#EA785B] to-transparent"></div> */}
        <div className="absolute top-1/2 left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"></div>
        {/* <div
          className="absolute top-3/4 left-0 w-full h-px opacity-10 animate-pulse-slow bg-gradient-to-r from-transparent via-[#EA785B] to-transparent"
          style={{ animationDelay: "1s" }}
        ></div> */}

        {/* Vertical circuit accents */}
        {/* <div className="absolute left-1/4 top-0 w-px h-full opacity-8 animate-pulse-slower bg-gradient-to-b from-transparent via-[#EA785B] to-transparent"></div>
        <div
          className="absolute right-1/3 top-0 w-px h-full opacity-8 animate-pulse-slow bg-gradient-to-b from-transparent via-[#FF9B7D] to-transparent"
          style={{ animationDelay: "0.5s" }}
        ></div> */}
      </div>

      {/* Circuit nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping bg-[#EA785B]"
          style={{ animationDuration: "3s" }}
        ></div> */}
        {/* <div
          className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full animate-ping bg-[#FF9B7D]"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div> */}
        {/* <div
          className="absolute top-3/4 left-2/3 w-2 h-2 rounded-full animate-ping bg-[#EA785B]"
          style={{ animationDuration: "3.5s", animationDelay: "2s" }}
        ></div> */}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-12">
        <div className="w-full">
          {/* Hero Section with Central Visual */}
          <div className="text-center mb-16">
            <div className="relative mb-12 flex justify-center">
              <div className="backdrop-blur-2xl bg-white/60 max-w-7xl rounded-3xl p-6 border border-white/60 relative overflow-hidden shadow-2xl shadow-orange-500/15 mx-auto">
                <div className="absolute inset-0 opacity-30 ">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-radial-gradient from-[#EA785B]/30 to-transparent animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                </div>

                <div className="relative flex items-center justify-center gap-8 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-500/20">
                      <img src={circuitBoard} alt="" />
                    </div>
                    <div
                      className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-[#EA785B] to-transparent animate-pulse"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>
                  <div className="relative">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-white/80 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                      <img src={ChefHat} alt="" />
                      <div
                        className="absolute inset-0 rounded-3xl animate-ping border-2 border-[#EA785B] opacity-10"
                        style={{ animationDuration: "3s" }}
                      ></div>
                    </div>
                  </div>

                  <div className="relative">
                    <div
                      className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-l from-[#FF9B7D] to-transparent animate-pulse"
                      style={{
                        animationDuration: "3s",
                        animationDelay: "0.5s",
                      }}
                    ></div>
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-white/80 border border-white/60 flex items-center justify-center shadow-lg animate-float shadow-orange-300/30"
                      style={{ animationDelay: "1s" }}
                    >
                      <img src={SParkles} alt="" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  {/* <Zap className="w-6 h-8 text-[#EA785B]" /> */}
                  <img src={Zap} alt="" />
                </div>
                <div
                  className="absolute bottom-8 right-8 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  {/* <Heart className="w-6 h-8 text-[#FF9B7D]" /> */}
                  <img src={Heart} alt="" />
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-inter px-4  bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3]  text-transparent text-center">
                  Smarter Meals Are Loading…
                </h1>
                      <div className=" left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent mb-5"></div>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10 mx-auto leading-relaxed text-center">
                  From recipes to reality — AI is redefining how we cook, plan,
                  and eat.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl mt-20   max-w-6xl mx-auto ">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    {/* <h1>Join the Veraeaty Revolution</h1> */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-black bg-clip-text text-center">
                      Join the <span className="bg-clip-text bg-gradient-to-br from-[#E16D4F] to-[#FF7F45E3]  text-transparent ">Veraeaty</span>{" "}
                      Revolution
                    </h1>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-3/6 px-6 py-4 rounded-4xl bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-[#EA785B] transition-all duration-300 text-gray-900 placeholder-gray-400 text-lg shadow-sm"
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm mb-2">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-3/6 px-12 py-4 rounded-4xl text-white font-semibold text-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-[#EA785B] to-[#FF9B7D] shadow-orange-500/40 hover:shadow-orange-500/50"
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
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-12 shadow-lg bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/40">
                    {/* <Heart className="w-10 h-10 text-white" /> */}
                    <img src={Heart} alt="" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Welcome to the revolution!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Check your inbox for exclusive early access details.
                  </p>
                </div>
              )}

              {/* Trust indicators */}
              <div className="mt-6 py-6 ">
                <p className="text-center text-base">
                  Be among the first to experience AI-powered food creation.
                </p>
                <h3 className="text-center text-xl font-medium tracking-wide ">
                  Get exclusive early access,special features, and lifetime
                  benefits.
                </h3>
              </div>
                      <div className=" left-0 w-full h-px opacity-1 animate-pulse-slower bg-gradient-to-r from-transparent via-[#FF9B7D] to-transparent"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartMeal;