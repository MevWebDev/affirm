import { Box, Typography } from "@mui/material";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

function LinksPopup() {
  const links = [
    {
      name: "github repo",
      url: "https://github.com/MevWebDev/affirm",
    },
    {
      name: "aFFiRM X",
      url: "https://x.com/affirmai",
    },
    {
      name: "aFFiRM instagram",
      url: "https://www.instagram.com/affirm.official/",
    },
    {
      name: "mother's instagram",
      url: "https://www.instagram.com/exhto/",
    },
    {
      name: "father's X",
      url: "https://x.com/3xhuman",
    },

    {
      name: "telegram",
      url: "https://t.me/affirmaiaiai",
    },
    {
      name: "VVAIFU PAGE",
      url: "https://vvaifu.fun/character/6739158d9257ff5b86d2d06b",
    },
    {
      name: "DEX",
      url: "https://dexscreener.com/solana/j19dfmcsknwmfuxwrxyoqxe8f8vhvkwcueor9wxm8mwn",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {links.map((link) => (
        <MuiLink
          component={NextLink}
          href={link.url}
          underline="none"
          color="inherit"
          key={link.name}
          sx={{ ":hover": { bgcolor: "primary.main" } }}
        >
          <Typography sx={{ fontSize: 36 }} component="span">
            🤍🛡️ {link.name}
          </Typography>
        </MuiLink>
      ))}
    </Box>
  );
}

export default LinksPopup;
