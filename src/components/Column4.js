import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { PlayArrow, MoreVert, LocationOn } from "@mui/icons-material";

function Column4() {
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
      {/* Video Card with Play Icon */}
      <MediaCard
        title="Constructive and destructive waves"
        author="Jerome Bell"
        duration="2 hours 40 minutes"
        src={`${process.env.PUBLIC_URL}/person5.jpg`}
        showPlayIcon
      />

      {/* Media Card without Play Icon */}
      <MediaCard
        title="Constructive and destructive waves"
        author="Jerome Bell"
        duration="2 hours 40 minutes"
        src={`${process.env.PUBLIC_URL}/person5.jpg`}
      />

      {/* Basic Card with Avatar */}
      <BasicCard
        title="Constructive and destructive waves"
        author="Jerome Bell"
        username="@whitefish684"
        src={`${process.env.PUBLIC_URL}/person5.jpg`}
      />

      {/* Card with multiple avatars */}
      <AvatarsCard
        title="Constructive and destructive waves"
        duration="3 hours 40 minutes"
        src={`${process.env.PUBLIC_URL}/person5.jpg`}
      />

      {/* Location-based Card */}
      <LocationCard
        title="Constructive and destructive waves"
        duration="2 hours"
        location="Seoul"
        host="Ravi Park"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
      />

      {/* Event Card */}
      <EventCard
        title="Constructive and destructive waves"
        duration="2 hours"
        date="October 20, 2023"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
      />
    </Box>
  );
}

export default Column4;

function MediaCard({ title, author, duration, image, showPlayIcon }) {
  return (
    <Card sx={{ borderRadius: 2, position: "relative" }}>
      <CardMedia
        component="img"
        height="140"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
        alt={title}
      />
      {showPlayIcon && (
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        >
          <PlayArrow fontSize="large" />
        </IconButton>
      )}
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {author} - {duration}
        </Typography>
      </CardContent>
    </Card>
  );
}

// BasicCard Component
function BasicCard({ title, author, username, image }) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="100"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
        alt={title}
      />
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar src={`${process.env.PUBLIC_URL}/person5.jpg`} alt={author} />
          <Box>
            <Typography variant="body2">{title}</Typography>
            <Typography variant="caption" color="textSecondary">
              {author} ({username})
            </Typography>
          </Box>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

// AvatarsCard Component
function AvatarsCard({ title, duration, image }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1, bgcolor: "#e0e7ff" }}>
      <Stack direction="row" spacing={-1}>
        <Avatar src={`${process.env.PUBLIC_URL}/person1.jpg`} />
        <Avatar src={`${process.env.PUBLIC_URL}/person2.jpg`} />
        <Avatar src={`${process.env.PUBLIC_URL}/person3.jpg`} />
        <Avatar src={`${process.env.PUBLIC_URL}/person4.jpg`} />
        <Avatar>+2</Avatar>
      </Stack>
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="caption">{duration}</Typography>
        <Button variant="contained" sx={{ mt: 1 }} startIcon={<PlayArrow />}>
          Play
        </Button>
      </CardContent>
    </Card>
  );
}

// LocationCard Component
function LocationCard({ title, duration, location, host, image }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1, bgcolor: "#d1c4e9" }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Reading Track" size="small" color="primary" />
          <Typography variant="caption" color="textSecondary">
            {duration}
          </Typography>
        </Stack>
        <Typography variant="body1" fontWeight="bold" mt={1}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mt={1}>
          <LocationOn fontSize="small" color="secondary" />
          <Typography variant="caption">{location}</Typography>
          <Typography variant="caption" color="textSecondary">
            {" "}
            - {host}
          </Typography>
        </Stack>
        <Button variant="contained" sx={{ mt: 1 }} startIcon={<PlayArrow />}>
          Play
        </Button>
      </CardContent>
    </Card>
  );
}

// EventCard Component
function EventCard({ title, duration, date, image }) {
  return (
    <Card sx={{ borderRadius: 2, bgcolor: "#b39ddb" }}>
      <CardMedia component="img" height="100" image={image} alt={title} />
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" color="textSecondary">
            {duration}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            - {date}
          </Typography>
        </Stack>
        <Typography variant="body1" fontWeight="bold" mt={1}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mt={1}>
          <AvatarGroup max={4} />
          <Button variant="contained" startIcon={<PlayArrow />}>
            Play
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

// AvatarGroup Component
function AvatarGroup({ max }) {
  const avatars = Array.from({ length: max }, (_, i) => (
    <Avatar
      key={i}
      sx={{ width: 24, height: 24 }}
      src={`${process.env.PUBLIC_URL}/person${i + 1}.jpg`}
    />
  ));
  return (
    <Stack direction="row" spacing={-1}>
      {avatars}
    </Stack>
  );
}
