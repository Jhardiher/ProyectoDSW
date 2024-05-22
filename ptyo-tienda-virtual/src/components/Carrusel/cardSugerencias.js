import React from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";

const useStyles = makeStyles(() => ({
  carrusel_elemento: {
    opacity: 0,
    position: "absolute",
    top: 0,
    zIndex: 100
  },
  activo: {
    opacity: 1,
    position: "relative",
    zIndex: 900,
    width: "100%",
    margin: "auto",
    transition: "transform .5s, opacity .5s, z-index .5s"
  },
  anterior: {
    transform: "translateX(-100%)"
  },
  siguiente: {
    transform: "translateX(100%)"
  }
}));

export const CardSugerencias = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classnames(
        props.activo ? classes.activo : classes.carrusel_elemento,
        props.anterior ? classes.anterior : "",
        props.siguiente ? classes.siguiente : ""
      )}
    >
      {props.data}
    </div>
  );
};
