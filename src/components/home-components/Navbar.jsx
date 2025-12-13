"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar({ setNavItem = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", active: false },
    { name: "About", href: "/about", active: false },
    { name: "Services", href: "/services", active: false },
    // { name: "Projects", href: "#projects", active: false },
    { name: "Gallery", href: "/gallery", active: false },
    // { name: "Blog", href: "/blogs", active: false },
    { name: "Reviews", href: "/reviews", active: false },
    { name: "Contact", href: "/contact", active: false },
  ]

  // Update active item based on current pathname
  useEffect(() => {
    const currentPath = pathname
    const currentItem = navItems.find(item => {
      if (item.href === "/") {
        return currentPath === "/"
      }
      return currentPath.startsWith(item.href)
    })

    if (currentItem) {
      setActiveItem(currentItem.name)
    }
  }, [pathname])

  const handleNavClick = (item) => {
    setActiveItem(item.name)
    setIsMenuOpen(false)

    // Call the setNavItem prop if provided
    if (setNavItem) {
      setNavItem(item.name)
    }

    // Handle navigation
    if (item.href.startsWith('#')) {
      // For hash links, scroll to section
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // For regular routes, use Next.js router
      router.push(item.href)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:px-4 md:py-1 bg-[#fffef2]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="rounded flex items-center justify-center">
              <img
                className="w-[170px] h-full"
                src="/logo/Prime-Kitchen-1.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 p-1 bg-[#F7F6E9] rounded-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`flex items-center text-gray-700 hover:text-gray-900 mx-2 md:py-1 md:px-2 rounded-lg font-medium transition-colors duration-200 relative group inter-placeholder cursor-pointer hover:bg-[#0000000D]/80
                  ${activeItem === item.name ? "bg-[#0000000D]" : ""}`}
              >
                <span className="text-sm font-medium inter-placeholder text-[#1d322d]">
                  {item.name}
                </span>
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md  text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-10 w-10 border border-black p-2 rounded-lg" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Positioned absolutely to overlay content */}
      {isMenuOpen && (
        <div className="lg:hidden  absolute top-full left-0 right-0 z-50 bg-[#F7F6E9] border-t border-gray-100 shadow-lg">
          <div className="pt-2 pb-3  space-y-1 flex flex-col items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`flex items-center justify-center px-3 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium w-full
                  ${activeItem === item.name ? "bg-[#0000000D]" : ""}`}
              >
                <span >{item.name}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}