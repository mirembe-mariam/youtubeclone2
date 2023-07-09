import React from "react";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  /*console.log(videoId, snippet)*/
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width:358, height: 180}}
        />
      </Link>
     {/* <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}/>*/}
     <CardContent className="videoCard"/>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
    </Card>
  );
};

export default VideoCard;
