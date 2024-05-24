'use cliente'


import '@/components/PiePag/PiePag.css'
import Box from "@mui/material/Box";
import Icon from '@mui/material/Icon';
import Link from 'next/link'
import Image from "next/image";
import { Container, Tag } from 'reactstrap';
import { Typography } from '@mui/material';

export default function piePag() {
  return (


    <footer class="footer">
      <div class="icon-footer">

        <img src="logoEnblanco.png" width={100} alt="Icono" class="footer-icon"></img>

      </div>
      <div class="containerFooter">
        <div class="text-column">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="text-column">
          <h4>Contacto</h4>
          <p>Dirección: vereda San Antoni, Mocoa, Putumayo</p>
          <p>Teléfono: (+57) 323 2310 187</p>
          <p>Email: imcColaboration@gmail.com</p>
        </div>
        <div class="text-column">
          <h4>Síguenos</h4>
          <p>
            <img src='facebook.png' height={25} width={25} ></img> <a href="https://www.facebook.com" target="_blank"> Facebook</a>
          </p>
          <p>
          <img src='instagram.png' height={25} width={25} ></img>  <a icon="/instagram.png" target="_blank">Instagram</a>
          </p>

          <p>
          <img src='Xs.png' height={25} width={25}  ></img>  <a icon="/Xs" target="_blank">Twitter</a>
          </p>




        </div>

      </div>
    </footer>


  )

}