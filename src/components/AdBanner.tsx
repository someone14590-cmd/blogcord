import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // Ignore ad push errors during local/dev rendering.
    }
  }, []);

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