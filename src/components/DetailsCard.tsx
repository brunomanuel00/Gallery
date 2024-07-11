import { Button, CardContent, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React from 'react';
import { DetailsPhoto } from './types/Child-Tools';

const DetailsCard: React.FC<DetailsPhoto> = ({ photoDetails, handleDelete, handleEdit }) => {

    function handlePhotoEdit(e: any) {
        e.stopPropagation();
        handleEdit(photoDetails.id, photoDetails.title, photoDetails.description)

    }
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
                <Button onClick={handlePhotoEdit} variant="contained" color='warning' startIcon={<ModeEditIcon />}>
                    Edit
                </Button>
                <Button onClick={handlePhotoDelete} variant="contained" color='error' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>

        </div>

    )

}

export default DetailsCard;