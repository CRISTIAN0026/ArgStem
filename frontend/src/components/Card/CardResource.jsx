import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, Typography } from "@mui/material";
import Swal from 'sweetalert2';
import IconScience from '../../img/Science.png';
import IconTech from '../../img/Tech.png';
import IconEngineering from '../../img/Engineering.png';
import IconMath from '../../img/Math.png';


const user = {
  session: true,
  password: "<PASSWORD>",
  type: "user",
}

export default function CardResource({ id, idSubjects, name, description, resource }) {

  const imagesSTEM = {
    1: IconScience,
    2: IconTech,
    3: IconEngineering,
    4: IconMath,
  }

  const NameSTEM = {
    1: 'Ciencia',
    2: 'Tecnología',
    3: 'Ingeniería',
    4: 'Matemáticas',
  }


  function showPdfInSwal() {

    if (user.type === "user" || user.type === "invite") {
      Swal.fire({
        title: 'PDF Viewer',
        html: `<iframe src="${resource}" width="100%" height="500"></iframe>`,
        width: '80%',
        height: '80%',
        showCloseButton: true,
      })
    }

    if (user.type === "admin") {
      Swal.fire({
        title: 'PDF Viewer',
        html: `<iframe src="${resource}" width="100%" height="500"></iframe>`,
        width: '80%',
        height: '80%',
        showCloseButton: true,
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: 'Rechazar',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "#153794",
        denyButtonColor: "#FF0000",
      }).then((result) => {
        if (result.isDenied) {
          Swal.fire('Rechazado', '', 'success');
        } else if (result.isConfirmed) {
          Swal.fire('Aprobado', '', 'success');
        }
      })
    }
  }

  return (
    <Card style={{
      marginTop: "50px",
      display: "flex",
      minWidth: 250,
      maxWidth: 251,
      minHeight: 250,
      borderRadius: 30,
      background: "#71BFE4",
      justifyContent: "space-between",
      flexDirection: "column",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }}>
      <CardMedia
        component="img"
        alt={`id: ${idSubjects}`}
        height="140"
        title="Image Title"
        image={imagesSTEM[idSubjects]}
        style={{ background: "#FFF", borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '20px 0px 0px 95px' }}
      />
      <p style={{ margin: 'auto', fontFamily: 'Roboto', fontWeight: 'Bold' }}>{NameSTEM[idSubjects]}</p>
      <Box fullWidth style={{ borderRadius: 30, maxHeight: 144, background: "white", display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" style={{ textAlign: "center", fontFamily: "Roboto", fontWeight: "bold", fontSize: 20, margin: 10, }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "center", fontSize: 12, margin: "1px 8px", fontFamily: "Roboto", whiteSpace: "normal", wordWrap: "break-word" }}>
          {description}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          <Button onClick={() => showPdfInSwal()} style={{ backgroundColor: "#71BFE4", color: "white", minWidth: 107, minHeight: 7, fontSize: 12, textTransform: "none" }}>Ver Mas</Button>
        </Box>
      </Box>
    </Card>
  )
} 