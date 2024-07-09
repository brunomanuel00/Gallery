import './App.css'
import NavBar from './components/NavBar'
import CardPhoto from './components/CardPhoto'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import StoragePhoto from './components/StoragePhoto'
import { Photo } from './components/types/Child-Tools'

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem('photos') || '[]') as Photo[];
    setPhotos(storedPhotos);
  }, []);

  const handleToggle = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid className='container_all' container spacing={1} >
          {photos.map((item, index) => (
            <Grid xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
              <CardPhoto key={index}
                index={index}
                isSelected={selectedIndex === index}
                onToggle={handleToggle} photo={item.image as string} />

            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
export default App
