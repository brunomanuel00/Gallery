import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AddPhotoFormProps, VisuallyHiddenInput, style } from './types/modal-tools';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ModalDetails: React.FC<AddPhotoFormProps> = ({
    onAddPhoto,
    onEditPhoto,
    photoEdit,
    buttonText = 'Add Photo',
    editMode = false,
}) => {
    const [open, setOpen] = useState(editMode);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    useEffect(() => {
        if (editMode && photoEdit) {
            setTitle(photoEdit.title);
            setDescription(photoEdit.description);
        }
    }, [editMode, photoEdit]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setDescription('');
        setImage(null);
    };

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
    function stop(event: React.MouseEvent) {
        event.stopPropagation()
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (editMode) {
            if (onEditPhoto && photoEdit) {
                onEditPhoto(photoEdit.id, title, description);
            }
        } else {
            if (!image) {
                alert('Please select a file before submitting.');
                return;
            }
            if (onAddPhoto) {
                onAddPhoto(title, description, image);
            }
        }
        handleClose();
    };

    return (
        <>
            {!editMode && (<Button id='gallery-modal' onClick={handleOpen}>{buttonText}</Button>)}
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
                        onClick={stop}
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
                        onClick={stop}
                        onChange={handleInputChange}
                    />
                    {!editMode && (
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
                    )}
                    <Button onClick={handleSubmit} variant="contained" id='gallery-button-add' sx={{ marginTop: 1 }}>
                        {editMode ? 'Save' : 'Add'}
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default ModalDetails;
