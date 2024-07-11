
export interface ChildProps {
    index: number;
    isSelected: boolean;
    onToggle: (index: number) => void;
    handleEdit: (index: number, title: string, description: string) => void;
    handleDelete: (index: number) => void;
    photo: any;
}

export interface Photo {
    id: number;
    title: string;
    description: string;
    image: string | ArrayBuffer | null;
}

export interface PhotoSRC {
    photoSRC: string
}

export interface DetailsPhoto {
    photoDetails: Photo;
    handleEdit: (index: number, title: string, description: string) => void;
    handleDelete: (index: number) => void;

}



