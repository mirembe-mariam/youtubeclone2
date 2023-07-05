import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";

const selectedCategory = 'New';
const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",/*to enable vertical scrolling*/
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => ( /*This maps over the categories array in constants and renders a button element for each category.*/

     <button className="category-btn"
        style={{
            background: category.name ===
            selectedCategory && '#FC1503',
            color: 'white'
         }}
        key={category.name}/*This assigns a unique key to each button element*/
        >
        <span style={{ color: category.name === selectedCategory ? 'white' : 'red ', marginRight: '15px'}}>{category.icon}</span>
        <span style={{opacity: category.name === selectedCategory ? '1':'0.8'}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
