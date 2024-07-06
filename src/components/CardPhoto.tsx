import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DetailsCard from './DetailsCard';
import { ChildProps } from './types/Child-Tools';


function Picture() {

    return (
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image="https://images.newscientist.com/wp-content/uploads/2023/10/31150615/sei178136481-2.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
                alt="galaxy"
            />
        </CardActionArea>
    )
}



const CardPhoto: React.FC<ChildProps> = ({ index, isSelected, onToggle }) => {

    function handleShow() {
        onToggle(index);
    }

    return (
        <Card sx={{ maxWidth: 600, padding: 1, border: '1px solid #bbb' }} onClick={handleShow}>
            {isSelected ? <DetailsCard /> : <Picture />}
        </Card>
    );
}

export default CardPhoto;
