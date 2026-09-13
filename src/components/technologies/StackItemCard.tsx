import { IoClose } from 'react-icons/io5';
import type { Itechnology } from '../../types/technology';
import type { Dispatch, SetStateAction } from 'react';

interface IStackItemCardProps {
    tech: Itechnology;
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
    onRemoveFromStack: (tech: Itechnology) => void;
}

const StackItemCard = ({
    tech,
    onRemoveFromStack,
}: IStackItemCardProps) => {
    // console.log(tech, 'from StackItemCard');
    return (
        <div className="flex gap-3 justify-between items-center border border-gray-200 rounded-2xl py-3 px-4 bg-white">
            <div className="flex gap-3 items-center">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                ></img>
                <div>
                    <h4 className="font-bold text-base">{tech.name}</h4>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
            </div>
            <span
                className="text-gray-400 hover:text-red-500 cursor-pointer text-lg transition-colors"
                onClick={() => onRemoveFromStack(tech)}
            >
                <IoClose></IoClose>
            </span>
        </div>
    );
};

export default StackItemCard;
