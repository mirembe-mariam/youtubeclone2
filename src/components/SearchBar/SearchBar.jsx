import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Paper, IconButton} from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
  <Paper   /*a paper is a simple div that has a white background. appears like its floating on top*/      
component="form"
onSubmit={() => {}}
sx={{
    borderRadius:20,
    border: '1px solid #e3e3e3',
    pl:2,
    boxShadow: 'none',
    mr: {sm:5} ,/*mr. means margin right. sm. means small devices. pl means padding-left*/
    outline: 'none'
}}>
   <input 
   className='search-bar' 
   placeholder='Search....'
   value=""
   onChange={() => {}}
  />
   <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
    <Search/>
   </IconButton>
  </Paper>
  )
}

export default SearchBar