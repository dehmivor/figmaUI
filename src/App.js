import { Box } from "@mui/material";
import React from "react";
import Column1 from "./components/Column1";
import Column2 from "./components/Column2";
import Column3 from "./components/Column3";
import Column4 from "./components/Column4";
import Column5 from "./components/Column5";
import Column6 from "./components/Column6";
import Column7 from "./components/Column7";

function App() {
  return (
    <Box
      display="flex" // Arrange items in a horizontal row
      overflow="auto" // Enable horizontal scrolling
      sx={{ whiteSpace: "nowrap" }} // Prevent wrapping to a new row
    >
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column1 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column2 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column3 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column4 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column5 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column6 />
      </Box>
      <Box sx={{ minWidth: 360, padding: 2 }}>
        <Column7 />
      </Box>
    </Box>
  );
}

export default App;
