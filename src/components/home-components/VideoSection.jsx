"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section
      className="w-full  flex justify-center items-center relative px-4 pb-14 mt-32"
      // style={{ marginTop: "25vh", " }} // Overlap 25% above
    >
      <motion.div
        className="w-full overflow-hidden rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <video
          src="https://framerusercontent.com/assets/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-h-[90vh] object-cover"
        />
      </motion.div>
    </section>
  );
}
