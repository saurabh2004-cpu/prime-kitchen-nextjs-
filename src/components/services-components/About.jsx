import Image from "next/image";
import Link from "next/link";

const LuxuryWardrobeAbout = () => {
  const servicesContent = [
    {
      id: 1,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20250719_105350693.jpg`,
      heading: "Kitchens",
      title: "Designed for Your Home, Inspired by Timeless Craftsmanship",
      subtitle:
        "Experience modular kitchens crafted to blend style, innovation, and functionality - perfectly suited for modern living spaces",
      decription:
        "Every element is crafted for ease, efficiency, and sophistication. Experience a space that inspires creativity and comfort. Transform your cooking area into a masterpiece tailored just for you",
    },
    {
      id: 2,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/gallery-page-images/10.png`,
      heading: "Wardrobe",
      title: "Crafted for Your Home, Inspired by Timeless Design",
      subtitle:
        "Experience wardrobes designed to harmonize elegance and functionality, tailored to fit perfectly within your living space",
      decription:
        "Designed with the essence of Indian living in mind, our luxury wardrobes blend timeless elegance with practical utility. Crafted from premium materials sourced from renowned European brands, these wardrobes offer enduring quality and style tailored to fit perfectly within Indian homes. Visit our showrooms to experience bespoke storage solutions that not only enhance your space but also reflect your unique taste and lifestyle.",
    },
    {
      id: 3,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/service-page-images/DSC09114.JPG`,
      heading: "Furniture",
      title: "Crafted for Comfort, Inspired by Elegance",
      subtitle:
        "Discover furniture that enhances your home’s personality, combining lasting quality with designs tailored for your lifestyle",
      decription:
        "Discover furniture that brings comfort and bespoke elegance to your home. Each piece is thoughtfully crafted to enrich your living space. Quality materials meet timeless design to create inviting environments. Live beautifully with furniture made to reflect your unique style",
    },
    {
      id: 4,
      src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20250719_105350693.jpg`,
      heading: "Office",
      title: "Built for Productivity, Inspired by Smart Design",
      subtitle:
        "Create inspiring office spaces with furniture and layouts designed for efficiency, comfort, and contemporary work culture",
      decription:
        "Create inspiring workspaces where productivity meets style. Our office solutions blend ergonomic design with contemporary aesthetics. Enjoy environments that foster focus and well-being effortlessly. Elevate your professional space with smart, elegant furnishings tailored to you",
    },
  ];
  return (
    <section className="w-full py-4 sm:py-6 md:py-8 lg:py-10 inter-placeholder">
      {servicesContent.map((item, index) => (
        <div
          key={index}
          className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 xl:pb-12"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-medium mb-3 sm:mb-4 md:mb-6 lg:mb-10">
              {`About Luxury ${item.heading}`}
            </h3>
            {/* <h2 className="text-[#009F93] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {item.title}
            </h2> */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight font-semibold mb-4 sm:mb-6">
              {item.subtitle}
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Image Column */}
            <div
              className={`order-1 ${
                index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="relative w-full overflow-hidden shadow-lg rounded-lg">
                <Image
                  width={400}
                  height={400}
                  src={item.src}
                  alt={item.heading}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[27rem] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Column */}
            <div
              className={`order-2 space-y-4 ${
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              {/* <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight font-semibold mb-4 sm:mb-6">
                {item.subtitle}
              </h3> */}
              <h2 className="text-[#009F93] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                {item.title}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed lg:leading-tight font-medium mb-6">
                {item.decription}
              </p>

              <Link
                href="/contact"
                className="bg-[#00374B] text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] px-6 sm:px-8 md:px-12 lg:px-16 py-2.5 rounded-xl hover:bg-[#004a5c] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LuxuryWardrobeAbout;
