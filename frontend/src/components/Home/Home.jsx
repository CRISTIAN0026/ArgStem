import React, {useEffect, useState} from "react";
import CardResource from "../Card/CardResource";
import { Box, Typography, Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const user = {
    session: true,
    password: "<PASSWORD>",
    type:"user",
}

export default function Home(){

    // const response = await fetch('https://rickandmortyapi.com/api/character/');
    // const data = await response.json();

    // useEffect(() =>{
    //     fetch("https://rickandmortyapi.com/api/character?page=2").then(data => console.log(data.json()));
    // },[]);

    const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

    return(
        <Box sx={{
            display:"flex",
        }}>
        <Box style={{display:"flex",  flexWrap:"wrap", justifyContent:"space-between", padding:"0px 50px 50px 50px"}}>
        {
            data && data.map((item, index) =>{
                return <CardResource key={index} name={item.name} image={item.image}/>
            })
        }
        

        </Box>
        <Box style={{display:"flex", flexDirection:"column",width:"800"}}>
        {user.type === "user" && user.session  &&<Typography style={{fontSize:20, margin:"40px 10px 10px 10px"}}>Cosas que te podrian interesar</Typography>}
        {user.type === "user" && user.session  &&<Box style={{border:"1px solid black",display:"flex", flexDirection:"column", justifyContent:"space-between", minWidth:344, minHeight:238, maxHeight:239, marginTop:10, marginRight:30, borderRadius:10, padding:"10px 10px 10px 10px",overflowY: "auto"}}>
          <Link target="_blank" href="https://refactoring.guru/es">
            <Card style={{marginTop:"5px",display:"flex",justifyContent:"space-around", border:"1px solid black", minHeight:71, borderRadius:30}}>
            <CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
          image="https://refactoring.guru/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34"
          style={{ borderRadius: '50%', maxHeight:60, maxWidth:60, margin: '10px 0px 0px 0px'}}
        />
        <Typography style={{padding:"20px"}}>Patrones de diseño</Typography>
            </Card>
            </Link>
            <Link target="_blank" href="https://www.netacad.com/courses/programming/pcap-programming-essentials-python">
            <Card style={{marginTop:"5px",display:"flex",justifyContent:"space-around", border:"1px solid black", minHeight:71, borderRadius:30}}>
            <CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          // https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          style={{ borderRadius: '50%', maxHeight:60, maxWidth:60, margin: '10px 0px 0px 0px'}}
        />
        <Typography style={{padding:"20px"}}>Aprende Python</Typography>
            </Card>
            </Link>
            <Link target="_blank" href="https://www.aprendejavascript.dev/">
            <Card style={{marginTop:"5px",display:"flex",justifyContent:"space-around", border:"1px solid black", minHeight:71, borderRadius:30}}>
            <CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          image="data:image/png;base64,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"
          style={{ borderRadius: '50%', maxHeight:60, maxWidth:60, margin: '10px 0px 10px 0px'}}
        />
        <Typography style={{padding:"20px"}}>Curso de JavaScript</Typography>
            </Card>
            </Link>
            <Link target="_blank" href="https://www.usergioarboleda.edu.co/noticias/diez-consejos-para-mejorar-tu-concentracion/">
            <Card style={{marginTop:"5px",display:"flex",justifyContent:"space-around", border:"1px solid black", minHeight:71, borderRadius:30}}>
            <CardMedia
          component="img"
          alt="Not found"
          height="140"
          title="Image Title"
          image="https://www.usergioarboleda.edu.co/wp-content/uploads/2020/06/diez-consejos-para-mejorar-tu-concentracio%CC%81n-universidad-sergio-arboleda.jpg"
          style={{ borderRadius: '50%', maxHeight:60, maxWidth:60, margin: '10px 0px 10px 0px'}}
        />
        <Typography style={{padding:"20px"}}>Como mejorar la concentracion</Typography>
            </Card>
            </Link>
        </Box>}
        {user.type === "user" && user.session  &&<Box style={{border:"1px solid black",minWidth:344,minHeight:239, maxHeight:239, marginTop:50, marginRight:30, borderRadius:10, padding:"10px 10px 10px 10px",overflowY: "auto"}}>
        <Card style={{marginTop:"20px", justifyContent:"space-around", border:"1px solid black", minHeight:104, borderRadius:10, maxWidth:380}}>
           
        <Typography style={{padding:"5px"}}>youtube.com</Typography>
        <Typography style={{padding:"5px"}}>Analisis y desarrollo de software</Typography>
        <Link target="_blank" href="https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl" style={{fontSize:"12px"}}>https://www.youtube.com/watch?v=s5ABwHaN7as&pp=ygUhYW5hbGlzaXMgeSBkZXNhcnJvbGxvIGRlIHNvZnR3YXJl</Link>
            </Card>
            <Card style={{marginTop:"20px", justifyContent:"space-around", border:"1px solid black", minHeight:104, borderRadius:10}}>
            
        <Typography style={{padding:"5px"}}>youtube.com</Typography>
        <Typography style={{padding:"5px"}}>Como mejorar la concentracion y estudies mas</Typography>
        <Link target="_blank" href="https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D" style={{fontSize:"12px"}}>https://www.youtube.com/watch?v=PldYiX6hOL0&pp=ygUXY29tbyBtZWpvcmFyIGxhIG1lbW9yaWE%3D</Link>
            </Card>
        </Box>}
        </Box>
        </Box>
    )
}