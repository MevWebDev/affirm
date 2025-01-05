import { Box, Typography } from "@mui/material";
import Affirm from "../../../public/affirm.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedHoverText from "./AnimatedHoverText";

function Navbar() {
  return (
    <Box
      sx={{
        bgcolor: "background.secondary",
        p: 1,
        color: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",

          width: { xs: 96, md: 128 },
        }}
      >
        <Image
          src={Affirm}
          alt="Affirm logo"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          textDecoration: "none",
        }}
      >
        <Link href="mango" style={{ textDecoration: "none" }}>
          <AnimatedHoverText>Shop</AnimatedHoverText>
        </Link>
        <Link href="mango" style={{ textDecoration: "none" }}>
          <AnimatedHoverText>Links</AnimatedHoverText>
        </Link>
        <Link href="mango" style={{ textDecoration: "none" }}>
          <AnimatedHoverText>Why?</AnimatedHoverText>
        </Link>
        <Link href="mango" style={{ textDecoration: "none" }}>
          <AnimatedHoverText>Art</AnimatedHoverText>
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;
