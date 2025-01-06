"use client";

import { useState } from "react";
import { Typography, Button, Snackbar, SnackbarContent } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface CopyableTextProps {
  text: string;
}

export default function CopyableText({ text }: CopyableTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Automatically close the snackbar after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <>
      <Button
        onClick={handleCopy}
        variant="text"
        sx={{
          textTransform: "none",
          display: "inline-flex",
          alignItems: "center",
          fontWeight: 600,
          gap: 1,
          m: 0,
          p: 0,
          color: "black",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "inline-flex" },
            alignItems: "center",
            fontWeight: 600,
          }}
        >
          {text}
        </Typography>
        <ContentCopyIcon
          sx={{
            display: { xs: "none", md: "inline-flex" },
            alignItems: "center",
            fontWeight: 600,
          }}
          fontSize="small"
        />
      </Button>

      <Snackbar
        open={copied}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <SnackbarContent
          message="Copied!"
          sx={{
            backgroundColor: "secondary.main", // example: success color from theme
            color: "#fff",
            fontSize: 16,
          }}
        />
      </Snackbar>
    </>
  );
}
