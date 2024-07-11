import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DetailsCard from './DetailsCard';
import { ChildProps, PhotoSRC } from './types/Child-Tools';
import React from 'react';


const Picture: React.FC<PhotoSRC> = ({ photoSRC }) => {

    return (
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image={photoSRC}
                alt="galaxy"
            />
        </CardActionArea>
    )
}



const CardPhoto: React.FC<ChildProps> = ({ index, isSelected, onToggle, photo, handleDelete, handleEdit }) => {

    function handleShow() {
        onToggle(index);
    }

    return (
        <Card sx={{ maxWidth: 600, padding: 1, border: '1px solid #bbb' }} onClick={handleShow}>
            {isSelected ? <DetailsCard handleEdit={handleEdit} handleDelete={handleDelete} photoDetails={photo} /> : <Picture photoSRC={photo.image as string} />}
        </Card>
    );
}

export default CardPhoto;
