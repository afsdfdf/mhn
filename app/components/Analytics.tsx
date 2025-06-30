'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // This function would send analytics data to your analytics provider
    const sendPageView = (url: string) => {
      // Replace with your actual analytics code
      // Example for Google Analytics:
      // window.gtag('config', 'GA-MEASUREMENT-ID', {
      //   page_path: url,
      // });
      
      console.log(`Page view: ${url}`);
    };
    
    // When the route changes, send a page view
    const url = pathname + searchParams.toString();
    sendPageView(url);
  }, [pathname, searchParams]);
  
  return null; // This component doesn't render anything
} 