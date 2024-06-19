import styles from "./gradientButton.module.scss";

interface Props {
  title: string;
  titleSize: number;
  titleAlign: Align;
  img?: string;
  gradientDirection: Direction;
  paddingTop: number;
  paddingBottom: number;
  height: number;
  borderRadius?: number;
}
type Direction = "diagonal-right" | "diagonal-left" | "horizontal";
type Align = "left" | "right" | "center";

const handleGradient = (direction: Direction) => {
  switch (direction) {
    case "diagonal-left":
      return "var(--gradient-diagonal-left)";
    case "diagonal-right":
      return "var(--gradient-diagonal-right)";
    case "horizontal":
      return "var(--gradient-horizontal)";
    default:
      return "var(--gradient-horizontal)";
  }
};

const handleTextAlign = (align: Align) => {
  switch (align) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "center":
      return "center";
    default:
      return "flex-end";
  }
};
const GradientButton = ({
  title,
  titleSize,
  titleAlign,
  img,
  gradientDirection,
  paddingTop,
  paddingBottom,
  height,
  borderRadius,
}: Props) => {
  return (
    <button
      className={styles.button}
      style={{
        fontSize: `${titleSize}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        background: `${handleGradient(gradientDirection)}`,
        justifyContent: `${handleTextAlign(titleAlign)}`,
        height: `${height}px`,
        borderRadius: borderRadius ? `${borderRadius}px` : "8px",
      }}
    >
      {img && <img src={img} alt="product" className={styles.img} />}
      <p className={styles.text} style={{ textDecoration: "none" }}>
        {title}
      </p>
    </button>
  );
};

export default GradientButton;
