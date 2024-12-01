interface Props {
  color: string;
}
const CloseSVG = ({ color }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.2 16L4 14.8L8.8 10L4 5.2L5.2 4L10 8.8L14.8 4L16 5.2L11.2 10L16 14.8L14.8 16L10 11.2L5.2 16Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseSVG;