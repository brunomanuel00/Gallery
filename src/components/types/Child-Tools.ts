export interface ChildProps {
    index: number;
    isSelected: boolean;
    onToggle: (index: number) => void;
}