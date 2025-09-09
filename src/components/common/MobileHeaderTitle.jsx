import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MobileHeaderTitle = ({ title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "50px 0px",
  });

  const scrollingText = `${title} • ${title} • ${title} • ${title} • `;

  const mobileScrollVariants = {
    animate: {
      x: [0, -800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        },
      },
    },
  };

  const mobileContainerVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div 
        ref={ref}
        className="block md:hidden w-full bg-[#FFFEF2] px-3 py-4 flex justify-center items-center overflow-hidden"
        style={{ minHeight: '60px',  }}
      >
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            variants={mobileContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-[#009f93] text-[clamp(100px,60vw,160px)]  tracking-tight font-bold whitespace-nowrap inter-placeholder"
              style={{
                // fontSize: 'clamp(28px, 8vw, 42px)', // Increased font size
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
              variants={textVariants}
              animate={inView ? mobileScrollVariants.animate : {}}
            >
              {scrollingText}
            </motion.h1>
            <motion.h1
              className="text-[#009f93] text-[clamp(100px,60vw,160px)]  tracking-tight font-bold whitespace-nowrap inter-placeholder"
              style={{
                // fontSize: 'clamp(28px, 8vw, 42px)', // Increased font size
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
              variants={textVariants}
              animate={inView ? mobileScrollVariants.animate : {}}
            >
              {scrollingText}
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MobileHeaderTitle;
