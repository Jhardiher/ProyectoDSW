'use client'
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
import '@/app/User/User.css'
import Link from 'next/link';

import { useState } from 'react';





export default function UsuarioSesion() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setIMC] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const imcValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setIMC(imcValue);
    }
  };

  return (

    <body>
      <NavBar />

      <main>

        <Box display='flex'>
          <div className="container1">
            <div className="sidebar">
              <Link href="/"><i className="home"></i> Inicio</Link>
              <Link href="#"><i className="fas fa-list"></i>progreso</Link>
              <Link href="#"><i className="fas fa-credit-card"></i>recomendaciones</Link>
              <Link href="#"><i className="fas fa-cogs"></i> Gestionar</Link>

            </div>
          </div>

          <div classNameName=' contenainer2'>   
             <div classNameName=' AreaImc' >
            <h2>calcula  tu IMC</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Altura (cm):
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Peso (kg):
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button type="submit">Calcular IMC</button>
            </form>
            {imc && (
              <div>
                <h3>Tu IMC es: {imc}</h3>
              </div>
            )}
          </div>
          </div>

        </Box>
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
              <Typography variant="h5" component="div">
                SANA ALIMENTACION 
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                TU SALUD NUESTRA RESPONSABILIDAD
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
              image="/rutinafit.svg"
              alt=""
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                RUTINAS FIT
              </Typography>
              <Typography variant="h5" component="div">
                ENTRENA CUERPO Y ALMA
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                TU SALUD NUESTRA RESPONSABILIDAD
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
      <PiePag />

    </body>
  );
}






