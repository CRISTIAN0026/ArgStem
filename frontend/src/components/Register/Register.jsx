import { useState } from "react";
import { Grid, Box, TextField, Typography, Button, Link } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import Swal from "sweetalert2";

export default function Login() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idRols] = useState(2);
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = `http://localhost:3000`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, lastName, dni, email, password, confirmPassword].includes('')) {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Todos los campos son requeridos',
        showConfirmButton: false,
        timer: 1300,
        width: '25rem',
        height: '25rem',
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        showConfirmButton: false,
        timer: 1300,
        width: '25rem',
        height: '25rem',
      });
      return;
    };

    if (!email.includes('@') || !email.includes('.com')) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Digita una direccion de correo electronico valido',
        showConfirmButton: false,
        timer: 1300,
        width: '25rem',
        height: '25rem',
      });
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:4000/api/profiles', { name, lastName, dni, email, password, phone, idRols });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.msg,
        showConfirmButton: false,
        timer: 1500,
        width: '25rem',
        height: '25rem',
      });
      setTimeout(() => {
        window.location.href = `http://localhost:3000/login`;
      }, 1800);
      setName('');
      setLastName('');
      setDni('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  return (
    <Grid style={{ background: "#1D73C3", display: "flex", justifyContent: "flex-end" }}>

      <Box style={{
        position: "absolute",
        width: "425px",
        height: "425px",
        left: "413px",
        marginTop: "0px",
        background: "rgba(113, 191, 228, 0.3)",
        borderRadius: "500px"

      }}>

      </Box>

      <Box style={{
        position: "absolute",
        width: "250px",
        height: "250px",
        left: "233px",
        marginTop: "219px",
        background: "rgba(113, 191, 228, 0.3)",
        borderRadius: "500px"
      }}>
        <CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          image="https://i.ibb.co/TTThFw2/Logo.png"
          style={{ maxHeight: 150, maxWidth: 150, padding: "10px 0px 0px 50px" }}
        />
        <Typography style={{ fontSize: 48, color: "white" }}>
          ARG STEM
        </Typography>
      </Box>

      <Grid style={{
        maxWidth: 651,
        minHeight: 618,
        minWidth: 651,
        maxHeight: 768,
        borderRadius: 30,
        background: "#FFFFFF",
        position: "relative",
        flexDirection: "column"
      }}>
        <Typography style={{ color: "#1D73C3", fontSize: "64px", padding: "0px 0px 0px 150px" }}>REGISTRARSE</Typography>
        <form
          onSubmit={handleSubmit}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "100px 50px 50px 60px"
            }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Nombres</Typography>
                  <TextField id="outlined-basic" maxRow={5} label="Digite los nombres" value={name} onChange={e => setName(e.target.value)} />
                  <input type="hidden" name="idRols" value={idRols} />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Apellidos</Typography>
                  <TextField id="outlined-basic" maxRow={5} label="Digite los apellidos" value={lastName} onChange={e => setLastName(e.target.value)} />
                </Box>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Telefono</Typography>
                  <TextField id="outlined-basic" maxRow={5} type="number" label="Digite el numero de celular" value={phone} onChange={e => setPhone(e.target.value)} />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Numero de documento</Typography>
                  <TextField id="outlined-basic" maxRow={5} type="number" label="Digite el numero de documento" value={dni} onChange={e => setDni(e.target.value)} />
                </Box>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Contraseña</Typography>
                  <TextField id="outlined-basic" maxRow={5} type="password" label="Digite la contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Confirmar contraseña</Typography>
                  <TextField id="outlined-basic" maxRow={5} type="password" label="Confirme su contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </Box>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography style={{ fontSize: "18px" }}>Correo electronico</Typography>
                  <TextField id="outlined-basic" maxRow={5} type="email" label="Digite el correo electronico" value={email} onChange={e => setEmail(e.target.value)} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Button style={{ background: "#153794", marginLeft: "250px", fontSize: 20, textTransform: "none", color: "white" }} type="submit">Enviar</Button>
        </form>
        <Box>
          <Link href="/login" style={{ marginLeft: "180px", color: "#9B9B9B", fontSize: "18px" }}>¿Ya tienes una cuenta? Inicia sesion!</Link>
        </Box>
      </Grid>
    </Grid >
  )
}