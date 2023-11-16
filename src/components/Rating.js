import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

export default function TextRating({count}) {
//   const value = count;
  const label = count <= 1 ? "Useless" : count <= 2 ? "Poor" : count <=3 ? "Ok" : count <=4 ? "Good" : "Excellent" 
  let color = label == "Excellent" ? "green" : label == "Ok" ? "orange" : label == "Good" ? "green" : "red" 
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={count}
        readOnly
        precision={0.05}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 , color: {color}}}>{label}</Box>
    </Box>
  );
}