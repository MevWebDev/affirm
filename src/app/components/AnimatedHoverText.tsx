import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

export default function AnimatedHoverText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Typography
      sx={{
        position: "relative",
        display: "inline-block", // inline-block ensures our width transitions nicely
        cursor: "pointer",
        color: "text.primary", // or any color from your theme
        textDecoration: "none", // if you want to remove underline

        // Pseudo-element for the animated border
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "2px", // thickness of the border
          backgroundColor: "currentColor", // matches the text color, or use a theme color
          transition: "width 0.3s ease", // controls animation speed & easing
        },

        // Expand the border on hover
        "&:hover::after": {
          width: "100%",
        },
      }}
    >
      {children}
    </Typography>
  );
}
