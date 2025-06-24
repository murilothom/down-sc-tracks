'use client';

import React from 'react';
import { Container, CircularProgress, Alert, Box } from '@mui/material';
import { SearchBar } from '@/components/SearchBar';
import { useSearchTracks } from '@/hooks/useSearchTracks';
import { TrackCard } from '@/components/TrackCard';
import { GoogleAdSense } from '@/components/GoogleAdSense';

export default function SearchPage() {
  const { track, loading, error, search } = useSearchTracks();

  const handleSearch = (query: string) => {
    search(query);
  };

  return (
    <Container sx={{ py: 4 }}>
      <SearchBar onSearch={handleSearch} />
      {/* Anúncio logo após a barra de busca */}
      <Box mt={2} mb={2}>
        <GoogleAdSense />
      </Box>
      <Box mt={4}>
        {loading && (
          <Box display="flex" justifyContent="center" my={2}>
            <CircularProgress />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {track && !loading && !error && <TrackCard track={track} />}
        </Box>
      </Box>
    </Container>
  );
}
