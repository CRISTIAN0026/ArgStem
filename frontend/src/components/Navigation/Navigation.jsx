import React from "react";
import { Grid, Link, Box, Typography, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Navigation.css"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navigation() {
  let token = localStorage.getItem('token');
  let id = localStorage.getItem('id');

  const [dataUser, setDataUser] = useState({});

  const typeRol = {
    1: "admin",
    2: "user",
  }

  useEffect(() => {
    const getKeys = async () => {
      try {
        const { data } = await axios(`http://localhost:4000/api/profiles/${token}/${id}`);
        const user = {
          session: true,
          type: `${typeRol[data.idRols]}`,
        }
        setDataUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getKeys();
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    token = localStorage.setItem('token', '');
    id = localStorage.setItem('id', '');
  }


  return (
    <Grid container
      className="content"
    >
      <Link href="/">
        <Box sx={{ padding: "10px 15px 0px 10px" }}>
          <img style={{ marginLeft: "20px", width: 60, height: 60 }} src="https://i.ibb.co/TTThFw2/Logo.png" alt="Not found" />
          <Typography style={{ color: "#FFFFFF", fontFamily: "Roboto", fontSize: "20px" }}>ARG STEM</Typography>
        </Box>
      </Link>
      {dataUser.session && dataUser.type === "user" && <Box sx={{ display: "flex", minWidth: 300, justifyContent: "flex-end", padding: "25px" }} >
        <FormControl style={{ minWidth: 250, minHeight: 5 }} >
          <InputLabel id="demo-simple-select-label" style={{ fontFamily: "Roboto" }}>Selecione tema a buscar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Selecione tema a buscar"
            style={{ background: "#FFFFFF", minHeight: 10, borderRadius: 10 }}
          >
            <MenuItem value={10}>Matemáticas</MenuItem>
            <MenuItem value={20}>Ciencia</MenuItem>
            <MenuItem value={30}>Ingeniería</MenuItem>
            <MenuItem value={30}>Tecnología</MenuItem>
          </Select>
        </FormControl>
      </Box>}
      {dataUser.session && dataUser.type === "admin" && <Box style={{ display: "flex" }}>
        <Button href="/" style={{ color: "white", fontSize: 18 }}>Inicio</Button>
        <Button style={{ color: "white", fontSize: 18 }}>Solicitudes</Button>
        <Button href="/upload" style={{ color: "white", fontSize: 18 }}>Publicar</Button>
        <Button href="/users" style={{ color: "white", fontSize: 18 }}>Usuarios</Button>
      </Box>}
      <Grid item style={{ display: "flex", minHeight: "100px" }}>
        {!token && <Box sx={{ display: "flex", minWidth: 300, justifyContent: "flex-end", padding: "25px 0px " }} >
          <FormControl style={{ minWidth: 250, minHeight: 5 }} >
            <InputLabel id="demo-simple-select-label" style={{ fontFamily: "Roboto" }}>Selecione tema a buscar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Selecione tema a buscar"
              style={{ background: "#FFFFFF", minHeight: 10, borderRadius: 10 }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>}

        {!token && <Grid item style={{
          display: "flex",
          justifyContent: "flex-end",
          minWidth: "300px",
        }}>
          <Link href="/login" style={{ color: "#FFFFFF", textAlign: "center", padding: "40px", fontFamily: "Roboto", textTransform: "none" }} >
            <span style={{ color: "#FFFFFF", cursor: "pointer" }}>Iniciar Sesión</span></Link>
          <Link href="/register" style={{ color: "#FFFFFF", textAlign: "center", padding: "40px", fontFamily: "Roboto", cursor: "pointer" }}>
            <span style={{ color: "#FFFFFF", cursor: "pointer" }}>Registrarse</span></Link>
        </Grid>}
        {
          dataUser.type === "user" && dataUser.session &&
          <Box style={{ padding: "20px 30px 0px 10px" }}>
            <Box>
              <AccountCircleOutlinedIcon style={{ fontSize: 48, color: "white", padding: "0px 0px 0px 20px" }} />
            </Box>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: "white" }}
            >Mi perfil
            </Button>
          </Box>
        }
        {
          dataUser.type === "admin" && dataUser.session &&
          <Box style={{ padding: "20px 30px 0px 10px" }}>
            <Box>
              <AccountCircleOutlinedIcon style={{ fontSize: 48, color: "white", padding: "0px 0px 0px 20px" }} />
            </Box>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: "white" }}
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
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Link style={{ textTransform: "none", color: "black", fontWeight: 700 }} href="/profile">Perfil</Link>
            {dataUser.type === "user" && <Link style={{ textTransform: "none", color: "black", fontWeight: 700 }} href="/document">Mis documentos</Link>}
            <Link
              style={{ textTransform: "none", color: "black", fontWeight: 700 }} href="/"
              onClick={handleLogOut}
            >Cerrar sesion</Link>
          </Box>
        </Menu>
      </Grid>
    </Grid>
  )
}