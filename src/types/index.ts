// src/types/index.ts
export interface Track {
  id: number;
  title: string;
  description: string | null;
  duration: number;
  stream_url: string;
  artwork_url: string | null;
  download_url?: string | null;
  downloadable?: boolean;
  permalink_url: string;
  user: {
    id: number;
    username: string;
    avatar_url: string | null;
  };
  [key: string]: any;
}
