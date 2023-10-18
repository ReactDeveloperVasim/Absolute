import { Grid,Button } from "@mui/material";
import React, { useState } from "react";
import { NavData1 } from "./NavData1";
import { Link } from "react-router-dom";


export const Nav=()=>{
    const[data,setData]=useState(NavData1);
    return(
        <Grid container spacing={2}>
        {
            data.map((item)=>

            <Grid item xs={2}>
            <Link to={item.path}>
                <Button variant="contained" color="secondary" fullWidth>{item.label}</Button>
            </Link>
            </Grid>
            )
        }
          
        </Grid>
    );
}