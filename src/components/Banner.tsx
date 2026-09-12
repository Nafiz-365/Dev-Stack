import BannerImg from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Build Your Ideal{' '}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                            Explore Technologies
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-gray-400 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <img src={BannerImg} alt="Development Stack" className="max-w-sm lg:max-w-md w-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
