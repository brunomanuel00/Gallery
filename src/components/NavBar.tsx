import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
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
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #255557',
  boxShadow: 24,
  p: 4,
};

interface AddPhotoFormProps {
  onAddPhoto: (title: string, description: string, image: string | ArrayBuffer | null) => void;
}

const NavBar: React.FC<AddPhotoFormProps> = ({ onAddPhoto }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!image) {
      alert('Please select a file before submitting.');
      return;
    }
    onAddPhoto(title, description, image);
    setTitle('');
    setDescription('');
    setImage(null);
    handleClose();
  };

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
                name="title"
                value={title}
                onChange={handleInputChange}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                sx={{ marginTop: 1 }}
                multiline
                fullWidth
                maxRows={4}
                name="description"
                value={description}
                onChange={handleInputChange}
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
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
              </Button>
              <Button onClick={handleSubmit} variant="contained" id='gallery-button-add' sx={{ marginTop: 1 }}>Add</Button>
            </Box>
          </Modal>
        </nav>
      </header >
    </>
  )
}

export default NavBar;
