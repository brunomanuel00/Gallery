
export interface ChildProps {
    index: number;
    isSelected: boolean;
    onToggle: (index: number) => void;
    photo: any;
}

export interface Photo {
    id: number;
    title: string;
    description: string;
    image: string | ArrayBuffer | null;
}



