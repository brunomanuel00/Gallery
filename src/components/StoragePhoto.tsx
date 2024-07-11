import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';  // Import the NavBar component

interface Photo {
    id: number;
    title: string;
    description: string;
    image: string | ArrayBuffer | null;
}

const StoragePhoto: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const storedPhotos = JSON.parse(localStorage.getItem('photos') || '[]') as Photo[];
        setPhotos(storedPhotos);
    }, []);

    const handleAddPhoto = (title: string, description: string, image: string | ArrayBuffer | null) => {
        const newPhoto: Photo = {
            id: Date.now(),
            title,
            description,
            image,
        };

        setPhotos((prevPhotos) => {
            const updatedPhotos = [...prevPhotos, newPhoto];
            localStorage.setItem('photos', JSON.stringify(updatedPhotos));
            return updatedPhotos;
        });
    };

    const handlePhotoEdit = (id: number, title: string, description: string) => {
        setPhotos((prevPhotos) => {
            const updatedPhotos = prevPhotos.map((photo) => {
                if (photo.id === id) {
                    return { ...photo, title, description };
                }
                return photo;
            });
            localStorage.setItem('photos', JSON.stringify(updatedPhotos));
            return updatedPhotos;
        });
    };

    const handlePhotoDelete = (id: number) => {
        setPhotos((prevPhotos) => {
            const updatedPhotos = prevPhotos.filter((photo) => photo.id !== id);
            localStorage.setItem('photos', JSON.stringify(updatedPhotos));
            return updatedPhotos;
        });
    };

    return (
        <div>
            <NavBar onAddPhoto={handleAddPhoto} />
            <div>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.image as string} alt={photo.title} />
                        <h3>
                            <input
                                type="text"
                                value={photo.title}
                                onChange={(e) => handlePhotoEdit(photo.id, e.target.value, photo.description)}
                            />
                        </h3>
                        <p>
                            <textarea
                                value={photo.description}
                                onChange={(e) => handlePhotoEdit(photo.id, photo.title, e.target.value)}
                            />
                        </p>
                        <button onClick={() => handlePhotoDelete(photo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoragePhoto;
