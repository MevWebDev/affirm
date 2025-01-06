"use client";

import { Box, Button } from "@mui/material";
import Affirm from "../../../public/affirm.png";
import Image from "next/image";

import AnimatedHoverText from "./AnimatedHoverText";
import { useState } from "react";
import CustomPopup from "./CustomPopup";

export enum PopupType {
  SHOP = "SHOP",
  LINKS = "LINKS",
  WHY = "WHY",
  ART = "ART",
}

function Navbar() {
  const [openPopup, setOpenPopup] = useState<PopupType | null>(null);

  const handleClickOpen = (popup: PopupType) => {
    setOpenPopup(popup);
  };

  const handleClose = () => {
    setOpenPopup(null);
  };

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
        <Button
          sx={{ p: 0, width: "auto", minWidth: 0 }}
          onClick={() => handleClickOpen(PopupType.SHOP)}
        >
          <AnimatedHoverText>Shop</AnimatedHoverText>
        </Button>
        <Button
          sx={{ p: 0, width: "auto", minWidth: 0 }}
          onClick={() => handleClickOpen(PopupType.LINKS)}
        >
          <AnimatedHoverText>Links</AnimatedHoverText>
        </Button>
        <Button
          sx={{ p: 0, width: "auto", minWidth: 0 }}
          onClick={() => handleClickOpen(PopupType.WHY)}
        >
          <AnimatedHoverText>Why?</AnimatedHoverText>
        </Button>
        <Button
          sx={{ p: 0, width: "auto", minWidth: 0 }}
          onClick={() => handleClickOpen(PopupType.ART)}
        >
          <AnimatedHoverText>Art</AnimatedHoverText>
        </Button>
      </Box>
      {openPopup && (
        <CustomPopup popupType={openPopup} onClose={handleClose}></CustomPopup>
      )}
    </Box>
  );
}

export default Navbar;
