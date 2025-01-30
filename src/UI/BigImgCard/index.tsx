import { Link } from "react-router-dom";
import styles from "./bigImgCard.module.scss";
import { useEffect, useState } from "react";
import * as api from "../../api";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  img: string;
  link: string;
  withImg?: boolean;
}
const BigImgCard = ({ title, img, link, withImg = true, ...attrs }: Props) => {
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getPhotoF = async (img: string) => {
      try {
        const response = await api.getPhoto(img); // Await the API request

        // Create an object URL from the Blob
        const imageUrl = URL.createObjectURL(response.data);

        // Return the image URL
        return imageUrl; // Assuming 'data' contains the image
      } catch (error) {
        console.error("Error fetching photo:", error);
        return undefined;
      }
    };

    const fetchPhoto = async () => {
      const fetchedPhoto = await getPhotoF(img); // Wait for the photo to be fetched
      setPhoto(fetchedPhoto); // Set the state with the photo
    };

    img && fetchPhoto(); // Call the function to fetch the photo
  }, [img]);

  return (
    <Link to={link} className={styles.container}>
      <button
        className={styles.content}
        style={{ justifyContent: img ? "space-between" : "center" }}
        {...attrs}
      >
        {photo && <img src={photo} alt="product" className={styles.image} />}
        <div className={styles.wrapper}>
          <p className={styles.title}>{title}</p>
        </div>
      </button>
    </Link>
  );
};
export default BigImgCard;
