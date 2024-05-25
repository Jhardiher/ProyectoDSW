
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import NavBar from "@/components/NavBar";
import PiePag from "@/components/PiePag";




export default function UsuarioSesion() {


  return (
      
    <body>
    <NavBar/>
   
      <main>
        <Box>
      <Container className="targetasPrincipal" maxWidth="">
        <div className="AreaTargetas">
          <Card sx={{ margin: 2, minWidth: 275, maxWidth: 150 }}>
            <CardMedia
              component="img"
              height="140"
              image="/comida1.svg"
              alt=""
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                RECETAS FIT
              </Typography>
           
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                {'"TU SALUD NUESTRA RESPONSABILIDAD"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/RFood" size="small"> SABER MAS</Button>
            </CardActions>
          </Card>

          <Card sx={{ margin: 2, minWidth: 275, maxWidth: 150 }}>
            <CardMedia
              component="img"
              height="140"
              image="/rutinafit.svg "
              alt=""
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                RUTINAS FIT
              </Typography>
           
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                {'"TU SALUD NUESTRA RESPONSABILIDAD"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">SABER MAS</Button>
            </CardActions>
          </Card>
        </div>
      </Container>
    </Box>

        <section>
          Aquí iría el contenido de la tercera sección
        </section>
      </main>
     <PiePag/>

    </body>
  );
}






