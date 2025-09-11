import Image from "next/image"
import ImageSlider from "./ImageSlider"


export default function ProjectHeaderAndImage() {
    return (
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-16">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[118px] font-[600] text-[#1d322d] tracking-tighter mb-8 lg:mb-12 text-balance inter-placeholder">
                Coastal Harmony Home
            </h1>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12">
                {/* Project Image */}
                <div className="lg:col-span-5">
                    <div className="relative aspect-[9/6] w-full overflow-hidden rounded-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                            alt="Coastal Harmony Home Interior"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Project Details */}
                <div className=" inter-placeholder ">
                    {/* Client */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Services */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Location */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Duration */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Theme */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Category */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Type */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>

                    {/* Size */}
                    <div className="border-b border-b-1 border-[#1d322d]/50 pb-2  min-w-[400px]">
                        <h3 className="text-lg font-medium text-[#1d322d] mb-2 pt-2 mt-2 tracking-tight">[Client]</h3>
                        <p className="text-md font-[500] text-[#1d322d]/80">Thorne Dashiell</p>
                    </div>


                </div>
            </div>

        {/* project details section */}
            <section>
                <div className="w-full  py-12 px-4 sm:px-6 lg:px-8 md:mt-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 inter-placeholder">
                            {/* Left Column - Project Description */}
                            <div className="space-y-6 ">
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium text-[#1d322d] leading-tight tracking-tight ">
                                    The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into
                                    a serene and stylish retreat that reflects the client's love for the ocean and nature.
                                </h2>
                            </div>

                            {/* Right Column - Project Details */}
                            <div className="">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900  tracking-tight mb-2">Project Details</h3>
                                    <p className="text-[#1d322d]/98 text-[12px] sm:text-base leading-tight font-medium mb-4">
                                        The Coastal Harmony Home project began with an in-depth consultation to understand the client's vision
                                        of a modern coastal retreat. The design concept emphasized natural materials, a soothing color palette,
                                        and expansive views of the ocean. Key features included:
                                    </p>

                                    {/* Features List */}
                                    <div className="">
                                        <div>
                                            <h4 className="font-bold text-lg tracking-tighter  text-[#1d322d] space-x-2">
                                                <span className="text-[#1d322d] text-4xl md:relative md:bottom-[2px]">.   </span>
                                                Open Living Spaces:
                                                <span className="text-gray-700 font-normal  px-2">
                                                    Creating open-plan living areas to enhance the flow and connection between indoor and outdoor
                                                    spaces.
                                                </span>
                                            </h4>

                                        </div>

                                        <h4 className="font-bold text-lg tracking-tighter text-[#1d322d] space-x-2">
                                            <span className="text-[#1d322d] text-4xl md:relative md:bottom-[2px]">.   </span>
                                            Open Living Spaces:
                                            <span className="text-gray-700 font-normal leading-tight px-2">
                                                Creating open-plan living areas to enhance the flow and connection between indoor and outdoor
                                                spaces.
                                            </span>
                                        </h4>

                                        <h4 className="font-bold text-lg tracking-tighter text-[#1d322d] space-x-2">
                                            <span className="text-[#1d322d] text-4xl md:relative md:bottom-[2px]">.   </span>
                                            Open Living Spaces:
                                            <span className="text-gray-700 font-normal leading-tight px-2">
                                                Creating open-plan living areas to enhance the flow and connection between indoor and outdoor
                                                spaces.
                                            </span>
                                        </h4>

                                        <h4 className="font-bold text-lg tracking-tighter text-[#1d322d] space-x-2">
                                            <span className="text-[#1d322d] text-4xl md:relative md:bottom-[2px]">.   </span>
                                            Open Living Spaces:
                                            <span className="text-gray-700 font-normal leading-tight px-2">
                                                Creating open-plan living areas to enhance the flow and connection between indoor and outdoor
                                                spaces.
                                            </span>
                                        </h4>

                                        <h4 className="font-bold text-lg tracking-tighter text-[#1d322d] space-x-2">
                                            <span className="text-[#1d322d] text-4xl md:relative md:bottom-[2px]">.   </span>
                                            Open Living Spaces:
                                            <span className="text-gray-700 font-normal leading-tight px-2">
                                                Creating open-plan living areas to enhance the flow and connection between indoor and outdoor
                                                spaces.
                                            </span>
                                        </h4>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Bottom Image Placeholders */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-300 rounded-lg h-64 md:h-80"></div>
                            <div className="bg-gray-300 rounded-lg h-64 md:h-80"></div>
                        </div>
                    </div>
                </div>
            </section>

        {/* images slider section */}
            <section>
                <ImageSlider />
            </section>
        </div>
    )
}
