import { useState, CSSProperties } from "react";
import Reveal from "../theme/Reveal";
import ImageReveal from "../theme/ImageReveal";

interface NoticeSliderProps {
  notices: (string | { text: string; url?: string })[];
}

const sliderStyles: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "150px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const arrowStyles: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  fontSize: "30px",
  color: "#555",
  zIndex: 1,
  cursor: "pointer",
  userSelect: "none",
};

const leftArrowStyles: CSSProperties = {
  ...arrowStyles,
  left: "32px",
  zIndex: 2,
};

const rightArrowStyles: CSSProperties = {
  ...arrowStyles,
  right: "32px",
  zIndex: 2,
};

const textOverlayStyles: CSSProperties = {
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px 20px",
  borderRadius: "5px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "bold",
};

const dotsContainerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyle: CSSProperties = {
  margin: "0 5px",
  cursor: "pointer",
  fontSize: "15px",
  color: "#555",
  userSelect: "none",
};

const NoticeSlider: React.FC<NoticeSliderProps> = ({ notices }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? notices.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === notices.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentNotice = notices[currentIndex];
  const isNoticeWithURL =
    typeof currentNotice === "object" && currentNotice.url;

  const slideBackgroundStyle: CSSProperties = isNoticeWithURL
    ? {
        ...sliderStyles,
        backgroundImage: `url(${currentNotice.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }
    : sliderStyles;

  const handleNoticeClick = () => {
    if (isNoticeWithURL && currentNotice.url) {
      window.open(currentNotice.url, "_blank", "noopener,noreferrer");
    }
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
      <ImageReveal>
        <div style={slideBackgroundStyle} onClick={handleNoticeClick}>
          <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={goToNext} style={rightArrowStyles}>
            ❱
          </div>
          <div style={textOverlayStyles}>
            {typeof currentNotice === "string"
              ? currentNotice
              : currentNotice.text}
          </div>
        </div>
        <div style={dotsContainerStyles}>
          {notices.map((_, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </ImageReveal>
    </>
  );
};

export default NoticeSlider;
