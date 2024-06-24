import { Link } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import banner from "../../assets/img/banner3.png";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./homePage.module.scss";
import { useEffect } from "react";
import img from "../../assets/img/buttonImg.png";

const HomePage = () => {
  useEffect(() => {
    TELEGRAM.BackButton.hide();
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={banner} alt="banner" />
      <div className={styles.buttons}>
        <Link to="/products">
          <GradientButton
            title="Станции Алисы"
            titleSize={14}
            height={84}
            titleAlign="right"
            paddingTop={37}
            paddingBottom={31}
            gradientDirection="horizontal"
            img={img}
          />
        </Link>
        <div className={styles.buttonRow}>
          <div style={{ width: "59%" }}>
            <Link to="/products">
              <GradientButton
                title="Станции Алисы"
                titleSize={14}
                height={77}
                titleAlign="right"
                paddingTop={37}
                paddingBottom={31}
                gradientDirection="diagonal-left"
                img={""}
              />
            </Link>
          </div>
          <div style={{ width: "41%" }}>
            <Link to="/products">
              <GradientButton
                title="ТВ"
                titleSize={14}
                height={77}
                titleAlign="right"
                paddingTop={37}
                paddingBottom={31}
                gradientDirection="diagonal-right"
                img={""}
              />
            </Link>
          </div>
        </div>
        <Link to="/products">
          <GradientButton
            title="Умный дом"
            titleSize={14}
            height={84}
            titleAlign="left"
            paddingTop={37}
            paddingBottom={31}
            gradientDirection="diagonal-right"
            img={""}
          />
        </Link>
      </div>
      <ProductCardDetailed product={PRODUCTS[0]} />
    </div>
  );
};
export default HomePage;
