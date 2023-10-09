import React from 'react'
import PhotoGallery from './PhotoGallery';

function Gallery(props) {
    const listado = props.list
    return (
        <div className='d-flex justify-content-center flex-wrap '>
            {listado.map((item, index) => <PhotoGallery photo={item} key={index} />)}
        </div>
    )
}

export default Gallery;