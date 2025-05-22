import axios from 'axios';
import type { Track } from '@/types';

export async function searchTracksByUrl(url: string): Promise<Track[]> {
  const { data } = await axios.get<Track[]>('/api/search', {
    params: { q: url },
  });
  return data;
}
