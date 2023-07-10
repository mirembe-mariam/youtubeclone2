import React from 'react'

import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from "../" /*we are already in the componnets folder*/
import {fetchFromAPI } from "../../utils/fetchFromAPI"
const SearchFeed = () => {
  const [selectedCategory , setselectedCategory] = useState('New')
const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" } }}> {/*sx means small devices then md means medium devices */}
    
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }}} >
        <Sidebar
        selectedCategory= {selectedCategory}
        setselectedCategory= {setselectedCategory}/>

        <Typography className="copyright"
        variant="body2" sx={{mt: 1.5, color: '#fff' }}> {/*mt means margin-top* , variant means like specifying the size and style of text like how you say h2, h3*/}
          Copyright 2023 Mirembe
          </Typography> {/*typography is used for text elements instead of p tags or headings tags*/}
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white'}}>
          {selectedCategory} <span style={{ color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};



export default SearchFeed