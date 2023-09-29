import React, { useEffect, useState } from "react";
import CardResource from "../Card/CardResource";
import { Box, Typography, Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";

export default function Home() {

  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  const [dataUser, setDataUser] = useState({});

  const typeRol = {
    1: "admin",
    2: "user"
  }

  useEffect(() => {
    const getKeys = async () => {
      try {
        const { data } = await axios(`http://localhost:4000/api/profiles/${token}/${id}`);
        console.log(data);
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

  // const response = await fetch('https://rickandmortyapi.com/api/character/');
  // const data = await response.json();

  // useEffect(() =>{
  //     fetch("https://rickandmortyapi.com/api/character?page=2").then(data => console.log(data.json()));
  // },[]);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:4000/api/resources");
        setDatas(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{
      display: "flex",
    }}>
      <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "0px 50px 50px 50px" }}>
        {
          datas && datas.map(data => {
            return <CardResource key={data.id} name={data.title} idSubjects={data.idSubjects} description={data.description} resource={data.resource} />
          })
        }


      </Box>
      <Box style={{ display: "flex", flexDirection: "column", width: "800" }}>
        {dataUser.type === "user" && dataUser.session && <Typography style={{ fontSize: 20, margin: "40px 10px 10px 10px" }}>Cosas que te podrian interesar</Typography>}
        {dataUser.type === "user" && dataUser.session && <Box style={{ border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 344, minHeight: 238, maxHeight: 239, marginTop: 10, marginRight: 30, borderRadius: 10, padding: "10px 10px 10px 10px", overflowY: "auto" }}>
          <Link target="_blank" href="https://refactoring.guru/es">
            <Card style={{ marginTop: "5px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
              <CardMedia
                component="img"
                alt="Not found"
                height="140"
                title="Image Title"
                // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
                image="https://refactoring.guru/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34"
                style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
              />
              <Typography style={{ padding: "20px" }}>Patrones de diseño gratis</Typography>
            </Card>
          </Link>
          <Link target="_blank" href="https://www.aprendejavascript.dev/">
            <Card style={{ marginTop: "5px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
              <CardMedia
                component="img"
                alt="Not found"
                height="140"
                title="Image Title"
                // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
                image="data:image/png;base64,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"
                style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
              />
              <Typography style={{ padding: "20px" }}>Curso gratis de JavaScript</Typography>
            </Card>
          </Link>
          <Link target="_blank" href="https://www.netacad.com/courses/programming">
            <Card style={{ marginTop: "5px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
              <CardMedia
                component="img"
                alt="Not found"
                height="140"
                title="Image Title"
                // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
              />
              <Typography style={{ padding: "20px" }}>Curso gratis de Python</Typography>
            </Card>
          </Link>
          <Link target="_blank" href="https://www.netacad.com/courses/programming">
            <Card style={{ marginTop: "5px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
              <CardMedia
                component="img"
                alt="Not found"
                height="140"
                title="Image Title"
                // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
                image="https://www.usergioarboleda.edu.co/wp-content/uploads/2020/06/diez-consejos-para-mejorar-tu-concentracio%CC%81n-universidad-sergio-arboleda.jpg"
                style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
              />
              <Typography style={{ padding: "20px" }}>Mejorar la concentracion</Typography>
            </Card>
          </Link>
        </Box>}
        {dataUser.type === "user" && dataUser.session && <Box style={{ border: "1px solid black", minWidth: 344, minHeight: 239, maxHeight: 239, marginTop: 50, marginRight: 30, borderRadius: 10, padding: "10px 10px 10px 10px", overflowY: "auto" }}>
          <Card style={{ marginTop: "20px", justifyContent: "space-around", border: "1px solid black", minHeight: 104, borderRadius: 10 }}>

            <Typography style={{ padding: "5px" }}>youtube.com</Typography>
            <Typography style={{ padding: "5px" }}>Como memorizar y aprender mas rapido</Typography>
            <Link target="_blank" href="https://www.youtube.com/watch?v=MLzrI6WYw3I&pp=ygUjcXVlIGhhY2VyIHBhcmEgZXN0dWRpYXIgeSBtZW1vcml6YXI%3D" style={{ fontSize: "12px" }}>https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D</Link>
          </Card>
          <Card style={{ marginTop: "20px", justifyContent: "space-around", border: "1px solid black", minHeight: 104, borderRadius: 10 }}>

            <Typography style={{ padding: "5px" }}>youtube.com</Typography>
            <Typography style={{ padding: "5px" }}>Como mejorar la concentracion y estudies mas</Typography>
            <Link target="_blank" href="https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D" style={{ fontSize: "12px" }}>https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D</Link>
          </Card>
        </Box>}
      </Box>
    </Box>
  )
}