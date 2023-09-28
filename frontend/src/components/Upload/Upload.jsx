import React from 'react';
import {Button, Box, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2';

function FileUploadForm() {

  const handleClick = () =>{
    Swal.fire({
        title: '¿Quieres el subir este documento?',
        text: "El documento estar disponible para los usuarios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:"Cancelar",
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Documento guardado!',
            'El documento ha sido guardado',
            'success'
          )
        }
      })
    }

  return (
    <Box
    component="form"
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding:"80px 300px 50px 300px",
    }}
    noValidate
    autoComplete="off"
  >
    <Typography textAlign="center" fontSize={20} fontWeight={700} fontFamily="Roboto">Subir url del documento</Typography>
    <TextField id="outlined-basic" label="Link del documento" variant="outlined" />
    <Box sx={{ minWidth: 120, marginTop:"50px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccione el tema</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={"age"}
          label="Seleccione el tema"
          // onChange={handleChange}
        >
         <MenuItem value={10}>Matemáticas</MenuItem>
          <MenuItem value={20}>Ciencia</MenuItem>
          <MenuItem value={30}>Ingeniería</MenuItem>
          <MenuItem value={40}>Tecnología</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={handleClick} variant="contained" color="primary" style={{marginTop:"50px"}}>
      Subir
    </Button>
  </Box>
  );
}

export default FileUploadForm;