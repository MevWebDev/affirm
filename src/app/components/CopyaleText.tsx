"use client";

import { useState } from "react";
import { Typography, IconButton, Tooltip } from "@mui/material";
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

      // Reset "copied" status after a short delay
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <Typography
      sx={{
        display: { xs: "none", md: "inline-flex" },
        alignItems: "center",
        fontWeight: 600,
      }}
    >
      {text}
      <Tooltip title={copied ? "Copied!" : "Copy"}>
        <IconButton onClick={handleCopy} size="small" sx={{ ml: 1 }}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Typography>
  );
}
