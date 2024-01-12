import React from 'react'
import {Stack} from '@mui/material'
import {colors}from '../../constants/colors'
import {category}  from '../../constants/index'
const Category = ({selectedCategoryHandler,selectedCategory}) => {
  



  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}}>
        {category.map(item =>(
<button key={item.name} 
className='category-btn' 
style={{borderRadius:'0'}}
onClick={() =>selectedCategoryHandler(item.name)}>
    <span style={{color:colors.secondary,marginRight:'15px'}}>{item.icon}</span>
    <span style={{opacity:'1'}}>{item.name}</span>
</button>
        ))}

    </Stack>
  )
}

export default Category




