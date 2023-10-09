import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import add from '../images/empty.png'

function ModalAddPhoto() {
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
            <Button variant="secondary" onClick={handleShow}>
                Add new photo
            </Button>

            <Modal show={show} onHide={handleClose} onClick={e => propag(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Select the image you want to add to the gallery</Form.Label>
                            <Form.Control type="file" multiple />
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

export default ModalAddPhoto;