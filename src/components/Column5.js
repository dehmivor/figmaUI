// App.js
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

function Column5() {
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
