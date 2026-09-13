import { FaStar } from 'react-icons/fa';
import type { Itechnology } from '../../types/technology';
import type { Dispatch, SetStateAction } from 'react';

interface ITechCardProps {
    tech: Itechnology;
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
    onAddToStack: (tech: Itechnology) => void;
}

const TechCard = ({
    tech,
    selectedTechnologies,
    onAddToStack,
}: ITechCardProps) => {
    // console.log(tech, 'from TechCard');
    const isAdded = selectedTechnologies.some((t) => t.id === tech.id);
    // console.log(isAdded, 'isAdded status');

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* Icon + Badge */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-12 w-12 object-contain"
                    ></img>
                    <span className="max-w-full text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full break-words">
                        {tech.badge}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {tech.description}
                </p>
            </div>

            {/* Bottom Section */}
            <div>
                {/* Category + Difficulty + Rating */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {tech.category}
                    </span>
                    <span className="text-xs text-gray-500">
                        {tech.difficulty}
                    </span>
                    <div className="flex items-center gap-1 ml-auto shrink-0">
                        <FaStar className="text-yellow-400 text-xs"></FaStar>
                        <span className="text-xs font-semibold text-gray-700">
                            {tech.rating}
                        </span>
                    </div>
                </div>

                {/* Add to Stack Button */}
                <button
                    onClick={() => onAddToStack(tech)}
                    disabled={isAdded ? true : false}
                    // disabled={isAdded}
                    className={`w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isAdded
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90'
                    }`}
                >
                    {isAdded === true
                        ? '\u2713 Added to Stack'
                        : 'Add to Stack'}
                </button>
            </div>
        </div>
    );
};

export default TechCard;
