const Banner = () => {
    return (
        <div className="container mt-16 lg:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-[66%,34%] gap-6 lg:gap-8 pr-4 lg:pr-0">
                {/* Left Banner */}
                <div 
                    className="h-[200px] md:h-[260px] lg:h-[300px] bg-[url('/products/header.jpg')] bg-cover bg-center rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow"
                >
                    <div>
                        <p className="text-blue-400 text-lg md:text-xl font-medium">
                            Sale 20% off all store
                        </p>
                        <h2 className="text-blue-500 font-bold text-2xl md:text-3xl max-w-xs">
                            Album
                        </h2>
                    </div>
                    <a 
                        href="#" 
                        className="inline-block mt-4 md:mt-6 text-blue-400 font-medium hover:text-blue-500 transition-colors"
                    >
                        Shop Now
                    </a>
                </div>

                {/* Right Banner */}
                <div 
                    className="h-[200px] md:h-[260px] lg:h-[300px] bg-[url('/products/seventeen-best-album-dear-version.png')] bg-cover bg-center rounded-xl hidden lg:block shadow-md hover:shadow-lg transition-shadow"
                />
            </div>
        </div>
    );
};

export default Banner;