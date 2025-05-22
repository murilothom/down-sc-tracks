import { useState, useCallback } from 'react';
import type { Track } from '@/types';
import { searchTracksByUrl } from '@/services/search';

export const useSearchTracks = () => {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeSearch = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    setTrack(null);
    try {
      const results = await searchTracksByUrl(url);
      if (results.length === 0) {
        setError('URL inválida ou faixa não encontrada');
      } else {
        setTrack(results[0]);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao buscar faixa');
    } finally {
      setLoading(false);
    }
  }, []);

  return { track, loading, error, search: executeSearch };
};
