import type { Dispatch, SetStateAction } from 'react';
import type { Itechnology } from '../../types/technology';
import TechCard from './TechCard';

interface IAvailableTechProps {
    technologies: Itechnology[];
    selectedTechnologies: Itechnology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
    onAddToStack: (tech: Itechnology) => void;
}

const AvailableTechnologies = ({
    technologies,
    selectedTechnologies,
    setSelectedTechnologies,
    onAddToStack,
}: IAvailableTechProps) => {
    // console.log(technologies, 'Technologies from AvailableTechnologies!');
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech: Itechnology) => {
                return (
                    <TechCard
                        key={tech.id}
                        tech={tech}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                        onAddToStack={onAddToStack}
                    ></TechCard>
                );
            })}
        </div>
    );
};

export default AvailableTechnologies;
