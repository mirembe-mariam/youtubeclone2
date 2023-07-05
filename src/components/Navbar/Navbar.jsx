import { Stack } from '@mui/material'; /*Stack is a container component for arranging elements vertically or horizontally.*/
import { Link } from 'react-router-dom' /*In React, the Link component from react-router-dom is used to create links or navigation between different routes within a React application. It is an alternative to the regular HTML anchor (<a>) tag.*/
import { logo } from '../../utils/constants.js'
import SearchBar from "../SearchBar/SearchBar.jsx"
import React from 'react'

const Navbar = () => (
<Stack direction="row" alignItems="center" p={2} sx={{position: 'sticky', background: '#000', top:0, justifyContent: 'space-between'}}>
  <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
    <img src={logo} alt="logo" height={45} />
  </Link>
  <SearchBar/>
</Stack>
    
  
)

export default Navbar