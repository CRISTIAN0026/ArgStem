import React from "react";
import { Grid, Box, TextField, Typography, Button, Link } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

export default function Login(){
    return(
        <Grid style={{background:"#1D73C3", display:"flex", justifyContent:"flex-end"}}>

            <Box style={{
                /* Ellipse 2 */

position: "absolute",
width: "425px",
height: "425px",
left: "413px",
marginTop: "0px",
background: "rgba(113, 191, 228, 0.3)",
borderRadius:"500px"

            }}>

            </Box>

            <Box style={{
position: "absolute",
width: "250px",
height: "250px",
left: "233px",
marginTop: "219px",
background: "rgba(113, 191, 228, 0.3)",
borderRadius:"500px"
            }}>
<CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          image="https://i.ibb.co/TTThFw2/Logo.png"
          style={{ maxHeight:150, maxWidth:150, padding:"10px 0px 0px 50px" }}
        />
                <Typography style={{fontSize:48, color:"white"}}>
                    ARG STEM
                </Typography>
            </Box>

            <Grid style={{
        // display:"flex", 
        maxWidth:651,
        minHeight:618, 
        minWidth:651,
        maxHeight:768,
        borderRadius:30,
        background:"#FFFFFF", 
        position:"relative",
        // justifyContent:"space-be", 
        flexDirection:"column"}}>
             <Typography style={{color:"#EFCB69", fontSize:"64px", padding:"0px 0px 0px 150px"}}>BIENVENIDOS</Typography>
             <Box
      component="form"
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"100px 50px 50px 60px"
      }}
      noValidate
      autoComplete="off"
    >
       
        <Typography style={{fontSize:"18px"}}>Correo Electronico</Typography>
      <TextField id="outlined-basic" label="Ingrese el correo o numero de documento"  />
      <Typography style={{ fontSize:"18px", marginTop:"20px"}}>Contraseña</Typography>
      <TextField id="outlined-adornment-password" label="Ingrese la contraseña" />
      
    </Box>
    <Button style={{background:"#153794", marginLeft:"250px", fontSize:20}}>Iniciar Sesion</Button>
    <Link href="/register" style={{marginLeft:"212px",color:"#9B9B9B", fontSize:"18px"}}>¿No tienes una cuenta? Registrate!</Link>
        </Grid>
        </Grid>
    )
}