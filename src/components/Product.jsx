import { Rating, Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";


export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={3}>
    
     
          {data.map((item) => (
            <Grid item xs={3}>
            <Card sx={{marginTop:"30px" , height:"600px"}}>
        <CardContent>
              <img src={item.image} height="250px" width="250px" alt="" />
              <p>{item.title.slice(0,35)}</p>
             <span style={{fontSize:"30px",marginRight:"30px"}}>{`$${item.price}`}</span><span style={{fontSize:"20px"}}><del>{`$${item.price}`}</del></span><br/><br/>
              <Rating value={ item.rating.rate} />
              <p>{item.description.slice(0,60)}</p>
              <Button
                variant="contained"
                fullWidth
                sx={{ textAlign: "center" }}
              >
                ADD TO CART
              </Button>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ textAlign: "center",marginTop:"10px" }}
              >
                Buy
              </Button>
              </CardContent>
      </Card>
      </Grid>
          ))}
       
   
    </Grid>
  );
};
