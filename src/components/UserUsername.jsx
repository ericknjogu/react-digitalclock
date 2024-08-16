import React from "react";
import styles  from "./style.module.css"

export function UserUsername(props) {

  return (
    <>
      <b className={styles.username}>Username:</b>
      <span>{props.username}</span>
    </>
  );
  
}