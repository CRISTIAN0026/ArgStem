import React from "react";
import { Grid, Link, Box, Typography, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Navigation.css"



const user = {
    session: true,
    password: "<PASSWORD>",
    type:"user"
}


export default function Navigation(){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
        <Grid container 
        className="content"
        >
            <Link href="/">
            <Box  sx={{padding:"10px 15px 0px 10px"}}>
                <img style={{marginLeft:"20px", width:60, height:60}}   src="https://i.ibb.co/TTThFw2/Logo.png" alt="Not found" />
                <Typography style={{color:"#FFFFFF", fontFamily:"Roboto", fontSize:"20px"}}>ARG STEM</Typography>
            </Box>
            </Link>
            { user.session && user.type === "user" && <Box sx={{ display:"flex", minWidth:300,  justifyContent:"flex-end", padding:"25px"}} >
      <FormControl style={{minWidth:250, minHeight:5}} >
        <InputLabel id="demo-simple-select-label" style={{fontFamily:"Roboto"}}>Selecione tema a buscar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Selecione tema a buscar"
        style={{background:"#FFFFFF", minHeight:10, borderRadius:10}}
        >
          <MenuItem value={10}>Matemáticas</MenuItem>
          <MenuItem value={20}>Ciencia</MenuItem>
          <MenuItem value={30}>Ingeniería</MenuItem>
          <MenuItem value={30}>Tecnología</MenuItem>
        </Select>
      </FormControl>
    </Box>}
            { user.session && user.type === "admin" &&<Box style={{display:"flex"}}>
        <Button style={{color:"white", fontSize:18}}>Inicio</Button>
        <Button style={{color:"white", fontSize:18}}>Solicitudes</Button>
        <Button style={{color:"white", fontSize:18}}>Bublicar</Button>
        <Button style={{color:"white", fontSize:18}}>Usuarios</Button>
    </Box>}
            <Grid item style={{display:"flex", minHeight:"100px"}}>
            { !user.session && user.type === "invite" && <Box sx={{ display:"flex", minWidth:300,  justifyContent:"flex-end", padding:"25px 0px "}} >
      <FormControl style={{minWidth:250, minHeight:5}} >
        <InputLabel id="demo-simple-select-label" style={{fontFamily:"Roboto"}}>Selecione tema a buscar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Selecione tema a buscar"
        style={{background:"#FFFFFF", minHeight:10, borderRadius:10}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>}
    
{ !user.session && user.type === "invite" && <Grid item style={{
    display:"flex",
            justifyContent: "flex-end",
            minWidth:"300px",
        }}>
            <Link href="/login"  style={{color: "#FFFFFF",textAlign:"center", padding:"40px", fontFamily:"Roboto", textTransform:"none" }} >
            <span style={{ color: "#FFFFFF", cursor: "pointer" }}>Iniciar Sesión</span></Link>
            <Link href="/register" style={{color: "#FFFFFF",textAlign:"center", padding:"40px", fontFamily:"Roboto", cursor:"pointer" }}>
            <span style={{ color: "#FFFFFF", cursor: "pointer" }}>Registrarse</span></Link>
            </Grid>}
            {
                user.session && user.type === "admin" &&
                <Box style={{ padding:"20px 30px 0px 10px" }}>
                <AccountCircleOutlinedIcon style={{ fontSize: 48, color:"white", padding:"0px 10px 0px"}}/>
                <Typography style={{color:"white", fontSize:18}}>Mi perfil</Typography>
                </Box>
            }
             {
                user.session && user.type === "user" &&
                <Box style={{ padding:"20px 30px 0px 10px" }}>
                  <Box>
                <AccountCircleOutlinedIcon style={{ fontSize: 48, color:"white", padding:"0px 0px 0px 20px"}}/>
                </Box>
                <Button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{color:"white"}}
                >Mi perfil 
                </Button>
                </Box>
            }
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box  style={{display:"flex", flexDirection:"column"}}>
        <Link style={{textTransform:"none", color:"black", fontWeight:700}} href="/profile">Perfil</Link>
        <Link style={{textTransform:"none", color:"black", fontWeight:700}} href="/document">Mi documentos</Link>
        <Link style={{textTransform:"none", color:"black", fontWeight:700}}>Cerrar sesion</Link>
        </Box>
      </Menu>
            </Grid>
        </Grid>
    )
}
