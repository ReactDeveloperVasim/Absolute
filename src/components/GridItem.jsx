import { Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import { Xs } from "./Xs";

export const GridItem = () => {
  const [data, setData] = useState(Xs);
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item  xs={item.xs}>
          <Card sx={{ bgcolor: item.clr }}>
            <CardContent></CardContent>
          </Card>{" "}
        </Grid>
      ))}
    </Grid>
  );
};
