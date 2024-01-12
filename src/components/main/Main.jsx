import {React,useState,useEffect} from 'react'
import {Stack,Box,Typography, Container} from '@mui/material'
import {colors} from '../../constants/colors'
import {Category,Videos} from '../index'
import { Api } from '../../service/api'
const Main = () => {
  const[selectedCategory,setSelectedCategory]=useState('New')
 const[videos,setVideos]=useState([])

 const selectedCategoryHandler=category=>setSelectedCategory(category
  )
  
 useEffect(()=>{
  const getData=async()=>{
    try{
    const data=await Api.fetching(`search?part=snippet&q=${'selectedCategory'}`)
    setVideos(data)
    }catch(error){
      console.log(error)
    }
  }
  getData(getData)
 },[] )
 
 
 
 return (

    <Stack>
      <Category
      selectedCategoryHandler={selectedCategoryHandler}
      selectedCategory={selectedCategory}/>
      <Box p={'2'} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}> {selectedCategory} <span style={{ color: colors.secondary }}>videos</span></Typography>
         < Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main