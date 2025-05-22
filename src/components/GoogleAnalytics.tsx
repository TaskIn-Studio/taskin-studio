'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-5V4EX8V1B4';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent') === 'true';
    
    if (hasConsent) {
      // Initialize GA when consent is given
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    } else {
      // Disable GA when consent is not given
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default to denied until consent is given
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
