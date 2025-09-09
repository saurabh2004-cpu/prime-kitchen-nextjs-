import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ className = "", setNavItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("All");

  const navigationItems = [
    { label: "Tips", href: "#tips" },
    { label: "News", href: "#news" },
    { label: "Articles", href: "#articles" },
    { label: "All", href: "#all" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on when you want the nav to become sticky
      // For example, 200px from the top or after scrolling past a header
      const scrollThreshold = 200;
      const currentScrollY = window.scrollY;

      setIsSticky(currentScrollY > scrollThreshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    setNavItem(item.label);
    setIsMenuOpen(false);

    // scroll to section
    const section = document.querySelector(item.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <>
      {/* Spacer div to prevent content jump when nav becomes fixed */}
      {isSticky && <div className="h-16"></div>}

      <nav
        className={`${className} ${isSticky
            ? 'fixed top-18 md:top-14 left-0 right-0 z-50 bg-[#fffef2]  border-gray-200'
            : 'relative'
          } transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-end h-16">
            {/* Desktop Navigation */}
            <div className=" md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    className={`px-4 py-2 text-[14px] font-medium mx-1 rounded-full transition-all duration-200 ease-in-out ${activeItem === item.label
                        ? 'bg-[#1d322d] text-orange-300'
                        : 'text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                      }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${activeItem === item.label
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

// Example usage component showing the sticky behavior
const StickyNavigationDemo = () => {
  const [currentNavItem, setCurrentNavItem] = useState("All");

  return (
    <div className="">
      {/* Sticky Navigation */}
      <Navigation setNavItem={setCurrentNavItem} />
    </div>
  );
};

export default StickyNavigationDemo;