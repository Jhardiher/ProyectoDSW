

import styles from "./page.module.css";
import Link from "next/link";
import { Slider, dividerClasses } from "@mui/material";
import carrusel from "../components/Carrusel/carrusel-Vista";
import { BedOutlined, } from "@mui/icons-material";



  const Home = () => {
   


    return (

      <body>
     
        <main>
          <section>
            <div class=" contenedor1"> 
            <div class="seccion1 ">
              <p>seccion 1: Lorem Ipsum es simplemente el texto de relleno de las 
                imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
                 y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              </div>            
            
            </div>
           
          </section>

          <section>
            Aquí iría el contenido de la segunda sección 
          </section>

          <section>
             Aquí iría el contenido de la tercera sección 
          </section>
        </main>

        <footer>
          <div class="container">
            <p>Todos los derechos reservados © 2021</p>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </footer>
      </body>



    
 

    
   );
  
  }

export default Home ;


