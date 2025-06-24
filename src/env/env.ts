export const env: {
  GOOGLE_AD_CLIENT: string;
  ADSENSE_SLOT_1: string;
  ADSENSE_SLOT_2: string;
} = {
  GOOGLE_AD_CLIENT: process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT || '',
  ADSENSE_SLOT_1: process.env.NEXT_PUBLIC_ADSENSE_SLOT_1 || '',
  ADSENSE_SLOT_2: process.env.NEXT_PUBLIC_ADSENSE_SLOT_2 || '',
};
