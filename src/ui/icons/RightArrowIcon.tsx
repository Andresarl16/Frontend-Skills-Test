import React from "react";

const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M1.167 7h11.666m0 0L7 1.167M12.833 7 7 12.833"
    />
  </svg>
);
export default RightArrowIcon;
