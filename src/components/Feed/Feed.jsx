import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from "../Sidebar/Sidebar.jsx"
const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" } }}> {/*sx means small devices then md means medium devices */}
    
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }}} >
        <Sidebar/>
        <Typography className="copyright"
        variant="body2" sx={{mt: 1.5, color: '#fff' }}> {/*mt means margin-top* , variant means like specifying the size and style of text like how you say h2, h3*/}
          Copyright 2023 Mirembe
          </Typography> {/*typography is used for text elements instead of p tags or headings tags*/}
      </Box>
    </Stack>
  );
};

export default Feed;
