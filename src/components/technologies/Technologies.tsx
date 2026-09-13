import { use, useState } from 'react';
import type { Itechnology } from '../../types/technology';
import AvailableTechnologies from './AvailableTechnologies';
import StackPanel from './StackPanel';
import { toast, Zoom } from 'react-toastify';

interface ITechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
    // console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    // console.log(technologies);
    const [selectedTechnologies, setSelectedTechnologies] = useState<
        Itechnology[]
    >([]);

    //Add to Stack Logic
    const handleAddToStack = (tech: Itechnology) => {
        const isAlreadyAdded = selectedTechnologies.some(
            (t) => t.id === tech.id,
        );
        // console.log(isAlreadyAdded, 'already added check');

        if (isAlreadyAdded) {
            toast.warn(`${tech.name} is already in your stack!`, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Zoom,
            });
            return;
        }

        setSelectedTechnologies([...selectedTechnologies, tech]);
        toast(`${tech.name} has been added to your stack!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Zoom,
        });
    };

    //Remove from Stack Logic
    const handleRemoveFromStack = (tech: Itechnology) => {
        const restTechnologies = selectedTechnologies.filter(
            (selectedTech) => selectedTech.id != tech.id,
        );
        // console.log(restTechnologies);
        setSelectedTechnologies(restTechnologies);

        toast.info(`${tech.name} has been removed from your stack.`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Zoom,
        });
    };

    //Remove All Logic
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info('All technologies have been removed from your stack.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Zoom,
        });
    };

    return (
        <div className="bg-gray-50 py-10 sm:py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        Explore the{' '}
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Pick one technology per category to build your ideal
                        stack.
                    </p>
                </div>

                {/* Main Layout: Grid + Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Technology Cards Grid */}
                    <div className="min-w-0 flex-1">
                        <AvailableTechnologies
                            technologies={technologies}
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                            onAddToStack={handleAddToStack}
                        ></AvailableTechnologies>
                    </div>

                    {/* Your Stack Sidebar */}
                    <div className="w-full lg:w-80 shrink-0">
                        <StackPanel
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                            onRemoveFromStack={handleRemoveFromStack}
                            onRemoveAll={handleRemoveAll}
                        ></StackPanel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
