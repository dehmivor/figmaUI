import { AccessTime, BookmarkBorder, Folder } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

// Main Component
export default function Column2() {
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
      {/* Task with Header and Icon */}
      <TaskCard
        title="Constructive and destructive waves"
        type="Reading Task"
        icon={<Folder />}
      />

      {/* Simple Text Card */}
      <TextCard
        title="Constructive and destructive waves"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />

      {/* Subtask List Card */}
      <SubtaskCard
        title="Constructive and destructive waves"
        items={["Item", "Item", "Item", "Item"]}
      />

      {/* Event Card with Time */}
      <EventCard
        title="Constructive and destructive waves"
        time="07:00 PM"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />

      {/* Image Card with Bookmark */}
      <ImageCard
        title="Constructive and destructive waves"
        time="07:00 PM"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
      />
    </Box>
  );
}

// TaskCard Component
function TaskCard({ title, type, icon }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1, bgcolor: "#e8eaf6" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Chip label={type} size="small" color="primary" icon={icon} />
      </Stack>
      <Typography variant="body1" fontWeight="bold" mt={1}>
        {title}
      </Typography>
    </Card>
  );
}

// TextCard Component
function TextCard({ title, description }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1 }}>
      <Typography variant="body1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        {description}
      </Typography>
    </Card>
  );
}

// SubtaskCard Component
function SubtaskCard({ title, items }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1, bgcolor: "#e0e7ff" }}>
      <Typography variant="body1" fontWeight="bold">
        {title}
      </Typography>
      <Stack spacing={0.5} mt={1}>
        {items.map((item, index) => (
          <Stack key={index} direction="row" alignItems="center" spacing={1}>
            <Folder fontSize="small" />
            <Typography variant="body2">{item}</Typography>
          </Stack>
        ))}
      </Stack>
      <Button variant="contained" sx={{ mt: 1, bgcolor: "#d1c4e9" }}>
        Continue
      </Button>
    </Card>
  );
}

// EventCard Component
function EventCard({ title, time, description }) {
  return (
    <Card sx={{ borderRadius: 2, p: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AccessTime fontSize="small" color="secondary" />
        <Typography variant="caption">{time}</Typography>
      </Stack>
      <Typography variant="body1" fontWeight="bold" mt={1}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        {description}
      </Typography>
    </Card>
  );
}

// ImageCard Component
function ImageCard({ title, time, image }) {
  return (
    <Card sx={{ borderRadius: 2, position: "relative" }}>
      <CardMedia
        component="img"
        height="140"
        src={`${process.env.PUBLIC_URL}/wave.jpg`}
        alt={title}
      />
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTime fontSize="small" color="secondary" />
          <Typography variant="caption">{time}</Typography>
        </Stack>
        <Typography variant="body1" fontWeight="bold" mt={1}>
          {title}
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <BookmarkBorder />
        </IconButton>
      </CardContent>
    </Card>
  );
}
