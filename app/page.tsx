"use client";

import { useState } from "react";
import Container from "../components/Container";

export default function Home() {

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click)
    console.log('sim');
  }

  return (
  <Container background={click ? 'black' : 'red'}><button onClick={handleClick}>Clicar</button>
  </Container>);
}
