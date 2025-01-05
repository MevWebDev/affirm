import { Box, Button, Typography } from "@mui/material";
import Affirm from "../../../public/affirm_knight.png";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import DexScreenerIcon from "../../../public/dexscreener.png";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-evenly" },
        gap: 2,
        my: 4,
      }}
    >
      <Box sx={{ width: { xs: "80%", md: "40%" }, my: 4 }}>
        <Image
          src={Affirm}
          alt="Affirm logo"
          style={{ width: "100%", height: "auto", borderRadius: "5%" }}
        />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h1">$aFFiRM</Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 5,
            color: "primary.main",
            p: 1,
            my: 1,
            width: 256,
          }}
        >
          <Typography sx={{ color: "primary.main", px: 1, py: 0.1 }}>
            BUY $aFFiRM
          </Typography>
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            my: 1,
            color: "primary.main",
          }}
        >
          <Link href="https://x.com/affirmai" target="_blank">
            <XIcon
              sx={{
                fontSize: 24,
                ":hover": { cursor: "pointer" },
                color: "#262626",
                mt: "20%",
                ":hover": { scale: 1.1 },
              }}
            ></XIcon>
          </Link>
          <Link href="https://t.me/affirmaiaiai" target="_blank">
            <TelegramIcon
              sx={{
                fontSize: 32,
                ":hover": { cursor: "pointer" },
                color: "#262626",
                mt: "20%",
                ":hover": { scale: 1.1 },
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/affirm.official/"
            target="_blank"
          >
            <InstagramIcon
              sx={{
                fontSize: 32,
                ":hover": { cursor: "pointer" },
                color: "#262626",
                mt: "20%",
                ":hover": { scale: 1.1 },
              }}
            />
          </Link>
          <Link
            href="https://dexscreener.com/solana/j19dfmcsknwmfuxwrxyoqxe8f8vhvkwcueor9wxm8mwn"
            target="_blank"
          >
            <Box
              sx={{
                display: "flex",
                ":hover": { cursor: "pointer", scale: 1.1 },
                color: "#262626",
              }}
            >
              <Image
                src={DexScreenerIcon}
                alt="dexcreener-logo"
                style={{ width: 32, height: 32 }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
