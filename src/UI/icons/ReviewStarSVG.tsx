interface Props {
  color: string;
}
const ReviewStarSVG = ({ color }: Props) => {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83263L6 0L4.314 3.83263L0 4.19158L3.27 6.93L2.292 11L6 8.84053Z"
        fill={color}
      />
    </svg>
  );
};

export default ReviewStarSVG;
