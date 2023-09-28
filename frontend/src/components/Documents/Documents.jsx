import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, Typography } from "@mui/material";
import Swal from 'sweetalert2';

function Document() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Enviar el archivo al backend para su procesamiento y carga a Google Drive
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Archivo subido exitosamente a Google Drive.');
        } else {
          console.error('Error al subir el archivo.');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    } else {
      console.error('Por favor, seleccione un archivo para cargar.');
    }
  };

  function showPdfInSwal() {
    const pdfUrl = 'http://www.colegioalteralteris.edu.co/documentos/varios/himnos/Himno_de_Colombia.pdf';
  
    
    Swal.fire({
      title: 'PDF Viewer',
      html: `<iframe src="${pdfUrl}" width="100%" height="500"></iframe>`,
      width: '80%',
      height: '80%',
      showCloseButton: true,
    })
  
  
  }

  return (
    <Box>
        <Typography>Mis documentos</Typography>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Subir archivo</button>
    </form>
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
        <Button onClick={()=> showPdfInSwal()} style={{backgroundColor:"#71BFE4", color:"white",minWidth:107, minHeight:7, fontSize:12, textTransform:"none"}}>Ver Mas</Button>
        </Box>
    </Box>
  </Card>
  </Box>
  );
}

export default Document;