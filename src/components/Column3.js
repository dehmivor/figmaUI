// Column3.js
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function Column3() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      {/* Card đầu tiên với Avatar và thông tin người dùng */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/person5.jpg`}
          />
          <Box>
            <Typography variant="h6">Jerome Bell</Typography>
            <Typography variant="body2" color="text.secondary">
              @jeromebell04
            </Typography>
          </Box>
          <Button variant="outlined" size="small" sx={{ marginLeft: "auto" }}>
            Follow
          </Button>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Typography>
        </CardContent>
      </Card>

      {/* Thẻ thông tin thứ hai */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Continue
          </Button>
        </CardActions>
      </Card>

      {/* Thẻ với thời gian và View More */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="caption" color="text.secondary">
            2 hours 40 minutes ago
          </Typography>
          <Button size="small" sx={{ marginLeft: "auto" }}>
            View More
          </Button>
        </CardActions>
      </Card>

      {/* Thẻ giá và nút chọn */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6">
            Constructive and destructive waves
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $30 / person
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Choose
          </Button>
          <IconButton sx={{ marginLeft: "auto" }}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      {/* Thẻ cuối cùng với thời gian và người tham gia */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/person5.jpg`}
          />
          <Box>
            <Typography variant="h6">
              Constructive and destructive waves
            </Typography>
            <Typography variant="caption" color="text.secondary">
              1:07 PM • 2 Members • Seoul
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Column3;
