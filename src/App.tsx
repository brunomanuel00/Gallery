import './App.css'
import NavBar from './components/NavBar'
import CardPhoto from './components/CardPhoto'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
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

  const handleAddPhoto = (title: string, description: string, image: string | ArrayBuffer | null) => {
    const newPhoto: Photo = {
      id: Date.now(),
      title,
      description,
      image,
    };

    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos, newPhoto];
      localStorage.setItem('photos', JSON.stringify(updatedPhotos));
      return updatedPhotos;
    });
  };

  const handlePhotoEdit = (id: number, title: string, description: string) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = prevPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, title, description };
        }
        return photo;
      });
      localStorage.setItem('photos', JSON.stringify(updatedPhotos));
      return updatedPhotos;
    });
  };

  const handlePhotoDelete = (id: number) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = prevPhotos.filter((photo) => photo.id !== id);
      localStorage.setItem('photos', JSON.stringify(updatedPhotos));
      return updatedPhotos;
    });
  };


  return (
    <>
      <NavBar onAddPhoto={handleAddPhoto} />
      <Box sx={{ flexGrow: 1, marginTop: 2, padding: '0 10px', }}>
        <Grid className='container_all' container spacing={1} >
          {photos.map((item, index) => (
            <Grid xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
              <CardPhoto key={index}
                index={index}
                isSelected={selectedIndex === index}
                onToggle={handleToggle} photo={item}
                handleDelete={handlePhotoDelete}
                handleEdit={handlePhotoEdit}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
export default App
