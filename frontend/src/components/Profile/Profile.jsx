import React from "react";
import { Box, TextField, Typography, Card, Button } from "@mui/material";

export default function Profile(){
    return(
        <Box style={{display:"flex", justifyContent:"center"}}>
            <Card style={{maxHeight:600, maxWidth:600, marginTop:"50px"}}>
                <Typography textAlign="center" fontSize="25px" fontFamily={700}>Mis datos</Typography>
        <Box style={{display:"flex", justifyContent:"space-around"}}>
            <Box style={{display:"flex", flexDirection:"column"}}>
        <Typography style={{fontSize:"16px"}}>Nombres</Typography>
      <TextField id="outlined-basic" maxRow={5} label="Digite los nombre"  />
      </Box>
      <Box style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
      <Typography style={{ fontSize:"16px"}}>Apellidos</Typography>
      <TextField id="outlined-basic" maxRow={5} value="Paez Valencia" />
      </Box>
      </Box>
      <Box style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
            <Box style={{display:"flex", flexDirection:"column"}}>
        <Typography style={{fontSize:"16px"}}>Telefono</Typography>
      <TextField id="outlined-basic" maxRow={5} label="Digite el numero de celular"  />
      </Box>
      <Box style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
      <Typography style={{ fontSize:"16px"}}>Numero de documento</Typography>
      <TextField id="outlined-basic" maxRow={5} label="Digite el numero de celular" />
      </Box>
      </Box>
      <Box style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
            <Box style={{display:"flex", flexDirection:"column"}}>
        <Typography style={{fontSize:"16px"}}>Contraseña</Typography>
      <TextField id="outlined-basic" maxRow={5} label="Digite la contraseña"  />
      </Box>
      <Box style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
      <Typography style={{ fontSize:"16px"}}>Confirmar contraseña</Typography>
      <TextField id="outlined-basic" maxRow={5} label="Confirme su contraseña" />
      </Box>
      </Box>
      <Box style={{display:"flex", justifyContent:"space-around", marginTop:"30px", marginBottom:"10px"}}>
      <Button variant="contained">Actualizar</Button>
      </Box>
      </Card>
      </Box>
    )
}