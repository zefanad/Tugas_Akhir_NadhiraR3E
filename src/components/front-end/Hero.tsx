import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#E3EDF6] mt-4">
      <div className="container grid md:grid-cols-2 gap-8 py-12">
        {/* Text Section */}
        <div className="flex items-center">
          <div className="max-w-lg space-y-6">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">$999.00</span>
            </p>

            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best merchandise collection 2024
            </h1>

            <h3 className="text-2xl font-['Oregano',cursive]">
              Exclusive offer <span className="text-red-600">-10%</span> off this week
            </h3>

            <a
              href="#"
              className="inline-block bg-white rounded-md px-6 py-3 text-center hover:bg-accent hover:text-white transition-all"
              aria-label="Shop Now"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/products/svt-heaven-ver.png"
            alt="Hero image showcasing merchandise"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;