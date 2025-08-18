import React, { useEffect, useState } from "react";
import { FaInstagram, FaGlobe, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";
import ProfileImg from "../../public/my_image.jpeg";

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        setMousePos({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const socialLinks = [
    { icon: FaGlobe, href: "https://portfolio-virid-three-aehlim8f0f.vercel.app/", label: "Portfolio", color: "emerald", bgGradient: "from-emerald-600 to-teal-600" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohammad-faisal-shekh", label: "LinkedIn", color: "blue", bgGradient: "from-blue-600 to-indigo-600" },
    { icon: FaGithub, href: "https://github.com/shekhfaisal2110", label: "GitHub", color: "slate", bgGradient: "from-slate-600 to-gray-600" },
    { icon: FaGlobe, href: "https://shekhfaisal2110.github.io/tasbeeh/", label: "Tasbeeh App", color: "emerald", bgGradient: "from-emerald-600 to-teal-600" },
    { icon: FaCode, href: "https://to-do-list-react-faisal.netlify.app", label: "Todo App", color: "amber", bgGradient: "from-amber-600 to-orange-600" },
    { icon: FaInstagram, href: "https://www.instagram.com/_shaikh__sahab_19_8", label: "Instagram", color: "pink", bgGradient: "from-pink-600 to-rose-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes gentleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeInLeft {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInRight {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gentleRotate { animation: gentleRotate 20s linear infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }

        .shimmer-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        .shimmer-overlay {
          position: relative;
          overflow: hidden;
        }

        .profile-glow {
          box-shadow: 0 0 50px rgba(59, 130, 246, 0.4);
        }

        /* Responsive Typography using clamp */
        .text-title {
          font-size: clamp(1.5rem, 4vw, 3.5rem); /* Mobile: ~1.5rem → Desktop: ~3.5rem */
          font-weight: 700;
          line-height: 1.1;
        }

        .text-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #e0e7ff;
        }

        .text-body {
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          line-height: 1.6;
          color: #d1d5db;
        }

        .text-sm {
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .glass-morphism {
            backdrop-filter: blur(10px);
          }
          .shimmer-overlay::before {
            display: none;
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ 
            animationDelay: '0s',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
        <div 
          className="absolute top-1/3 -left-32 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ 
            animationDelay: '1s',
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.03}px)`
          }}
        />
        <div 
          className="absolute -bottom-32 right-16 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-gentleRotate"
        />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="w-full max-w-4xl">
          
          {/* Hero Card */}
          <div 
            className={`glass-morphism rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover-glow ${isLoaded ? 'animate-scaleIn opacity-100' : 'opacity-0'}`}
            style={{
              transform: !isMobile ? `perspective(1000px) rotateX(${mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)` : 'none',
              animationDelay: '0.3s'
            }}
          >
            
            {/* Header Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg animate-gentleRotate" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
              <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative z-10">
                
                {/* Mobile Layout */}
                <div className="block md:hidden text-center">
                  <div 
                    className={`relative inline-block mb-6 ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
                    style={{ animationDelay: '0.6s' }}
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-white/30 to-white/10 rounded-full blur-lg animate-float" />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 profile-glow">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <img src={ProfileImg} alt="Shekh Mohammad Faisal" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full border-4 border-white animate-float" />
                  </div>
                  
                  <h1 
                    className={`text-title text-white mb-3 ${isLoaded ? 'animate-fadeInLeft' : 'opacity-0'}`}
                    style={{ animationDelay: '0.9s' }}
                  >
                    Shekh Mohammad Faisal
                  </h1>
                  
                  <div 
                    className={`inline-flex items-center glass-morphism rounded-full px-5 py-2 mb-4 hover:bg-white/20 transition-all duration-300 ${isLoaded ? 'animate-fadeInRight' : 'opacity-0'}`}
                    style={{ animationDelay: '1.2s' }}
                  >
                    <FaCode className="w-4 h-4 text-emerald-300 mr-2 animate-float" />
                    <span className="text-white font-medium text-sm">Frontend Developer</span>
                  </div>
                  
                  <p 
                    className={`text-body max-w-sm mx-auto ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                    style={{ animationDelay: '1.5s' }}
                  >
                    Creating beautiful, responsive digital experiences that users love
                  </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center space-x-10">
                  <div 
                    className={`relative ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
                    style={{ animationDelay: '0.6s' }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl animate-float" />
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/40 profile-glow hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <img src={ProfileImg} alt="Shekh Mohammad Faisal" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-400 rounded-full border-4 border-white animate-float" />
                  </div>
                  
                  <div className="flex-1">
                    <h1 
                      className={`text-title text-white mb-4 ${isLoaded ? 'animate-fadeInLeft' : 'opacity-0'}`}
                      style={{ animationDelay: '0.9s' }}
                    >
                      Shekh Mohammad Faisal
                    </h1>
                    
                    <div 
                      className={`inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-6 hover:bg-white/20 transition-all duration-300 shimmer-overlay ${isLoaded ? 'animate-fadeInRight' : 'opacity-0'}`}
                      style={{ animationDelay: '1.2s' }}
                    >
                      <FaCode className="w-5 h-5 text-emerald-300 mr-3 animate-float" />
                      <span className="text-white font-medium text-sm">Frontend Developer</span>
                    </div>
                    
                    <p 
                      className={`text-body max-w-2xl ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                      style={{ animationDelay: '1.5s' }}
                    >
                      Passionate about crafting exceptional web experiences with clean code and innovative design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-12 space-y-8">
              
              {/* Contact Section */}
              <div 
                className={`glass-morphism rounded-2xl p-6 hover-glow transition-all duration-300 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: '1.8s' }}
              >
                {/* Heading */}
                <h3 className="text-center mb-6 font-semibold">
                  <span className="gradient-text flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    <FaEnvelope className="mr-2 sm:mr-3 text-lg sm:text-xl animate-float" />
                    Let's Work Together
                  </span>
                </h3>

                {/* CTA Button */}
                <a
                  href="mailto:shekhfaisal.2110@gmail.com"
                  className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shimmer-overlay overflow-hidden"
                >
                  <FaEnvelope className="mr-2 sm:mr-3 text-base sm:text-lg group-hover:animate-bounce" />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                    Send me a message
                  </span>
                </a>
              </div>
              
              {/* Social Links */}
              <div 
                className={`glass-morphism rounded-2xl p-6 hover-glow transition-all duration-300 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: '2.1s' }}
              >
                <h2 className="text-2xl font-bold text-center mb-8">
                  <span className="gradient-text">Connect & Follow</span>
                </h2>
                
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group glass-morphism rounded-xl p-4 sm:p-5 md:p-6 hover:scale-105 hover-glow transition-all duration-300 text-center ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
                      style={{ animationDelay: `${2.3 + index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-gradient-to-r ${social.bgGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="text-white text-lg sm:text-xl" />
                      </div>
                      <span className="text-white font-medium text-xs sm:text-sm group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div 
            className={`text-center mt-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '2.8s' }}
          >
            <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300 flex items-center justify-center">
              <span>Crafted with</span>
              <FaHeart className="mx-2 text-red-400 animate-float" />
              <span>© 2025 Shekh Mohammad Faisal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;