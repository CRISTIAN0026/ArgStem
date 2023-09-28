import React from "react";
import { Box, TextField, Typography, Card, Button } from "@mui/material";
import Swal from 'sweetalert2';

export default function Profile(){

    const handleClick = () =>{
        Swal.fire({
            title: '¿Quieres actualizar tu perfil?',
            text: "El perfil se actualizara",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:"Cancelar",
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Perfil actualizado!',
                'Muy bien',
                'success'
              )
            }
          })
        }

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
      <Button onClick={handleClick} variant="contained">Actualizar</Button>
      </Box>
      </Card>
      </Box>
    )
}