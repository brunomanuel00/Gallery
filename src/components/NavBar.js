import { Navbar, Container } from 'react-bootstrap';
import { React, useState, useEffect } from 'react'
import ModalPhotoPerfil from './ModalPhotoPerfil';
import ModalAddPhoto from './ModalAddPhoto';

function NavBar(props) {
    const [perfil, setPerfil] = useState(props.profile)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <ModalPhotoPerfil />
                    </Navbar.Brand>
                    <ModalAddPhoto />
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;