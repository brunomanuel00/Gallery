import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEdit(props) {
    const [show, setShow] = useState(false);
    const [editable, setEditable] = useState(props.editation)

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.stopPropagation()
        setShow(true);
    }
    function propag(e) { e.stopPropagation() }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit details
            </Button>

            <Modal show={show} onHide={handleClose} onClick={e => propag(e)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={editable.title}
                                autoFocus
                                onChange={e => setEditable(prevState => ({ ...prevState, title: e.target.value }))}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Descritpiton</Form.Label>
                            <Form.Control as="textarea" rows={3} value={editable.description} onChange={e => setEditable(prevState => ({ ...prevState, description: e.target.value }))} />
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

export default ModalEdit;