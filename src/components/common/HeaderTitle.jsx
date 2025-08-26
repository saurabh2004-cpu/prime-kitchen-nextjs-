import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeaderTitle = ({ title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Create multiple copies of the title for seamless scrolling
  const scrollingText = `${title}  ${title}  ${title}  ${title}  `;

  const scrollVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div ref={ref} className="w-full bg-[#FFFEF2] px-4 py-8 md:py-12 flex justify-center items-center overflow-hidden">
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-[#009f93] tracking-tighter text-[clamp(35px,95vw,38px)] md:text-[clamp(100px,60vw,160px)] inter-placeholder font-semibold whitespace-nowrap"
            variants={scrollVariants}
            animate="animate"
          >
            {scrollingText}
          </motion.h1>
          {/* Duplicate for seamless loop */}
          <motion.h1
            className="text-[#009f93] text-[clamp(35px,95vw,38px)] md:text-[clamp(100px,60vw,150px)] inter-placeholder font-semibold whitespace-nowrap"
            variants={scrollVariants}
            animate="animate"
          >
            {scrollingText}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderTitle;