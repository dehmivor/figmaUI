// App.js
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Column6() {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "#f2f2fc",
        p: 2,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Card 3 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/wave.jpg`}
          />
          <Box>
            <Typography variant="h6">Jerome Bell</Typography>
            <Typography variant="body2" color="text.secondary">
              Creator
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Card 4 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <img
            src={`${process.env.PUBLIC_URL}/wave.jpg`}
            alt="wave"
            style={{ width: "100%", height: "100px", objectFit: "cover" }}
          />
          <Typography variant="h6">Jerome Bell</Typography>
          <Typography variant="body2" color="text.secondary">
            Constructive and destructive waves
          </Typography>
          <Typography variant="caption" color="text.secondary">
            2 hours 40 minutes
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Column6;
