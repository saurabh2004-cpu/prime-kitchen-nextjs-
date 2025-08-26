import { motion } from "framer-motion"


const ReviewsHeader = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="bg-[#FFFEF2] py-10 lg:pt-24 relative px-6">
      <div className=" min-h-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative flex text-center items-center justify-center md:justify-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative ">
            <motion.div
              className="flex items-center justify-center md::justify-center relative top-5 md:top-15 md:right-50  mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
              variants={fadeInUp}
            >
              <svg className="w-5 h-5 text-[#009f93] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="6" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
              <span className="text-xs font-medium md:text-[12px] relative  left-1 md:left-0 md:top-0 text-[#009f93] tracking-wider uppercase inter-placeholder">
                CLIENTS WORDS
              </span>
            </motion.div>

            <motion.div className="text-center items-center  text-[#1D322D]" variants={fadeInUp}>
              <h1 className="text-6xl text-[#009f93]  md:text-[230px] min-w-full  text-center font-semibold md:font-[500] leading-[0.75] tracking-tighter md:tracking-[-1.3rem] inter-placeholder" style={{ color: "#009f93" }}>
                Reviews
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default ReviewsHeader
