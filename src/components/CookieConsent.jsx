import { useState, useEffect } from 'react';

const CookieConsent = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-[90%] max-w-md animate-in zoom-in-95 duration-500">
        {/* Main card */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Top gradient bar */}
          <div className="h-2 bg-gradient-to-r from-[#0373BA] via-[#CCE7FA] to-[#0373BA]" />
          
          <div className="p-8 text-center">
            {/* Giant cookie */}
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl">🍪</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#0373BA] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Yummy Cookies Alert!
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We use cookies to make your experience sweeter. 
              No crumbs left behind - just better browsing!
            </p>
            
            <button 
              onClick={handleAccept}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0373BA] to-[#025a94] text-white text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;