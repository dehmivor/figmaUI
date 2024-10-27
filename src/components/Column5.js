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

function Column5() {
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
      {/* Card 1 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="caption">07:00 PM</Typography>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2 hours 40 minutes
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Apply
          </Button>
        </CardActions>
      </Card>

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

      {/* Card 2 */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/person5.jpg`}
          />
          <Box>
            <Typography variant="h6">Jerome Bell</Typography>
            <Typography variant="body2" color="text.secondary">
              @hellofish04
            </Typography>
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth>
            Follow
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Column5;
