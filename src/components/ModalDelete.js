import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.stopPropagation()
        setShow(true);
    }
    function propag(e) { e.stopPropagation() }

    return (
        <>
            <Button variant="danger" className='boton-details' onClick={e => handleShow(e)}>
                Delete
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                onClick={e => propag(e)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the photo?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Delete permanently</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;