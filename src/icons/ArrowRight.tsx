import { IconProps } from ".";

const ArrowRight = ({ size = 16, bold = 1 }: IconProps) => {
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
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
};

export default ArrowRight;
