import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, Typography } from "@mui/material";
import Swal from 'sweetalert2';

function Document() {


  return (
    <Box>
        <Typography>Mis documentos</Typography>
    <Card style={{marginTop:"50px", 
    display:"flex", 
    minWidth:250, 
    maxWidth:251, 
    minHeight:250, 
    borderRadius:30,
    background:"#71BFE4", 
    justifyContent:"space-between", 
    flexDirection:"column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", }}>
    <CardMedia
      component="img"
      alt="Not found"
      height="140"
      title="Image Title"
    //   image={image}
      style={{ background:"#71BFE4", borderRadius: '50%', maxHeight:60, maxWidth:60, margin: '20px 0px 0px 95px'}}
    />
    <Box fullWidth style={{ borderRadius:30, maxHeight:144, background:"white",display:"flex", flexDirection:"column" }}>
        <Typography variant="h5" style={{textAlign:"center", fontFamily:"Roboto", fontWeight:"bold", fontSize:20, margin:10, }}>
            JavaScript
        </Typography>
        <Typography variant="subtitle1" style={{textAlign:"center", fontSize:12, margin:"1px 8px", fontFamily:"Roboto",whiteSpace: "normal", wordWrap: "break-word" }}>
        Este es un recurso que te puede servir para el temea de programacion y mas
        </Typography>
        <Box style={{display:"flex", justifyContent:"center", padding:"10px"}}>
        <Button style={{backgroundColor:"#71BFE4", color:"white",minWidth:107, minHeight:7, fontSize:12, textTransform:"none"}}>Ver Mas</Button>
        </Box>
    </Box>
  </Card>
  </Box>
  );
}

export default Document;