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

function Column7() {
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
      {/* Card 5 */}
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
        </CardContent>
        <CardActions>
          <Button variant="outlined" fullWidth>
            View Contents
          </Button>
        </CardActions>
      </Card>

      {/* Card 6 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <img
            src={`${process.env.PUBLIC_URL}/wave.jpg`}
            alt="wave"
            style={{ width: "100%", height: "100px", objectFit: "cover" }}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" fullWidth>
            View Contents
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Column7;
