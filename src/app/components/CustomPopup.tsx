import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import { PopupType } from "./Navbar";
import CloseIcon from "@mui/icons-material/Close";
import LinksPopup from "./LinksPopup";
import Why from "./Why";
import Art from "./Art";

interface PopupProps {
  popupType: PopupType;
  onClose: () => void;
}

export default function Popup({ popupType, onClose }: PopupProps) {
  let content: React.ReactNode = null;
  let title = "";

  switch (popupType) {
    case PopupType.ART:
      title = "Art";
      content = <Art />;
      break;
    case PopupType.LINKS:
      title = "Links";
      content = <LinksPopup />;
      break;
    case PopupType.SHOP:
      title = "Shop";
      content = <Box>Waiting for links</Box>;
      break;
    case PopupType.WHY:
      title = "Manifest";
      content = <Why />;
      break;
    default:
      title = "Unknown Popup";
      content = <div>Something went wrong</div>;
  }

  return (
    <Dialog open maxWidth="md" onClose={onClose}>
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: "1%",
          top: "1%",
          color: "black",
        }}
      >
        <CloseIcon sx={{ fontSize: "1.5rem" }} />
      </IconButton>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ position: "relative" }}>{content}</DialogContent>
    </Dialog>
  );
}
