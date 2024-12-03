import React, { useEffect } from 'react';

export const AdScript: React.FC = () => {
  useEffect(() => {
    // Initialize ad script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-2705229865080724";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Initialize ads when script loads
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('Ad error:', err);
      }
    };

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return null;
};