const Banner = () => {
    return (
        <div className="container mt-16 lg:mt-24">
            <div className="grid lg:grid-cols-[66%,34%] gap-6 lg:gap-8 pr-4 lg:pr-0">

                <div 
                    className="h-[200px] md:h-[260px] bg-[url('/products/svt-heaven-ver.png')] bg-cover bg-center rounded-xl p-6 md:p-10 lg:p-12 flex flex-col justify-between"
                >
                    <div>
                        <p className="text-topHeadingSecondary text-lg md:text-xl font-medium">
                            Sale 20% off all store
                        </p>
                        <h2 className="text-topHeadingPrimary font-bold text-2xl md:text-3xl max-w-xs">
                            Album
                        </h2>
                    </div>
                    <a 
                        href="#" 
                        className="inline-block mt-4 md:mt-6 hover:text-accent text-topHeadingSecondary font-medium"
                    >
                        Shop Now
                    </a>
                </div>

                <div 
                    className="h-[200px] md:h-[260px] lg:h-[260px] bg-[url('/products/seventeen-best-album-dear-version.png')] bg-cover bg-center rounded-xl hidden lg:block lg:ml-4"
                >
                </div>
            </div>
        </div>
    );
};

export default Banner;