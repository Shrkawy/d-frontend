import { IconProps } from ".";

const ArrowLeft = ({ size = 16, bold = 1 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={bold}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default ArrowLeft;
