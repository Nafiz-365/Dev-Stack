import type { Dispatch, SetStateAction } from 'react';
import type { Itechnology } from '../../types/technology';
import StackItemCard from './StackItemCard';

interface IStackPanelProps {
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
    onRemoveFromStack: (tech: Itechnology) => void;
    onRemoveAll: () => void;
}

const StackPanel = ({
    selectedTechnologies,
    setSelectedTechnologies,
    onRemoveFromStack,
    onRemoveAll,
}: IStackPanelProps) => {
    // console.log(selectedTechnologies, 'from StackPanel');
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-24">
            {/* Heading */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
            {selectedTechnologies.length > 0 ? (
                <p className="text-sm text-violet-500 mb-4">
                    {selectedTechnologies.length} Technology Selected
                </p>
            ) : (
                <p className="text-sm text-gray-400 mb-4">
                    No technologies selected yet.
                </p>
            )}

            {/* Selected Items or Empty State */}
            {selectedTechnologies.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl py-8 text-center">
                    <p className="text-sm text-gray-400">Your stack is empty.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {selectedTechnologies.map((tech: Itechnology) => {
                        return (
                            <StackItemCard
                                key={tech.id}
                                tech={tech}
                                selectedTechnologies={selectedTechnologies}
                                setSelectedTechnologies={setSelectedTechnologies}
                                onRemoveFromStack={onRemoveFromStack}
                            ></StackItemCard>
                        );
                    })}

                    {/* Remove All Button */}
                    <button
                        onClick={() => onRemoveAll()}
                        className="mt-2 w-full py-2.5 rounded-full text-sm font-semibold border-2 border-red-400 text-red-500 hover:bg-red-50 transition-colors"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default StackPanel;
