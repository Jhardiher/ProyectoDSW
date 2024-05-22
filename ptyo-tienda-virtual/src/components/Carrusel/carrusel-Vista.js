'use client'

import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import React, { useState, useEffect } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { CardSugerencias } from "./cardSugerencias";

const lista = [
  { id: 0, imgSrc: "https://firebasestorage.googleapis.com/v0/b/prueba-fire-dcce5.appspot.com/o/slayer1.png?alt=media&token=41b11801-dbcd-43b1-8022-4e4df8e7ac9c" },
  { id: 1, imgSrc: "https://firebasestorage.googleapis.com/v0/b/prueba-fire-dcce5.appspot.com/o/slayer2.png?alt=media&token=62b24fdc-7eb1-4b21-8799-463b5d2c69db" },
];

const useStyles = makeStyles(() => ({
  btn: {
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Ajusta el color de fondo según necesites
    borderRadius: "50%", // Para hacer que el botón sea circular
  },
  leftBtn: {
    left: 0,
  },
  rightBtn: {
    right: 0,
  },
}));

const Contenedor = () => {
  const [elementoActivo, setElementoActivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moverImagenDerecha();
    }, 5000); // Cambia este valor según tu preferencia de intervalo
    return () => clearInterval(interval);
  }, [elementoActivo]);

  const moverImagenDerecha = () => {
    setElementoActivo((elementoActivo + 1) % lista.length);
  };

  const moverImagenIzquierda = () => {
    setElementoActivo((elementoActivo - 1 + lista.length) % lista.length);
  };

  const classes = useStyles();
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className={`${classes.btn} ${classes.leftBtn}`}>
        <IconButton onClick={moverImagenIzquierda} size="small">
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </div>
      <div className={`${classes.btn} ${classes.rightBtn}`}>
        <IconButton onClick={moverImagenDerecha} size="small">
          <ArrowBackIosRoundedIcon style={{ transform: "rotate(180deg)" }} />
        </IconButton>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        {lista.map((elemento, index) => (
          <CardSugerencias
            key={elemento.id}
            data={
              <div>
                <img src={elemento.imgSrc} alt={`Imagen ${index}`} style={{ width: "100%", height: "auto" }} />
              </div>
            }
            activo={elementoActivo === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Contenedor;
