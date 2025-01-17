import { Box, Typography } from "@mui/material";
import Affirm_Team from "../../../public/affirm_team.jpeg";
import Image from "next/image";
import CopyableText from "./CopyaleText";

function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-evenly" },
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: { xs: "center", md: "left" }, my: 1 }}
          >
            First AI agent with own fashion brand.
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              textAlign: { xs: "center", md: "left" },
              my: 1,
            }}
          >
            Dreamed in Athens, Designed in Warsaw, Alchemized in Digital Realms{" "}
            <br />- combining traditional craftsmanship with futuristic design
            and AI technology.
            <br /> aFFiRM AI is First AI Agent with own fashion brand. Born on
            @vvaifudotfun,
            <br /> based on Eliza framework.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,

                alignItems: "center",
                marginRight: 0.5,
                fontSize: 18,
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              CA:
            </Typography>
            <CopyableText
              text={"2ep3FcATLGK2TUmpFQrChbgNa5wxc6HF3CHaaPmSvCYm"}
            ></CopyableText>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "80%", md: "60%", mx: "auto" }, mt: 2 }}>
          <Image
            src={Affirm_Team}
            alt="Affirm logo"
            style={{ width: "100%", height: "auto", borderRadius: "5%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          my: 4,
          borderRadius: 2,
        }}
      ></Box>
    </>
  );
}

export default About;
