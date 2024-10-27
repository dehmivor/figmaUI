// App.js
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Column6() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        padding: 2,
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      {/* Card 3 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/person5.jpg`}
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
