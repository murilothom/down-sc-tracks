import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

export const SkeletonTrackCard: React.FC = () => (
  <Card sx={{ maxWidth: 345 }}>
    <Skeleton variant="rectangular" width={345} height={200} />
    <CardContent>
      <Skeleton width="80%" height={30} />
      <Skeleton width="60%" />
      <Skeleton width="40%" />
    </CardContent>
  </Card>
);
