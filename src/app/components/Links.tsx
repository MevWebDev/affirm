import { Box, Button } from "@mui/material";

function Links() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      <Button variant="contained">Shop</Button>
      <Button variant="contained">Links</Button>
      <Button variant="contained">Why</Button>
      <Button variant="contained">Art</Button>
    </Box>
  );
}

export default Links;
