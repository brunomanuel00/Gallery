import React, { useState, useEffect, ChangeEvent } from 'react';

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

    const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newPhoto: Photo = {
                    id: Date.now(),
                    title: 'New Photo',
                    description: 'Add a description',
                    image: reader.result,
                };
                setPhotos((prevPhotos) => {
                    const updatedPhotos = [...prevPhotos, newPhoto];
                    localStorage.setItem('photos', JSON.stringify(updatedPhotos));
                    return updatedPhotos;
                });
            };
            reader.readAsDataURL(file);
        }
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
            <input type="file" onChange={handlePhotoUpload} />
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
