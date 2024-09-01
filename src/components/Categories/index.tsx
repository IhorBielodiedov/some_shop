import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryButton from "../../UI/CategoryButton";
import { useProductsStore } from "../../stores/useProductsStore";
import { Category } from "../../utils/types";

import { FreeMode } from "swiper/modules";
import styles from "./categories.module.scss";
import "./swiper.scss";

interface Props {
  list: Category[];
  big?: boolean;
  wrap?: boolean;
}

const Categories: React.FC<Props> = ({ big = false, list, wrap = false }) => {
  const [buttonWidths, setButtonWidths] = useState<number[]>([]);
  const activeCategory = useProductsStore((state) => state.activeCategory);
  const setActiveCategory = useProductsStore(
    (state) => state.setActiveCategory
  );

  // Refs for CategoryButtons
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update button widths when list changes
  useEffect(() => {
    const widths = buttonRefs.current.map((ref) => ref?.offsetWidth || 0);
    setButtonWidths(widths);
  }, [list]);

  return (
    <>
      {!wrap ? (
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
          spaceBetween={4}
          loop={true}
          className="categoriesSwiper"
        >
          {list.map((item, index) => (
            <SwiperSlide key={index} style={{ width: buttonWidths[index] }}>
              <CategoryButton
                title={item.alias ? item.alias : item.name}
                active={activeCategory?.name === item.name}
                big={big}
                onClick={() => setActiveCategory(item)}
                doFocus
                ref={(el) => (buttonRefs.current[index] = el)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={styles.container}
          style={{ flexWrap: wrap ? "wrap" : "nowrap" }}
        >
          {list.map((item, index) => (
            <CategoryButton
              title={item.alias ? item.alias : item.name}
              key={index}
              active={activeCategory?.name === item.name}
              big={big}
              onClick={() => setActiveCategory(item)}
              doFocus
              ref={(el) => (buttonRefs.current[index] = el)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
