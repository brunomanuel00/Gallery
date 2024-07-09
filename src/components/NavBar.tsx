import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function NavBar() {
  // const handle = handleUpload();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <header className='gallery-header'>
        <nav className='gallery-nav'>
          <Button id='gallery-modal' onClick={handleOpen}>Add Photo</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                label="Title"
                fullWidth
                id="outlined-size-small"
                size="small"
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                sx={{ marginTop: 1 }}
                multiline
                fullWidth
                maxRows={4}
              />
              <Button
                component='label'
                role={undefined}
                variant="contained"
                tabIndex={-1}
                id='gallery-input-file'
                sx={{ marginTop: 1 }}
                disableRipple
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>

              <Button variant="contained">Add</Button>
            </Box>
          </Modal>

        </nav>
      </header >
    </>
  )
}
