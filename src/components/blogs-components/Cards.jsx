import React from 'react'
import { Calendar, Clock } from 'lucide-react'
import Navigation from './Navigations'

// ArticleCard component (reusable)
const ArticleCard = ({
  heading,
  subheading,
  image,
  date,
  type,
  readingTime,
  onClick
}) => {
  return (
    <article
      className="rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden md:mx-6 mb-4">
        <img
          src={image}
          alt={heading}
          className="md:w-[34.125rem] md:h-[22.4375rem] h-[20rem] rounded-lg object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      </div>

      {/* Footer Section */}
      <div className="px-6 pb-6">
        <div className="flex bg-[#fffef2] md:max-w-5/7 flex rounded-r-lg flex-wrap items-center gap-2 text-xs text-gray-500 uppercase tracking-wide relative bottom-12 pb-4 right-6 md:right-0 p-1">
          <div className="flex items-center text-[12px] font-[600] inter-placeholder text-[#1d322d] space-x-1 border border-[#1d322d] p-1 rounded-md relative md:top-1 md:left-1">
            <Calendar className="w-3 h-3" />
            <span className='text-[12px] font-[600] inter-placeholder text-[#1d322d]'>{date}</span>
          </div>
          <span className="px-2 text-[12px] font-[600] inter-placeholder text-[#1d322d] py-1 bg-gray-100 rounded border-[#1d322d] border p-1 md:left-1 left-1 rounded-md relative md:top-1">
            {type}
          </span>
          <div className="flex text-[12px] font-[600] inter-placeholder text-[#1d322d] items-center space-x-1 border p-1 border-[#1d322d] rounded-md relative md:top-1 md:left-1">
            <Clock className="w-3 h-3" />
            <span className='text-[12px] font-[600] inter-placeholder text-[#1d322d]'>{readingTime}</span>
          </div>
        </div>
      </div>

      <div className="md:px-8 px-1 pb-4 relative bottom-17">
        <h2 className="text-xl font-bold text-[#1d322d] tracking-tighter inter-placeholder md:text-[20px] md:font-[500] leading-tight mb-2 group-hover:text-gray-700 transition-colors duration-200">
          {heading}
        </h2>
      </div>
    </article>
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
    <div className='max-w-8xl px-6 mx-auto'>
      {/* Header Section */}
      <div className="flex flex-col relative md:left-10">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
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
          className="text-md font-[900] md:text-[48px] flex mx-auto md:w-full md:mx-auto md:font-[700] mb-6 sm:mb-8 inter-placeholder tracking-tighter leading-[1] text-[#009F93]"
          style={{ color: "#009F93", fontSize: "43px" }}
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
  return (
    <>
      <Navigation />
      <BlogSection
        articles={featuredArticles}
        title="Featured"
        subtitle="Premier Insights"
        onCardClick={(article) => console.log(article)}
      />

      <BlogSection
        articles={tipsAndTricks}
        title="Tips & Tricks"
        subtitle="Practical Guidance"
        onCardClick={(article) => console.log(article)}
      />

      <BlogSection
        articles={newsAndUpdates}
        title="News & Updates"
        subtitle="Latest Developments"
        onCardClick={(article) => console.log(article)}
      />

      <BlogSection
        articles={articlesAndAnalysis}
        title="Articles and Analysis"
        subtitle="Insights"
        onCardClick={(article) => console.log(article)}
      />




    </>
  )
}

export default Cards
