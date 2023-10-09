import { useState } from 'react';
import { Button, Form, Modal, Image } from 'react-bootstrap';
import add from '../images/empty.png'

function ModalPhotoPerfil(props) {
    const [show, setShow] = useState(false);
    // const [editable, setEditable] = useState(props.editation)

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.stopPropagation()
        setShow(true);
    }
    function propag(e) { e.stopPropagation() }

    return (
        <>
            <Image src={add} rounded className='profiloPhoto' onClick={e => handleShow(e)} />

            <Modal show={show} onHide={handleClose} onClick={e => propag(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Choose your profile picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPhotoPerfil;