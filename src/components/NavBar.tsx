import { AddPhotoFormProps } from './utils/modal-tools';
import ModalDetails from './ModalDetails';

const NavBar: React.FC<AddPhotoFormProps> = ({ onAddPhoto, buttonText = 'Open modal', editMode = true }) => {

  return (
    <>
      <header className='gallery-header'>
        <nav className='gallery-nav'>
          <h1 style={{ marginTop: 10, fontFamily: 'sans-serif' }}>
            Gallery Photos
          </h1>
          <ModalDetails onAddPhoto={onAddPhoto} editMode={editMode} buttonText={buttonText} />
        </nav>
      </header >
    </>
  )
}

export default NavBar;
