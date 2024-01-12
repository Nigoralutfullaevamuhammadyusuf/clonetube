import React from 'react'
import { Stack,Box} from '@mui/material';
import {VideoCard} from '../index'

const Videos = ({ videos }) => {
 console.log(videos)
 if (!videos || !Array.isArray(videos)) {
  return null; // or render a placeholder, empty state, or an error message
}

  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      alignItems={'center'}
      gap={2}> 
      {videos.map(item => (
        <Box key={item.id.videoId}> {item.id.videoId && <VideoCard video={item} />}
        </Box>))}
    
      </Stack>
  );
};

export default Videos;
