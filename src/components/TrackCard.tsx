import React, { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import type { Track } from '@/types';
import { formatDuration } from '@/utils/formatDuration';
import { sanitizeFileName } from '@/utils/sanitizeFileName';

export type TrackCardProps = {
  track: Track;
};
const defaultImage = '/default-artwork.png';
export const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const { id, title, artwork_url, user, duration, permalink_url } = track;

  const initialSrc = artwork_url ? artwork_url.replace('-large', '-t500x500') : defaultImage;
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  const handleImgError = () => {
    if (imgSrc !== defaultImage) {
      setImgSrc(defaultImage);
    }
  };

  return (
    <Card sx={{ maxWidth: 320, width: '100%' }}>
      <CardActionArea
        component={Link}
        href={permalink_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia>
          <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
            <NextImage
              src={imgSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              onError={handleImgError}
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {user.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDuration(duration)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {permalink_url && (
        <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            component="a"
            href={`/api/download?url=${encodeURIComponent(permalink_url)}`}
            download={`${sanitizeFileName(title)}.mp3`}
            size="medium"
            startIcon={<DownloadIcon />}
          >
            Download
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
