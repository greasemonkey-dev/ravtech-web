import { useState, useEffect } from 'react';

const CookieConsent = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleAccept();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  if (!isVisible) return null;

  return (
    <div role="region" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          We use cookies to improve your experience.{' '}
          <a href="/termsofuse" className="underline hover:text-gray-900">
            Terms of Use
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-6 py-2 bg-[#0373BA] text-white text-sm font-semibold rounded-lg hover:bg-[#025a94] transition-colors"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
