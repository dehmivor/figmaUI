import {
  Add,
  ChatBubbleOutline,
  FavoriteBorder,
  Remove,
  Search,
  Share,
} from "@mui/icons-material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

// Main App Component
export default function App() {
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
      {/* Header with Avatar Group */}
      <Card sx={{ borderRadius: 2, padding: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h7" sx={{ display: "block" }}>
            {" "}
            {/* Adjusted */}
            Creator you know
          </Typography>
          <AvatarGroup max={4}>
            <Avatar
              alt="User 1"
              src={`${process.env.PUBLIC_URL}/person1.jpg`}
            />
            <Avatar
              alt="User 2"
              src={`${process.env.PUBLIC_URL}/person2.jpg`}
            />
            <Avatar
              alt="User 3"
              src={`${process.env.PUBLIC_URL}/person3.jpg`}
            />
            <Avatar
              alt="User 4"
              src={`${process.env.PUBLIC_URL}/person4.jpg`}
            />
          </AvatarGroup>
        </Stack>
      </Card>

      {/* Search Bar */}
      <Card sx={{ borderRadius: 2, padding: 1 }}>
        <TextField
          placeholder="Search Creator"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ArrowForwardIos fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Card>

      {/* Card for Content */}
      <Card sx={{ borderRadius: 2, display: "flex" }}>
        <CardContent sx={{ padding: 1 }}>
          <Typography variant="body1" sx={{ display: "block" }}>
            {" "}
            {/* Adjusted */}
            Constructive and destructive waves
          </Typography>
          {/* Star Rating */}
          <Typography variant="caption" sx={{ display: "block", marginTop: 0 }}>
            {" "}
            {/* Adjusted */}
            ★★☆☆☆
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            width: "40%",
            height: 180,
            objectFit: "cover",
          }}
          src={`${process.env.PUBLIC_URL}/wave.jpg`}
          alt="Constructive and destructive waves"
        />
      </Card>

      <Card sx={{ borderRadius: 2, display: "flex", overflow: "hidden" }}>
        <CardMedia
          component="img"
          sx={{
            width: "50%",
            height: 80,
            objectFit: "cover",
          }}
          src={`${process.env.PUBLIC_URL}/wave.jpg`}
          alt="Constructive and destructive waves"
        />
        <CardContent sx={{ flexGrow: 1, padding: 1 }}>
          <Typography
            variant="body1"
            noWrap={false}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
            }}
          >
            Constructive and destructive waves
          </Typography>
        </CardContent>
      </Card>

      {/* Ticket Counter */}
      <Card sx={{ borderRadius: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography sx={{ display: "block" }}>
            {" "}
            {/* Adjusted */}
            Ticket (Ages 2-12)
          </Typography>
          <Box>
            <IconButton>
              <Remove />
            </IconButton>
            <Typography
              variant="body1"
              component="span"
              sx={{ display: "block" }}
            >
              {" "}
              {/* Adjusted */}2
            </Typography>
            <IconButton>
              <Add />
            </IconButton>
          </Box>
        </Stack>
      </Card>

      {/* Profile Card */}
      <Card sx={{ borderRadius: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            alt="Jerome Bell"
            src={`${process.env.PUBLIC_URL}/person5.jpg`}
          />
          <Box>
            <Typography variant="body1" sx={{ display: "block" }}>
              {" "}
              {/* Adjusted */}
              Jerome Bell
            </Typography>
            <Typography variant="caption" sx={{ display: "block" }}>
              {" "}
              {/* Adjusted */}
              @whitefish684
            </Typography>
          </Box>
          <Button variant="contained" color="primary">
            Follow
          </Button>
        </Stack>
      </Card>

      {/* Post Card */}
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Jerome Bell"
              src={`${process.env.PUBLIC_URL}/person5.jpg`}
            />
            <Box>
              <Typography variant="body2" sx={{ display: "block" }}>
                {" "}
                {/* Adjusted */}
                Jerome Bell
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ display: "block" }}
              >
                {" "}
                {/* Adjusted */}2 weeks ago
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit...
          </Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-around" sx={{ p: 1 }}>
          <IconButton>
            <FavoriteBorder /> 816
          </IconButton>
          <IconButton>
            <ChatBubbleOutline /> 877
          </IconButton>
          <IconButton>
            <Share /> 185
          </IconButton>
        </Stack>
      </Card>

      {/* Event Card */}
      <Card sx={{ borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="100"
          src={`${process.env.PUBLIC_URL}/wave.jpg`}
          alt="Event image"
        />
        <CardContent>
          <Typography
            variant="caption"
            color="primary"
            sx={{ display: "block" }}
          >
            {" "}
            {/* Adjusted */}
            07:00 PM
          </Typography>
          <Typography variant="body2" sx={{ display: "block" }}>
            {" "}
            {/* Adjusted */}
            Constructive and destructive waves
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ display: "block" }}
          >
            {" "}
            {/* Adjusted */}
            October 30, 2023
          </Typography>
        </CardContent>
      </Card>

      {/* Footer with Icon Buttons */}
      <Card sx={{ borderRadius: 2 }}>
        <Stack direction="row" justifyContent="space-around">
          <IconButton>
            <FavoriteBorder /> 816
          </IconButton>
          <IconButton>
            <ChatBubbleOutline /> 877
          </IconButton>
          <IconButton>
            <Share /> 185
          </IconButton>
        </Stack>
      </Card>
    </Box>
  );
}

// Custom Avatar Group Component
function AvatarGroup({ children, max }) {
  const visibleAvatars = React.Children.toArray(children).slice(0, max);
  return (
    <Stack direction="row" spacing={-1}>
      {visibleAvatars}
      {children.length > max && <Avatar>+{children.length - max}</Avatar>}
    </Stack>
  );
}
