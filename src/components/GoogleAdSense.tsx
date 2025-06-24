import React, { useEffect } from 'react';

export const GoogleAdSense: React.FC = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    // <ins
    //   className="adsbygoogle"
    //   style={{ display: 'block', width: '100%', minHeight: 90 }}
    //   data-ad-client={GOOGLE_AD_CLIENT}
    //   data-ad-slot={GOOGLE_AD_SLOT}
    //   data-ad-format="auto"
    //   data-full-width-responsive="true"
    // ></ins>
    null // Descomente a linha acima para ativar o anúncio
  );
};
