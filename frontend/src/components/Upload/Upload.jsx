import React, { useState } from 'react';

function FileUploadForm() {
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Subir archivo</button>
    </form>
  );
}

export default FileUploadForm;