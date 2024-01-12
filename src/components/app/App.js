import {Box} from '@mui/material'
import {Routes,Route} from "react-router-dom"
import {Main,Channel,Search,VideoDetail,Navbar, SearchBar, Category, Videos, VideoCard} from '../index'
function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/channel' element={<Channel/>}/>
        <Route path='/search' element={<Search/>}/>
     <Route path='/video' element={<VideoDetail/>}/>
        <Route path='/searchBar' element={<SearchBar/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/videocard' element={<VideoCard/>}/>

      </Routes>
    </Box>
    );
}

export default App;
