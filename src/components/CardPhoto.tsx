import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DetailsCard from './DetailsCard';
import { ChildProps } from './types/Child-Tools';


function Picture({ photoSRC }) {

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



const CardPhoto: React.FC<ChildProps> = ({ index, isSelected, onToggle, photo }) => {

    function handleShow() {
        onToggle(index);
    }

    return (
        <Card sx={{ maxWidth: 600, padding: 1, border: '1px solid #bbb' }} onClick={handleShow}>
            {isSelected ? <DetailsCard /> : <Picture photoSRC={photo} />}
        </Card>
    );
}

export default CardPhoto;
