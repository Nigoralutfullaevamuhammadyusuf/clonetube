import React from 'react'
import logo from '../../constants/logo.jpg'
import{Stack,Box,} from '@mui/material'
import { colors } from '../../constants/colors'
import SearchBar from '../searchBar/SearchBar'
const Navbar = () => {
  return (
    
        <Stack 
        direction={'row'} 
        justifyContent={'space-between'} 
        alignItems={'center'} 
        sx={{position:'sticky', top:'0', zIndex:'999', background:colors.primary}}
        p={2}
        height={'10vh'}>
            <img src={logo} alt='logo' height={50}/>
            <SearchBar/>
            <Box/>
    </Stack>

  )
}

export default Navbar