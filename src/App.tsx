import './App.css'
import NavBar from './components/NavBar'
import CardPhoto from './components/CardPhoto'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useState } from 'react';


function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='container_all' container spacing={1} >
          {Array.from(Array(4)).map((_, index) => (
            <Grid xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
              <CardPhoto key={index}
                index={index}
                isSelected={selectedIndex === index}
                onToggle={handleToggle} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div >
  )
}
export default App
