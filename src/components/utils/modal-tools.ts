import styled from 'styled-components';
import { Photo } from './Child-Tools';

export const VisuallyHiddenInput = styled('input')({
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

export const style = {
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

export interface AddPhotoFormProps {
    onAddPhoto?: (title: string, description: string, image: string | ArrayBuffer | null) => void;
    onEditPhoto?: (id: number, title: string, description: string) => void;
    buttonText?: string;
    photoEdit?: Photo;
    editMode?: boolean;

}