import React, { useState } from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from './PlaceDetails';
import useStyles from './liststyles.js';

const List = ({ places }) => {
  const classes = useStyles();
  const [type, setType] = useState('attractions');
  const [rating, setRating] = useState('');

  return (
    <div className={classes.container}>
      <Typography variant="h4">Your Things to Do</Typography>
        <>
          <FormControl className={classes.formControl}>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
          </Grid>
        </>
    </div>
  );
};

export default List;