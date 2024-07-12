import { Button, CardContent, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React, { useState } from 'react';
import { DetailsPhoto, Photo } from './utils/Child-Tools';
import ModalDetails from './ModalDetails';

const DetailsCard: React.FC<DetailsPhoto> = ({ photoDetails, handleDelete, handleEdit }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [photoEditDetails, setPhotoEditDetails] = useState<Photo | null>(null);

    const handlePhotoEdit = (e: React.MouseEvent, photo: Photo) => {
        e.stopPropagation();
        setPhotoEditDetails(photo);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setPhotoEditDetails(null);
    };

    const handleEditPhoto = (id: number, title: string, description: string) => {
        handleEdit(id, title, description);
        handleCloseModal();
    };

    function handlePhotoDelete(e: any) {
        e.stopPropagation();
        handleDelete(photoDetails.id)

    }

    return (
        <div style={{ height: '300px' }} >
            <CardContent sx={{ height: '240px', overflow: 'scroll', boxSizing: 'border-box' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {photoDetails.title ? photoDetails.title : 'Empty title'}
                </Typography>
                <Typography variant="body2" sx={{ mb: '10px' }} color="text.secondary" >
                    {photoDetails.description ? photoDetails.description : 'Oh no'}
                </Typography>
            </CardContent>
            <Stack direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
                marginTop={2}
            >
                <Button onClick={(e) => handlePhotoEdit(e, photoDetails)} variant="contained" color='warning' startIcon={<ModeEditIcon />}>
                    Edit
                </Button>
                <Button onClick={handlePhotoDelete} variant="contained" color='error' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>
            {modalOpen && photoEditDetails && (
                <ModalDetails
                    photoEdit={photoEditDetails}
                    onEditPhoto={handleEditPhoto}
                    editMode={true}
                    buttonText="Edit Photo"
                />
            )}
        </div>

    )

}

export default DetailsCard;