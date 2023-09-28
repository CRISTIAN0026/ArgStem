import React, { useEffect, useState } from "react";
import CardResource from "../Card/CardResource";
import { Box, Typography, Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";

const user = {
  session: true,
  password: "<PASSWORD>",
  type: "user",
}

export default function Home() {

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
        {user.type === "user" && user.session && <Typography style={{ fontSize: 20, margin: "40px 10px 10px 10px" }}>Cosas que te podrian interesar</Typography>}
        {user.type === "user" && user.session && <Box style={{ border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 344, minHeight: 238, maxHeight: 239, marginTop: 10, marginRight: 30, borderRadius: 10, padding: "10px 10px 10px 10px", overflowY: "auto" }}>
          <Card style={{ marginTop: "5px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
            <CardMedia
              component="img"
              alt="Not found"
              height="140"
              title="Image Title"
              image="https://i.ibb.co/6Z9K5dJ/Logo-color-removebg-preview.png"
              style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
            />
            <Typography style={{ padding: "20px" }}>JavaScript</Typography>
          </Card>
          <Card style={{ marginTop: "20px", display: "flex", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
            <CardMedia
              component="img"
              alt="Not found"
              height="140"
              title="Image Title"
              image="https://i.ibb.co/6Z9K5dJ/Logo-color-removebg-preview.png"
              style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
            />
            <Typography style={{ padding: "20px" }}>JavaScript</Typography>
          </Card>
          <Card style={{ display: "flex", marginTop: "20px", justifyContent: "space-around", border: "1px solid black", minHeight: 71, borderRadius: 30 }}>
            <CardMedia
              component="img"
              alt="Not found"
              height="140"
              title="Image Title"
              image="https://i.ibb.co/6Z9K5dJ/Logo-color-removebg-preview.png"
              style={{ borderRadius: '50%', maxHeight: 60, maxWidth: 60, margin: '10px 0px 0px 0px' }}
            />
            <Typography style={{ padding: "20px" }}>JavaScript</Typography>
          </Card>
        </Box>}
        {user.type === "user" && user.session && <Box style={{ border: "1px solid black", minWidth: 344, minHeight: 239, maxHeight: 239, marginTop: 50, marginRight: 30, borderRadius: 10, padding: "10px 10px 10px 10px", overflowY: "auto" }}>
          <Card style={{ marginTop: "20px", justifyContent: "space-around", border: "1px solid black", minHeight: 104, borderRadius: 10 }}>

            <Typography style={{ padding: "5px" }}>youtube.com</Typography>
            <Typography style={{ padding: "5px" }}>Como mejorar la concentracion y estudies mas</Typography>
            <Link style={{ fontSize: "12px" }}>https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D</Link>
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