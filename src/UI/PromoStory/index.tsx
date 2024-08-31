import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.scss";
import CloseSVG from "../icons/CloseSVG";
import MediumButton from "../MediumButton";
import { StorySliderProps } from "../../utils/types";

import styles from "./promoStory.module.scss";

interface Props {
  setIsOpened: (value: boolean) => void;
  isOpened: boolean;
  slider: StorySliderProps[];
}

const PromoStory = ({ slider, isOpened, setIsOpened }: Props) => {
  useEffect(() => {
    const toggleBodyOverflow = (value: string) => {
      document.body.style.overflow = value;
    };

    toggleBodyOverflow(isOpened ? "hidden" : "");

    return () => toggleBodyOverflow("");
  }, [isOpened]);

  const paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: string) =>
      `<span class="${className}"></span>`,
  };

  return (
    <Swiper
      pagination={slider.length > 1 ? paginationConfig : false}
      navigation
      loop
      modules={[Navigation, Pagination]}
      className={styles.swiperStory}
    >
      {slider.length === 1 && (
        <div className="swiper-pagination">
          <span className="swiper-pagination-bullet"></span>
        </div>
      )}

      <button
        className={styles.closeModalBtn}
        onClick={() => setIsOpened(false)}
      >
        <CloseSVG color="var(--main-background-color)" />
      </button>

      {slider.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={styles.picture}>
            <img src={slide.imageSrc} alt={slide.title} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.description}>{slide.description}</p>
            {slide.button && (
              <MediumButton
                onClick={() => (window.location.href = slide.button!.url)}
                title={slide.button.text}
                style={{
                  maxWidth: "fit-content",
                  borderRadius: "15px",
                  fontSize: "18px",
                }}
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoStory;
