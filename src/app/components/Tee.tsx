import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import tee from "../../../public/tee.png";

function Tee() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 4,
      }}
    >
      <Typography variant="h1">Buy our merch</Typography>
      <Box sx={{ width: "30%", my: 2 }}>
        <Image
          src={tee}
          alt={"affirm_tee"}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </Box>
      <Button
        color="secondary"
        variant="contained"
        sx={{
          borderRadius: 5,
          color: "primary.main",
          p: 1,

          width: 256,
        }}
      >
        <Typography sx={{ color: "primary.main", px: 1, py: 0.1 }}>
          BUY
        </Typography>
      </Button>
    </Box>
  );
}

export default Tee;
