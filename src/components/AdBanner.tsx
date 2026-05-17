import { useEffect } from 'react';

export default function AdBanner() {
  const isLocalhost =
    typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname);

  useEffect(() => {
    if (isLocalhost || typeof window === 'undefined') {
      return;
    }

    try {
      const ads = (window as any).adsbygoogle;
      if (Array.isArray(ads)) {
        ads.push({});
      }
    } catch {
      // Ignore ad push errors during local/dev rendering.
    }
  }, [isLocalhost]);

  if (isLocalhost) {
    return null;
  }

  return (
    <div className="my-16 flex justify-center px-4">
      {/* Blog */}
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 728, height: 90 }}
        data-ad-client="ca-pub-6472805618652143"
        data-ad-slot="6622549011"
      />
    </div>
  );
}