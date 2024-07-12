import { AddPhotoFormProps } from './utils/modal-tools';
import ModalDetails from './ModalDetails';

const NavBar: React.FC<AddPhotoFormProps> = ({ onAddPhoto, buttonText = 'Open modal', editMode = true }) => {

  return (
    <>
      <header className='gallery-header'>
        <nav className='gallery-nav'>
          <ModalDetails onAddPhoto={onAddPhoto} editMode={editMode} buttonText={buttonText} />
        </nav>
      </header >
    </>
  )
}

export default NavBar;
