import styles from "./promoCard.module.scss";
import {useState} from "react";
import PromoStory from "../PromoStory";
import {StorySliderProps} from "../../utils/types";

interface Props {
    img: string;
    title: string;
    slider: StorySliderProps[];
}

const PromoCard = ({img, title, slider}: Props) => {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    if (isOpened) return <PromoStory isOpened={isOpened} slider={slider} setIsOpened={setIsOpened} />
    return (
        <div className={styles.container} onClick={() => setIsOpened(true)}>
        <img src={img} alt="product" className={styles.image}/>
            <p className={styles.title}>{title}</p>
        </div>
    );
};
export default PromoCard;
