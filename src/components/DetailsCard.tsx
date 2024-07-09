import { Button, CardContent, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function DetailsCard() {

    function handleEdit(e: any) {
        e.stopPropagation();

    }
    function handleDelete(e: any) {
        e.stopPropagation();

    }

    return (
        <div style={{ height: '300px' }} >
            <CardContent sx={{ height: '240px', overflow: 'scroll', boxSizing: 'border-box' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ mb: '10px' }} color="text.secondary" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    specie
                </Typography>
            </CardContent>
            <Stack direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
                marginTop={2}
            >
                <Button onClick={handleEdit} variant="contained" color='warning' startIcon={<ModeEditIcon />}>
                    Edit
                </Button>
                <Button onClick={handleDelete} variant="contained" color='error' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>

        </div>

    )

}