import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';

function PhotoGallery(props) {
    const [details, setDetails] = useState(false)
    const [photoContent, setPhotoContent] = useState({
        title: `Armando la casa`,
        description: `ladas asdass adsdsdcsdsacdasdcs adsdsdcsdsacdasdcsdas
                    asdcsadc asdsa cdasdsac dascdas dasda sdcasds adcsacdsadc sadcas dcasdas`
    })
    function show(e) {
        e.stopPropagation()
        setDetails(!details)
        console.log(details)
    }
    function content() {
        return (

            <Card.Body>
                <Card.Title>Details</Card.Title>
                <Card.Text>
                    {<b>Title :</b>}{photoContent.title}
                </Card.Text>
                <Card.Text>
                    {<b>Description :</b>}{photoContent.description}
                </Card.Text>

                <ModalEdit editation={photoContent} />
                <ModalDelete />

            </Card.Body>

        )
    }

    return (
        <Card style={{ width: '360px', height: "22rem" }} onClick={e => show(e)}>
            {details ? content() : <img src={props.photo} className='photo img-fluid' />}
        </Card>
    )
}

export default PhotoGallery;