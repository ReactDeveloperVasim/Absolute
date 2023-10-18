import React, { useState } from "react";
import { Grid,  Button } from "@mui/material";

export const Counter = () => {
  const [data, setData] = useState(0);

  return (
    <Grid container spacing={2} sx={{ margin: 2 }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
         onClick={() => data < 40 && setData(data + 5)}
         disabled={data >= 40} 
          variant="contained"
          fullWidth
        >
          Increase
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <h1 style={{marginLeft:"200px"}}>Count : {data}</h1>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => data > 0 && setData(data - 5)}
          variant="contained"
          fullWidth
          sx={{marginTop:"50px"}}
          disabled={data <= 0} 
        >
          Decrease
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};