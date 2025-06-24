import { env } from '@/env/env';
import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  dataAdSlot: string;
  dataAdFormat: string;
  dataAdFullWidthResponsive: boolean;
}

export const GoogleAdSense = ({
  dataAdSlot,
  dataAdFormat,
  dataAdFullWidthResponsive,
}: GoogleAdSenseProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={env.GOOGLE_AD_CLIENT}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataAdFullWidthResponsive}
    ></ins>
  );
};
