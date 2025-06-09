import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "../theme/Reveal";

const notices = [
  { id: 1, title: "Iron Maiden", image: "http://localhost:8000/uploads/notice1.jpg" },
  { id: 2, title: "Lamb of God", image: "http://localhost:8000/uploads/notice2.jpg" },
  { id: 3, title: "System of a down", image: "http://localhost:8000/uploads/notice3.jpg" },
  { id: 4, title: "Gorjira", image: "http://localhost:8000/uploads/notice4.jpg" },
];

const NoticeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openImage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
        <div className="text-center py-5">
        <Reveal color="white">
          <h2 className="text-3xl font-bold text-gray-600">!! STAN Notice !!</h2>
        </Reveal>
        <Reveal color="white">
          <p className="text-xl text-gray-500 mt-2 font-roboto">
            विज्ञान शिक्षक समाज नेपालका विभिन्न सूचनाहरू
          </p>
        </Reveal>
      </div>
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mb-12">
      <motion.div
        className="flex w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {notices.map((notice) => (
          <motion.div
            key={notice.id}
            className="relative min-w-full flex-shrink-0 p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => openImage(notice.image)}
          >
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src={notice.image}
                alt={notice.title}
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.h2
                  className="text-white text-2xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {notice.title}
                </motion.h2>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default NoticeSlider;

