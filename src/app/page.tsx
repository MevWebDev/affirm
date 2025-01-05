import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

import Tee from "./components/Tee";

export default function HomePage() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Navbar />
      <Header />
      <About />

      <Tee />
    </Container>
  );
}
