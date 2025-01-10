const Banner = () => {
    return (
        <div className="container mt-16 lg:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-[66%,34%] gap-6 lg:gap-8 pr-4 lg:pr-0">
                {/* Gabungan Left dan Right Banner */}
                <div 
                    className="h-[300px] md:h-[400px] lg:h-[500px] bg-[url('/products/header.jpg')] bg-cover bg-center rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow"
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
            </div>
        </div>
    );
};

export default Banner;