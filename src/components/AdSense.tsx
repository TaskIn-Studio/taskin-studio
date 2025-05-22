'use client';

import Script from 'next/script';

export function AdSense() {
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2234156203417980"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2234156203417980"
                data-ad-slot="your-ad-slot-id"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
            <Script id="adsense-init">
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
        </>
    );
} 