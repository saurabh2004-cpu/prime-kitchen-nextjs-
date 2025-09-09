import React, { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import Navigation from './Navigations'
import { motion } from "framer-motion"
import BlogListing from './AllBlogs'

// ArticleCard component with enhanced hover effects
const ArticleCard = ({
  heading,
  subheading,
  image,
  date,
  type,
  readingTime,
  onClick
}) => {
  // Variants for coordinated hover animation
  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  const titleVariants = {
    initial: { x: 0 },
    hover: { x: 24, transition: { duration: 0.4, ease: "easeOut" } }
  }

  

  return (
    <motion.article
      className="rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative"
      onClick={onClick}
      initial="initial"
      whileHover="hover" // 👈 applies to all children with variants
    >
      {/* Image Section with Hover Overlay */}
      <div className="relative overflow-hidden md:mx-6 mb-4">
        <img
          src={image}
          alt={heading}
          className="h-full w-full md:w-[34.125rem] md:h-[22.4375rem] h-[20rem] rounded-lg object-cover rounded-xl transition-transform duration-700 "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-700 ease-out rounded-xl flex items-center justify-center">
          <div className="text-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-[#fffef2] text-xl md:text-4xl font-[700] mb-4 inter-placeholder tracking-tighter">
              {heading}
            </h3>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-6 pb-6 transition-opacity duration-300 -mb-16">
        <div className="flex bg-[#fffef2] inline-block pr-3 flex rounded-r-lg flex-wrap items-center gap-2 text-xs  uppercase tracking-wide relative bottom-12 pb-4 right-6 md:right-0 p-1">
          <div className="flex space-x-2">
            <div className="flex items-center md:text-[12px] md:font-[600] inter-placeholder text-[#1d322d]/80 space-x-1 border border-[#1d322d] p-1 rounded-md relative md:top-1 md:left-1">
              <span className="text-xs md:text-[11px] md:font-[600] inter-placeholder text-[#1d322d]/80">
                {date}
              </span>
            </div>
            <span className="md:px-2 text-xs md:text-[11px] md:font-[600] inter-placeholder text-[#1d322d]/80 py-1 rounded border-[#1d322d] border p-1 md:left-1 left-1 rounded-md relative md:top-1">
              {type}
            </span>
            <div className="flex text-[12px] md:font-[600] inter-placeholder text-[#1d322d]/80 items-center space-x-1 border p-1 border-[#1d322d] rounded-md relative md:top-1 md:left-1">
              <span className="text-xs md:text-[11px] font-[400] md:font-[600] inter-placeholder text-[#1d322d]/80">
                {readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Title + Arrow */}
      <div className="md:px-8 px-1 pb-4 relative bottom-4 md:top-1">
        {/* Arrow */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" height="24"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="absolute top-1 left-8 w-4 h-4 text-[#1d322d]"
          variants={arrowVariants}
        >
          <path d="m15 10 5 5-5 5" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </motion.svg>

        {/* Title */}
        <motion.h2
          className="bg-[#fffef2] z-10 text-lg  font-[500] md:font-[500] text-[#1d322d] md:tracking-tighter inter-placeholder md:text-[19px] md:font-[500]  leading-tight mb-2 transition-colors duration-200 "
          variants={titleVariants}
        >
          {heading}
        </motion.h2>
      </div>
    </motion.article>
  )
}

// Main BlogSection component
const BlogSection = ({
  articles,
  title,
  subtitle,
  onCardClick = () => { }
}) => {
  return (
    <div className='max-w-8xl px-4 md:px-6 mx-auto'>
      {/* Header Section */}
      <div className="flex flex-col relative  md:left-10">
        <div className="flex items-center  justify-center relative right-2 md:right-0 lg:justify-start">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#009F93]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
          <span className="text-xs md:font-semibold text-[#009F93] tracking-wider inter-placeholder font-bold">
            {subtitle}
          </span>
        </div>
        <h2
          className="text-4xl font-[600] md:font-[900] md:text-[48px] flex mx-auto md:w-full md:mx-auto md:font-[700] mb-6 sm:mb-8 inter-placeholder tracking-tighter leading-[1] text-[#009F93]"
        >


          {title}
        </h2>
      </div>

      {/* Articles Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            heading={article.heading}
            subheading={article.subheading}
            image={article.image}
            date={article.date}
            type={article.type}
            readingTime={article.readingTime}
            onClick={() => onCardClick(article)}
          />
        ))}
      </div>
    </div>
  )
}

// Sample data for each section (you can keep this in separate files)
const featuredArticles = [
  {
    id: '1',
    heading: 'The Secrets to Creating a Serene Home Office',
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'MAY 30, 2024',
    type: 'TIPS',
    readingTime: '8 MIN READ'
  },
  {
    id: '2',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
]

const articlesAndAnalysis = [
  {
    id: '1',
    heading: 'The Secrets to Creating a Serene Home Office',
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'MAY 30, 2024',
    type: 'TIPS',
    readingTime: '8 MIN READ'
  },
  {
    id: '2',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
  {
    id: '3',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
]

const newsAndUpdates = [
  {
    id: '1',
    heading: 'The Secrets to Creating a Serene Home Office',
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'MAY 30, 2024',
    type: 'TIPS',
    readingTime: '8 MIN READ'
  },
  {
    id: '2',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
]

const tipsAndTricks = [
  {
    id: '1',
    heading: 'The Secrets to Creating a Serene Home Office',
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'MAY 30, 2024',
    type: 'TIPS',
    readingTime: '8 MIN READ'
  },
  {
    id: '2',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
  {
    id: '3',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
  {
    id: '4',
    heading: 'The Future of Interior Design - Trends to Watch in 2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'APR 30, 2024',
    type: 'ARTICLES',
    readingTime: '12 MIN READ'
  },
]

const Cards = () => {
  const [navItem, setNavItem] = useState("all");
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  console.log(navItem)

  return (
    <>
      <Navigation setNavItem={setNavItem} />

      <motion.div
        id="featured"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <BlogSection
          articles={featuredArticles}
          title="Featured"
          subtitle="Premier Insights"
          onCardClick={(article) => console.log(article)}
        />
      </motion.div>

      <motion.div
        id="tips"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <BlogSection
          articles={tipsAndTricks}
          title="Tips & Tricks"
          subtitle="Practical Guidance"
          onCardClick={(article) => console.log(article)}
        />
      </motion.div>

      <motion.div
        id="news"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <BlogSection
          articles={newsAndUpdates}
          title="News & Updates"
          subtitle="Latest Developments"
          onCardClick={(article) => console.log(article)}
        />
      </motion.div>

      <motion.div
        id="articles"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <BlogSection
          articles={articlesAndAnalysis}
          title="Articles and Analysis"
          subtitle="Insights"
          onCardClick={(article) => console.log(article)}
        />
      </motion.div>

      <motion.div
        id="all"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <BlogListing />
      </motion.div>
    </>
  );
};

export default Cards